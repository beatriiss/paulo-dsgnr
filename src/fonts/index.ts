// src/fonts/index.ts
import localFont from "next/font/local";

// Fonte de títulos/destaques (ex: "PAULO VINÍCIUS", a logo)
export const reponse = localFont({
  src: [
    { path: "./LT-Reponse-Regular.otf", weight: "400", style: "normal" },
    { path: "./LT-Reponse-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-display-local",
  display: "swap",
});

// Fonte padrão (menu, parágrafos, botões, etc.)
export const alteHaas = localFont({
  src: [
    { path: "./AlteHaasGroteskRegular.ttf", weight: "400", style: "normal" },
    { path: "./AlteHaasGroteskBold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans-local",
  display: "swap",
});