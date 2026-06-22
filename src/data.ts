export type Lang = 'es' | 'en'

export type TabId =
  | 'home'
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'contact'

export interface ProjectItem {
  n: string
  title: string
  desc: string
  tech: string[]
  cover?: string
  gallery?: string[]
  video?: string
  longDesc?: string
  features?: string[]
  links?: { demo?: string; code?: string; project?: string }
}

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
    project: string
    detailsCta: string
    aboutLabel: string
    featuresLabel: string
    galleryLabel: string
    videoLabel: string
    items: ProjectItem[]
    games: {
      title: string
      subtitle: string
      itchLabel: string
      portfolioLabel: string
      items: ProjectItem[]
    }
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
  cv: { es: string; en: string }
}

export const CV_FILES = {
  es: '/docs/curriculum_raul_junquera_es.pdf',
  en: '/docs/curriculum_raul_junquera_en.pdf',
} as const

// Single source of truth for external links — change once, applies to ES and EN.
export const LINKS = {
  github: 'https://github.com/Naiitder',
  linkedin: 'https://www.linkedin.com/in/raul-junquera-abellan/',
  email: 'raul.junquera.abellan@cieep.com',
  itch: 'https://naitder.itch.io/',
  vimeo: 'https://vimeo.com/',
} as const

// Single source of truth for assets/images — change once, applies to ES and EN.
export const ASSETS = {
  photo: '/images/portrait-photo.PNG',
} as const

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
        'Una selección de aplicaciones que he construido. Pulsa una tarjeta para ver más detalles.',
      demo: 'Ver demo',
      code: 'Ver código',
      project: 'Ir al proyecto',
      detailsCta: 'Ver detalles',
      aboutLabel: 'Sobre el proyecto',
      featuresLabel: 'Características',
      galleryLabel: 'Galería',
      videoLabel: 'Vídeo',
      items: [
        {
          n: '01',
          title: 'Carpentry project',
          desc: 'Configurador de muebles 3D en tiempo real, que permite al usuario diseñar y modificar sus propios muebles, además de permitir la integración de la aplicación en tu tienda online y la conexión con software de terceros para enviar el mueble a fábrica.',
          longDesc:
            'Configurador de muebles 3D en tiempo real que permite al usuario diseñar y modificar sus propios muebles desde el navegador. La aplicación está pensada para integrarse en tu tienda online y conectarse con software de terceros para enviar el mueble directamente a fábrica.',
          features: [
            'Configuración de muebles en 3D en tiempo real',
            'Diseño y modificación por parte del usuario',
            'Integración embebida en tu tienda online',
            'Conexión con software de terceros para envío a fábrica',
          ],
          tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Babylon.js'],
          cover: '/images/carpentry-project-BG.png',
          links: {
            project: 'https://ardis-wood3d.vercel.app/',
          },
        },
        {
          n: '02',
          title: 'Motor gráfico',
          desc: 'Motor gráfico 3D hecho por mi con C++',
          longDesc:
              'Motor gráfico 3D hecho por mi con C++',
          features: [
            'Real-time 3D furniture configuration',
            'User-driven design and customization',
            'Embeddable into your online store',
            'Integration with third-party software for factory orders',
          ],
          tech: ['C++'],
          links: {
          },
        },
        {
          n: '03',
          title: 'Presupestador con IA',
          desc: 'Presupuestador con IA, hecho con flutter.',
          longDesc:
              'Presupuestador con IA, hecho con flutter.',
          features: [
            'Real-time 3D furniture configuration',
            'User-driven design and customization',
            'Embeddable into your online store',
            'Integration with third-party software for factory orders',
          ],
          tech: ['Flutter'],
          links: {
          },
        },

      ],
      games: {
        title: 'Videojuegos',
        subtitle: 'Mis proyectos de desarrollo de videojuegos.',
        itchLabel: 'itch.io',
        portfolioLabel: 'Video portfolio',
        items: [
          {
            n: 'G1',
            title: 'Michi-Mechanika',
            desc: 'Michi-Mechanika es un videojuego realizado en Unity basado en puzzles y basado en turnos, en una perspectiva 3D isometrica.',
            tech: ['Unity', 'C#'],
            links: {
              demo: 'https://github.com/Naiitder/Michi-Mechanika',
              code: 'https://github.com/Naiitder/Michi-Mechanika',
            }
          },
          {
            n: 'G2',
            title: 'Siege Of Shadows',
            desc: 'Siege of shadows es un videojuego hecho con Unity basado en el famoso titulo Vampire Survivors, con una perspectiva 2D.',
            tech: ['Unity', 'C#'],
            links: {
              demo: 'https://github.com/Naiitder/SiegeOfShadows',
              code: 'https://github.com/Naiitder/SiegeOfShadows',
            }
          },
        ],
      },
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
        { title: 'Motores gráficos', items: ['Unity', 'Unreal Engine', 'Godot'] },
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
    cv: { es: 'Español', en: 'Inglés' },
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
        { num: '5+', label: 'Projects completed' },
        { num: '10+', label: 'Technologies mastered' },
      ],
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Featured projects',
      subtitle: 'A selection of apps I have built. Tap a card to see more details.',
      demo: 'View demo',
      code: 'View code',
      project: 'Go to project',
      detailsCta: 'View details',
      aboutLabel: 'About the project',
      featuresLabel: 'Features',
      galleryLabel: 'Gallery',
      videoLabel: 'Video',
      items: [
        {
          n: '01',
          title: 'Carpentry project',
          desc: 'Real-time 3D furniture configurator that lets users design and customize their own furniture, supports embedding the app into your online store, and connects with third-party software to send the furniture to the factory.',
          longDesc:
            'Real-time 3D furniture configurator that lets users design and customize their own furniture right in the browser. The app is built to be embedded into your online store and to connect with third-party software to send the furniture directly to the factory.',
          features: [
            'Real-time 3D furniture configuration',
            'User-driven design and customization',
            'Embeddable into your online store',
            'Integration with third-party software for factory orders',
          ],
          tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Babylon.js'],
          cover: '/images/carpentry-project-BG.png',
          links: {
            project: 'https://ardis-wood3d.vercel.app/',
          },
        },
        {
          n: '02',
          title: 'Game engine',
          desc: '3D Game engine made by myself with C++.',
          longDesc:
              '3D Game engine made by myself with C++.',
          features: [
            'Real-time 3D furniture configuration',
            'User-driven design and customization',
            'Embeddable into your online store',
            'Integration with third-party software for factory orders',
          ],
          tech: ['C++'],
          links: {
          },
        },
        {
          n: '03',
          title: 'Budgeter with AI',
          desc: 'Budgeter with AI, made with flutter.',
          longDesc:
              'Budgeter with AI, made with flutter.',
          features: [
            'Real-time 3D furniture configuration',
            'User-driven design and customization',
            'Embeddable into your online store',
            'Integration with third-party software for factory orders',
          ],
          tech: ['Flutter'],
          links: {
          },
        },
      ],
      games: {
        title: 'Videogames',
        subtitle: 'My game development projects.',
        itchLabel: 'itch.io',
        portfolioLabel: 'Video portfolio',
        items: [
          {
            n: 'G1',
            title: 'Michi-Mechanika',
            desc: 'Michi-Mechanika its a videogame developed with Unity centered in puzzles and turn based, with a 3D isometric view.',
            tech: ['Unity', 'C#'],
            links: {
              demo: 'https://github.com/Naiitder/Michi-Mechanika',
              code: 'https://github.com/Naiitder/Michi-Mechanika',
            }
          },
          {
            n: 'G2',
            title: 'Siege Of Shadows',
            desc: 'Siege of shadows its a videogame made with Unity based in the popular game Vampire Survivors, with a 2D perspective.',
            tech: ['Unity', 'C#'],
            links: {
              demo: 'https://github.com/Naiitder/SiegeOfShadows',
              code: 'https://github.com/Naiitder/SiegeOfShadows',
            }
          },

        ],
      },
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
        { title: 'Game Engines', items: ['Unity', 'Unreal Engine', 'Godot'] },
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
    cv: { es: 'Spanish', en: 'English' },
  },
}
