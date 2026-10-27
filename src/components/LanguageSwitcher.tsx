// src/components/LanguageSwitcher.tsx
"use client";

import Link from "next/link";
import { locales, localeLabels, localeTags, type Locale, LOCALE_COOKIE } from "@/i18n/config";

type Props = {
  lang: Locale;
  label?: string;
  className?: string;
};

// Links reais para /pt, /en, /es; a escolha fica salva num cookie
// para o proxy lembrar o idioma na próxima visita.
export default function LanguageSwitcher({ lang, label = "SELECT LANGUAGE:", className = "" }: Props) {
  return (
    <nav aria-label="Language" className={`flex flex-wrap items-center gap-2 text-xs text-white/60 ${className}`}>
      <span className="tracking-widest">{label}</span>
      {locales.map((l, index) => (
        <span key={l} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-white/30" aria-hidden="true">/</span>
          )}
          <Link
            href={`/${l}`}
            hrefLang={localeTags[l]}
            aria-current={l === lang ? "page" : undefined}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={
              l === lang
                ? "font-semibold bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent"
                : "hover:text-white transition-colors"
            }
          >
            {localeLabels[l]}
          </Link>
        </span>
      ))}
    </nav>
  );
}
