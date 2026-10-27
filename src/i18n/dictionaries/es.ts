// src/i18n/dictionaries/es.ts
import type { Dictionary } from "./pt";

const es: Dictionary = {
  meta: {
    title: "Paulo Vinícius | Diseñador Gráfico",
    description:
      "Diseñador gráfico con más de 15 años de experiencia en identidad visual, social media, sitios web y diseño gráfico.",
  },

  header: {
    nav: {
      about: "SOBRE MÍ",
      solutions: "SOLUCIONES",
      portfolio: "PORTAFOLIO",
      process: "CÓMO FUNCIONA",
      experience: "EXPERIENCIA",
    },
    budget: "PRESUPUESTO",
    budgetAria: "Pedir presupuesto por WhatsApp",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    logoAlt: "Paulo Dsgnr",
  },

  hero: {
    greeting: "Hola, soy",
    languageLabel: "IDIOMA",
    services: [
      ["IDENTIDAD", " VISUAL"],
      ["SOCIAL", " MEDIA"],
      ["SITIOS", " WEB"],
      ["DISEÑO", " GRÁFICO"],
    ],
    description:
      "Soy diseñador gráfico con más de 15 años de experiencia en el desarrollo de marcas, materiales gráficos, contenido para redes sociales y soluciones digitales para empresas. Mi propósito es crear proyectos que fortalezcan la imagen del negocio y ayuden a las empresas a posicionarse de manera profesional en el mercado.",
    location: { title: "Brasil", label: "Ubicación" },
    whatsappLabel: "WhatsApp",
    emailAria: "Enviar un correo a dsgnr.paulo@gmail.com",
    whatsappAria: "Conversar por WhatsApp",
    downloadCv: "DESCARGAR CV",
    downloadCvAria: "Descargar CV (PDF, en portugués)",
    contact: "CONTÁCTAME",
    contactAria: "Contactar por WhatsApp",
    photoAlt: "Paulo Vinícius",
    mockupAlt: "Vista previa del sitio en tablet y móvil",
  },

  stats: [
    { value: "15+", label: "AÑOS DE EXPERIENCIA" },
    { value: "820+", label: "PROYECTOS ENTREGADOS" },
    { value: "14.000+", label: "TROFEOS EN CLASH ROYALE" },
    { value: "100%", label: "TRABAJO REMOTO" },
  ],

  about: {
    title: "SOBRE MÍ",
    photoAlt: "Paulo Vinícius",
    paragraphs: [
      "Soy **Paulo Vinícius**, diseñador gráfico con más de **15 años de experiencia** en el mercado. A lo largo de mi carrera participé en el desarrollo de identidades visuales, campañas publicitarias, materiales gráficos, contenido para redes sociales y proyectos digitales para empresas de diversos sectores.",
      "Mi pasión es ayudar a las empresas a construir una comunicación visual sólida, profesional y estratégica. Más que desarrollar piezas gráficas, busco crear marcas que transmitan confianza, personalidad y valor a sus clientes.",
      "También soy cristiano, padre, hijo, hermano y amigo. Soy músico, cinéfilo, amante de las artes, la fotografía y un buen café. Apasionado por la astronomía y jugador de Clash Royale.",
    ],
  },

  solutions: {
    title: "SOLUCIONES",
    items: [
      {
        title: "IDENTIDAD\nVISUAL",
        items: [
          "Creación de logotipo",
          "Manual de marca",
          "Paleta de colores",
          "Tipografía",
          "Papelería corporativa",
          "Tarjeta de presentación",
          "Hoja membretada",
          "Firma de correo",
          "Presentación institucional",
        ],
      },
      {
        title: "SITIOS WEB Y\nLANDING PAGES",
        items: [
          "Diseño de sitios web",
          "Sitios institucionales",
          "Landing pages",
          "Interfaces (UI)",
          "Banners para sitios",
          "Íconos personalizados",
        ],
      },
      {
        title: "SOCIAL MEDIA",
        items: [
          "Posts para Instagram",
          "Carruseles",
          "Stories",
          "Portadas para Facebook",
          "Banner para LinkedIn",
          "Reels",
          "Creatividades para anuncios",
        ],
      },
      {
        title: "IMPRESIÓN\nGRÁFICA",
        items: [
          "Flyers",
          "Volantes",
          "Folletos",
          "Catálogos",
          "Revistas",
          "Menús",
          "Invitaciones",
          "Credenciales",
        ],
      },
      {
        title: "COMUNICACIÓN\nVISUAL",
        items: [
          "Fachadas",
          "Tótems",
          "Letreros",
          "Banners",
          "Adhesivos",
          "Ploteo",
          "Rotulación de vehículos",
          "Wind Banner",
        ],
      },
      {
        title: "ARTE FINAL Y\nVECTORIZACIÓN",
        items: ["Creación de arte final", "Vectorización de logotipo", "Etiquetas y empaques"],
      },
    ],
  },

  portfolio: {
    title: "PORTAFOLIO",
    categories: {
      identidadeVisual: "Identidad Visual",
      socialMedia: "Social Media",
      sites: "Sitios Web",
      designGrafico: "Diseño Gráfico",
    },
    viewProject: "VER PROYECTO",
    comingSoon: "Próximamente",
    projects: {
      "kito-consorcios": { nome: "Kito Consórcios", descricao: "" },
      "jefferson-xavier": { nome: "Jefferson Xavier", descricao: "" },
      "dulub-social-media": {
        nome: "DULUB - Tecnologia Fluida",
        descricao:
          "El desafío era salir del lugar común técnico y construir una comunicación con más confianza. La dirección visual fue pensada para traducir la tecnología fluida de la marca en un lenguaje más accesible, directo y profesional, acercando a DULUB al mecánico, al comerciante y al consumidor final. El resultado es un feed más consistente, estratégico y con más autoridad en el sector.",
      },
      "vanessa-paula-social-media": {
        nome: "Vanessa Paula - Fisioterapia Estética",
        descricao:
          "El desafío era traducir la experiencia en fisioterapia estética a una comunicación más cercana y accesible, sin perder el rigor profesional. La identidad visual en tonos rosa fue desarrollada para acoger y educar, presentando procedimientos como skin booster y suplementación con ligereza y confianza. El resultado es un feed que refuerza el autocuidado y posiciona a Vanessa Paula como referente en su sector.",
      },
    },
    modal: {
      close: "Cerrar",
      prevImages: "Ver imágenes anteriores",
      nextImages: "Ver más imágenes",
      prevImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      goToImage: "Ir a la imagen",
      image: "imagen",
      page: "página",
    },
  },

  process: {
    title: "CÓMO FUNCIONA",
    stepLabel: "Etapa",
    steps: [
      { titulo: "Briefing", descricao: "Conozco tu negocio para entender tus objetivos." },
      { titulo: "Investigación", descricao: "Busco referencias y oportunidades para diferenciar tu marca." },
      { titulo: "Desarrollo", descricao: "Creo soluciones visuales que unen creatividad y funcionalidad." },
      { titulo: "Estrategia", descricao: "Planificación creativa alineada con los objetivos de tu negocio." },
      { titulo: "Aprobación", descricao: "Refino cada detalle hasta alcanzar el resultado final." },
      { titulo: "Entrega", descricao: "Recibirás todos los archivos organizados y listos para usar." },
    ],
  },

  experience: {
    title: "EXPERIENCIA PROFESIONAL",
    items: [
      {
        cargo: "Analista de Marketing",
        descricao:
          "Desarrollo de identidad visual, campañas y materiales gráficos online y offline, incluyendo etiquetas, empaques, catálogos, piezas para redes sociales, e-commerce y comunicación visual. Creación y edición de videos, diseño de layouts para sitios web y materiales digitales, estandarización visual de fachadas, flota, tanques y materiales corporativos. Responsable también del tratamiento de imágenes, cierre de archivos, revisión técnica, control de calidad gráfica y soporte a las demandas de Marketing y Comercial.",
      },
      {
        cargo: "Diseñador Gráfico y Social Media",
        descricao:
          "Creación y publicación de contenidos estratégicos para redes sociales, incluyendo piezas gráficas, videos, campañas promocionales, ofertas y contenidos informativos. Gestión de perfiles en plataformas como Instagram y Facebook, con seguimiento de publicaciones e interacción con el público. Monitoreo de métricas de rendimiento, como alcance, engagement y conversiones, utilizando los resultados para optimizar las estrategias de contenido y comunicación digital.",
      },
      {
        cargo: "Analista de Marketing",
        descricao:
          "Desarrollo de campañas publicitarias y promocionales junto al equipo de Marketing, contribuyendo a la definición de objetivos, público objetivo y estrategias de comunicación. Planificación y gestión de redes sociales, creación de contenido y fortalecimiento de la presencia digital de la marca. Trabajo integrado con los equipos de ventas, diseño y productos, garantizando consistencia visual, alineación de la comunicación y ejecución eficiente de las estrategias de marketing.",
      },
      {
        cargo: "Arte Finalista",
        descricao:
          "Preparación y cierre de archivos para impresión, con revisión de resolución, sangrado, formatos y especificaciones técnicas. Gestión y estandarización de colores según los procesos de producción gráfica. Acompañamiento junto al equipo de producción, impresores y operadores, garantizando fidelidad al proyecto, calidad final y correcta ejecución de los materiales impresos.",
      },
      {
        cargo: "Analista de Marketing",
        descricao:
          "Presentación y demostración de smartphones, tablets y accesorios en tiendas físicas y acciones promocionales, destacando características, beneficios y funcionalidades de los productos. Atención y orientación a los clientes durante el proceso de compra, además del seguimiento y organización del inventario para garantizar la disponibilidad de los productos y apoyar las ventas.",
      },
      {
        cargo: "Diseñador Gráfico",
        descricao:
          "Creación de arte final de materiales impresos, diseñando layouts para volantes, tarjetas, pósteres y más. Edición y preparación de archivos, verificándolos y ajustándolos para impresión. Atención al cliente, entendiendo sus necesidades y orientándolo. Gestión de plazos para asegurar que los proyectos se completen en el tiempo acordado. Mantenimiento de equipos de impresión y software de diseño, cuando fuera necesario.",
      },
    ],
  },

  contact: {
    kicker: "HABLEMOS",
    title: "¿TIENES UN PROYECTO EN MENTE?",
    subtitle: "Escríbeme. Sin formularios. Sin rodeos.",
    whatsappButton: "ESCRÍBEME POR WHATSAPP",
    whatsappAria: "Escribirme por WhatsApp",
    note: "Respondo por WhatsApp. Es más rápido así.",
    rights: "Todos los derechos reservados.",
    logoAlt: "Logo de Paulo Dsgnr",
  },

  messages: {
    whatsapp: "¡Hola Paulo! Vi tu sitio y quiero hablar sobre un proyecto.",
    budget: "¡Hola Paulo! Vi tu sitio y me gustaría pedir un presupuesto.",
    emailSubject: "Proyecto desde tu sitio web",
    emailBody: "¡Hola Paulo! Vi tu sitio y quiero hablar sobre un proyecto.",
  },
};

export default es;
