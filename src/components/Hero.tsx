// src/components/Hero.tsx
import Image from "next/image";
import { MapPin, Mail, Phone, Download, Send } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ActionButton from "@/components/ui/ActionButton";
import ContactBadge from "@/components/ui/ContactBadge";

type Props = {
  dict: Dictionary["hero"];
  lang: Locale;
  whatsappHref: string;
  emailHref: string;
};

export default function Hero({ dict, lang, whatsappHref, emailHref }: Props) {
  return (
    <section className="relative px-8 py-8 grid lg:grid-cols-2 gap-12 items-center overflow-visible mt-12">
      {/* Foto */}
      <div className="relative flex justify-center lg:ml-[220px] -mt-14 transition-transform duration-500 ease-out hover:scale-105 animate-enter [--enter-delay:100ms]">
        <Image
          src="/images/hero/paulo.png"
          alt={dict.photoAlt}
          width={500}
          height={620}
          priority
          className="relative w-full max-w-[490px] h-auto object-contain z-10"
        />
      </div>

      {/* Texto */}
      <div className="-ml-20 scale-[0.93]">

        {/* Seletor de idioma */}
        <LanguageSwitcher lang={lang} className="mb-6 animate-enter [--enter-delay:200ms]" />

        {/* Saudação */}
        <p className="text-sm mb-2 bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent w-fit animate-enter [--enter-delay:300ms]">
          ● {dict.greeting}
        </p>

        {/* Nome */}
        <h1 className="font-display font-bold text-6xl leading-none mb-4 animate-enter [--enter-delay:380ms]">
          PAULO
          <br />

          <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
            VINÍCIUS
          </span>
        </h1>

        {/* Serviços */}
        <p className="text-sm text-white/60 mb-4 tracking-wide animate-enter [--enter-delay:460ms]">
          {dict.services.map(([negrito, resto], i) => (
            <span key={i}>
              <span className="font-bold text-white">{negrito}</span>
              {resto}
              {i < dict.services.length - 1 && " · "}
            </span>
          ))}
        </p>

        {/* Descrição */}
        <p className="text-white text-[14px] italic font-bold leading-tight max-w-md mb-6 animate-enter [--enter-delay:540ms]">
          {dict.description}
        </p>

        {/* =====================================================
            CONTATOS
        ====================================================== */}
        <div className="flex flex-wrap items-center gap-6 mb-4 animate-enter [--enter-delay:620ms]">
          <ContactBadge
            icon={<MapPin size={26} strokeWidth={1.75} color="#00E9D5" />}
            title={dict.location.title}
            label={dict.location.label}
          />
          <ContactBadge
            href={emailHref}
            ariaLabel={dict.emailAria}
            icon={<Mail size={26} strokeWidth={1.75} color="#00E9D5" />}
            title="dsgnr.paulo"
            label="@gmail.com"
          />
          <ContactBadge
            href={whatsappHref}
            external
            ariaLabel={dict.whatsappAria}
            icon={<Phone size={26} strokeWidth={1.75} color="#1195FA" />}
            title="75 9 9219 7861"
            label={dict.whatsappLabel}
          />
        </div>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/paulo-designer-928656239/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6 w-fit animate-enter [--enter-delay:700ms]"
        >
          <Image
            src="/images/icones/linkedin.webp"
            alt="LinkedIn"
            width={15}
            height={15}
          />

          linkedin.com/in/paulo-designer-928656239/
        </a>

        {/* =====================================================
            BOTÕES
        ====================================================== */}
        <div className="flex flex-wrap items-center gap-4 animate-enter [--enter-delay:780ms]">
          <ActionButton
            href="/docs/curriculo-paulo-vinicius.pdf"
            download="Curriculo - Paulo Vinicius Designer.pdf"
            label={dict.downloadCv}
            ariaLabel={dict.downloadCvAria}
            icon={<Download size={18} color="#19B5F0" />}
          />
          <ActionButton
            href={whatsappHref}
            external
            label={dict.contact}
            ariaLabel={dict.contactAria}
            icon={<Send size={18} color="#2F6BFF" />}
          />
        </div>
      </div>

      {/* Mockup dos dispositivos */}
      <div
        className="absolute right-[60px] top-[260px] -translate-y-1/2 hidden xl:block transition-transform duration-500 ease-out hover:scale-105 animate-enter [--enter-delay:500ms]"
        aria-hidden="true"
      >
        {/* Wrapper só pra flutuação, separado da animação de entrada */}
        <div className="animate-float">
          <Image
            src="/images/hero/mockup-dispositivos.png"
            alt={dict.mockupAlt}
            width={350}
            height={325}
            className="w-[430px] h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* Linha gradiente */}
      <Image
        src="/images/decoracao/linha-gradiente-maior.webp"
        alt=""
        width={2000}
        height={8}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-1 object-cover"
      />
    </section>
  );
}
