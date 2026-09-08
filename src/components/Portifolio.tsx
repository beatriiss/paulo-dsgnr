// src/components/Portfolio.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import PortfolioModal, { type ProjetoModal } from "./PortfolioModal";

type Categoria = "Identidade Visual" | "Social Media" | "Sites" | "Design Gráfico";

type Projeto = {
  slug: string;
  nome: string;
  categoria: Categoria;
  capa: string;
  imagens: string[];
};

// Gera ["/path/01.png", "/path/02.png", ...] a partir de uma quantidade e extensão
function gerarPaginas(pasta: string, total: number, ext: "png" | "jpg") {
  return Array.from({ length: total }, (_, i) =>
    `${pasta}/${String(i + 1).padStart(2, "0")}.${ext}`
  );
}

const projetos: Projeto[] = [
  {
    slug: "kito-consorcios",
    nome: "Kito Consórcios",
    categoria: "Identidade Visual",
    capa: "/images/portfolio/identidade-visual/kito/01.png",
    imagens: gerarPaginas("/images/portfolio/identidade-visual/kito", 16, "png"),
  },
  {
    slug: "jefferson-xavier",
    nome: "Jefferson Xavier",
    categoria: "Identidade Visual",
    capa: "/images/portfolio/identidade-visual/jefferson-xavier/01.png",
    imagens: gerarPaginas("/images/portfolio/identidade-visual/jefferson-xavier", 20, "png"),
  },
  {
    slug: "dulub-social-media",
    nome: "DULUB - Tecnologia Fluida",
    categoria: "Social Media",
    capa: "/images/portfolio/social-media/dulub/01.jpg",
    imagens: gerarPaginas("/images/portfolio/social-media/dulub", 25, "jpg"),
  },
];

// Ordem fixa das categorias na seção, mesmo que ainda não tenham projetos
const categorias: Categoria[] = [
  "Identidade Visual",
  "Social Media",
  "Sites",
  "Design Gráfico",
];

// As 3 cores de moldura, extraídas dos arquivos originais (mesmo degradê, agora em CSS)
const MOLDURA_GRADIENTS = [
  "linear-gradient(135deg, #ECAD01, #50F36F)", // laranja -> verde
  "linear-gradient(135deg, #2FEE8C, #08BDF2)", // verde -> ciano/azul
  "linear-gradient(135deg, #0BAFF5, #5C11FF)", // azul -> roxo
];

// Ícone "ver projeto" (seta), extraído do SETA_VERPROJETO.svg,
// usando currentColor para herdar a cor do texto ao lado
function SetaVerProjeto({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 9724.18 10480.89"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="9724.18,0 1146.95,0 1146.95,1714.63 6963.49,1714.63 -0,9349.01 1238.57,10480.89 8221.78,2825.05 8221.78,9294.51 9724.18,9294.51" />
    </svg>
  );
}

export default function Portfolio() {
  const [projetoAberto, setProjetoAberto] = useState<ProjetoModal | null>(null);

  return (
    <section id="portfolio" className="px-8 py-16 max-w-6xl mx-auto">
      <Image
        src="/images/titulo-portifolio.webp"
        alt="Portfólio"
        width={280}
        height={38}
        className="h-10 w-auto mb-10"
      />

      <div className="flex flex-col gap-14">
        {categorias.map((categoria) => {
          const itens = projetos.filter((p) => p.categoria === categoria);

          return (
            <div key={categoria}>
              <h3 className="font-display font-bold text-lg mb-5">{categoria}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {itens.length > 0
                  ? itens.map((projeto, i) => (
                      <button
                        key={projeto.slug}
                        onClick={() =>
                          setProjetoAberto({
                            nome: projeto.nome,
                            imagens: projeto.imagens,
                          })
                        }
                        className="group relative aspect-[1890/2355] overflow-hidden rounded-2xl p-[2px] text-left"
                        style={{ backgroundImage: MOLDURA_GRADIENTS[i % MOLDURA_GRADIENTS.length] }}
                      >
                        <div className="flex h-full w-full flex-col overflow-hidden rounded-[14px] bg-black">
                          {/* Capa do projeto */}
                          <div className="relative min-h-0 flex-1">
                            <Image
                              src={projeto.capa}
                              alt={projeto.nome}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />
                          </div>

                          {/* Rodapé preto sólido com nome e link */}
                          <div className="bg-black px-4 py-3">
                            <p className="font-display font-bold text-sm leading-tight text-white">
                              {projeto.nome}
                            </p>
                            <span className="mt-1.5 flex items-center gap-1 text-[11px] tracking-wide text-white/60 transition-transform duration-300 group-hover:translate-x-1">
                              VER PROJETO
                              <SetaVerProjeto className="h-2 w-2" />
                            </span>
                          </div>
                        </div>
                      </button>
                    ))
                  : // Placeholder para categorias sem material ainda (Sites, Design Gráfico)
                    Array.from({ length: 3 }, (_, i) => (
                      <div
                        key={i}
                        className="flex aspect-[1890/2355] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 text-white/30"
                      >
                        <span className="text-xs">Em breve</span>
                      </div>
                    ))}
              </div>
            </div>
          );
        })}
      </div>

      <PortfolioModal
        projeto={projetoAberto}
        onClose={() => setProjetoAberto(null)}
      />
    </section>
  );
}