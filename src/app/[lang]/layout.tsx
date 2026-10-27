// src/app/[lang]/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { defaultLocale, hasLocale, locales, localeTags } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { reponse, alteHaas } from "@/fonts";
import "../globals.css";

// Só existem as rotas dos idiomas suportados (qualquer outra vira 404)
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = getDictionary(lang);

  // hreflang: avisa o Google das versões do site em cada idioma
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((locale) => [localeTags[locale], `/${locale}`])
  );
  languages["x-default"] = `/${defaultLocale}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={localeTags[lang]} className="scroll-smooth">
      <body className={`${reponse.variable} ${alteHaas.variable} text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
