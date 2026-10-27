// src/components/ui/ActionButton.tsx
// Botão-link escuro com ícone (substitui as imagens "Baixar currículo" e
// "Entrar em contato").
import type { ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  icon: ReactNode;
  ariaLabel?: string;
  external?: boolean;
  download?: string;
  className?: string;
};

export default function ActionButton({ href, label, icon, ariaLabel, external, download, className = "" }: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex h-11 items-center gap-3 rounded-lg border border-white/15 bg-[linear-gradient(180deg,#2a2a2a_0%,#0b0b0b_100%)] px-5 font-display text-sm italic uppercase tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[translate,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-white/30 ${className}`}
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {icon}
      </span>
    </a>
  );
}
