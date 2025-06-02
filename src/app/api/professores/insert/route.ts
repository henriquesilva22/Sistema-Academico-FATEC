// src/app/api/professores/insert/route.ts

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.tipo !== "Admin") {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const formData = await req.formData();
    const idProfessor = formData.get("idProfessor")?.toString();
    const rg = formData.get("rg")?.toString();

    if (!idProfessor) {
      return NextResponse.json(
        { error: "CPF (idProfessor) não enviado" },
        { status: 400 }
      );
    }

    if (!rg) {
      return NextResponse.json({ error: "RG não enviado" }, { status: 400 });
    }

    // ✅ Verificação de duplicidade na tabela Professores
    const professorExiste = await prisma.professores.findFirst({
      where: {
        OR: [{ idProfessor }, { rg }],
      },
    });

    if (professorExiste) {
      return NextResponse.json(
        { error: "Já existe um professor com este CPF ou RG." },
        { status: 400 }
      );
    }

    // ✅ Verificação de duplicidade na tabela Usuarios
    const usuarioExiste = await prisma.usuarios.findUnique({
      where: { cpf: idProfessor },
    });

    if (usuarioExiste) {
      return NextResponse.json(
        { error: "Já existe um usuário cadastrado com este CPF." },
        { status: 400 }
      );
    }

    const baseDir = path.join(process.cwd(), "public", "pastas");
    await fs.mkdir(baseDir, { recursive: true });
    const pasta = path.join(baseDir, idProfessor);
    await fs.mkdir(pasta, { recursive: true });

    let fotoPath: string | null = null;
    const fotoFile = formData.get("foto") as File | null;

    if (fotoFile) {
      const buffer = Buffer.from(await fotoFile.arrayBuffer());
      const ext = path.extname(fotoFile.name) || ".png";
      const filename = `profile${ext}`;
      await fs.writeFile(path.join(pasta, filename), buffer);
      fotoPath = `/pastas/professores/${idProfessor}/${filename}`;
    }

    const payload = {
      idProfessor,
      nome: formData.get("nome")?.toString() ?? "",
      sobrenome: formData.get("sobrenome")?.toString() ?? "",
      rg,
      dataNasc: new Date(formData.get("dataNasc")?.toString() ?? ""),
      cargo: formData.get("cargo")?.toString() ?? "",
      descricao: formData.get("descricao")?.toString() ?? "",
      tel: formData.get("tel")?.toString() ?? "",
      fotoPath,
      docsPath: `/pastas/${idProfessor}`,
    };

    for (const field of ["nome", "sobrenome", "rg", "dataNasc", "cargo"]) {
      if (!payload[field as keyof typeof payload]) {
        return NextResponse.json(
          { error: `Campo obrigatório ausente: ${field}` },
          { status: 400 }
        );
      }
    }

    // ✅ Cria registro na tabela Professores
    const novoProfessor = await prisma.professores.create({ data: payload });

    // ✅ Cria usuário na tabela Usuarios (senhaHash = bcrypt do CPF)
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(idProfessor, salt);

    await prisma.usuarios.create({
      data: {
        cpf: idProfessor,
        senhaHash,
        tipo: "Professor",
      },
    });

    return NextResponse.json(novoProfessor);

  } catch (_err: unknown) {
    const err = _err as Error;
    console.error("🔥 Erro em /api/professores:", err);
    const message = err.message || "Erro interno no servidor";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
