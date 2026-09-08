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
      <Stats />
      <Sobre />
      <Solucoes />
      <Portfolio/>
      <ComoFunciona/>
      <Experiencia/>
      <Contato/>
    </main>
  );
}