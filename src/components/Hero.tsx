import Image from "next/image";
import { MapPin, Mail, Phone, Download, Send } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-8 py-8 grid lg:grid-cols-2 gap-12 items-center overflow-visible mt-12">
      {/* Definição do gradiente usado nos ícones SVG */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-green)" />
            <stop offset="100%" stopColor="var(--color-accent-blue)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Foto */}
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
      <div className="-ml-20 scale-[0.93]">

        {/* Seletor de idioma */}
        <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
          <span className="tracking-widest">SELECT LANGUAGE:</span>

          <button className="font-semibold bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
            PT
          </button>

          <span className="text-white/30">/</span>

          <button className="hover:text-white transition-colors">
            EN
          </button>

          <span className="text-white/30">/</span>

          <button className="hover:text-white transition-colors">
            ES
          </button>
        </div>

        {/* Saudação */}
        <p className="text-sm mb-2 bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent w-fit">
          ● Olá, eu sou
        </p>

        {/* Nome */}
        <h1 className="font-display font-bold text-6xl leading-none mb-4">
          PAULO
          <br />

          <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
            VINÍCIUS
          </span>
        </h1>

        {/* Serviços */}
        <p className="text-sm text-white/60 mb-4 tracking-wide">
          <span className="font-bold text-white">IDENTIDADE</span> VISUAL ·{" "}
          <span className="font-bold text-white">SOCIAL</span> MEDIA ·{" "}
          <span className="font-bold text-white">WEB</span>SITES ·{" "}
          <span className="font-bold text-white">DESIGN</span> GRÁFICO
        </p>

        {/* Descrição */}
        <p className="text-white text-[14px] italic font-bold leading-tight max-w-md mb-6">
          Sou designer gráfico com mais de 15 anos de experiência no
          desenvolvimento de marcas, materiais gráficos, conteúdo para redes
          sociais e soluções digitais para empresas. Meu propósito é criar
          projetos que fortalecem a imagem do negócio e ajudam empresas a se
          posicionarem de forma profissional no mercado.
        </p>

        {/* =====================================================
            CONTATOS — SEM CONTORNO
        ====================================================== */}
        <div className="flex flex-wrap items-center gap-6 mb-4">

          {/* Brasil */}
          <div className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
            <Image
              src="/images/button-loc.svg"
              alt="Localização"
              width={180}
              height={120}
              className="h-16 w-auto"
            />
          </div>

          {/* E-mail */}
          <div className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
            <Image
              src="/images/button-email.svg"
              alt="E-mail"
              width={290}
              height={170}
              className="h-16 w-auto"
            />
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
            <Image
              src="/images/button-wpp.svg"
              alt="WhatsApp"
              width={310}
              height={190}
              className="h-16 w-auto"
            />
          </div>

        </div>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/paulo-designer-928656239/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
        >
          <Image
            src="/images/linkedin-icon.webp"
            alt="LinkedIn"
            width={15}
            height={15}
          />

          linkedin.com/in/paulo-designer-928656239/
        </a>

        {/* =====================================================
            BOTÕES
        ====================================================== */}
        <div className="flex items-center gap-6">

          {/* BAIXAR CURRÍCULO — MANTÉM CONTORNO */}
          <div >
            <button >
              <Image
                src="/images/button-curriculo.svg"
                alt="WhatsApp"
                width={310}
                height={190}
                className="h-11 w-auto"
              />
            </button>
          </div>

          {/* ENTRAR EM CONTATO */}
          <button className="-mt-1">
            <Image
              src="/images/button-contact.svg"
              alt="WhatsApp"
              width={310}
              height={190}
              className="h-11 w-auto"
            />
          </button>

        </div>
      </div>

      {/* Mockup dos dispositivos */}
      <div
        className="absolute right-[60px] top-[260px] -translate-y-1/2 hidden xl:block transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        <Image
          src="/images/image-02-hero.png"
          alt="Preview do site em tablet e celular"
          width={350}
          height={325}
          className="w-[430px] h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Linha gradiente */}
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