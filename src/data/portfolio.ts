export const site = {
  name: "Wilson Zeña",
  role: "Diseño y desarrollo web",
  tagline:
    "Diseño y construyo sitios y productos digitales con foco en claridad, rendimiento y una experiencia que se siente cuidada.",
  email: "hola@ejemplo.com",
  location: "Ciudad, País",
  availability: "Disponible para proyectos freelance",
  responseTime: "Respuesta habitual en 24–48 h",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;

export const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const projects = [
  {
    id: "t-elite",
    title: "T-Elite",
    type: "Landing de producto",
    client: "T-Elite",
    role: "Diseño + desarrollo",
    description:
      "Landing de una sola ruta para un líquido sellador tubeless: producto, uso, beneficios, galería y contacto por WhatsApp.",
    highlights: [
      "Narrativa de producto orientada a conversión",
      "Secciones de dosis, beneficios y galería",
      "CTAs a WhatsApp e Instagram",
    ],
    year: "2026",
    tags: ["Next.js", "Tailwind", "Vercel"],
    href: "https://t-elite.vercel.app/",
    image: "/projects/t-elite.jpeg",
    accent: "#1f3d32",
  },
  {
    id: "constroad",
    title: "Constroad",
    type: "Sitio corporativo + portal",
    client: "Constroad",
    role: "Diseño + desarrollo",
    description:
      "Sitio y portal para una planta de asfalto peruana: mezcla asfáltica, colocación, transporte y presencia digital de la marca.",
    highlights: [
      "Web corporativa con servicios y presentación de empresa",
      "Portal operativo para flujos internos y públicos",
      "Stack Next.js orientado a producción",
    ],
    year: "2025",
    tags: ["Next.js", "Chakra UI", "TypeScript"],
    href: "https://constroad.com",
    accent: "#2c3d55",
  },
  {
    id: "altavia",
    title: "Altavía Perú",
    type: "Plataforma web",
    client: "Altavía",
    role: "Desarrollo",
    description:
      "Plataforma web para una empresa de transporte de carga: gestión de viajes, flota, documentos y operación del día a día.",
    highlights: [
      "Módulos de viajes, vehículos y conductores",
      "Seguimiento, documentos y notificaciones",
      "Aplicación Next.js con flujos operativos",
    ],
    year: "2025",
    tags: ["Next.js", "Chakra UI", "MongoDB"],
    href: "https://altaviaperu.com",
    accent: "#3a4540",
  },
] as const;

export const services = [
  {
    title: "Sitios web",
    description:
      "Landings, sitios corporativos y webs de marca con estructura clara, tipografía cuidada y foco en conversión.",
  },
  {
    title: "Productos digitales",
    description:
      "Interfaces para dashboards, herramientas internas y productos SaaS: usabilidad, estados y consistencia visual.",
  },
  {
    title: "Mejora y rediseño",
    description:
      "Auditoría de sitios existentes, rediseño de secciones clave, rendimiento, accesibilidad y SEO técnico.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Descubrimiento",
    description:
      "Entendemos objetivos, audiencia y restricciones. Definimos alcance, prioridades y el resultado esperado.",
  },
  {
    step: "02",
    title: "Diseño",
    description:
      "Propuesta visual, estructura de páginas y flujos. Iteramos hasta tener una dirección clara y compartida.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description:
      "Implementación en Next.js con componentes reutilizables, responsivo y atención a detalle.",
  },
  {
    step: "04",
    title: "Lanzamiento",
    description:
      "Revisión final, despliegue, métricas básicas y entrega de documentación para seguir manteniendo el sitio.",
  },
] as const;

export const about = {
  headline: "Construyo interfaces claras y sitios que se sienten bien al usarlos.",
  paragraphs: [
    "Me enfoco en productos digitales y páginas web: desde la estructura de la información hasta el detalle visual y la implementación.",
    "Trabajo con stacks modernos del ecosistema web y priorizo rendimiento, accesibilidad y un diseño que comunique con claridad.",
    "Disfruto proyectos donde el contenido, la tipografía y el código se alinean para transmitir una marca con solidez.",
  ],
} as const;

export const experience = [
  {
    period: "2024 — Actual",
    title: "Proyectos freelance",
    detail: "Sitios, landings y piezas de producto para marcas y equipos pequeños.",
  },
  {
    period: "2023 — 2024",
    title: "Colaboraciones web",
    detail: "Apoyo en frontend, maquetación y mejoras de rendimiento en productos existentes.",
  },
  {
    period: "2022 — 2023",
    title: "Proyectos personales",
    detail: "Exploración de interfaces, sistemas de diseño ligeros y experimentación con Next.js.",
  },
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    items: ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "Estilo y UI",
    items: ["Tailwind CSS", "shadcn/ui", "Figma", "Sistemas de diseño"],
  },
  {
    label: "Herramientas",
    items: ["Git", "Vercel", "SEO técnico", "Accesibilidad"],
  },
] as const;
