// src/components/Contato.tsx
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import SectionTitle from "@/components/ui/SectionTitle";

type Props = { dict: Dictionary["contact"]; whatsappHref: string };

export default function Contato({ dict, whatsappHref }: Props) {
    return (
        <section id="contato" className="relative -mb-10 text-center overflow-hidden">
            {/* Bloco com fundo quase preto — cobre só a parte de "call to action",
                não o rodapé (logo + direitos), que fica fora dessa div. */}
            <div className="relative bg-[#1a1a1c] px-5 sm:px-8 py-14 sm:py-20">
                <Image
                    src="/images/decoracao/linha-gradiente-maior.webp"
                    alt=""
                    width={2000}
                    height={8}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-1 object-fill lg:object-cover"
                />

                <Reveal className="relative max-w-5xl mx-auto flex flex-col items-center">
                    <SectionTitle as="p" variant="cool" className="mb-2">
                        {dict.kicker}
                    </SectionTitle>

                    {/* Responsivo: em espanhol a frase fica bem mais longa */}
                    <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-[70px] leading-tight mb-4 break-words">
                        {dict.title}
                    </h2>

                    <p
                        className="mb-6 w-fit bg-clip-text font-display text-xl italic text-transparent sm:text-2xl"
                        style={{ backgroundImage: "linear-gradient(90deg, #B1FF19, #35EF85 30%, #00E9D5 60%, #1195FA 85%, #2656FE)" }}
                    >
                        {dict.subtitle}
                    </p>

                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={dict.whatsappAria}
                        className="inline-flex items-center gap-3 max-w-full rounded-xl border-2 border-[#00E9D5] bg-black px-4 sm:px-5 py-2.5 font-display text-sm sm:text-base italic uppercase tracking-wide text-white transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_30px_-6px_rgba(0,233,213,0.6)] active:translate-y-0"
                    >
                        <FaWhatsapp aria-hidden="true" size={28} color="#00E9D5" />
                        {dict.whatsappButton}
                    </a>

                    <p className="text-md text-white/70 mt-4">
                        {dict.note}
                    </p>
                </Reveal>

                <Image
                    src="/images/decoracao/linha-gradiente-maior.webp"
                    alt=""
                    width={2000}
                    height={8}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-1 object-fill lg:object-cover"
                />
            </div>

            {/* Rodapé — fica fora do bloco cinza, mostrando o fundo da página por trás */}
            <div className="relative px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-center py-10 sm:py-16 gap-4 sm:gap-16 lg:gap-[500px]">
                <Image
                    src="/images/marca/logo-simbolo.svg"
                    alt={dict.logoAlt}
                    width={120}
                    height={60}
                    className="max-w-[120px] max-h-20 w-auto h-auto object-contain sm:mr-8"
                />

                <p className="text-xs text-white/40">
                    © 2026 Paulo Designer. {dict.rights}
                </p>
            </div>
        </section>
    );
}
