// src/i18n/dictionaries/pt.ts
// Dicionário base (português). Os outros idiomas seguem exatamente esta
// estrutura — o tipo Dictionary é derivado daqui.
// Em textos com **asteriscos duplos**, o trecho entre eles sai em negrito.

const pt = {
  meta: {
    title: "Paulo Vinícius | Designer Gráfico",
    description:
      "Designer gráfico com mais de 15 anos de experiência em identidade visual, social media, websites e design gráfico.",
  },

  header: {
    nav: {
      about: "SOBRE MIM",
      solutions: "SOLUÇÕES",
      portfolio: "PORTFÓLIO",
      process: "COMO FUNCIONA",
      experience: "EXPERIÊNCIA",
    },
    budget: "ORÇAMENTO",
    budgetAria: "Pedir orçamento pelo WhatsApp",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    logoAlt: "Paulo Dsgnr",
  },

  hero: {
    greeting: "Olá, eu sou",
    languageLabel: "IDIOMA",
    // [parte em negrito, resto] — ex: IDENTIDADE (negrito) + " VISUAL"
    services: [
      ["IDENTIDADE", " VISUAL"],
      ["SOCIAL", " MEDIA"],
      ["WEB", "SITES"],
      ["DESIGN", " GRÁFICO"],
    ],
    description:
      "Sou designer gráfico com mais de 15 anos de experiência no desenvolvimento de marcas, materiais gráficos, conteúdo para redes sociais e soluções digitais para empresas. Meu propósito é criar projetos que fortalecem a imagem do negócio e ajudam empresas a se posicionarem de forma profissional no mercado.",
    location: { title: "Brasil", label: "Local" },
    whatsappLabel: "WhatsApp",
    emailAria: "Enviar e-mail para dsgnr.paulo@gmail.com",
    whatsappAria: "Conversar no WhatsApp",
    downloadCv: "BAIXAR CURRÍCULO",
    downloadCvAria: "Baixar currículo (PDF)",
    contact: "ENTRAR EM CONTATO",
    contactAria: "Entrar em contato pelo WhatsApp",
    photoAlt: "Paulo Vinícius",
    mockupAlt: "Preview do site em tablet e celular",
  },

  stats: [
    { value: "15+", label: "ANOS DE EXPERIÊNCIA" },
    { value: "820+", label: "PROJETOS ENTREGUES" },
    { value: "14.000+", label: "TROFÉUS NO CLASH ROYALE" },
    { value: "100%", label: "TRABALHO REMOTO" },
  ],

  about: {
    title: "SOBRE MIM",
    photoAlt: "Paulo Vinícius",
    paragraphs: [
      "Sou **Paulo Vinícius**, designer gráfico com mais de **15 anos de experiência** no mercado. Ao longo da minha carreira participei do desenvolvimento de identidades visuais, campanhas publicitárias, materiais gráficos, conteúdo para redes sociais e projetos digitais para empresas de diversos segmentos.",
      "Minha paixão é ajudar empresas a construírem uma comunicação visual sólida, profissional e estratégica. Mais do que desenvolver peças gráficas, busco criar marcas que transmitam confiança, personalidade e valor para seus clientes.",
      "Também sou cristão, pai, filho, irmão e amigo. Sou músico, cinéfilo, amante das artes, fotografia e de um bom café. Apaixonado por astronomia e Clash Royale player.",
    ],
  },

  // Mesma ordem dos ícones em Solutions.tsx
  solutions: {
    title: "SOLUÇÕES",
    items: [
      {
        title: "IDENTIDADE\nVISUAL",
        items: [
          "Criação de logotipo",
          "Manual da marca",
          "Paleta de cores",
          "Tipografia",
          "Papelaria corporativa",
          "Cartão de visita",
          "Timbrado",
          "Assinatura de e-mail",
          "Apresentação institucional",
        ],
      },
      {
        title: "WEBSITES E\nLANDING PAGES",
        items: [
          "Layout de sites",
          "Sites institucionais",
          "Landing pages",
          "Interfaces (UI)",
          "Banners para sites",
          "Ícones personalizados",
        ],
      },
      {
        title: "SOCIAL MEDIA",
        items: [
          "Posts para Instagram",
          "Carrosséis",
          "Stories",
          "Capas para Facebook",
          "Banner para LinkedIn",
          "Reels",
          "Criativos para anúncios",
        ],
      },
      {
        title: "IMPRESSÃO\nGRÁFICA",
        items: [
          "Flyers",
          "Panfletos",
          "Folders",
          "Catálogos",
          "Revistas",
          "Cardápios",
          "Convites",
          "Crachás",
        ],
      },
      {
        title: "COMUNICAÇÃO\nVISUAL",
        items: [
          "Fachadas",
          "Totens",
          "Placas",
          "Banners",
          "Adesivos",
          "Plotagem",
          "Envelopamento de veículos",
          "Wind Banner",
        ],
      },
      {
        title: "ARTE FINAL E\nVETORIZAÇÃO",
        items: ["Criação de arte final", "Vetorização de logotipo", "Rótulos e Embalagens"],
      },
    ],
  },

  portfolio: {
    title: "PORTFÓLIO",
    // Rótulos das categorias (as chaves internas continuam fixas no código)
    categories: {
      identidadeVisual: "Identidade Visual",
      socialMedia: "Social Media",
      sites: "Sites",
      designGrafico: "Design Gráfico",
    },
    viewProject: "VER PROJETO",
    comingSoon: "Em breve",
    // Textos por projeto, indexados pelo slug
    projects: {
      "kito-consorcios": { nome: "Kito Consórcios", descricao: "" },
      "jefferson-xavier": { nome: "Jefferson Xavier", descricao: "" },
      "dulub-social-media": {
        nome: "DULUB - Tecnologia Fluida",
        descricao:
          "O desafio era sair do lugar comum técnico e construir uma comunicação com mais confiança. A direção visual foi pensada para traduzir a tecnologia fluida da marca em uma linguagem mais acessível, direta e profissional, aproximando a DULUB do mecânico, do lojista e do consumidor final. O resultado é um feed mais consistente, estratégico e com mais autoridade no segmento.",
      },
      "vanessa-paula-social-media": {
        nome: "Vanessa Paula - Fisioterapia Estética",
        descricao:
          "O desafio era traduzir a expertise em fisioterapia estética para uma comunicação mais próxima e acessível, sem perder o rigor profissional. A identidade visual em tons de rosa foi desenvolvida para acolher e educar, apresentando procedimentos como skin booster e suplementação com leveza e confiança. O resultado é um feed que reforça o autocuidado e posiciona a Vanessa Paula como referência no segmento.",
      },
    },
    modal: {
      close: "Fechar",
      prevImages: "Ver imagens anteriores",
      nextImages: "Ver mais imagens",
      prevImage: "Imagem anterior",
      nextImage: "Próxima imagem",
      goToImage: "Ir para imagem", // + número
      image: "imagem", // "<projeto> - imagem 3"
      page: "página", // "<projeto> - página 3"
    },
  },

  process: {
    title: "COMO FUNCIONA",
    stepLabel: "Etapa",
    steps: [
      { titulo: "Briefing", descricao: "Conheço seu negócio para entender seus objetivos." },
      { titulo: "Pesquisa", descricao: "Busco referências e oportunidades para diferenciar a sua marca." },
      { titulo: "Desenvolvimento", descricao: "Crio soluções visuais que unem criatividade e funcionalidade." },
      { titulo: "Estratégia", descricao: "Planejamento criativo alinhado aos objetivos do seu negócio." },
      { titulo: "Aprovação", descricao: "Refino cada detalhe até alcançar o resultado final." },
      { titulo: "Entrega", descricao: "Você receberá todos os arquivos organizados e prontos para utilização." },
    ],
  },

  // Mesma ordem das logos em Experience.tsx; nomes das empresas ficam fixos lá
  experience: {
    title: "EXPERIÊNCIA PROFISSIONAL",
    items: [
      {
        cargo: "Analista de Marketing",
        descricao:
          "Desenvolvimento de identidade visual, campanhas e materiais gráficos on-line e off-line, incluindo rótulos, embalagens, catálogos, peças para redes sociais, e-commerce e comunicação visual. Atuação na criação e edição de vídeos, desenvolvimento de layouts para site e materiais digitais, padronização visual de fachadas, frota, tanques e materiais corporativos. Responsável também pelo tratamento de imagens, fechamento de arquivos, revisão técnica, controle de qualidade gráfica e suporte às demandas de Marketing e Comercial.",
      },
      {
        cargo: "Designer Gráfico e Social Media",
        descricao:
          "Criação e publicação de conteúdos estratégicos para redes sociais, incluindo peças gráficas, vídeos, campanhas promocionais, ofertas e conteúdos informativos. Gerenciamento de perfis em plataformas como Instagram e Facebook, com acompanhamento de publicações e interação com o público. Monitoramento de métricas de desempenho, como alcance, engajamento e conversões, utilizando os resultados para otimização das estratégias de conteúdo e comunicação digital.",
      },
      {
        cargo: "Analista de Marketing",
        descricao:
          "Desenvolvimento de campanhas publicitárias e promocionais em conjunto com a equipe de Marketing, contribuindo para definição de objetivos, público-alvo e estratégias de comunicação. Planejamento e gestão de mídias sociais, criação de conteúdo e fortalecimento da presença digital da marca. Atuação integrada com as equipes de vendas, design e produtos, garantindo consistência visual, alinhamento da comunicação e execução eficiente das estratégias de marketing.",
      },
      {
        cargo: "Arte Finalista",
        descricao:
          "Preparação e fechamento de arquivos para impressão, com revisão de resolução, sangria, formatos e especificações técnicas. Gerenciamento e padronização de cores conforme os processos de produção gráfica. Acompanhamento junto à equipe de produção, impressores e operadores, garantindo fidelidade ao projeto, qualidade final e correta execução dos materiais impressos.",
      },
      {
        cargo: "Analista de Marketing",
        descricao:
          "Apresentação e demonstração de smartphones, tablets e acessórios em lojas físicas e ações promocionais, destacando características, benefícios e funcionalidades dos produtos. Atendimento e orientação aos clientes durante o processo de compra, além do acompanhamento e organização do estoque para garantir a disponibilidade dos produtos e suporte às vendas.",
      },
      {
        cargo: "Designer Gráfico",
        descricao:
          "Criação de arte final de materiais impressos, produzindo layouts para panfletos, cartões, pôsteres e etc. Além de edição e preparação de arquivos verificando e ajustando para impressão. Atendimento ao cliente, entendendo suas necessidades e orientando. Gerenciamento de prazos assegurando que os projetos sejam concluídos dentro do prazo acordado. Manutenção de equipamentos e software cuidando de equipamentos de impressão e softwares de design, quando necessário.",
      },
    ],
  },

  contact: {
    kicker: "BORA CONVERSAR",
    title: "TEM UM PROJETO EM MENTE?",
    subtitle: "Me chama. Sem formulário. Sem enrolação.",
    whatsappButton: "CHAMA NO WHATSAPP",
    whatsappAria: "Chamar no WhatsApp",
    note: "Respondo pelo whatsapp. É mais rápido assim.",
    rights: "Todos os direitos reservados.",
    logoAlt: "Logo Paulo Dsgnr",
  },

  // Mensagens que já vão preenchidas no WhatsApp e no e-mail
  messages: {
    whatsapp: "Olá Paulo, vi seu site e quero conversar sobre um projeto!",
    budget: "Olá Paulo, vi seu site e gostaria de pedir um orçamento!",
    emailSubject: "Projeto pelo site",
    emailBody: "Olá Paulo, vi seu site e quero conversar sobre um projeto!",
  },
};

export type Dictionary = typeof pt;
export default pt;
