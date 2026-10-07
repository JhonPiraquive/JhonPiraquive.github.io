import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-sistemas-informacion",
  classTitle: "Clase 1: Sistemas de información",
  hubOrder: 2,
  pages: [
    {
      slug: "que-es-un-sistema",
      title: "Qué es un sistema de información",
      description: "Definición, entrada, proceso, salida y elementos que lo hacen funcionar.",
      readMinutes: 18,
    },
    {
      slug: "tipos-y-uso",
      title: "Tipos y uso en la organización",
      description: "Sistemas abiertos y cerrados, y TPS, DSS, estratégicos y ERP.",
      readMinutes: 18,
    },
    {
      slug: "roles-y-calidad",
      title: "Roles, metodologías y calidad",
      description: "Papel del tecnólogo, roles del equipo y criterios para evaluar un sistema.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Cierre y miniquiz",
      description: "Síntesis de la clase y miniquiz de sistemas de información.",
      readMinutes: 12,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-analisis-y-modelado",
  classTitle: "Clase 2: Análisis y modelado",
  hubOrder: 7,
  pages: [
    {
      slug: "uml-y-vocabulario",
      title: "UML y vocabulario de modelado",
      description: "Modelo, clase, objeto, actor, requerimiento y caso de uso, desde cero.",
      readMinutes: 20,
    },
    {
      slug: "ciclo-de-vida",
      title: "Ciclo de vida del software",
      description: "Qué es el ciclo de vida y las fases desde la planificación hasta el mantenimiento.",
      readMinutes: 18,
    },
    {
      slug: "modelos-y-objetos",
      title: "Modelos clásicos y orientación a objetos",
      description: "Cascada frente a ágil, herencia y ventajas de modelar con objetos.",
      readMinutes: 20,
    },
    {
      slug: "levantamiento-de-requerimientos",
      title: "Levantamiento de requerimientos",
      description: "Cascada, actas de planificación y entrevistas con los interesados.",
      readMinutes: 20,
    },
    {
      slug: "practica-y-cierre",
      title: "Cierre y miniquiz",
      description: "Síntesis de análisis y modelado, más miniquiz.",
      readMinutes: 12,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-diseno-y-scrum",
  classTitle: "Clase 3: Diseño, casos de uso y Scrum",
  hubOrder: 4,
  pages: [
    {
      slug: "caso-logistica",
      title: "Caso Logística SAS",
      description: "Problemática, objetivos, actores, clases y diagrama de análisis.",
      readMinutes: 20,
    },
    {
      slug: "casos-de-uso",
      title: "Casos de uso",
      description: "Notación UML, relaciones include y extend, y plantilla de especificación.",
      readMinutes: 20,
    },
    {
      slug: "requerimientos-y-prototipos",
      title: "Requerimientos y prototipos",
      description: "Requisitos funcionales y no funcionales, pantallas y metodologías híbridas.",
      readMinutes: 18,
    },
    {
      slug: "scrum",
      title: "Scrum: roles, eventos y artefactos",
      description: "Historias de usuario, backlog, sprint, tablero y gráfico de trabajo pendiente.",
      readMinutes: 20,
    },
    {
      slug: "practica-y-cierre",
      title: "Cierre y miniquiz",
      description: "Síntesis del módulo y miniquiz de diseño y Scrum.",
      readMinutes: 12,
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

export function getPageMetaBase(
  config: ClassNavConfig,
  pageSlug: string,
): Pick<LessonMeta, "slug" | "prev" | "next" | "order" | "pageNumber" | "totalPages" | "classTitle"> {
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

type LessonMeta = {
  slug: string;
  prev?: string | null;
  next?: string | null;
  order: number;
  pageNumber?: number;
  totalPages?: number;
  classTitle?: string;
};
