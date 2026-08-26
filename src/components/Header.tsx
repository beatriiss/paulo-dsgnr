// src/components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = ["SOBRE MIM","SOLUÇÕES", "PORTFÓLIO", "COMO FUNCIONA", "EXPERIÊNCIA"];

    return (
        <header className="relative z-50">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
                {/* Espaço reservado pro tamanho da logo, responsivo */}
                <div className="w-28 sm:w-40 lg:w-56 shrink-0" />

                {/* Nav desktop */}
                <nav className="hidden lg:flex items-center gap-6 text-base font-medium text-white/80">
                    {links.map((link) => (
                        <a key={link} href="#" className="hover:text-white transition-colors">
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Ações à direita */}
                <div className="flex items-center gap-3 sm:gap-4">

                    <a href="#"
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
                        aria-label="Abrir menu"
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Logo posicionada fora do fluxo, responsiva */}
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

            {/* Menu mobile (dropdown) */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-white/10 px-6 py-6 flex flex-col gap-4 z-40">
                    {links.map((link) => (

                        <a key={link}
                            href="#"
                            className="text-white/80 hover:text-white text-base font-medium transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}

                    <a href="#"
                        className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors pt-2"
                    >
                        <FaInstagram color="#38b6ff" size={20} />
                        PAULODSGNR
                    </a>

                    <div className="rounded rounded-[30px] p-[1.5px] bg-[linear-gradient(to_right,var(--color-accent-blue),var(--color-accent-purple))] mt-2">
                        <button className="rounded-[15px] bg-black px-5 py-2 text-base font-medium text-white w-full h-full">
                            ORÇAMENTO
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}