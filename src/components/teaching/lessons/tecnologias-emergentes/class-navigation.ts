import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-fundamentos",
  classTitle: "Clase 1: Del concepto al primer componente",
  hubOrder: 0,
  pages: [
    {
      slug: "tecnologias-emergentes-y-javascript",
      title: "Qué son las tecnologías emergentes",
      description: "Definición, ciclo de adopción, criterios para decidir si adoptar una tecnología y por qué se practica con JavaScript.",
      readMinutes: 28,
    },
    {
      slug: "entorno-y-librerias",
      title: "Entorno de trabajo y librerías",
      description: "Terminal, Node, npm, package.json y qué es una librería.",
      readMinutes: 20,
    },
    {
      slug: "variables-y-funciones",
      title: "Variables, tipos y funciones flecha",
      description: "const y let, tipos, funciones flecha y operadores frecuentes en React.",
      readMinutes: 20,
    },
    {
      slug: "objetos-arrays-y-modulos",
      title: "Objetos, arreglos y módulos",
      description: "Objetos, desestructuración, map/filter/find/reduce, spread e import/export.",
      readMinutes: 22,
    },
    {
      slug: "primer-componente-react",
      title: "El primer proyecto con Vite y React",
      description: "Crear el proyecto, JSX, props, listas, condicionales y diseño responsive.",
      readMinutes: 25,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios, mini-quiz, autoevaluación y recursos.",
      readMinutes: 20,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-interfaces-con-react-y-mui",
  classTitle: "Clase 2: Interfaces administrativas con React y MUI",
  hubOrder: 0,
  pages: [
    {
      slug: "estado-y-eventos",
      title: "Estado y eventos",
      description: "useState, eventos, formularios controlados y cómo actualizar datos sin mutarlos.",
      readMinutes: 22,
    },
    {
      slug: "efectos-y-hooks-propios",
      title: "Efectos, hooks propios y contexto",
      description: "useEffect, cuándo no usarlo, hooks propios y Context.",
      readMinutes: 22,
    },
    {
      slug: "material-ui",
      title: "Material UI (MUI)",
      description: "Instalación, componentes, tema, sx y cómo leer una plantilla administrativa.",
      readMinutes: 25,
    },
    {
      slug: "ux-ui-administrativo",
      title: "UX y UI para sitios administrativos",
      description: "Principios de usabilidad, estados de la interfaz y accesibilidad.",
      readMinutes: 20,
    },
    {
      slug: "react-router",
      title: "Navegación con React Router",
      description: "Rutas, layouts, rutas anidadas, parámetros y navegación programática.",
      readMinutes: 25,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica guiada y cierre",
      description: "Práctica guiada, ejercicios, mini-quiz, autoevaluación y recursos.",
      readMinutes: 20,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-datos-reales-y-crud",
  classTitle: "Clase 3: Datos reales, CRUD y calidad",
  hubOrder: 0,
  pages: [
    {
      slug: "http-y-apis",
      title: "HTTP y APIs",
      description: "Cliente y servidor, métodos HTTP, códigos de estado y cómo probar una API.",
      readMinutes: 20,
    },
    {
      slug: "async-await-y-fetch",
      title: "Asincronía, async/await y fetch",
      description: "Promesas, async/await, manejo de errores y peticiones con fetch.",
      readMinutes: 25,
    },
    {
      slug: "crud-con-react",
      title: "CRUD completo con React",
      description: "Listar, crear, editar y eliminar registros contra una API.",
      readMinutes: 28,
    },
    {
      slug: "formularios-y-validacion",
      title: "Formularios y validación",
      description: "Validación manual, React Hook Form con Zod y por qué el servidor también valida.",
      readMinutes: 22,
    },
    {
      slug: "rendimiento-y-despliegue",
      title: "Rendimiento, calidad y despliegue",
      description: "Carga perezosa, buenas prácticas de código, variables de entorno y build.",
      readMinutes: 22,
    },
    {
      slug: "horizonte-y-cierre",
      title: "Panorama emergente y cierre",
      description: "Hacia dónde avanzan las tecnologías emergentes: qué adoptar y cuándo, ejercicios, mini-quiz y autoevaluación.",
      readMinutes: 22,
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
      prev: classIndex === 0 ? "index" : `${ALL_CLASSES[classIndex - 1]!.classSlug}/${ALL_CLASSES[classIndex - 1]!.pages.at(-1)!.slug}`,
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
