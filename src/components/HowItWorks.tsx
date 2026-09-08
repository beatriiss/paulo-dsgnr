// src/components/ComoFunciona.tsx
import Image from "next/image";

const passos = [
  {
    numero: "1.",
    titulo: "Briefing",
    descricao: "Conheço seu negócio para entender seus objetivos.",
    moldura: "/images/moldura-01.webp",
  },
  {
    numero: "2.",
    titulo: "Pesquisa",
    descricao: "Busco referências e oportunidades para diferenciar a sua marca.",
    moldura: "/images/moldura-02.webp",
  },
  {
    numero: "3.",
    titulo: "Desenvolvimento",
    descricao: "Crio soluções visuais que unem criatividade e funcionalidade.",
    moldura: "/images/moldura-03.webp",
  },
  {
    numero: "4.",
    titulo: "Estratégia",
    descricao: "Planejamento criativo alinhado aos objetivos do seu negócio.",
    moldura: "/images/moldura-01.webp",
  },
  {
    numero: "5.",
    titulo: "Aprovação",
    descricao: "Refino cada detalhe até alcançar o resultado final.",
    moldura: "/images/moldura-02.webp",
  },
  {
    numero: "6.",
    titulo: "Entrega",
    descricao: "Você receberá todos os arquivos organizados e prontos para utilização.",
    moldura: "/images/moldura-03.webp",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-8 py-16 max-w-6xl mx-auto">
      <Image
        src="/images/titulo-como-funciona.webp"
        alt="Como Funciona"
        width={400}
        height={36}
        className="h-8 w-auto mb-10"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {passos.map((p) => (
          <div
            key={p.numero}
            className="rounded-xl bg-bg p-6 transition-transform duration-300 hover:-translate-y-1"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderImageSource: `url('${p.moldura}')`,
              borderImageSlice: 120,
              borderImageWidth: "10px",
              borderImageRepeat: "stretch",
            }}
          >
            <span className="block font-display font-bold text-lg mb-2">{p.numero}</span>
            <h3 className="font-display font-bold text-xl text-center mb-2">{p.titulo}</h3>
            <p className="text-sm italic text-white/60 text-center leading-snug">
              {p.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}