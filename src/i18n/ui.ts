export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

// All UI strings. Keys must exist in both languages (enforced by the type below).
const en = {
  'meta.title': 'Backend Developer · C, Systems & Web',
  'meta.description':
    'Systems Engineering student and backend developer specializing in C, APIs and performant systems. Available for freelance projects and full-time roles.',

  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.theme': 'Toggle dark mode',
  'nav.lang': 'Leer en español',

  'hero.status': 'Open to work · Available for freelance',
  'hero.role': 'Backend developer',
  'hero.headline': 'I build fast, reliable software, from low-level C to the web.',
  'hero.sub':
    'Systems Engineering student finishing my 8th semester. I like working close to the metal: memory, sockets, performance. I also build the web apps that sit on top.',
  'hero.cta.hire': 'Hire me',
  'hero.cta.cv': 'Download CV',
  'hero.cta.projects': 'See my work',

  'about.title': 'About me',
  'about.p1':
    "I'm a Systems Engineering student at Universidad del Valle (Colombia), finishing my 8th semester. My main focus is backend development. I enjoy writing C, understanding how things work underneath, and making software that is efficient and easy to maintain.",
  'about.p2':
    'Besides systems work, I build complete web applications: REST APIs, databases and clean, responsive frontends. I care about clear communication, honest estimates and delivering on time.',
  'about.facts.location': 'Based in',
  'about.facts.education': 'Education',
  'about.facts.education.value': 'Systems Engineering, Univalle (8th semester)',
  'about.facts.languages': 'Languages',
  'about.facts.languages.value': 'Spanish (native), English',

  'skills.title': 'Skills',
  'skills.backend': 'Backend & Systems',
  'skills.web': 'Web',
  'skills.tools': 'Tools & Practices',

  'projects.title': 'Featured projects',
  'projects.sub': 'A selection of things I have built. Click a project for the full case study.',
  'projects.repo': 'Source code',
  'projects.demo': 'Live demo',
  'projects.readMore': 'Read case study',
  'projects.back': 'Back to projects',

  'services.title': 'Services & rates',
  'services.sub':
    'Clear packages so you know what to expect. Every project starts with a free 30-minute call to define scope.',
  'services.from': 'Starting from',
  'services.cta': 'Request a quote',
  'services.custom.title': 'Something else?',
  'services.custom.body':
    "Have a project that doesn't fit a package, or need ongoing hourly support? Let's talk and I'll send you a custom quote.",
  'services.note': 'Prices in USD for international clients and COP for clients in Colombia. Final price depends on scope.',

  'process.title': 'How I work',
  'process.1.title': 'Discovery call',
  'process.1.body': 'A free 30-minute call to understand your goals, requirements and timeline.',
  'process.2.title': 'Proposal',
  'process.2.body': 'A written scope, timeline and fixed price, so there are no surprises.',
  'process.3.title': 'Build',
  'process.3.body': 'Weekly progress updates and a preview link so you can follow along.',
  'process.4.title': 'Delivery & support',
  'process.4.body': 'Deployment, documentation and 30 days of free bug fixes after delivery.',

  'faq.title': 'Frequently asked questions',
  'faq.1.q': 'How does payment work?',
  'faq.1.a': '50% upfront to start, 50% on delivery. For larger projects we can split payments by milestone.',
  'faq.2.q': 'How many revisions are included?',
  'faq.2.a': 'Each package includes two rounds of revisions. Additional changes are quoted separately.',
  'faq.3.q': 'Do you work with international clients?',
  'faq.3.a': 'Yes. I work remotely in English or Spanish and can adapt to your time zone (I am in UTC-5).',
  'faq.4.q': 'Are you available for full-time roles?',
  'faq.4.a': 'Yes. I am open to internships and junior backend positions, remote or in Colombia. Download my CV or contact me directly.',

  'contact.title': "Let's work together",
  'contact.sub': 'Tell me about your project or position. I usually reply within 24 hours.',
  'contact.name': 'Name',
  'contact.email': 'Email',
  'contact.type': 'I am interested in',
  'contact.type.freelance': 'A freelance project',
  'contact.type.job': 'A job / internship opportunity',
  'contact.type.other': 'Something else',
  'contact.message': 'Message',
  'contact.send': 'Send message',
  'contact.or': 'Or reach me directly',

  'footer.built': 'Built with Astro & Tailwind.',
} as const;

