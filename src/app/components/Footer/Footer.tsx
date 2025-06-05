import React from "react";
export default function Footer() {
    return (
        <footer className="bg-blue-800 text-white p-4 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} Sistema Acadêmico FATEC. Todos os direitos reservados.
            </p>
        </footer>
    );
}