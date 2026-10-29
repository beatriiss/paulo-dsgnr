// src/components/Portfolio.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import PortfolioModal, { type ProjetoModal } from "./PortfolioModal";
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries/pt";
import SectionTitle from "@/components/ui/SectionTitle";

// Chave interna da categoria (usada também na lógica do modal); o rótulo
// exibido vem do dicionário.
type Categoria = "Identidade Visual" | "Social Media" | "Sites" | "Design Gráfico";

const chaveCategoria: Record<Categoria, keyof Dictionary["portfolio"]["categories"]> = {
  "Identidade Visual": "identidadeVisual",
  "Social Media": "socialMedia",
  "Sites": "sites",
  "Design Gráfico": "designGrafico",
};

// Nome e descrição de cada projeto ficam no dicionário (dict.projects[slug])
type Projeto = {
  slug: keyof Dictionary["portfolio"]["projects"];
  categoria: Categoria;
  capa: string;
  imagens: string[];
  capaFoco?: string; // ex: "top", "bottom", "50% 20%" — controla o object-position da capa
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
    categoria: "Identidade Visual",
    capa: "/images/portfolio/identidade-visual/kito/01.png",
    imagens: gerarPaginas("/images/portfolio/identidade-visual/kito", 16, "png"),
    capaFoco: "top", // ajuste se ainda cortar errado
  },
  {
    slug: "jefferson-xavier",
    categoria: "Identidade Visual",
    capa: "/images/portfolio/identidade-visual/jefferson-xavier/01.png",
    imagens: gerarPaginas("/images/portfolio/identidade-visual/jefferson-xavier", 20, "png"),
  },
  {
    slug: "dulub-social-media",
    categoria: "Social Media",
    capa: "/images/portfolio/social-media/dulub/capa.webp",
    imagens: gerarPaginas("/images/portfolio/social-media/dulub", 25, "jpg"),
  },
  {
    slug: "vanessa-paula-social-media",
    categoria: "Social Media",
    capa: "/images/portfolio/social-media/vanessa-paula/capa.png",
    imagens: gerarPaginas("/images/portfolio/social-media/vanessa-paula", 16, "png"),
  },
  {
    slug: "lucidata-social-media",
    categoria: "Social Media",
    capa: "/images/portfolio/social-media/lucidata/capa.png",
    imagens: gerarPaginas("/images/portfolio/social-media/lucidata", 19, "png"),
  },
  {
    slug: "iaw-contabiliza-site",
    categoria: "Sites",
    // Print da página inteira (1600x9992), usado tanto na capa quanto no modal
    capa: "/images/portfolio/sites/iaw-contabiliza/pagina.jpg",
    imagens: ["/images/portfolio/sites/iaw-contabiliza/pagina.jpg"],
  },
];

// Ordem fixa das categorias na seção, mesmo que ainda não tenham projetos
const categorias: Categoria[] = [
  "Identidade Visual",
  "Social Media",
  "Sites",
  "Design Gráfico",
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

export default function Portfolio({ dict }: { dict: Dictionary["portfolio"] }) {
  const [projetoAberto, setProjetoAberto] = useState<ProjetoModal | null>(null);

  return (
    <section id="portfolio" className="px-5 sm:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
      <Reveal variant="left">
        <SectionTitle className="mb-10">{dict.title}</SectionTitle>
      </Reveal>

      <div className="flex flex-col gap-14">
        {categorias.map((categoria) => {
          const itens = projetos.filter((p) => p.categoria === categoria);
          const rotuloCategoria = dict.categories[chaveCategoria[categoria]];

          return (
            <div key={categoria}>
              <Reveal variant="fade">
                <h3 className="font-display font-bold text-lg mb-5">{rotuloCategoria}</h3>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {itens.length > 0
                  ? itens.map((projeto, i) => {
                      const { nome, descricao } = dict.projects[projeto.slug];

                      return (
                        <Reveal key={projeto.slug} delay={(i % 3) * 120} className="group flex flex-col">
                          <button
                            onClick={() =>
                              setProjetoAberto({
                                nome,
                                categoria: projeto.categoria,
                                categoriaLabel: rotuloCategoria,
                                descricao: descricao || undefined,
                                imagens: projeto.imagens,
                              })
                            }
                            className="relative aspect-[1890/2355] overflow-hidden rounded-2xl bg-black text-left ring-1 ring-white/0 transition-[box-shadow,translate] duration-500 ease-out group-hover:-translate-y-1 group-hover:ring-white/15 group-hover:shadow-[0_20px_50px_-20px_rgba(56,182,255,0.35)]"
                          >
                            {projeto.categoria === "Sites" ? (
                              <>
                                {/* Barra estilo navegador pra indicar que é um site */}
                                <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1.5 bg-black/80 px-3 backdrop-blur">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                                </div>
                                {/* Página inteira a partir do topo; no hover "rola" até o fim
                                    (top 0→100% somado a translateY 0→-100%) */}
                                <Image
                                  src={projeto.capa}
                                  alt={nome}
                                  width={1600}
                                  height={9992}
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  className="absolute inset-x-0 top-0 h-auto w-full translate-y-0 transition-[top,translate] duration-[6000ms] ease-in-out group-hover:top-full group-hover:-translate-y-full"
                                />
                              </>
                            ) : (
                              <Image
                                src={projeto.capa}
                                alt={nome}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectPosition: projeto.capaFoco ?? "center" }}
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                            )}
                          </button>

                          <div className="pt-3">
                            <p className="font-display font-bold text-sm leading-tight text-white">
                              {nome}
                            </p>
                            <span className="mt-1.5 flex items-center gap-1 text-[11px] tracking-wide text-white/60 transition-transform duration-300 group-hover:translate-x-1">
                              {dict.viewProject}
                              <SetaVerProjeto className="h-2 w-2" />
                            </span>
                          </div>
                        </Reveal>
                      );
                    })
                  : // Placeholder para categorias sem material ainda (Sites, Design Gráfico)
                    Array.from({ length: 3 }, (_, i) => (
                      <Reveal
                        key={i}
                        variant="fade"
                        delay={i * 120}
                        className={`${i === 2 ? "hidden lg:flex" : "flex"} aspect-[1890/2355] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 text-white/30`}
                      >
                        <span className="text-xs">{dict.comingSoon}</span>
                      </Reveal>
                    ))}
              </div>
            </div>
          );
        })}
      </div>

      <PortfolioModal
        projeto={projetoAberto}
        labels={dict.modal}
        onClose={() => setProjetoAberto(null)}
      />
    </section>
  );
}
