// src/components/Reveal.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  delay?: number; // ms, default 0
  variant?: "up" | "fade" | "left" | "right" | "scale" | "grow-y"; // default "up"
  as?: "div" | "section" | "li" | "span"; // default "div"
  once?: boolean; // default true
  style?: React.CSSProperties;
};

// Anima o conteúdo quando ele entra na tela. O visual (fade/slide) fica
// todo no CSS global (.reveal + data-variant), aqui só marcamos data-visible.
export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as = "div",
  once = true,
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const Tag = as as React.ElementType;
  const mergedStyle = {
    ...style,
    "--reveal-delay": `${delay}ms`,
  } as React.CSSProperties;

  const classes = ["reveal", className].filter(Boolean).join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      data-variant={variant}
      data-visible={visible ? "true" : "false"}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}
