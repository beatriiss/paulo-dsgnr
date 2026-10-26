// src/components/ComoFunciona.tsx
import Image from "next/image";
import Reveal from "./Reveal";

const passos = [
  {
    numero: "01",
    titulo: "Briefing",
    descricao: "Conheço seu negócio para entender seus objetivos.",
  },
  {
    numero: "02",
    titulo: "Pesquisa",
    descricao: "Busco referências e oportunidades para diferenciar a sua marca.",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento",
    descricao: "Crio soluções visuais que unem criatividade e funcionalidade.",
  },
  {
    numero: "04",
    titulo: "Estratégia",
    descricao: "Planejamento criativo alinhado aos objetivos do seu negócio.",
  },
  {
    numero: "05",
    titulo: "Aprovação",
    descricao: "Refino cada detalhe até alcançar o resultado final.",
  },
  {
    numero: "06",
    titulo: "Entrega",
    descricao: "Você receberá todos os arquivos organizados e prontos para utilização.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-8 py-16 max-w-6xl mx-auto">
      <Reveal variant="left">
        <Image
          src="/images/titulos/como-funciona.webp"
          alt="Como Funciona"
          width={400}
          height={36}
          className="h-8 w-auto mb-10"
        />
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {passos.map((p, i) => (
          <Reveal key={p.numero} variant="scale" delay={(i % 3) * 120} className="h-full">
            {/* Card fosco: borda neutra, o gradiente da marca só aparece no hover */}
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-[translate,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_24px_60px_-30px_rgba(56,182,255,0.35)]">
              {/* Linha de destaque no topo: cresce e ganha cor no hover */}
              <span
                aria-hidden="true"
                className="absolute left-7 top-0 h-[2px] w-10 rounded-full bg-white/25 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%_-_3.5rem)]"
              >
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(to_right,#ECAF00,#B1FF19,#35EF85,#00E9D5,#1195FA,#2656FE,#9509FF)]" />
              </span>

              {/* Número vazado, só contorno */}
              <span
                aria-hidden="true"
                className="font-display font-bold text-6xl leading-none text-transparent mb-8 [-webkit-text-stroke:1px_rgba(255,255,255,0.28)] group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.6)]"
              >
                {p.numero}
              </span>

              <h3 className="font-display font-bold text-xl text-white mb-2">
                <span className="sr-only">Etapa {Number(p.numero)}: </span>
                {p.titulo}
              </h3>
              <p className="text-sm italic text-white/55 leading-relaxed">{p.descricao}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
