// src/app/page.tsx
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portifolio";
import Sobre from "@/components/AboutMe";
import Solucoes from "../components/Solutions";
import ComoFunciona from "@/components/HowItWorks";
import Experiencia from "@/components/Experience";
import Contato from "@/components/Contact";

export default function Home() {
  return (
    <main>
      {/* Header + Hero compartilham o mesmo fundo decorativo (o "H" em
          relevo), que agora começa já atrás do Header em vez de só
          dentro do Hero. */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/background-hero.webp"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-80"
          />
          {/* Fade pra não cortar seco antes da seção Stats */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
        </div>

        <Header />
        <Hero />
      </div>

      {/* A partir daqui (Stats) até o fim da página, fundo único que rola
          junto com o conteúdo (não é fixo), cobrindo toda a altura desse
          bloco de seções de uma vez só, sem repetir. */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[url('/images/background-full-site.webp')] bg-cover bg-center bg-no-repeat"
        />

        <Stats />
        <Sobre />
        <Solucoes />
        <Portfolio />
        <ComoFunciona />
        <Experiencia />
        <Contato />
      </div>
    </main>
  );
}