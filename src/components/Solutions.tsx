// src/components/Solucoes.tsx
import Image from "next/image";
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import SectionTitle from "@/components/ui/SectionTitle";

// Mesma ordem dos itens de dict.solutions.items
const icones = [
  "/images/icones/solucoes/identidade-visual.svg",
  "/images/icones/solucoes/websites.svg",
  "/images/icones/solucoes/social-media.svg",
  "/images/icones/solucoes/impressao-grafica.svg",
  "/images/icones/solucoes/comunicacao-visual.svg",
  "/images/icones/solucoes/arte-vetorizacao.svg",
];

export default function Solucoes({ dict }: { dict: Dictionary["solutions"] }) {
  return (
    <section id="solucoes" className="px-5 sm:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
      <Reveal variant="left">
        <SectionTitle className="mb-10">{dict.title}</SectionTitle>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 sm:gap-y-12">
        {dict.items.map((s, i) => (
          <Reveal key={icones[i]} delay={(i % 3) * 120}>
            <div className="group flex gap-4 transition-transform duration-300 ease-out hover:-translate-y-1">
              <Image
                src={icones[i]}
                alt=""
                width={56}
                height={56}
                className="w-14 h-14 shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6"
              />
              <div>
                <h3 className="font-display font-bold text-lg leading-tight mb-2 whitespace-pre-line">
                  {s.title}
                </h3>
                <ul className="space-y-0.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm italic text-white/60">
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
