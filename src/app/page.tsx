// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portifolio";
import Sobre from "@/components/AboutMe";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Sobre />
    </main>
  );
}