// src/lib/contato.ts
// Fonte única do link do WhatsApp usado em todo o site.
// Ajuste aqui o número (formato: código do país + DDD + número, só dígitos)
export const WHATSAPP_NUMERO = "5575992197861";
export const WHATSAPP_MENSAGEM = "Olá Paulo, vi seu site e quero conversar sobre um projeto!";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  WHATSAPP_MENSAGEM
)}`;

// Contato por e-mail (abre o app de e-mail já com assunto e mensagem)
export const EMAIL = "dsgnr.paulo@gmail.com";
export const EMAIL_ASSUNTO = "Projeto pelo site";
export const EMAIL_MENSAGEM = "Olá Paulo, vi seu site e quero conversar sobre um projeto!";
export const EMAIL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
  EMAIL_ASSUNTO
)}&body=${encodeURIComponent(EMAIL_MENSAGEM)}`;
