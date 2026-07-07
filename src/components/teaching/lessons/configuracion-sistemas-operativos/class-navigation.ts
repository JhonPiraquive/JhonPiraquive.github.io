import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-arquitectura-computador",
  classTitle: "Clase 1: Arquitectura del computador",
  hubOrder: 2,
  pages: [
    {
      slug: "chasis-y-carcasas",
      title: "Chasis y carcasas",
      description: "Form factors, torres, montaje y flujo de aire.",
      readMinutes: 16,
    },
    {
      slug: "cpu-y-microprocesador",
      title: "CPU y microprocesador",
      description: "Núcleos, reloj, sockets y refrigeración.",
      readMinutes: 18,
    },
    {
      slug: "memoria-cache-binario",
      title: "Caché y sistema binario",
      description: "Jerarquía de memoria, bits, bytes y conversión.",
      readMinutes: 18,
    },
    {
      slug: "memoria-ram-rom",
      title: "Memoria RAM y ROM",
      description: "Volátil vs no volátil, DDR, EEPROM y BIOS.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Ejercicios, reto integrador y miniquiz de arquitectura.",
      readMinutes: 20,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-dispositivos-almacenamiento",
  classTitle: "Clase 2: Dispositivos de almacenamiento y periféricos",
  hubOrder: 8,
  pages: [
    {
      slug: "discos-almacenamiento",
      title: "Discos y almacenamiento",
      description: "HDD, SSD, SAS, comparativa y unidad óptica.",
      readMinutes: 20,
    },
    {
      slug: "perifericos-monitor",
      title: "Periféricos y monitor",
      description: "Entrada/salida, resolución, píxeles y ergonomía.",
      readMinutes: 18,
    },
    {
      slug: "hoja-vida-licencias",
      title: "Hoja de vida del PC y licencias",
      description: "Inventario hardware/software y tipos de licencia en Colombia.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Comprueba tu comprensión, reto integrador y miniquiz.",
      readMinutes: 20,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-sistemas-operativos",
  classTitle: "Clase 3: Sistemas operativos, consola y respaldo",
  hubOrder: 14,
  pages: [
    {
      slug: "tipos-sistemas-operativos",
      title: "Tipos de sistemas operativos",
      description: "Escritorio, móvil, servidor y casos de uso.",
      readMinutes: 16,
    },
    {
      slug: "instalacion-configuracion",
      title: "Instalación y configuración",
      description: "Particiones, arranque y post-instalación.",
      readMinutes: 18,
    },
    {
      slug: "consola-comandos",
      title: "Consola y comandos",
      description: "Terminal Linux/Windows, rutas y diagnóstico básico.",
      readMinutes: 20,
    },
    {
      slug: "usuarios-permisos-rutas",
      title: "Usuarios, permisos y rutas",
      description: "Cuentas locales, grupos, ACL y buenas prácticas.",
      readMinutes: 18,
    },
    {
      slug: "respaldo-informacion",
      title: "Respaldo de información",
      description: "Niveles de backup, 3-2-1 y restauración.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Reto integrador, ejercicios y cierre del track.",
      readMinutes: 20,
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
