import React from "react";
export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white w-full mt-auto">
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
        {/* 1 - Informações institucionais */}
        <ul className="list-disc space-y-2 text-white text-center md:text-left pl-5">
          <li className="font-bold text-xl">Fatec Itapira</li>
          <li>Telefone / WhatsApp: (19) 3863-5210</li>
          <li>E-mail de suporte: suporte@fatecitapira.edu.br</li>
        </ul>
        {/* 2 - Links úteis */}
        <ul className="list-disc space-y-2 text-white text-center pl-5">
          <li className="font-semibold">Links úteis</li>
          <li>
            <a href="/politica-de-privacidade" className="hover:underline text-white">Política de Privacidade</a>
          </li>
          <li>
            <a href="/termos-de-uso" className="hover:underline text-white">Termos de Uso</a>
          </li>
          <li>
            <a href="/contato" className="hover:underline text-white">Contato</a>
          </li>
        </ul>
        {/* 3 - Redes Sociais */}
        <ul className="list-disc space-y-2 text-white text-center pl-5">
          <li className="font-semibold">Redes Sociais</li>
          <li>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <a href="https://facebook.com/fatecitapira" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center space-x-2">
                <svg className="w-6 h-6 fill-current hover:text-blue-700" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/>
                </svg>
                <span className="text-white">Facebook.</span>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a href="https://www.instagram.com/fatecdeitapira/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center space-x-2">
                <svg className="w-6 h-6 fill-current hover:text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.945.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298 1.28.059 1.689.072 4.945.072s3.665-.013 4.945-.072c1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.28.072-1.689.072-4.945V9.333c0-3.256-.013-3.665-.072-4.945-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                </svg>
                <span className="text-white">Instagram</span>
              </a>
            </div>
          </li>
        </ul>
        {/* 4 - Sistema Acadêmico */}
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-center font-semibold">Sistema Acadêmico v1.2 – Desenvolvido por Softmare</span>
        </div>
        {/* 5 - Logo Softmare à direita */}
         <div className="flex justify-center md:justify-end items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M36 36c-4.418 0-8-3.582-8-8h-8c0 8.837 7.163 16 16 16 2.209 0 4-1.791 4-4s-1.791-4-4-4zm-8-16c0-4.418 3.582-8 8-8 2.209 0 4-1.791 4-4s-1.791-4-4-4c-8.837 0-16 7.163-16 16h8z"
              fill="#2563eb"
            />
          </svg>
          <span className="ml-2 text-2xl font-bold text-white">Softmare</span>
        </div>
      </div>
    </footer>
  );
}
