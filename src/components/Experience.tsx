// src/components/Experiencia.tsx
import Image from "next/image";
import { Fragment } from "react";
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import SectionTitle from "@/components/ui/SectionTitle";

// Nomes das empresas não mudam com o idioma; cargo e descrição vêm de
// dict.experience.items, na mesma ordem.
const empresas = [
  {
    empresa: "DULUB - Tecnologia Fluida",
    logo: "/images/experiencia/logo-dulub.svg",
    ano: "/images/experiencia/ano-dulub.svg",
  },
  {
    empresa: "Lucidata - Informática & Escritório",
    logo: "/images/experiencia/logo-lucidata.svg",
    ano: "/images/experiencia/ano-lucidata.svg",
  },
  {
    empresa: "Maskate - Distribuidora de Produtos & Papelaria",
    logo: "/images/experiencia/logo-maskate.svg",
    ano: "/images/experiencia/ano-maskate.svg",
  },
  {
    empresa: "Feira Comunicação - Rótulos e Etiquetas",
    logo: "/images/experiencia/logo-feira.svg",
    ano: "/images/experiencia/ano-feira.svg",
  },
  {
    empresa: "Motorola - Lenovo company",
    logo: "/images/experiencia/logo-motorola.svg",
    ano: "/images/experiencia/ano-motorola.svg",
  },
  {
    empresa: "BoyArt - Comunicação Visual",
    logo: "/images/experiencia/logo-boyart.svg",
    ano: "/images/experiencia/ano-boyart.svg",
  },
];

export default function Experiencia({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <section id="experiencia" className="px-5 sm:px-8 py-12 sm:py-16 max-w-6xl mx-auto overflow-hidden">
      <Reveal variant="left">
        <SectionTitle className="mb-10 sm:mb-18">{dict.title}</SectionTitle>
      </Reveal>

      {/* Grid único: coluna 1 = logos (140px), coluna 2 = conteúdo.
          Assim a coluna das logos fica de verdade contínua ao longo de toda a timeline,
          e dá pra centralizar a linha nela com precisão. */}
      <div className="relative grid grid-cols-[64px_1fr] sm:grid-cols-[140px_1fr] gap-x-4 sm:gap-x-6 gap-y-3">
        {/* Linha vertical, centralizada na coluna das logos (140px / 2 = 70px).
            z-[5] para ficar acima dos dividers horizontais, mas abaixo das logos. */}
        <Reveal variant="grow-y" className="absolute left-[32px] sm:left-[130px] top-0 bottom-0 w-px bg-[#00E9E5] z-[5]" />
        <Image
          src="/images/marca/logo-simbolo.svg"
          alt=""
          width={120}
          height={60}
          className="max-w-[56px] sm:max-w-[180px] max-h-16 w-auto h-auto object-contain sm:ml-8"
        />

        {/* Divider acima do primeiro item (logo -> ano) */}
        <div className="col-span-2 h-px bg-white/10 z-0" />

        {empresas.map((empresa, i) => {
          const exp = dict.items[i];

          return (
            <Fragment key={empresa.empresa}>
              {/* Logo da empresa, centralizada sobre a linha */}
              <Reveal variant="scale" className="relative z-10 flex justify-center items-start pt-1">
                <div className="px-1">
                  <Image
                    src={empresa.logo}
                    alt={empresa.empresa}
                    width={120}
                    height={60}
                    className="max-w-[56px] sm:max-w-[200px] max-h-30 w-auto h-auto object-contain sm:mr-8"
                  />
                </div>
              </Reveal>

              {/* Conteúdo */}
              <Reveal variant="right" delay={100} className="min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg leading-tight">
                      {empresa.empresa}
                    </h3>
                    <p className="text-xs text-white/50">{exp.cargo}</p>
                  </div>
                  <Image
                    src={empresa.ano}
                    alt=""
                    width={130}
                    height={34}
                    className="h-6 sm:h-7 w-auto shrink-0"
                  />
                </div>
                <p className="text-sm italic text-white/60 leading-relaxed">
                  {exp.descricao}
                </p>
              </Reveal>

              {/* Divider abaixo do item (serve também como "acima" do próximo item) —
                  não aparece depois do último item da lista */}
              {i < empresas.length - 1 && (
                <div className="col-span-2 h-px bg-white/10 z-0" />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
