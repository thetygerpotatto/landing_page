import type { Lang } from '../i18n/ui';

// TODO: adjust prices to your market. These are placeholder "starting from" values.
export interface Service {
  id: string;
  icon: string; // short mono glyph shown on the card
  priceUSD: number;
  priceCOP: number;
  featured?: boolean;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  includes: Record<Lang, string[]>;
}

export const services: Service[] = [
  {
    id: 'website',
    icon: '</>',
    priceUSD: 200,
    priceCOP: 600_000,
    name: { en: 'Landing page / Website', es: 'Landing page / Sitio web' },
    description: {
      en: 'A fast, responsive website for your business, product or personal brand.',
      es: 'Un sitio web rápido y adaptable para tu negocio, producto o marca personal.',
    },
    includes: {
      en: ['Up to 5 sections or pages', 'Mobile-first, SEO basics', 'Contact form', 'Deployment + domain setup'],
      es: ['Hasta 5 secciones o páginas', 'Diseño adaptable, SEO básico', 'Formulario de contacto', 'Despliegue y configuración de dominio'],
    },
  },
  {
    id: 'backend',
    icon: '{ }',
    priceUSD: 500,
    priceCOP: 2_000_000,
    featured: true,
    name: { en: 'Backend / REST API', es: 'Backend / API REST' },
    description: {
      en: 'A secure, documented API with a database, ready for your web or mobile app.',
      es: 'Una API segura y documentada con base de datos, lista para tu app web o móvil.',
    },
    includes: {
      en: ['Data modeling + database', 'Authentication', 'API documentation', 'Tests + deployment'],
      es: ['Modelado de datos y base de datos', 'Autenticación', 'Documentación de la API', 'Pruebas y despliegue'],
    },
  },
  {
    id: 'systems',
    icon: '*p',
    priceUSD: 250,
    priceCOP: 1_000_000,
    name: { en: 'C & Systems work', es: 'C y sistemas' },
    description: {
      en: 'C programs, CLI tools, performance tuning, debugging and code reviews.',
      es: 'Programas en C, herramientas CLI, optimización, depuración y revisión de código.',
    },
    includes: {
      en: ['Linux / POSIX tooling', 'Memory & performance profiling', 'Bug hunting (Valgrind, GDB)', 'Written report of findings'],
      es: ['Herramientas Linux / POSIX', 'Perfilado de memoria y rendimiento', 'Caza de errores (Valgrind, GDB)', 'Informe escrito de hallazgos'],
    },
  },
];

export function formatPrice(lang: Lang, s: Service): { primary: string; secondary: string } {
  const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(s.priceUSD);
  const cop = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(s.priceCOP);
  return lang === 'es' ? { primary: cop, secondary: `${usd} USD` } : { primary: usd, secondary: `${cop} COP` };
}
