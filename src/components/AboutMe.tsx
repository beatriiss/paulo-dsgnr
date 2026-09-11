// src/components/Sobre.tsx
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre-mim" className="px-8 py-16 max-w-6xl mx-auto">
      <Image
        src="/images/titulo-sobre-mim.webp"
        alt="Soluções"
        width={280}
        height={30}
        className="h-8 w-auto mb-10"
      />

      {/* Card escuro único, com foto encaixada e barra de gradiente na base */}
      <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-6 pb-8">
          {/* Foto */}
          <div className="shrink-0 mx-auto md:mx-0">
            <Image
              src="/images/foto-sobre-mim.png"
              alt="Paulo Vinícius"
              width={370}
              height={440}
              className="w-[370px] h-[460px]  object-cover rounded-xl "
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
      </div>
    </section>
  );
}