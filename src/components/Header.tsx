// src/components/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/pt";

export default function Header({ dict, budgetHref }: { dict: Dictionary["header"]; lang: Locale; budgetHref: string }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lineLeft, setLineLeft] = useState<number | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);

    // Cada link aponta pro id da seção correspondente (ver os componentes:
    // AboutMe id="sobre-mim", Solutions id="solucoes", Portifolio id="portfolio",
    // HowItWorks id="como-funciona", Experience id="experiencia")
    const links = [
        { label: dict.nav.about, href: "#sobre-mim" },
        { label: dict.nav.solutions, href: "#solucoes" },
        { label: dict.nav.portfolio, href: "#portfolio" },
        { label: dict.nav.process, href: "#como-funciona" },
        { label: dict.nav.experience, href: "#experiencia" },
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

    // Mede a posição do nav desktop para a linha gradiente começar no primeiro link.
    // O nav é centralizado, então a posição muda com a largura da tela.
    useEffect(() => {
        const header = headerRef.current;
        const nav = navRef.current;
        if (!header || !nav) return;

        const updateLineLeft = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setLineLeft(nav.getBoundingClientRect().left - header.getBoundingClientRect().left);
            } else {
                setLineLeft(null);
            }
        };

        const observer = new ResizeObserver(updateLineLeft);
        observer.observe(header);
        observer.observe(nav);

        return () => observer.disconnect();
    }, []);

    // Classes de entrada em cascata dos itens do menu mobile
    const itemAnim = menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2";
    const itemDelay = (i: number) => ({ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" });

    return (
        <header ref={headerRef} className="relative z-50">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
                {/* Espaço reservado pro tamanho da logo, responsivo */}
                <div className="w-28 sm:w-40 lg:w-56 shrink-0 h-[60px] sm:h-[80px] lg:h-auto" />

                {/* Nav desktop */}
                <nav ref={navRef} className="hidden lg:flex items-center gap-6 text-base font-medium text-white/80">
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
                        <a
                            href={budgetHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={dict.budgetAria}
                            className="block rounded-[5px] bg-black px-3 lg:px-5 py-2 text-sm lg:text-base font-medium text-white hover:bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-purple))] hover:text-black transition-colors w-full h-full text-center"
                        >
                            {dict.budget}
                        </a>
                    </div>

                    {/* Botão hambúrguer - só mobile/tablet */}
                    <button
                        className="lg:hidden text-white text-2xl"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
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
            <div className="absolute top-3 sm:top-4 lg:top-10 left-4 sm:left-6 lg:left-16 z-50 w-[120px] sm:w-[158px] lg:w-[354px]">
                <Image
                    src="/images/marca/logo.svg"
                    alt={dict.logoAlt}
                    width={480}
                    height={242}
                    className="w-full h-auto select-none pointer-events-none"
                    priority
                />
            </div>

            {/* linha gradiente: no desktop começa no primeiro link do menu, abaixo de lg ocupa a largura toda */}
            <div>
                <Image
                    src="/images/decoracao/linha-gradiente-menor.webp"
                    alt=""
                    width={1170}
                    height={8}
                    className={`absolute bottom-0 right-0 h-1 w-full object-fill transition-opacity duration-300${lineLeft === null ? " lg:opacity-0" : ""}`}
                    style={lineLeft !== null ? { width: `calc(100% - ${lineLeft}px)` } : undefined}
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
                            className={`rounded-lg p-[1.5px] bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-purple))] mt-2 transition-[opacity,transform] duration-500 ${itemAnim}`}
                            style={itemDelay(links.length + 1)}
                        >
                            <a
                                href={budgetHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={dict.budgetAria}
                                onClick={() => setMenuOpen(false)}
                                tabIndex={menuOpen ? 0 : -1}
                                className="block rounded-[6.5px] bg-black px-5 py-2.5 text-base font-medium text-white w-full h-full transition-colors hover:bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-purple))] hover:text-black text-center"
                            >
                                {dict.budget}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
