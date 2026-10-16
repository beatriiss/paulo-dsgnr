// src/components/CountUp.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  value: string;
  duration?: number; // default 1600ms
  className?: string;
};

type ParsedValue = {
  target: number;
  prefix: string;
  suffix: string;
};

// "14.000+" -> { prefix: "", target: 14000, suffix: "+" }
function parseValue(value: string): ParsedValue | null {
  const match = value.match(/[\d.]+/);
  if (!match) return null;
  const numericString = match[0];
  const target = parseInt(numericString.replace(/\./g, ""), 10);
  if (isNaN(target)) return null;
  const prefix = value.slice(0, match.index);
  const suffix = value.slice((match.index ?? 0) + numericString.length);
  return { target, prefix, suffix };
}

export default function CountUp({ value, duration = 1600, className }: Props) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const parsed = useMemo(() => parseValue(value), [value]);

  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (!parsed) return value;
    return `${parsed.prefix}0${parsed.suffix}`;
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !parsed) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Sem animação: mostra o valor final no próximo frame
    if (prefersReducedMotion) {
      const id = requestAnimationFrame(() => setDisplayValue(value));
      return () => cancelAnimationFrame(id);
    }

    const { target, prefix, suffix } = parsed;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(target * eased);
      setDisplayValue(`${prefix}${current.toLocaleString("pt-BR")}${suffix}`);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    // Só começa a contar quando o número aparece na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            rafRef.current = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      observer.disconnect();
    };
  }, [parsed, duration, value]);

  const classes = [className, "tabular-nums"].filter(Boolean).join(" ");

  return (
    <span ref={elementRef} className={classes} aria-label={value}>
      {displayValue}
    </span>
  );
}
