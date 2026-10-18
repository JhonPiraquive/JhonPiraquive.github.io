import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-servicios-web-http-datos",
  classTitle: "Clase 1: Servicios web, HTTP y formatos de datos",
  hubOrder: 2,
  pages: [
    {
      slug: "modelo-cliente-servidor",
      title: "Modelo cliente-servidor",
      description: "Flujo HTTP y arquitecturas en capas.",
      readMinutes: 25,
    },
    {
      slug: "servicios-web",
      title: "Servicios web",
      description: "Qué es un servicio web y cómo se consume.",
      readMinutes: 14,
    },
    {
      slug: "tipos-servicios-web",
      title: "Tipos de servicios web",
      description: "REST, SOAP, GraphQL, gRPC y WebSockets comparados.",
      readMinutes: 29,
    },
    {
      slug: "apis",
      title: "APIs: qué son, tipos y herramientas",
      description: "Qué es una API, cómo se diseña y con qué herramientas se prueba.",
      readMinutes: 23,
    },
    {
      slug: "http-metodos-status",
      title: "Métodos HTTP y códigos de estado",
      description: "Verbos HTTP, CRUD y familias de códigos de estado.",
      readMinutes: 23,
    },
    {
      slug: "http-headers",
      title: "HTTP headers",
      description: "Cabeceras de petición y respuesta, CORS y cabeceras de seguridad.",
      readMinutes: 39,
    },
    {
      slug: "formatos-datos",
      title: "Formatos de datos: XML y JSON",
      description: "Estructura de XML y JSON, comparativa y casos de uso.",
      readMinutes: 25,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, retos integradores, miniquiz y autoevaluación de servicios web, HTTP y formatos de datos.",
      readMinutes: 40,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-arquitectura-datos-seguridad",
  classTitle: "Clase 2: Arquitectura de APIs, datos y seguridad",
  hubOrder: 12,
  pages: [
    {
      slug: "rest-principios",
      title: "Principios REST",
      description: "Las restricciones de REST y cómo se aplican en una API.",
      readMinutes: 27,
    },
    {
      slug: "arquitectura-api",
      title: "Arquitectura de APIs: REST, GraphQL y gRPC",
      description: "Estilos de arquitectura de APIs, patrones y cuándo elegir cada uno.",
      readMinutes: 21,
    },
    {
      slug: "backend",
      title: "Backend: tecnologías y frameworks",
      description: "Responsabilidades del backend, tecnologías y criterios de elección.",
      readMinutes: 22,
    },
    {
      slug: "bases-de-datos",
      title: "Bases de datos: SQL, NoSQL y modelado relacional",
      description: "DDL, DML, claves, transacciones y familias de bases de datos.",
      readMinutes: 22,
    },
    {
      slug: "cache",
      title: "Caché en aplicaciones web",
      description: "Tipos de caché, cabeceras y cuándo usarla.",
      readMinutes: 23,
    },
    {
      slug: "protocolos-seguridad",
      title: "Protocolos de seguridad web",
      description: "HTTP, HTTPS, SSL/TLS y el flujo del handshake.",
      readMinutes: 33,
    },
    {
      slug: "tokens",
      title: "Tokens y autenticación",
      description: "API keys, sesiones, JWT y OAuth.",
      readMinutes: 22,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, retos integradores, miniquiz y autoevaluación de arquitectura de APIs, datos y seguridad.",
      readMinutes: 40,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-frontend-calidad-herramientas",
  classTitle: "Clase 3: Frontend, calidad de código y herramientas",
  hubOrder: 22,
  pages: [
    {
      slug: "frontend",
      title: "Frontend: tecnologías y frameworks",
      description: "Tecnologías base, frameworks y cómo elegir.",
      readMinutes: 22,
    },
    {
      slug: "typescript",
      title: "TypeScript",
      description: "Sistema de tipos, interfaces, genéricos y configuración.",
      readMinutes: 27,
    },
    {
      slug: "react",
      title: "React: fundamentos",
      description: "JSX, componentes, props, estado, hooks y efectos.",
      readMinutes: 28,
    },
    {
      slug: "angular",
      title: "Angular: fundamentos",
      description: "Componentes, ciclo de vida, directivas, pipes, módulos y servicios.",
      readMinutes: 27,
    },
    {
      slug: "herramientas-desarrollo",
      title: "Herramientas de desarrollo",
      description: "XAMPP, Docker y entorno de desarrollo para React y PHP.",
      readMinutes: 22,
    },
    {
      slug: "principios-solid",
      title: "Principios SOLID",
      description: "Cinco principios de diseño orientado a objetos mantenible.",
      readMinutes: 20,
    },
    {
      slug: "naming-conventions",
      title: "Convenciones de nomenclatura",
      description: "camelCase, PascalCase, snake_case y kebab-case según el contexto.",
      readMinutes: 15,
    },
    {
      slug: "ia-en-desarrollo-web",
      title: "IA en el desarrollo web",
      description: "Usos de la IA en el flujo de trabajo, riesgos y verificación.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, retos integradores, miniquiz y autoevaluación de frontend, calidad de código y herramientas.",
      readMinutes: 40,
    },
  ],
};

export const ALL_CLASSES = [CLASE_01, CLASE_02, CLASE_03] as const;

export function buildPageSlug(classSlug: string, pageSlug: string): string {
  return `${classSlug}/${pageSlug}`;
}

export function getPageNavChain(): { slug: string; prev: string | null; next: string | null; order: number }[] {
  const chain: { slug: string; prev: string | null; next: string | null; order: number }[] = [
    { slug: "index", prev: null, next: CLASE_01.classSlug, order: 1 },
  ];

  let order = 2;

  ALL_CLASSES.forEach((config, classIndex) => {
    chain.push({
      slug: config.classSlug,
      prev: classIndex === 0 ? "index" : `${ALL_CLASSES[classIndex - 1]!.classSlug}/practica-y-cierre`,
      next: buildPageSlug(config.classSlug, config.pages[0]!.slug),
      order: order++,
    });

    config.pages.forEach((page, pageIndex) => {
      const fullSlug = buildPageSlug(config.classSlug, page.slug);
      const prevSlug =
        pageIndex === 0 ? config.classSlug : buildPageSlug(config.classSlug, config.pages[pageIndex - 1]!.slug);
      const nextSlug =
        pageIndex === config.pages.length - 1
          ? classIndex === ALL_CLASSES.length - 1
            ? null
            : ALL_CLASSES[classIndex + 1]!.classSlug
          : buildPageSlug(config.classSlug, config.pages[pageIndex + 1]!.slug);

      chain.push({ slug: fullSlug, prev: prevSlug, next: nextSlug, order: order++ });
    });
  });

  return chain;
}

export function getNavForSlug(slug: string) {
  const entry = getPageNavChain().find((item) => item.slug === slug);
  if (!entry) {
    throw new Error(`Unknown slug in class navigation: ${slug}`);
  }
  return entry;
}

export function getPageMetaBase(config: ClassNavConfig, pageSlug: string): Pick<
  LessonMeta,
  "slug" | "prev" | "next" | "order" | "pageNumber" | "totalPages" | "classTitle"
> {
  const fullSlug = buildPageSlug(config.classSlug, pageSlug);
  const nav = getNavForSlug(fullSlug);
  const pageIndex = config.pages.findIndex((p) => p.slug === pageSlug);
  return {
    slug: fullSlug,
    prev: nav.prev,
    next: nav.next,
    order: nav.order,
    pageNumber: pageIndex + 1,
    totalPages: config.pages.length,
    classTitle: config.classTitle,
  };
}

// Avoid circular import — type-only shape for helper return
type LessonMeta = {
  slug: string;
  prev?: string | null;
  next?: string | null;
  order: number;
  pageNumber?: number;
  totalPages?: number;
  classTitle?: string;
};

/** Slugs de lecciones anteriores (temas sueltos) → página equivalente vigente (alias de URLs antiguas). */
export const LEGACY_CLASS_REDIRECTS: Record<string, string> = {
  "modelo-cliente-servidor": buildPageSlug(CLASE_01.classSlug, "modelo-cliente-servidor"),
  "servicios-web": buildPageSlug(CLASE_01.classSlug, "servicios-web"),
  "tipos-servicios-web": buildPageSlug(CLASE_01.classSlug, "tipos-servicios-web"),
  "apis": buildPageSlug(CLASE_01.classSlug, "apis"),
  "http-metodos-status": buildPageSlug(CLASE_01.classSlug, "http-metodos-status"),
  "http-headers": buildPageSlug(CLASE_01.classSlug, "http-headers"),
  "formatos-datos": buildPageSlug(CLASE_01.classSlug, "formatos-datos"),
  "rest-principios": buildPageSlug(CLASE_02.classSlug, "rest-principios"),
  "arquitectura-api": buildPageSlug(CLASE_02.classSlug, "arquitectura-api"),
  "backend": buildPageSlug(CLASE_02.classSlug, "backend"),
  "bases-de-datos": buildPageSlug(CLASE_02.classSlug, "bases-de-datos"),
  "cache": buildPageSlug(CLASE_02.classSlug, "cache"),
  "protocolos-seguridad": buildPageSlug(CLASE_02.classSlug, "protocolos-seguridad"),
  "tokens": buildPageSlug(CLASE_02.classSlug, "tokens"),
  "frontend": buildPageSlug(CLASE_03.classSlug, "frontend"),
  "typescript": buildPageSlug(CLASE_03.classSlug, "typescript"),
  "react": buildPageSlug(CLASE_03.classSlug, "react"),
  "angular": buildPageSlug(CLASE_03.classSlug, "angular"),
  "herramientas-desarrollo": buildPageSlug(CLASE_03.classSlug, "herramientas-desarrollo"),
  "principios-solid": buildPageSlug(CLASE_03.classSlug, "principios-solid"),
  "naming-conventions": buildPageSlug(CLASE_03.classSlug, "naming-conventions"),
  "ia-en-desarrollo-web": buildPageSlug(CLASE_03.classSlug, "ia-en-desarrollo-web"),
};
