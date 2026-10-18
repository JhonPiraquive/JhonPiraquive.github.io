import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-fundamentos-seguridad",
  classTitle: "Clase 1: Fundamentos de seguridad y amenazas humanas",
  hubOrder: 2,
  pages: [
    {
      slug: "historia-redes-y-seguridad",
      title: "Historia de redes y seguridad informática",
      description: "De sistemas aislados a redes abiertas: por qué la seguridad es un proceso y no un producto.",
      readMinutes: 15,
    },
    {
      slug: "hackers-canales-y-proteccion",
      title: "Hackers, canales de ataque y protección",
      description: "Tipos de hacker, canales que usa el ciberdelincuente y medidas de protección personales y de equipo.",
      readMinutes: 17,
    },
    {
      slug: "principios-cia-y-autenticidad",
      title: "Principios CIA y autenticidad",
      description: "Confidencialidad, integridad, disponibilidad y autenticidad aplicados a decisiones técnicas.",
      readMinutes: 11,
    },
    {
      slug: "ingenieria-social-y-phishing",
      title: "Ingeniería social y phishing",
      description: "Señales, prevención y respuesta ante mensajes que manipulan a las personas.",
      readMinutes: 11,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios con pista, miniquiz y autoevaluación de historia, hackers, principios CIA y phishing.",
      readMinutes: 25,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-criptografia-comunicacion-segura",
  classTitle: "Clase 2: Criptografía y comunicación segura",
  hubOrder: 8,
  pages: [
    {
      slug: "base64-y-diferencias-con-cifrado",
      title: "Base64: codificación y malentendidos",
      description: "Qué es una codificación, cuándo se usa Base64 y por qué no protege información.",
      readMinutes: 11,
    },
    {
      slug: "criptografia-hash-sha256-y-buenas-practicas",
      title: "Cifrado, hash y SHA-256",
      description: "Diferencia entre cifrado, hash y firma, y buenas prácticas con claves y contraseñas.",
      readMinutes: 10,
    },
    {
      slug: "https-y-mitm",
      title: "HTTPS y ataques MITM",
      description: "Qué protege HTTPS, cómo funciona un ataque de intermediario y qué no resuelve.",
      readMinutes: 12,
    },
    {
      slug: "ataques-web-sqli-y-mitigacion",
      title: "Ataques web: SQL Injection",
      description: "Cómo ocurre la inyección SQL, su impacto y las mitigaciones del lado del servidor.",
      readMinutes: 13,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios con pista, miniquiz y autoevaluación de Base64, hash, HTTPS y SQL Injection.",
      readMinutes: 25,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-defensa-aplicaciones-riesgo",
  classTitle: "Clase 3: Defensa en aplicaciones y gestión del riesgo",
  hubOrder: 14,
  pages: [
    {
      slug: "proteccion-datos-cookies-y-jwt",
      title: "Cookies seguras y tokens JWT",
      description: "Protección de datos de sesión: banderas de cookies, tokens y políticas de sesión.",
      readMinutes: 11,
    },
    {
      slug: "programacion-segura-excepciones-logs-y-config-json",
      title: "Programación segura: excepciones, logs y configuración",
      description: "Manejo de errores por capas, registros útiles y configuración sin secretos embebidos.",
      readMinutes: 17,
    },
    {
      slug: "iso-y-normas-27001-27002",
      title: "Normas ISO/IEC 27001 y 27002",
      description: "Sistema de gestión de seguridad (27001) y catálogo de controles (27002).",
      readMinutes: 11,
    },
    {
      slug: "matriz-de-riesgos",
      title: "Matriz de riesgos",
      description: "Priorizar controles por impacto y probabilidad y justificar decisiones.",
      readMinutes: 17,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios con pista, miniquiz y autoevaluación de sesiones, programación segura, ISO y riesgos.",
      readMinutes: 25,
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
  "historia-redes-y-seguridad": buildPageSlug(CLASE_01.classSlug, "historia-redes-y-seguridad"),
  "hackers-canales-y-proteccion": buildPageSlug(CLASE_01.classSlug, "hackers-canales-y-proteccion"),
  "principios-cia-y-autenticidad": buildPageSlug(CLASE_01.classSlug, "principios-cia-y-autenticidad"),
  "ingenieria-social-y-phishing": buildPageSlug(CLASE_01.classSlug, "ingenieria-social-y-phishing"),
  "base64-y-diferencias-con-cifrado": buildPageSlug(CLASE_02.classSlug, "base64-y-diferencias-con-cifrado"),
  "criptografia-hash-sha256-y-buenas-practicas": buildPageSlug(CLASE_02.classSlug, "criptografia-hash-sha256-y-buenas-practicas"),
  "https-y-mitm": buildPageSlug(CLASE_02.classSlug, "https-y-mitm"),
  "ataques-web-sqli-y-mitigacion": buildPageSlug(CLASE_02.classSlug, "ataques-web-sqli-y-mitigacion"),
  "proteccion-datos-cookies-y-jwt": buildPageSlug(CLASE_03.classSlug, "proteccion-datos-cookies-y-jwt"),
  "programacion-segura-excepciones-logs-y-config-json": buildPageSlug(CLASE_03.classSlug, "programacion-segura-excepciones-logs-y-config-json"),
  "iso-y-normas-27001-27002": buildPageSlug(CLASE_03.classSlug, "iso-y-normas-27001-27002"),
  "matriz-de-riesgos": buildPageSlug(CLASE_03.classSlug, "matriz-de-riesgos"),
};
