// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Cada link aponta pro id da seção correspondente (ver os componentes:
    // AboutMe id="sobre-mim", Solutions id="solucoes", Portifolio id="portfolio",
    // HowItWorks id="como-funciona", Experience id="experiencia")
    const links = [
        { label: "SOBRE MIM", href: "#sobre-mim" },
        { label: "SOLUÇÕES", href: "#solucoes" },
        { label: "PORTFÓLIO", href: "#portfolio" },
        { label: "COMO FUNCIONA", href: "#como-funciona" },
        { label: "EXPERIÊNCIA", href: "#experiencia" },
    ];

    // Fecha o menu mobile com Esc
    useEffect(() => {
        if (!menuOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [menuOpen]);

    // Classes de entrada em cascata dos itens do menu mobile
    const itemAnim = menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2";
    const itemDelay = (i: number) => ({ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" });

    return (
        <header className="relative z-50">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
                {/* Espaço reservado pro tamanho da logo, responsivo */}
                <div className="w-28 sm:w-40 lg:w-56 shrink-0" />

                {/* Nav desktop */}
                <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-white/80">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link hover:text-white transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Ações à direita */}
                <div className="flex items-center gap-3 sm:gap-4">

                    <a href="https://instagram.com/paulodsgnr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 text-sm lg:text-base text-white/70 hover:text-white transition-colors"
                    >
                        <FaInstagram color="#38b6ff" size={20} />
                        <span className="hidden md:inline">PAULODSGNR</span>
                    </a>

                    <div className="hidden sm:block rounded-md p-[1.5px] bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-purple))]">
                        <button className="rounded-[5px] bg-black px-3 lg:px-5 py-2 text-sm lg:text-base font-medium text-white hover:bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-purple))] hover:text-black transition-colors w-full h-full">
                            ORÇAMENTO
                        </button>
                    </div>

                    {/* Botão hambúrguer - só mobile/tablet */}
                    <button
                        className="lg:hidden text-white text-2xl"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuOpen}
                    >
                        <span className="relative block w-6 h-6">
                            <HiMenu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${menuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
                            <HiX className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"}`} />
                        </span>
                    </button>
                </div>
            </div>

            {/* Logo posicionada fora do fluxo, responsiva */}
            <div className="absolute top-1 sm:top-10 left-5 sm:left-16 z-50 w-[140px] sm:w-[188px] md:w-[187px] lg:w-[354px]">
                <Image
                    src="/images/logo-paulodsgnr.svg"
                    alt="Paulo Dsgnr"
                    width={480}
                    height={242}
                    className="w-full h-auto select-none pointer-events-none"
                    priority
                />
            </div>

            {/* linha gradiente na altura padrão do header */}
            <div>
                <Image
                    src="/images/linha-gradiente-menor.webp"
                    alt=""
                    width={1170}
                    height={8}
                    className="absolute bottom-0 right-0 h-1 object-cover"
                />
            </div>

            {/* Menu mobile (dropdown) — sempre montado, abre/fecha animando a altura */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full z-40 grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
                aria-hidden={!menuOpen}
            >
                <div className="overflow-hidden">
                    <div className="bg-black/95 backdrop-blur-sm border-t border-white/10 px-6 py-6 flex flex-col gap-4">
                        {links.map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-white/80 hover:text-white text-base font-medium transition-[opacity,transform,color] duration-500 ${itemAnim}`}
                                style={itemDelay(i)}
                                onClick={() => setMenuOpen(false)}
                                tabIndex={menuOpen ? 0 : -1}
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="https://instagram.com/paulodsgnr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1.5 text-white/70 hover:text-white transition-[opacity,transform,color] duration-500 pt-2 ${itemAnim}`}
                            style={itemDelay(links.length)}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            <FaInstagram color="#38b6ff" size={20} />
                            PAULODSGNR
                        </a>

                        <div
                            className={`rounded rounded-[30px] p-[1.5px] bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-purple))] mt-2 transition-[opacity,transform] duration-500 ${itemAnim}`}
                            style={itemDelay(links.length + 1)}
                        >
                            <button
                                className="rounded-[15px] bg-black px-5 py-2 text-base font-medium text-white w-full h-full"
                                tabIndex={menuOpen ? 0 : -1}
                            >
                                ORÇAMENTO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
