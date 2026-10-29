// src/i18n/dictionaries/en.ts
import type { Dictionary } from "./pt";

const en: Dictionary = {
  meta: {
    title: "Paulo Vinícius | Graphic Designer",
    description:
      "Graphic designer with over 15 years of experience in visual identity, social media, websites, and graphic design.",
  },

  header: {
    nav: {
      about: "ABOUT ME",
      solutions: "SOLUTIONS",
      portfolio: "PORTFOLIO",
      process: "HOW IT WORKS",
      experience: "EXPERIENCE",
    },
    budget: "GET A QUOTE",
    budgetAria: "Request a quote on WhatsApp",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    logoAlt: "Paulo Dsgnr",
  },

  hero: {
    greeting: "Hello, I'm",
    languageLabel: "LANGUAGE",
    services: [
      ["BRAND", " IDENTITY"],
      ["SOCIAL", " MEDIA"],
      ["WEB", "SITES"],
      ["GRAPHIC", " DESIGN"],
    ],
    description:
      "I'm a graphic designer with over 15 years of experience developing brands, graphic materials, social media content, and digital solutions for businesses. My purpose is to create projects that strengthen a company's image and help it position itself professionally in the market.",
    location: { title: "Brazil", label: "Location" },
    whatsappLabel: "WhatsApp",
    emailAria: "Send an email to dsgnr.paulo@gmail.com",
    whatsappAria: "Chat on WhatsApp",
    downloadCv: "DOWNLOAD RÉSUMÉ",
    downloadCvAria: "Download résumé (PDF, in Portuguese)",
    contact: "GET IN TOUCH",
    contactAria: "Get in touch on WhatsApp",
    photoAlt: "Paulo Vinícius",
    mockupAlt: "Website preview on tablet and phone",
  },

  stats: [
    { value: "15+", label: "YEARS OF EXPERIENCE" },
    { value: "820+", label: "PROJECTS DELIVERED" },
    { value: "14,000+", label: "CLASH ROYALE TROPHIES" },
    { value: "100%", label: "REMOTE WORK" },
  ],

  about: {
    title: "ABOUT ME",
    photoAlt: "Paulo Vinícius",
    paragraphs: [
      "I'm **Paulo Vinícius**, a graphic designer with over **15 years of experience** in the industry. Throughout my career, I've worked on visual identities, advertising campaigns, graphic materials, social media content, and digital projects for companies across many industries.",
      "My passion is helping companies build solid, professional, and strategic visual communication. More than producing graphic pieces, I aim to create brands that convey trust, personality, and value to their customers.",
      "I'm also a Christian, a father, son, brother, and friend. I'm a musician, a film buff, and a lover of art, photography, and good coffee. Passionate about astronomy and a Clash Royale player.",
    ],
  },

  solutions: {
    title: "SOLUTIONS",
    items: [
      {
        title: "VISUAL\nIDENTITY",
        items: [
          "Logo design",
          "Brand guidelines",
          "Color palette",
          "Typography",
          "Corporate stationery",
          "Business cards",
          "Letterhead",
          "Email signature",
          "Company presentation",
        ],
      },
      {
        title: "WEBSITES AND\nLANDING PAGES",
        items: [
          "Website layouts",
          "Corporate websites",
          "Landing pages",
          "Interfaces (UI)",
          "Website banners",
          "Custom icons",
        ],
      },
      {
        title: "SOCIAL MEDIA",
        items: [
          "Instagram posts",
          "Carousels",
          "Stories",
          "Facebook covers",
          "LinkedIn banner",
          "Reels",
          "Ad creatives",
        ],
      },
      {
        title: "PRINT\nDESIGN",
        items: [
          "Flyers",
          "Leaflets",
          "Brochures",
          "Catalogs",
          "Magazines",
          "Menus",
          "Invitations",
          "ID badges",
        ],
      },
      {
        title: "VISUAL\nCOMMUNICATION",
        items: [
          "Storefronts",
          "Pylon signs",
          "Signs",
          "Banners",
          "Stickers",
          "Vinyl cutting",
          "Vehicle wraps",
          "Wind Banner",
        ],
      },
      {
        title: "PRINT-READY ART\n& VECTORIZATION",
        items: ["Print-ready artwork", "Logo vectorization", "Labels and packaging"],
      },
    ],
  },

  portfolio: {
    title: "PORTFOLIO",
    categories: {
      identidadeVisual: "Visual Identity",
      socialMedia: "Social Media",
      sites: "Websites",
      designGrafico: "Graphic Design",
    },
    viewProject: "VIEW PROJECT",
    comingSoon: "Coming soon",
    projects: {
      "kito-consorcios": { nome: "Kito Consórcios", descricao: "" },
      "jefferson-xavier": { nome: "Jefferson Xavier", descricao: "" },
      "dulub-social-media": {
        nome: "DULUB - Tecnologia Fluida",
        descricao:
          "The challenge was to move beyond the usual technical approach and build communication with more confidence. The visual direction translates the brand's fluid technology into a more accessible, direct, and professional language, bringing DULUB closer to mechanics, retailers, and end consumers. The result is a more consistent, strategic feed with greater authority in its industry.",
      },
      "vanessa-paula-social-media": {
        nome: "Vanessa Paula - Aesthetic Physiotherapy",
        descricao:
          "The challenge was to turn expertise in aesthetic physiotherapy into warmer, more accessible communication without losing professional rigor. The pink-toned visual identity was designed to welcome and educate, presenting treatments such as skin booster and supplements with lightness and confidence. The result is a feed that reinforces self-care and positions Vanessa Paula as a reference in her field.",
      },
      "lucidata-social-media": {
        nome: "Lucidata - Pensou? Na Lucidata tem!",
        descricao:
          "The challenge was to turn an IT store's catalog into a campaign with personality and purchase appeal. The red and black visual direction, with glow and neon, puts product and price front and center, supported by the campaign seal and technical spec chips, and unfolds across posts, stories, reels, and carousels. The result is a recognizable, straight-to-the-point feed that drives customers to WhatsApp and the website.",
      },
      "iaw-contabiliza-site": {
        nome: "IAW Contabiliza - Online Accounting",
        descricao:
          "The challenge was to convey the trust of a traditional accounting firm in a 100% online service. The website was designed with the purple and yellow identity, organizing benefits, services, company registration, and switching accountants into clear navigation, with a contact form and FAQ to answer questions. The result is a page that reinforces IAW Contabiliza's credibility and turns visitors into qualified leads.",
      },
    },
    modal: {
      close: "Close",
      prevImages: "Show previous images",
      nextImages: "Show more images",
      prevImage: "Previous image",
      nextImage: "Next image",
      goToImage: "Go to image",
      image: "image",
      page: "page",
    },
  },

  process: {
    title: "HOW IT WORKS",
    stepLabel: "Step",
    steps: [
      { titulo: "Briefing", descricao: "I get to know your business to understand your goals." },
      { titulo: "Research", descricao: "I look for references and opportunities to set your brand apart." },
      { titulo: "Development", descricao: "I create visual solutions that combine creativity and functionality." },
      { titulo: "Strategy", descricao: "Creative planning aligned with your business goals." },
      { titulo: "Approval", descricao: "I refine every detail until we reach the final result." },
      { titulo: "Delivery", descricao: "You'll receive all files organized and ready to use." },
    ],
  },

  experience: {
    title: "PROFESSIONAL EXPERIENCE",
    items: [
      {
        cargo: "Marketing Analyst",
        descricao:
          "Developed visual identity, campaigns, and online and offline graphic materials, including labels, packaging, catalogs, social media pieces, e-commerce, and visual communication. Created and edited videos, designed website layouts and digital materials, and standardized the visual identity of storefronts, fleet, tanks, and corporate materials. Also responsible for image editing, prepress file preparation, technical review, print quality control, and supporting Marketing and Sales requests.",
      },
      {
        cargo: "Graphic Designer & Social Media",
        descricao:
          "Created and published strategic social media content, including graphic pieces, videos, promotional campaigns, offers, and informative posts. Managed profiles on platforms such as Instagram and Facebook, tracking publications and engaging with the audience. Monitored performance metrics such as reach, engagement, and conversions, using the results to optimize content and digital communication strategies.",
      },
      {
        cargo: "Marketing Analyst",
        descricao:
          "Developed advertising and promotional campaigns with the Marketing team, helping define objectives, target audiences, and communication strategies. Planned and managed social media, created content, and strengthened the brand's digital presence. Worked closely with sales, design, and product teams to ensure visual consistency, aligned communication, and efficient execution of marketing strategies.",
      },
      {
        cargo: "Prepress Artist",
        descricao:
          "Prepared and finalized files for print, reviewing resolution, bleed, formats, and technical specifications. Managed and standardized colors according to print production processes. Worked closely with the production team, printers, and operators to ensure fidelity to the project, final quality, and correct execution of printed materials.",
      },
      {
        cargo: "Marketing Analyst",
        descricao:
          "Presented and demonstrated smartphones, tablets, and accessories in retail stores and promotional events, highlighting product features, benefits, and functionality. Assisted and advised customers throughout the purchase process, and monitored and organized inventory to ensure product availability and support sales.",
      },
      {
        cargo: "Graphic Designer",
        descricao:
          "Created print-ready artwork for printed materials, designing layouts for flyers, cards, posters, and more. Edited and prepared files, checking and adjusting them for print. Served clients, understanding their needs and offering guidance. Managed deadlines to ensure projects were completed on time. Maintained printing equipment and design software when needed.",
      },
    ],
  },

  contact: {
    kicker: "LET'S TALK",
    title: "HAVE A PROJECT IN MIND?",
    subtitle: "Just message me. No forms. No fuss.",
    whatsappButton: "MESSAGE ME ON WHATSAPP",
    whatsappAria: "Message me on WhatsApp",
    note: "I reply on WhatsApp. It's faster that way.",
    rights: "All rights reserved.",
    logoAlt: "Paulo Dsgnr logo",
  },

  messages: {
    whatsapp: "Hi Paulo, I saw your website and I'd like to talk about a project!",
    budget: "Hi Paulo, I saw your website and I'd like to request a quote!",
    emailSubject: "Project inquiry from your website",
    emailBody: "Hi Paulo, I saw your website and I'd like to talk about a project!",
  },
};

export default en;
