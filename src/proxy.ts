// src/proxy.ts
// Garante que toda página tenha o idioma na URL (/pt, /en, /es).
// Quem chega sem idioma é redirecionado para: escolha salva no cookie →
// idioma do navegador → português.
import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

function getLocaleFromAcceptLanguage(request: NextRequest): Locale | null {
  const header = request.headers.get("accept-language");
  if (!header) return null;

  const byQuality = header
    .split(",")
    .map((part) => {
      const [langPart, qPart] = part.trim().split(";q=");
      const quality = qPart ? parseFloat(qPart) : 1;
      return {
        lang: langPart.trim().toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of byQuality) {
    const candidate = lang.split("-")[0];
    if (hasLocale(candidate)) return candidate;
  }

  return null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // URL já tem idioma: segue normalmente
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    (cookieLocale && hasLocale(cookieLocale) ? cookieLocale : null) ??
    getLocaleFromAcceptLanguage(request) ??
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // Ignora arquivos internos do Next, imagens, documentos e qualquer arquivo com extensão
  matcher: ["/((?!_next|images|docs|.*\\..*).*)"],
};
