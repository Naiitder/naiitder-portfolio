export type Lang = 'es' | 'en'

export type TabId =
  | 'home'
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'contact'

export interface Translation {
  tabs: { id: TabId; label: string }[]
  hero: {
    greeting: string
    name: string
    role: string
    tagline: string
    ctaProjects: string
    ctaCV: string
    available: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    stats: { num: string; label: string }[]
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    demo: string
    code: string
    items: { n: string; title: string; desc: string; tech: string[] }[]
  }
  skills: {
    eyebrow: string
    title: string
    subtitle: string
    groups: { title: string; items: string[] }[]
  }
  experience: {
    eyebrow: string
    title: string
    workLabel: string
    eduLabel: string
    work: { year: string; role: string; company: string; desc: string }[]
    education: { year: string; role: string; company: string; desc: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    emailLabel: string
    cvLabel: string
    connect: string
  }
}

export const EMAIL = 'raul.junquera.abellan@cieep.com'

export const translations: Record<Lang, Translation> = {
  es: {
    tabs: [
      { id: 'home', label: 'Inicio' },
      { id: 'about', label: 'Sobre mí' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'skills', label: 'Tecnologías' },
      { id: 'experience', label: 'Experiencia' },
      { id: 'contact', label: 'Contacto' },
    ],
    hero: {
      greeting: 'Hola, soy',
      name: 'Raúl Junquera Abellán',
      role: 'Desarrollador Full Stack',
      tagline:
        'Diseño y construyo aplicaciones web y móviles de principio a fin — del interfaz al servidor — buscando experiencias limpias, rápidas y bien pensadas.',
      ctaProjects: 'Ver proyectos',
      ctaCV: 'Descargar CV',
      available: 'Disponible para nuevos proyectos',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Un poco sobre mí',
      paragraphs: [
        'Soy desarrollador full stack apasionado por convertir ideas en productos reales. Me muevo cómodo tanto en el frontend, cuidando cada detalle de la interfaz, como en el backend, diseñando APIs y bases de datos sólidas.',
        'Me gusta el código limpio, las herramientas modernas y aprender algo nuevo en cada proyecto. Cuando no programo, suelo estar explorando nuevas tecnologías o puliendo las que ya conozco.',
      ],
      stats: [
        { num: '2+', label: 'Años de experiencia' },
        { num: '5+', label: 'Proyectos completados' },
        { num: '10+', label: 'Tecnologías dominadas' },
      ],
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Proyectos destacados',
      subtitle:
        'Una selección de aplicaciones que he construido. Los enlaces son de ejemplo — sustitúyelos por los tuyos.',
      demo: 'Demo',
      code: 'Código',
      items: [
        {
          n: '01',
          title: 'TaskFlow',
          desc: 'Gestor de tareas colaborativo en tiempo real con tableros, etiquetas y notificaciones. Sincronización instantánea entre usuarios.',
          tech: ['React', 'TypeScript', 'Node.js', 'Supabase'],
        },
        {
          n: '02',
          title: 'FinTrack',
          desc: 'App móvil de finanzas personales para registrar gastos, visualizar presupuestos y analizar hábitos con gráficos claros.',
          tech: ['Flutter', 'Dart', 'Supabase'],
        },
        {
          n: '03',
          title: 'DevConnect',
          desc: 'Red social para desarrolladores: perfiles, feed de proyectos y mensajería. Autenticación y API REST propias.',
          tech: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
          n: '04',
          title: 'ShopWave',
          desc: 'Tienda online completa con carrito, pasarela de pago y panel de administración para gestionar productos y pedidos.',
          tech: ['React', 'Node.js', 'Stripe'],
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Tecnologías y aptitudes',
      subtitle: 'Las herramientas con las que trabajo cada día.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'JavaScript', 'Flutter', 'HTML & CSS', 'Tailwind'],
        },
        {
          title: 'Backend',
          items: ['Node.js', 'Express', 'APIs REST', 'Autenticación'],
        },
        { title: 'Datos y Cloud', items: ['Supabase', 'PostgreSQL', 'Firebase'] },
        { title: 'Herramientas', items: ['Git', 'Docker', 'Figma', 'Vite', 'VS Code'] },
      ],
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Mi experiencia',
      workLabel: 'Experiencia laboral',
      eduLabel: 'Formación y estudios',
      work: [
        {
          year: 'Diciembre 2024 — Presente',
          role: 'Desarrollador Full Stack',
          company: 'Prosolid 3D Software · Jornada completa',
          desc: 'Desarrollo de aplicaciones web y móviles, participando en todas las fases del proyecto: diseño de la interfaz, implementación de la API y modelado de la base de datos.',
        },
      ],
      education: [
        {
          year: 'Septiembre 2023 — Julio 2025',
          role: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
          company: 'IES Salvador Gadea',
          desc: 'Desarrollo de aplicaciones, diseño y gestión de bases de datos y estructuras de datos.',
        },
        {
          year: 'Septiembre 2020 — Julio 2022',
          role: 'Técnico Superior en Animación 3D, Entornos Interactivos, Videojuegos y Programación',
          company: 'Progresa Centro de Formación Profesional',
          desc: 'Fundamentos de programación, C++, diseño de interfaces y desarrollo con Unity.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Trabajemos juntos',
      lead: '¿Tienes un proyecto en mente o una oportunidad? Estaré encantado de escucharte.',
      emailLabel: 'Envíame un email',
      cvLabel: 'Descargar CV',
      connect: 'O encuéntrame en',
    },
  },
  en: {
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Tech' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      greeting: "Hi, I'm",
      name: 'Raúl Junquera Abellán',
      role: 'Full Stack Developer',
      tagline:
        'I design and build web and mobile apps end to end — from the interface to the server — aiming for clean, fast and well-thought-out experiences.',
      ctaProjects: 'View projects',
      ctaCV: 'Download CV',
      available: 'Available for new projects',
    },
    about: {
      eyebrow: 'About',
      title: 'A bit about me',
      paragraphs: [
        "I'm a full stack developer passionate about turning ideas into real products. I'm comfortable both on the frontend, caring about every interface detail, and on the backend, designing solid APIs and databases.",
        "I love clean code, modern tooling and learning something new in every project. When I'm not coding, I'm usually exploring new technologies or sharpening the ones I already know.",
      ],
      stats: [
        { num: '2+', label: 'Years of experience' },
        { num: '15+', label: 'Projects completed' },
        { num: '10+', label: 'Technologies mastered' },
      ],
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Featured projects',
      subtitle:
        'A selection of apps I have built.',
      demo: 'Demo',
      code: 'Code',
      items: [
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Tech & skills',
      subtitle: 'The tools I work with every day.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'JavaScript', 'Flutter', 'HTML & CSS', 'Tailwind'],
        },
        {
          title: 'Backend',
          items: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
        },
        { title: 'Data & Cloud', items: ['Supabase', 'PostgreSQL', 'Firebase'] },
        { title: 'Tools', items: ['Git', 'Docker', 'Figma', 'Vite', 'VS Code'] },
      ],
    },
    experience: {
      eyebrow: 'Journey',
      title: 'My experience',
      workLabel: 'Work experience',
      eduLabel: 'Education & studies',
      work: [
        {
          year: 'December 2024 — Present',
          role: 'Full Stack Developer',
          company: 'Prosolid 3D Software · Full-time',
          desc: 'Developing web and mobile applications, taking part in every phase of the project: interface design, API implementation and database modeling.',
        },
      ],
      education: [
        {
          year: 'September 2023 — July 2025',
          role: 'Advanced Diploma in Cross-Platform Application Development',
          company: 'IES Salvador Gadea',
          desc: 'Application development, database design and management, and data structures.',
        },
        {
          year: 'September 2020 — July 2022',
          role: 'Advanced Diploma in 3D Animation, Interactive Environments, Video Games and Programming',
          company: 'Progresa Vocational Training Center',
          desc: 'Programming fundamentals, C++, interface design and development with Unity.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      lead: "Have a project in mind or an opportunity? I'd love to hear from you.",
      emailLabel: 'Send me an email',
      cvLabel: 'Download CV',
      connect: 'Or find me on',
    },
  },
}
