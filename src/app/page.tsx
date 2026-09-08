// src/app/page.tsx
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
      <Header />
      <Hero />

      {/* A partir daqui (Stats) até o fim da página, fundo único em modo
          "fixed" (parallax): a imagem fica grudada na tela enquanto o
          conteúdo rola por cima. O overflow-hidden no wrapper garante que
          ela não vaze pra trás do Header/Hero. */}
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