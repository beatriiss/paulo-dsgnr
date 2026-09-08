// src/components/Solucoes.tsx
import Image from "next/image";

const solucoes = [
  {
    icon: "/images/identidade-visual.svg",
    title: "IDENTIDADE\nVISUAL",
    items: [
      "Criação de logotipo",
      "Manual da marca",
      "Paleta de cores",
      "Tipografia",
      "Papelaria corporativa",
      "Cartão de visita",
      "Timbrado",
      "Assinatura de e-mail",
      "Apresentação institucional",
    ],
  },
  {
    icon: "/images/websites.svg",
    title: "WEBSITES E\nLANDING PAGES",
    items: [
      "Layout de sites",
      "Sites institucionais",
      "Landing pages",
      "Interfaces (UI)",
      "Banners para sites",
      "Ícones personalizados",
    ],
  },
  {
    icon: "/images/social-media.svg",
    title: "SOCIAL MEDIA",
    items: [
      "Posts para Instagram",
      "Carrosséis",
      "Stories",
      "Capas para Facebook",
      "Banner para LinkedIn",
      "Reels",
      "Criativos para anúncios",
    ],
  },
  {
    icon: "/images/impressao-grafica.svg",
    title: "IMPRESSÃO\nGRÁFICA",
    items: [
      "Flyers",
      "Panfletos",
      "Folders",
      "Catálogos",
      "Revistas",
      "Cardápios",
      "Convites",
      "Crachás",
    ],
  },
  {
    icon: "/images/comunicacao-visual.svg",
    title: "COMUNICAÇÃO\nVISUAL",
    items: [
      "Fachadas",
      "Totens",
      "Placas",
      "Banners",
      "Adesivos",
      "Plotagem",
      "Envelopamento de veículos",
      "Wind Banner",
    ],
  },
  {
    icon: "/images/arte-vetorizacao.svg",
    title: "ARTE FINAL E\nVETORIZAÇÃO",
    items: ["Criação de arte final", "Vetorização de logotipo", "Rótulos e Embalagens"],
  },
];

export default function Solucoes() {
  return (
    <section id="solucoes" className="px-8 py-16 max-w-6xl mx-auto">
      <Image
        src="/images/titulo-solucoes.webp"
        alt="Soluções"
        width={350}
        height={76}
        className="h-12 w-auto mb-10"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {solucoes.map((s) => (
          <div key={s.title} className="flex gap-4 transition-transform duration-300 hover:-translate-y-1">
            <Image
              src={s.icon}
              alt=""
              width={56}
              height={56}
              className="w-14 h-14 shrink-0"
            />
            <div>
              <h3 className="font-display font-bold text-lg leading-tight mb-2 whitespace-pre-line">
                {s.title}
              </h3>
              <ul className="space-y-0.5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm italic text-white/60">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}