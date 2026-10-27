// src/components/ui/RichText.tsx
// Renderiza textos do dicionário: trechos entre **asteriscos** saem em negrito.
import { Fragment } from "react";

export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="font-bold text-white not-italic">
            {part.slice(2, -2)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
