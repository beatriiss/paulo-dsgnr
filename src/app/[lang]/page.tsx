// src/app/[lang]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portifolio";
import Sobre from "@/components/AboutMe";
import Solucoes from "@/components/Solutions";
import ComoFunciona from "@/components/HowItWorks";
import Experiencia from "@/components/Experience";
import Contato from "@/components/Contact";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { whatsappLink, emailLink } from "@/lib/contato";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  // Mensagens pré-preenchidas no idioma da página
  const whatsappHref = whatsappLink(dict.messages.whatsapp);
  const emailHref = emailLink(dict.messages.emailSubject, dict.messages.emailBody);

  return (
    <main>
      {/* Header + Hero compartilham o mesmo fundo decorativo (o "H" em
          relevo), que agora começa já atrás do Header em vez de só
          dentro do Hero. */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/fundos/hero.webp"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          {/* Fade pra não cortar seco antes da seção Stats */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
        </div>

        <Header dict={dict.header} lang={lang} />
        <Hero dict={dict.hero} lang={lang} whatsappHref={whatsappHref} emailHref={emailHref} />
      </div>

      {/* A partir daqui (Stats) até o fim da página, fundo único que rola
          junto com o conteúdo (não é fixo), cobrindo toda a altura desse
          bloco de seções de uma vez só, sem repetir. */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[url('/images/fundos/site.svg')] bg-cover bg-center bg-no-repeat bg-bg"
        />

        <Stats dict={dict.stats} lang={lang} />
        <Sobre dict={dict.about} />
        <Solucoes dict={dict.solutions} />
        <Portfolio dict={dict.portfolio} />
        <ComoFunciona dict={dict.process} />
        <Experiencia dict={dict.experience} />
        <Contato dict={dict.contact} whatsappHref={whatsappHref} />
      </div>
    </main>
  );
}
