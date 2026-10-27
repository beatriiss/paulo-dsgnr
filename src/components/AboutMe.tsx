// src/components/Sobre.tsx
import Image from "next/image";
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import SectionTitle from "@/components/ui/SectionTitle";
import RichText from "@/components/ui/RichText";

export default function Sobre({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="sobre-mim" className="px-5 sm:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
      <Reveal variant="left">
        <SectionTitle className="mb-10">{dict.title}</SectionTitle>
      </Reveal>

      {/* Card escuro único, com foto encaixada e barra de gradiente na base */}
      <Reveal className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]">
        {/* pb-8 = 24px de respiro + 8px da barra de gradiente da base */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 p-4 pb-6 sm:p-6 sm:pb-8">
          {/* Foto */}
          <div className="shrink-0 mx-auto md:mx-0 overflow-hidden rounded-xl">
            <Image
              src="/images/sobre-mim/foto.webp"
              alt={dict.photoAlt}
              width={740}
              height={928}
              sizes="(max-width: 768px) 100vw, 370px"
              className="w-full max-w-[370px] md:w-[280px] lg:w-[370px] h-auto transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center gap-4 text-white/70 text-base lg:text-[18px] italic leading-relaxed text-left sm:text-justify md:pr-6 md:pl-2 lg:pr-10 lg:pl-8">
            {dict.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>

        {/* Barra de gradiente colorida na base */}
        <div className="absolute inset-x-0 bottom-0 h-2 bg-[linear-gradient(to_right,#ECAF00,#B1FF19,#35EF85,#00E9D5,#1195FA,#2656FE,#9509FF)]" />
      </Reveal>
    </section>
  );
}