type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  'meta.title': 'Desarrollador Backend · C, Sistemas y Web',
  'meta.description':
    'Estudiante de Ingeniería de Sistemas y desarrollador backend especializado en C, APIs y sistemas de alto rendimiento. Disponible para proyectos freelance y empleo.',

  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.services': 'Servicios',
  'nav.contact': 'Contacto',
  'nav.theme': 'Cambiar modo oscuro',
  'nav.lang': 'Read in English',

  'hero.status': 'Abierto a ofertas · Disponible para freelance',
  'hero.role': 'Desarrollador backend',
  'hero.headline': 'Construyo software rápido y confiable, desde C de bajo nivel hasta la web.',
  'hero.sub':
    'Estudiante de Ingeniería de Sistemas terminando 8.º semestre. Me gusta trabajar cerca del hardware: memoria, sockets, rendimiento. También construyo las aplicaciones web que van encima.',
  'hero.cta.hire': 'Contrátame',
  'hero.cta.cv': 'Descargar CV',
  'hero.cta.projects': 'Ver mi trabajo',

  'about.title': 'Sobre mí',
  'about.p1':
    'Soy estudiante de Ingeniería de Sistemas en la Universidad del Valle (Colombia) y estoy terminando 8.º semestre. Mi enfoque principal es el desarrollo backend: disfruto escribir C, entender cómo funcionan las cosas por dentro y crear software eficiente y fácil de mantener.',
  'about.p2':
    'Además del trabajo de sistemas, construyo aplicaciones web completas: APIs REST, bases de datos y frontends limpios y adaptables. Me importa la comunicación clara, los estimados honestos y entregar a tiempo.',
  'about.facts.location': 'Ubicación',
  'about.facts.education': 'Formación',
  'about.facts.education.value': 'Ingeniería de Sistemas, Univalle (8.º semestre)',
  'about.facts.languages': 'Idiomas',
  'about.facts.languages.value': 'Español (nativo), inglés',

  'skills.title': 'Habilidades',
  'skills.backend': 'Backend y sistemas',
  'skills.web': 'Web',
  'skills.tools': 'Herramientas y prácticas',

  'projects.title': 'Proyectos destacados',
  'projects.sub': 'Una selección de lo que he construido. Haz clic en un proyecto para ver el caso completo.',
  'projects.repo': 'Código fuente',
  'projects.demo': 'Demo en vivo',
  'projects.readMore': 'Ver caso de estudio',
  'projects.back': 'Volver a proyectos',

  'services.title': 'Servicios y tarifas',
  'services.sub':
    'Paquetes claros para que sepas qué esperar. Cada proyecto empieza con una llamada gratuita de 30 minutos para definir el alcance.',
  'services.from': 'Desde',
  'services.cta': 'Solicitar cotización',
  'services.custom.title': '¿Algo diferente?',
  'services.custom.body':
    '¿Tienes un proyecto que no encaja en un paquete o necesitas soporte por horas? Hablemos y te envío una cotización a medida.',
  'services.note': 'Precios en USD para clientes internacionales y en COP para clientes en Colombia. El precio final depende del alcance.',

  'process.title': 'Cómo trabajo',
  'process.1.title': 'Llamada inicial',
  'process.1.body': 'Una llamada gratuita de 30 minutos para entender tus objetivos, requisitos y plazos.',
  'process.2.title': 'Propuesta',
  'process.2.body': 'Alcance, cronograma y precio fijo por escrito, sin sorpresas.',
  'process.3.title': 'Desarrollo',
  'process.3.body': 'Avances semanales y un enlace de vista previa para que sigas el progreso.',
  'process.4.title': 'Entrega y soporte',
  'process.4.body': 'Despliegue, documentación y 30 días de corrección de errores gratis tras la entrega.',

  'faq.title': 'Preguntas frecuentes',
  'faq.1.q': '¿Cómo funciona el pago?',
  'faq.1.a': '50% por adelantado para iniciar y 50% al entregar. En proyectos grandes podemos dividir el pago por hitos.',
  'faq.2.q': '¿Cuántas revisiones incluye?',
  'faq.2.a': 'Cada paquete incluye dos rondas de revisiones. Los cambios adicionales se cotizan aparte.',
  'faq.3.q': '¿Trabajas con clientes internacionales?',
  'faq.3.a': 'Sí. Trabajo de forma remota en español o inglés y me adapto a tu zona horaria (estoy en UTC-5).',
  'faq.4.q': '¿Estás disponible para empleo de tiempo completo?',
  'faq.4.a': 'Sí. Estoy abierto a prácticas y cargos de backend junior, remotos o en Colombia. Descarga mi CV o escríbeme.',

  'contact.title': 'Trabajemos juntos',
  'contact.sub': 'Cuéntame sobre tu proyecto o vacante. Normalmente respondo en menos de 24 horas.',
  'contact.name': 'Nombre',
  'contact.email': 'Correo',
  'contact.type': 'Me interesa',
  'contact.type.freelance': 'Un proyecto freelance',
  'contact.type.job': 'Una oferta de empleo / práctica',
  'contact.type.other': 'Otra cosa',
  'contact.message': 'Mensaje',
  'contact.send': 'Enviar mensaje',
  'contact.or': 'O escríbeme directamente',

  'footer.built': 'Hecho con Astro y Tailwind.',
};

const ui = { en, es } as const;

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefix a path for the given language: localePath('es', '/#contact') -> '/es/#contact' */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** The same page in the other language. */
export function alternatePath(lang: Lang, pathname: string): { lang: Lang; href: string } {
  if (lang === 'es') {
    const stripped = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
    return { lang: 'en', href: stripped };
  }
  return { lang: 'es', href: localePath('es', pathname) };
}
