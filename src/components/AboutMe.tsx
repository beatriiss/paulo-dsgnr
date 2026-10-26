// src/components/Sobre.tsx
import Image from "next/image";
import Reveal from "./Reveal";

export default function Sobre() {
  return (
    <section id="sobre-mim" className="px-8 py-16 max-w-6xl mx-auto">
      <Reveal variant="left">
        <Image
          src="/images/titulos/sobre-mim.webp"
          alt="Sobre mim"
          width={280}
          height={30}
          className="h-8 w-auto mb-10"
        />
      </Reveal>

      {/* Card escuro único, com foto encaixada e barra de gradiente na base */}
      <Reveal className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]">
        {/* pb-8 = 24px de respiro + 8px da barra de gradiente da base */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 p-6 pb-8">
          {/* Foto */}
          <div className="shrink-0 mx-auto md:mx-0 overflow-hidden rounded-xl">
            <Image
              src="/images/sobre-mim/foto.webp"
              alt="Paulo Vinícius"
              width={740}
              height={928}
              sizes="370px"
              className="w-[370px] max-w-full h-auto transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center gap-4 text-white/70 text-[18px] italic leading-relaxed text-justify pr-10 pl-8">
            <p>
              Sou <span className="font-bold text-white not-italic">Paulo Vinícius</span>, designer
              gráfico com mais de <span className="font-bold text-white not-italic">15 anos de
              experiência</span> no mercado. Ao longo da minha carreira participei do
              desenvolvimento de identidades visuais, campanhas publicitárias, materiais
              gráficos, conteúdo para redes sociais e projetos digitais para empresas de
              diversos segmentos.
            </p>
            <p>
              Minha paixão é ajudar empresas a construírem uma comunicação visual sólida,
              profissional e estratégica. Mais do que desenvolver peças gráficas, busco criar
              marcas que transmitam confiança, personalidade e valor para seus clientes.
            </p>
            <p>
              Também sou cristão, pai, filho, irmão e amigo. Sou músico, cinéfilo, amante das
              artes, fotografia e de um bom café. Apaixonado por astronomia e Clash Royale
              player.
            </p>
          </div>
        </div>

        {/* Barra de gradiente colorida na base */}
        <div className="absolute inset-x-0 bottom-0 h-2 bg-[linear-gradient(to_right,#ECAF00,#B1FF19,#35EF85,#00E9D5,#1195FA,#2656FE,#9509FF)]" />
      </Reveal>
    </section>
  );
}