export const site = {
  name: "Alex Rivera",
  role: "Diseño y desarrollo web",
  email: "hola@ejemplo.com",
  location: "Ciudad, País",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;

export const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const projects = [
  {
    id: "norte",
    title: "Norte Studio",
    description:
      "Sitio corporativo para un estudio creativo. Enfoque en tipografía, casos de estudio y contacto.",
    year: "2025",
    tags: ["Next.js", "Tailwind", "CMS"],
    href: "#",
    accent: "#1a6b5c",
  },
  {
    id: "pulse",
    title: "Pulse Analytics",
    description:
      "Landing de producto con secciones de features, precios y demo interactiva.",
    year: "2025",
    tags: ["React", "Framer Motion", "Vercel"],
    href: "#",
    accent: "#2f4a7a",
  },
  {
    id: "meridian",
    title: "Meridian Café",
    description:
      "Web de marca para una cafetería local: menú, ubicaciones y reservaciones.",
    year: "2024",
    tags: ["Next.js", "TypeScript", "SEO"],
    href: "#",
    accent: "#8a4b2f",
  },
  {
    id: "orbit",
    title: "Orbit Docs",
    description:
      "Documentación pública de un producto SaaS con búsqueda y navegación lateral.",
    year: "2024",
    tags: ["MDX", "Next.js", "Algolia"],
    href: "#",
    accent: "#3d5a40",
  },
] as const;

export const about = {
  headline: "Construyo interfaces claras y sitios que se sienten bien al usarlos.",
  paragraphs: [
    "Me enfoco en productos digitales y páginas web: desde la estructura de la información hasta el detalle visual y la implementación.",
    "Trabajo con stacks modernos del ecosistema web y priorizo rendimiento, accesibilidad y un diseño que comunique con claridad.",
  ],
} as const;

export const skills = [
  "HTML / CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Figma",
] as const;
