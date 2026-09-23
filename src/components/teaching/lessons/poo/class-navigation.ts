import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

/** Clase 1 — Fundamentos: POO, clase/objeto, encapsulamiento, diagrama simple. */
export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-fundamentos-poo",
  classTitle: "Clase 1: Fundamentos de POO",
  hubOrder: 2,
  pages: [
    {
      slug: "objetivos",
      title: "Objetivos de aprendizaje",
      description:
        "Qué lograrás en Clase 1: POO, encapsulamiento, diagrama caja y entregable Producto.",
      readMinutes: 7,
    },
    {
      slug: "fundamentos",
      title: "Qué es POO: clase, objeto, instancia y constructor",
      description:
        "De la programación estructurada a objetos; molde vs ejemplar; new y constructor en C#.",
      readMinutes: 28,
    },
    {
      slug: "encapsulamiento",
      title: "Encapsulamiento e invariantes",
      description:
        "Ocultar estado, exponer comportamiento; private/public; reglas que el objeto no deja romper.",
      readMinutes: 30,
    },
    {
      slug: "diagrama-clase-simple",
      title: "Diagrama de clases (intro)",
      description:
        "Caja UML: nombre, atributos y métodos; leer un diagrama simple del caso Tienda Andes.",
      readMinutes: 22,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Caso Tienda Andes (parte 1), reto, puente a Clase 2 y miniquiz de fundamentos.",
      readMinutes: 25,
    },
  ],
};

/** Clase 2 — Relaciones y reutilización. */
export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-relaciones-reutilizacion",
  classTitle: "Clase 2: Relaciones y reutilización",
  hubOrder: 9,
  pages: [
    {
      slug: "objetivos",
      title: "Objetivos de aprendizaje",
      description:
        "Qué lograrás en Clase 2: herencia, override/overload, relaciones y UML del caso.",
      readMinutes: 7,
    },
    {
      slug: "herencia",
      title: "Herencia: es-un y especialización",
      description: "Jerarquías, virtual/override básico y cuándo no heredar.",
      readMinutes: 22,
    },
    {
      slug: "override-y-sobrecarga",
      title: "Override vs sobrecarga",
      description: "Redefinir en la jerarquía vs mismos nombres con firmas distintas.",
      readMinutes: 25,
    },
    {
      slug: "asociacion-agregacion-composicion",
      title: "Asociación, agregación y composición",
      description: "Tiene-un / usa: ciclo de vida y fuerza del vínculo entre objetos.",
      readMinutes: 28,
    },
    {
      slug: "diagramas-relaciones",
      title: "Diagramas con relaciones",
      description:
        "Herencia, interfaces y vínculos en UML; caso integrado de la tienda.",
      readMinutes: 30,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Tienda Andes (parte 2), reto de diseño y miniquiz de relaciones.",
      readMinutes: 25,
    },
  ],
};

/** Clase 3 — Experto: abstracción, polimorfismo, SOLID, modularidad. */
export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-experto-poo",
  classTitle: "Clase 3: Experto — abstracción, SOLID y diseño",
  hubOrder: 16,
  pages: [
    {
      slug: "objetivos",
      title: "Objetivos de aprendizaje",
      description:
        "Qué lograrás en Clase 3: abstracción, polimorfismo, SOLID y modularidad.",
      readMinutes: 7,
    },
    {
      slug: "abstraccion-clases-abstractas-interfaces",
      title: "Abstracción, abstractas e interfaces",
      description: "Contratos vs implementación; cuándo abstract y cuándo interface.",
      readMinutes: 23,
    },
    {
      slug: "polimorfismo",
      title: "Polimorfismo",
      description: "Una referencia, muchos comportamientos; despacho con herencia e interfaces.",
      readMinutes: 28,
    },
    {
      slug: "solid-principios",
      title: "Principios SOLID",
      description: "SRP, OCP, LSP, ISP, DIP aplicados al caso de la tienda.",
      readMinutes: 35,
    },
    {
      slug: "modularidad-cohesion-acoplamiento",
      title: "Modularidad, cohesión y acoplamiento",
      description: "Partir el sistema sin frágil dependencia; checklist de diseño.",
      readMinutes: 28,
    },
    {
      slug: "practica-y-cierre",
      title: "Reto integrador y cierre del módulo",
      description: "Diseño completo Tienda Andes, miniquiz experto y cierre del track.",
      readMinutes: 30,
    },
  ],
};

export const ALL_CLASSES = [CLASE_01, CLASE_02, CLASE_03] as const;

export function buildPageSlug(classSlug: string, pageSlug: string): string {
  return `${classSlug}/${pageSlug}`;
}

export function getClassFirstPageSlug(config: ClassNavConfig): string {
  return buildPageSlug(config.classSlug, config.pages[0]!.slug);
}

export function getClassLastPageSlug(config: ClassNavConfig): string {
  return buildPageSlug(config.classSlug, config.pages[config.pages.length - 1]!.slug);
}

/** Old flat topic slugs → live class page (aliases / legacy bookmarks). */
export const LEGACY_TOPIC_REDIRECTS: Record<string, string> = {
  fundamentos: buildPageSlug(CLASE_01.classSlug, "fundamentos"),
  encapsulamiento: buildPageSlug(CLASE_01.classSlug, "encapsulamiento"),
  "diagramas-de-clases": buildPageSlug(CLASE_02.classSlug, "diagramas-relaciones"),
  herencia: buildPageSlug(CLASE_02.classSlug, "herencia"),
  "override-y-sobrecarga": buildPageSlug(CLASE_02.classSlug, "override-y-sobrecarga"),
  "asociacion-agregacion-composicion": buildPageSlug(
    CLASE_02.classSlug,
    "asociacion-agregacion-composicion",
  ),
  "abstraccion-clases-abstractas-interfaces": buildPageSlug(
    CLASE_03.classSlug,
    "abstraccion-clases-abstractas-interfaces",
  ),
  polimorfismo: buildPageSlug(CLASE_03.classSlug, "polimorfismo"),
  "solid-principios": buildPageSlug(CLASE_03.classSlug, "solid-principios"),
  "modularidad-cohesion-acoplamiento": buildPageSlug(
    CLASE_03.classSlug,
    "modularidad-cohesion-acoplamiento",
  ),
};

/**
 * Cadena de navegación sin hubs de clase.
 * index → 1.ª página clase N → … → última → 1.ª página clase N+1
 */
export function getPageNavChain(): { slug: string; prev: string | null; next: string | null; order: number }[] {
  const firstOfClass1 = getClassFirstPageSlug(CLASE_01);
  const chain: { slug: string; prev: string | null; next: string | null; order: number }[] = [
    { slug: "index", prev: null, next: firstOfClass1, order: 1 },
  ];

  let order = 2;

  ALL_CLASSES.forEach((config, classIndex) => {
    config.pages.forEach((page, pageIndex) => {
      const fullSlug = buildPageSlug(config.classSlug, page.slug);
      const prevSlug =
        pageIndex === 0
          ? classIndex === 0
            ? "index"
            : getClassLastPageSlug(ALL_CLASSES[classIndex - 1]!)
          : buildPageSlug(config.classSlug, config.pages[pageIndex - 1]!.slug);
      const nextSlug =
        pageIndex === config.pages.length - 1
          ? classIndex === ALL_CLASSES.length - 1
            ? null
            : getClassFirstPageSlug(ALL_CLASSES[classIndex + 1]!)
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
