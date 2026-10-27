// src/components/ui/ContactBadge.tsx
// Selo de contato com ícone + duas linhas (substitui as imagens de
// localização, e-mail e WhatsApp do Hero). Vira link quando recebe href.
import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  label: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
};

export default function ContactBadge({ icon, title, label, href, external, ariaLabel }: Props) {
  const className = `flex h-16 items-center gap-3 rounded-xl border border-white/15 bg-[linear-gradient(180deg,#2a2a2a_0%,#0b0b0b_100%)] pl-4 pr-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[translate,border-color] duration-300 ease-out hover:-translate-y-1${href ? " hover:border-white/30" : ""}`;

  const content = (
    <>
      <span aria-hidden="true" className="shrink-0">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="font-display text-lg font-bold italic leading-none text-white">{title}</span>
        <span className="mt-1 font-display text-sm italic leading-tight text-white/80">{label}</span>
      </span>
    </>
  );

  if (!href) return <div className={className}>{content}</div>;

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      {content}
    </a>
  );
}
