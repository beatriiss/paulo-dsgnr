// src/components/Contato.tsx
import Image from "next/image";

// Ajuste aqui o número (formato: código do país + DDD + número, só dígitos)
const WHATSAPP_NUMERO = "5575992197861";
const WHATSAPP_MENSAGEM = "Olá Paulo, vi seu site e quero conversar sobre um projeto!";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    WHATSAPP_MENSAGEM
)}`;

export default function Contato() {
    return (
        <section id="contato" className="relative px-8 py-20 -mb-10 text-center overflow-hidden">
            {/* fundo quase preto, levemente diferente do resto do site */}
            <div className="absolute inset-0 bg-black" />
            <Image
                src="/images/linha-gradiente-maior.webp"
                alt=""
                width={2000}
                height={8}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-1 object-cover"
            />

            <div className="relative max-w-5xl mx-auto flex flex-col items-center">
                <Image
                    src="/images/bora-conversar.svg"
                    alt="Bora conversar"
                    width={420}
                    height={38}
                    className="h-8 w-auto mb-2"
                />

                <h2 className="font-display font-bold text-[70px] leading-tight mb-4">
                    TEM UM PROJETO EM MENTE?
                </h2>

                <Image
                    src="/images/me-chama.svg"
                    alt="Bora conversar"
                    width={420}
                    height={38}
                    className="h-8 w-auto mb-4"
                />

                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
                >
                <Image
                    src="/images/wpp-button-contact.svg"
                    alt="Bora conversar"
                    width={420}
                    height={38}
                    className="h-10 w-auto mb-0"
                />
                </a>
                <p className="text-md text-white/70 mt-4">
                   Respondo pelo whatsapp. É mais rápido assim.
                </p>
            </div>
            <Image
                src="/images/linha-gradiente-maior.webp"
                alt=""
                width={2000}
                height={8}
                className="absolute top-[440px] left-1/2 -translate-x-1/2 w-screen h-1 object-cover"
            />

            {/* rodapé simples */}
            <div className="relative mt-16 pt-6  flex items-center justify-center py-16 gap-[500px]">
                                        <Image
                                  src={'/logo2-paulodsgnr.svg'}
                                  alt={'Logo'}
                                  width={120}
                                  height={60}
                                  className="max-w-[120px] max-h-20 w-auto h-auto object-contain mr-8"
                                />

                
                <p className="text-xs text-white/40">
                    © 2026 Paulo Designer. Todos os direitos reservados.
                </p>
            </div>
        </section>
    );
}