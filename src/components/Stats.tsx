// src/components/Stats.tsx
import Image from "next/image";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import { localeTags, type Locale } from "@/i18n/config";

// Mesma ordem dos itens de dict.stats
const icones = [
  "/images/icones/stats/anos-experiencia.webp",
  "/images/icones/stats/projetos-entregues.webp",
  "/images/icones/stats/trofeus-clash-royale.webp",
  "/images/icones/stats/trabalho-remoto.webp",
];

export default function Stats({ dict, lang }: { dict: Dictionary["stats"]; lang: Locale }) {
  return (
    <section className="grid grid-cols-2 gap-y-6 px-4 py-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-y-4">
      {dict.map((s, i) => (
        <Reveal key={icones[i]} delay={i * 100} className="flex items-center">
          <div className="flex items-center gap-3 px-2 sm:px-6 lg:px-8 py-2 rounded-xl transition-transform duration-300 ease-out hover:scale-110 cursor-default">
            <Image
              src={icones[i]}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 shrink-0"
            />
            <div className="text-left leading-tight">
              <CountUp value={s.value} locale={localeTags[lang]} className="block font-display font-bold text-3xl" />
              <p className="text-xs text-white/50 sm:whitespace-nowrap">{s.label}</p>
            </div>
          </div>

          {/* Divisor vertical entre os itens (não aparece depois do último) */}
          {i < dict.length - 1 && (
            <div className="hidden lg:block w-px h-10 bg-white/10" />
          )}
        </Reveal>
      ))}
    </section>
  );
}
