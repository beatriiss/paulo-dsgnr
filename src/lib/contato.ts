// src/lib/contato.ts
// Fonte única dos dados de contato do site.
// As mensagens pré-preenchidas vêm do dicionário de cada idioma (messages).

// Ajuste aqui o número (formato: código do país + DDD + número, só dígitos)
export const WHATSAPP_NUMERO = "5575992197861";
export const EMAIL = "dsgnr.paulo@gmail.com";

export function whatsappLink(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export function emailLink(assunto: string, corpo: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}
