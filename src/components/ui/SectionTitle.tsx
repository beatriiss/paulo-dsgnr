// src/components/ui/SectionTitle.tsx
// Título de seção em texto com gradiente (substitui as antigas imagens de título,
// pra poder traduzir). Os stops ficam em px de propósito: títulos curtos mostram
// só o começo do gradiente, como nas artes originais.
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "warm" | "cool";
  as?: "h2" | "p";
  className?: string;
};

const gradientes = {
  warm: "linear-gradient(90deg, #ECAF00 0px, #B1FF19 520px, #35EF85 900px, #00E9D5 1300px)",
  cool: "linear-gradient(90deg, #35EF85 0px, #00E9D5 260px, #1195FA 620px)",
};

export default function SectionTitle({ children, variant = "warm", as: Tag = "h2", className = "" }: Props) {
  return (
    <Tag
      className={`inline-block max-w-full break-words font-sans font-bold uppercase leading-[1.1] tracking-tight text-[1.75rem] sm:text-[2.5rem] bg-clip-text text-transparent pb-0.5 ${className}`}
      style={{ backgroundImage: gradientes[variant] }}
    >
      {children}
    </Tag>
  );
}
