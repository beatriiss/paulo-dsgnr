// src/components/Stats.tsx
import Image from "next/image";

const stats = [
  {
    label: "ANOS DE EXPERIÊNCIA",
    value: "15+",
    icon: "/images/icons/icon-anos-experiencia.webp",
  },
  {
    label: "PROJETOS ENTREGUES",
    value: "820+",
    icon: "/images/icons/icon-projetos-entregues.webp",
  },
  {
    label: "TROFÉUS NO CLASH ROYALE",
    value: "14.000+",
    icon: "/images/icons/icon-trofeus-clash-royale.webp",
  },
  {
    label: "TRABALHO REMOTO",
    value: "100%",
    icon: "/images/icons/icon-trabalho-remoto.webp",
  },
];

export default function Stats() {
  return (
    <section className="flex flex-wrap justify-center py-10 border-y border-white/10">
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="flex items-center gap-3 px-8 py-2 rounded-xl transition-transform duration-300 ease-out hover:scale-110 cursor-default">
            <Image
              src={s.icon}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 shrink-0"
            />
            <div className="text-left leading-tight">
              <p className="font-display font-bold text-3xl">{s.value}</p>
              <p className="text-xs text-white/50 whitespace-nowrap">{s.label}</p>
            </div>
          </div>

          {/* Divisor vertical entre os itens (não aparece depois do último) */}
          {i < stats.length - 1 && (
            <div className="hidden sm:block w-px h-10 bg-white/10" />
          )}
        </div>
      ))}
    </section>
  );
}