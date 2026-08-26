// src/app/layout.tsx
import "./globals.css";
import { reponse, alteHaas } from "@/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${reponse.variable} ${alteHaas.variable} bg-bg text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}