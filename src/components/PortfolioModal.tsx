// src/components/PortfolioModal.tsx
"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";

export type ProjetoModal = {
  nome: string;
  imagens: string[];
};

type Props = {
  projeto: ProjetoModal | null;
  onClose: () => void;
};

// Gradiente cheio usado no contorno do modal
const RAINBOW =
  "linear-gradient(90deg, #B60D03, #E37F03, #C6B405, #5EDC50, #02D1BE, #0F92DF, #322BE5, #B804E5, #CE1441)";
// Versão enxuta (3 cores), usada só no hover dos botões
const RAINBOW_SOFT = "linear-gradient(120deg, #E37F03, #02D1BE, #B804E5)";

// Botão circular com contorno neutro por padrão; o anel colorido só aparece no hover.
// Usa uma máscara CSS pra desenhar só o "anel" (sem preencher o meio), então funciona
// em cima de qualquer fundo sem precisar de divs aninhadas pro efeito de borda.
function RingIconButton({
  onClick,
  ariaLabel,
  children,
  size = "p-2 sm:p-3",
}: {
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
  size?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`group relative flex items-center justify-center rounded-full bg-black text-white/80 ring-1 ring-white/15 transition-colors duration-200 hover:text-white ${size}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          padding: 1.5,
          backgroundImage: RAINBOW_SOFT,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
    </button>
  );
}

export default function PortfolioModal({ projeto, onClose }: Props) {
  const [indice, setIndice] = useState(0);

  // Sempre que um novo projeto é aberto, volta para a primeira imagem
  useEffect(() => {
    setIndice(0);
  }, [projeto]);

  const total = projeto?.imagens.length ?? 0;

  const anterior = useCallback(() => {
    setIndice((i) => (i - 1 + total) % total);
  }, [total]);

  const proximo = useCallback(() => {
    setIndice((i) => (i + 1) % total);
  }, [total]);

  // Navegação por teclado
  useEffect(() => {
    if (!projeto) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proximo();
    }

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [projeto, anterior, proximo, onClose]);

  if (!projeto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={projeto.nome}
      onClick={onClose}
    >
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      {/* Anel gradiente do contorno do modal */}
      <div
        className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl p-[2px] shadow-2xl shadow-black/60"
        style={{ backgroundImage: RAINBOW }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-[75vh] w-full flex-col overflow-hidden rounded-[14px] bg-[#0b0b0b] sm:h-[85vh]">
          {/* Cabeçalho */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="font-display font-bold text-sm sm:text-base">{projeto.nome}</p>
              <p className="text-xs text-white/50">
                {indice + 1} / {total}
              </p>
            </div>

            <RingIconButton onClick={onClose} ariaLabel="Fechar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </RingIconButton>
          </div>

          {/* Imagem + setas — ocupa o espaço restante, nunca força o modal a estourar */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/40 px-2 py-4 sm:px-6">
            {total > 1 && (
              <div className="absolute left-1 z-10 sm:left-4">
                <RingIconButton onClick={anterior} ariaLabel="Imagem anterior">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </RingIconButton>
              </div>
            )}

            <div className="relative h-full w-full">
              <Image
                src={projeto.imagens[indice]}
                alt={`${projeto.nome} - página ${indice + 1}`}
                fill
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="object-contain"
                priority
              />
            </div>

            {total > 1 && (
              <div className="absolute right-1 z-10 sm:right-4">
                <RingIconButton onClick={proximo} ariaLabel="Próxima imagem">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </RingIconButton>
              </div>
            )}
          </div>

          {/* Miniaturas — altura fixa e generosa, sempre reservada (shrink-0) */}
          {total > 1 && (
            <div
              className="no-scrollbar flex shrink-0 gap-2 overflow-x-auto border-t border-white/10 px-5 py-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projeto.imagens.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setIndice(i)}
                  className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition sm:h-24 sm:w-24 ${
                    i === indice
                      ? "border-white/80"
                      : "border-white/10 opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Ir para imagem ${i + 1}`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}