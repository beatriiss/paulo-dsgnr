// src/i18n/config.ts
// Idiomas suportados pelo site. Cada um vira uma rota: /pt, /en, /es.
export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

// Cookie que guarda a escolha manual do visitante (lido pelo proxy)
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeLabels: Record<Locale, string> = { pt: "PT", en: "EN", es: "ES" };
// Tag BCP 47 usada no <html lang>, hreflang e formatação de números
export const localeTags: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es" };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
