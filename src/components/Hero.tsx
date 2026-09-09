// src/components/Hero.tsx
import Image from "next/image";
import { MapPin, Mail, Phone, Download, Send } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-8 py-8 grid lg:grid-cols-2 gap-12 items-center overflow-visible mt-12 ">
      {/* Definição do gradiente usado nos ícones SVG (stroke/fill) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-green)" />
            <stop offset="100%" stopColor="var(--color-accent-blue)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Foto com o contorno neon já incluso na própria imagem (recorte com fundo transparente) */}
      <div className="relative flex justify-center lg:ml-[220px] -mt-14 transition-transform duration-300 hover:scale-105">
        <Image
          src="/images/image-hero.png"
          alt="Paulo Vinícius"
          width={500}
          height={620}
          priority
          className="relative w-full max-w-[490px] h-auto object-contain z-10"
        />
      </div>

      {/* Texto */}
      <div className="-ml-20 scale-[0.93]" >
        {/* Seletor de idioma */}
        <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
          <span className="tracking-widest">SELECT LANGUAGE:</span>
          <button className="font-semibold bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
            PT
          </button>
          <span className="text-white/30">/</span>
          <button className="hover:text-white transition-colors">EN</button>
          <span className="text-white/30">/</span>
          <button className="hover:text-white transition-colors">ES</button>
        </div>

        <p className="text-sm mb-2 bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent w-fit">
          ● Olá, eu sou
        </p>
<h1 className="font-display font-bold text-6xl leading-none mb-4">
  PAULO<br />
  <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
    VINÍCIUS
  </span>
</h1>

        <p className="text-sm text-white/60 mb-4 tracking-wide">
          <span className="font-bold text-white">IDENTIDADE</span> VISUAL ·{" "}
          <span className="font-bold text-white">SOCIAL</span> MEDIA ·{" "}
          <span className="font-bold text-white">WEB</span>SITES ·{" "}
          <span className="font-bold text-white">DESIGN</span> GRÁFICO
        </p>

        <p className="text-white text-[14px] italic font-bold leading-tight max-w-md mb-6">
          Sou designer gráfico com mais de 15 anos de experiência no
          desenvolvimento de marcas, materiais gráficos, conteúdo para redes
          sociais e soluções digitais para empresas. Meu propósito é criar
          projetos que fortalecem a imagem do negócio e ajudam empresas a se
          posicionarem de forma profissional no mercado.
        </p>

        {/* Cards de contato */}
        <div className="flex flex-wrap gap-3 mb-4">
          {/* Card Brasil - borda em gradiente */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-accent-green to-accent-blue transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 rounded-xl bg-bg px-4 py-2">
              <MapPin size={18} style={{ stroke: "url(#iconGradient)" }} />
              <div className="leading-tight">
                <p className="text-sm font-semibold">Brasil</p>
                <p className="text-xs text-white/50">Local</p>
              </div>
            </div>
          </div>

          {/* Card E-mail - borda em gradiente */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-accent-green to-accent-blue transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 rounded-xl bg-bg px-4 py-2">
              <Mail size={18} style={{ stroke: "url(#iconGradient)" }} />
              <div className="leading-tight">
                <p className="text-sm font-semibold">dsgnr.paulo</p>
                <p className="text-xs text-white/50">@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Card WhatsApp - borda em gradiente */}
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-accent-green to-accent-blue transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 rounded-xl bg-bg px-4 py-2">
              <Phone size={18} style={{ stroke: "url(#iconGradient)" }} />
              <div className="leading-tight">
                <p className="text-sm font-semibold">75 99219-7861</p>
                <p className="text-xs text-white/50">WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/paulo-designer-928656239/"
          target="_blank"
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
        >
                  <Image
          src="/images/linkedin-icon.webp"
          alt="Preview do site em tablet e celular"
          width={15}
          height={15}

        />
          linkedin.com/in/paulo-designer-928656239/
        </a>

        <div className="flex gap-4">
          {/* Botão Baixar Currículo - borda em gradiente */}
          <div className="rounded-md p-[1px] bg-gradient-to-r from-accent-green to-accent-blue transition-transform duration-300 hover:scale-105">
            <button className="flex items-center gap-2 rounded-md bg-bg text-white px-6 py-2 text-sm font-semibold w-full h-full">
              BAIXAR CURRÍCULO <Download size={16} style={{ stroke: "url(#iconGradient)" }} />
            </button>
          </div>

          {/* Botão Entrar em Contato - borda em gradiente */}
          <div className="rounded-md p-[1px] bg-gradient-to-r from-accent-green to-accent-blue transition-transform duration-300 hover:scale-105">
            <button className="flex items-center gap-2 rounded-md bg-bg text-white px-6 py-2 text-sm font-semibold w-full h-full">
              ENTRAR EM CONTATO <Send size={16} style={{ stroke: "url(#iconGradient)" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mockup dos dispositivos (tablet + celular já composto em perspectiva na própria imagem) */}
      <div
        className="absolute right-[60px] top-[260px] -translate-y-1/2 hidden xl:block transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        <Image
          src="/images/mockup-devices.webp"
          alt="Preview do site em tablet e celular"
          width={350}
          height={325}
          className="w-[420px] h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
        />
      </div>
<Image
  src="/images/linha-gradiente-maior.webp"
  alt=""
  width={2000}
  height={8}
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-1 object-cover"
/>
    </section>
  );
}