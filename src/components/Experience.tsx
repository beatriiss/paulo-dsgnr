// src/components/Experiencia.tsx
import Image from "next/image";
import { Fragment } from "react";

const experiencias = [
  {
    empresa: "DULUB - Tecnologia Fluida",
    cargo: "Analista de Marketing",
    logo: "/images/experiencia/logo-dulub.svg",
    ano: "/images/experiencia/ano-dulub.svg",
    descricao:
      "Desenvolvimento de identidade visual, campanhas e materiais gráficos on-line e off-line, incluindo rótulos, embalagens, catálogos, peças para redes sociais, e-commerce e comunicação visual. Atuação na criação e edição de vídeos, desenvolvimento de layouts para site e materiais digitais, padronização visual de fachadas, frota, tanques e materiais corporativos. Responsável também pelo tratamento de imagens, fechamento de arquivos, revisão técnica, controle de qualidade gráfica e suporte às demandas de Marketing e Comercial.",
  },
  {
    empresa: "Lucidata - Informática & Escritório",
    cargo: "Designer Gráfico e Social Media",
    logo: "/images/experiencia/logo-lucidata.svg",
    ano: "/images/experiencia/ano-lucidata.svg",
    descricao:
      "Criação e publicação de conteúdos estratégicos para redes sociais, incluindo peças gráficas, vídeos, campanhas promocionais, ofertas e conteúdos informativos. Gerenciamento de perfis em plataformas como Instagram e Facebook, com acompanhamento de publicações e interação com o público. Monitoramento de métricas de desempenho, como alcance, engajamento e conversões, utilizando os resultados para otimização das estratégias de conteúdo e comunicação digital.",
  },
  {
    empresa: "Maskate - Distribuidora de Produtos & Papelaria",
    cargo: "Analista de Marketing",
    logo: "/images/experiencia/logo-maskate.svg",
    ano: "/images/experiencia/ano-maskate.svg",
    descricao:
      "Desenvolvimento de campanhas publicitárias e promocionais em conjunto com a equipe de Marketing, contribuindo para definição de objetivos, público-alvo e estratégias de comunicação. Planejamento e gestão de mídias sociais, criação de conteúdo e fortalecimento da presença digital da marca. Atuação integrada com as equipes de vendas, design e produtos, garantindo consistência visual, alinhamento da comunicação e execução eficiente das estratégias de marketing.",
  },
  {
    empresa: "Feira Comunicação - Rótulos e Etiquetas",
    cargo: "Arte Finalista",
    logo: "/images/experiencia/logo-feira.svg",
    ano: "/images/experiencia/ano-feira.svg",
    descricao:
      "Preparação e fechamento de arquivos para impressão, com revisão de resolução, sangria, formatos e especificações técnicas. Gerenciamento e padronização de cores conforme os processos de produção gráfica. Acompanhamento junto à equipe de produção, impressores e operadores, garantindo fidelidade ao projeto, qualidade final e correta execução dos materiais impressos.",
  },
  {
    empresa: "Motorola - Lenovo company",
    cargo: "Analista de Marketing",
    logo: "/images/experiencia/logo-motorola.svg",
    ano: "/images/experiencia/ano-motorola.svg",
    descricao:
      "Apresentação e demonstração de smartphones, tablets e acessórios em lojas físicas e ações promocionais, destacando características, benefícios e funcionalidades dos produtos. Atendimento e orientação aos clientes durante o processo de compra, além do acompanhamento e organização do estoque para garantir a disponibilidade dos produtos e suporte às vendas.",
  },
  {
    empresa: "BoyArt - Comunicação Visual",
    cargo: "Designer Gráfico",
    logo: "/images/experiencia/logo-boyart.svg",
    ano: "/images/experiencia/ano-boyart.svg",
    descricao:
      "Criação de arte final de materiais impressos, produzindo layouts para panfletos, cartões, pôsteres e etc. Além de edição e preparação de arquivos verificando e ajustando para impressão. Atendimento ao cliente, entendendo suas necessidades e orientando. Gerenciamento de prazos assegurando que os projetos sejam concluídos dentro do prazo acordado. Manutenção de equipamentos e software cuidando de equipamentos de impressão e softwares de design, quando necessário.",
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="px-8 py-16 max-w-6xl mx-auto overflow-hidden">
      <Image
        src="/images/titulo-experiencia.webp"
        alt="Experiência Profissional"
        width={420}
        height={38}
        className="h-8 w-auto mb-10"
      />

      {/* Grid único: coluna 1 = logos (140px), coluna 2 = conteúdo.
          Assim a coluna das logos fica de verdade contínua ao longo de toda a timeline,
          e dá pra centralizar a linha nela com precisão. */}
      <div className="relative grid grid-cols-[140px_1fr] gap-x-6 gap-y-3">
        {/* Linha vertical, centralizada na coluna das logos (140px / 2 = 70px).
            z-[5] para ficar acima dos dividers horizontais, mas abaixo das logos. */}
        <div className="absolute left-[130px] top-0 bottom-0 w-px bg-[#00E9E5] z-[5]" />
                        <Image
                  src={'/logo2-paulodsgnr.svg'}
                  alt={'Logo'}
                  width={120}
                  height={60}
                  className="max-w-[200px] max-h-30 w-auto h-auto object-contain mr-8"
                />

        {/* Divider acima do primeiro item (logo -> ano) */}
        <div className="col-span-2 h-px bg-white/10 z-0" />

        {experiencias.map((exp) => (
          <Fragment key={exp.empresa}>
            {/* Logo da empresa, centralizada sobre a linha */}
            <div className="relative z-10 flex justify-center items-start pt-1">
              <div className="px-1">
                <Image
                  src={exp.logo}
                  alt={exp.empresa}
                  width={120}
                  height={60}
                  className="max-w-[200px] max-h-30 w-auto h-auto object-contain mr-8"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight">
                    {exp.empresa}
                  </h3>
                  <p className="text-xs text-white/50">{exp.cargo}</p>
                </div>
                <Image
                  src={exp.ano}
                  alt=""
                  width={130}
                  height={34}
                  className="h-7 w-auto shrink-0"
                />
              </div>
              <p className="text-sm italic text-white/60 leading-relaxed">
                {exp.descricao}
              </p>
            </div>

            {/* Divider abaixo do item (serve também como "acima" do próximo item) */}
            <div className="col-span-2 h-px bg-white/10 z-0" />
          </Fragment>
        ))}
      </div>
    </section>
  );
}