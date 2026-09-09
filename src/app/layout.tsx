// src/app/layout.tsx
import "./globals.css";
import { reponse, alteHaas } from "@/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${reponse.variable} ${alteHaas.variable}  text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}