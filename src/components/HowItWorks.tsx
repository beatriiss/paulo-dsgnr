// src/components/ComoFunciona.tsx
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ComoFunciona({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section id="como-funciona" className="px-8 py-16 max-w-6xl mx-auto">
      <Reveal variant="left">
        <SectionTitle className="mb-10">{dict.title}</SectionTitle>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dict.steps.map((p, i) => {
          const numero = String(i + 1).padStart(2, "0");

          return (
            <Reveal key={numero} variant="scale" delay={(i % 3) * 120} className="h-full">
              {/* Card fosco: borda neutra, o gradiente da marca só aparece no hover */}
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-[translate,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_24px_60px_-30px_rgba(56,182,255,0.35)]">
                {/* Linha de destaque no topo: cresce e ganha cor no hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-7 top-0 h-[2px] w-10 rounded-full bg-white/25 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%_-_3.5rem)]"
                >
                  <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(to_right,#ECAF00,#B1FF19,#35EF85,#00E9D5,#1195FA,#2656FE,#9509FF)]" />
                </span>

                {/* Número vazado, só contorno */}
                <span
                  aria-hidden="true"
                  className="font-display font-bold text-6xl leading-none text-transparent mb-8 [-webkit-text-stroke:1px_rgba(255,255,255,0.28)] group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.6)]"
                >
                  {numero}
                </span>

                <h3 className="font-display font-bold text-xl text-white mb-2">
                  <span className="sr-only">{dict.stepLabel} {i + 1}: </span>
                  {p.titulo}
                </h3>
                <p className="text-sm italic text-white/55 leading-relaxed">{p.descricao}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
