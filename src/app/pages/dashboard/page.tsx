import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Footer from "../../components/Footer/Footer";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/pages/login");
  }

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl mb-2">Bem-vindo, {session.user?.name || session.user?.cpf}</h1>
        <p>Tipo de usuário: {session.user?.tipo}</p>
        <a href="/pages/logout">Sair</a>
      </div>
      <Footer />
    </>
  );
}