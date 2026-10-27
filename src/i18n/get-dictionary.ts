// src/i18n/get-dictionary.ts
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/pt";
import pt from "./dictionaries/pt";
import en from "./dictionaries/en";
import es from "./dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
