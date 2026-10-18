import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-fundamentos-lenguaje",
  classTitle: "Clase 1: Fundamentos del lenguaje JavaScript",
  hubOrder: 2,
  pages: [
    {
      slug: "intro-js-y-dom",
      title: "Introducción a JavaScript y al DOM",
      description: "Qué es JavaScript, su historia y ámbitos de uso, y el DOM como puente entre HTML y la lógica.",
      readMinutes: 16,
    },
    {
      slug: "js-en-html",
      title: "JavaScript en HTML y consola",
      description: "Scripts inline y externos, ubicación del script, Hola mundo y depuración con la consola.",
      readMinutes: 18,
    },
    {
      slug: "variables-y-tipos",
      title: "Variables, hoisting y tipos de datos",
      description: "var, let y const, hoisting, zona muerta temporal y tipos primitivos.",
      readMinutes: 22,
    },
    {
      slug: "operadores-y-decisiones",
      title: "Operadores y decisiones",
      description: "Operadores aritméticos, comparación estricta, valores truthy, if/else y switch.",
      readMinutes: 19,
    },
    {
      slug: "bucles-y-errores",
      title: "Bucles y manejo de errores",
      description: "for, while, do-while, break, continue y try/catch/finally.",
      readMinutes: 21,
    },
    {
      slug: "funciones-y-callbacks",
      title: "Funciones y callbacks",
      description: "Declaración, expresión y arrow function, parámetros, retorno y callbacks.",
      readMinutes: 18,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, reto integrador, miniquiz y autoevaluación de los fundamentos del lenguaje.",
      readMinutes: 30,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-datos-objetos-pagina-viva",
  classTitle: "Clase 2: Datos, objetos y la página viva",
  hubOrder: 9,
  pages: [
    {
      slug: "arrays-json-objetos",
      title: "Arrays, JSON y objetos",
      description: "Arrays y sus métodos, callbacks de array, JSON y objetos literales.",
      readMinutes: 20,
    },
    {
      slug: "this-scope-clases",
      title: "Ámbito, this y clases",
      description: "Scope, el valor de this, clases ES6 y herencia.",
      readMinutes: 24,
    },
    {
      slug: "estructuras-de-datos",
      title: "Estructuras de datos",
      description: "Map, Set, pila LIFO y cola FIFO y cuándo usar cada una.",
      readMinutes: 22,
    },
    {
      slug: "dom-y-eventos",
      title: "DOM y eventos",
      description: "Seleccionar y modificar nodos del DOM y responder a eventos.",
      readMinutes: 24,
    },
    {
      slug: "proyecto-piedra-papel-tijera",
      title: "Proyecto: piedra, papel o tijera",
      description: "Un juego completo en el navegador que integra lógica, DOM y eventos.",
      readMinutes: 22,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, retos de ampliación, miniquiz y autoevaluación de datos, objetos, DOM y eventos.",
      readMinutes: 30,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-asincronia-datos-remotos-proyectos",
  classTitle: "Clase 3: Asincronía, datos remotos y proyectos",
  hubOrder: 16,
  pages: [
    {
      slug: "asincronia",
      title: "Asincronía: temporizadores, promesas y async/await",
      description: "Sincronía frente a asincronía, temporizadores, promesas y async/await.",
      readMinutes: 22,
    },
    {
      slug: "ajax-fetch",
      title: "AJAX y la API fetch",
      description: "Peticiones HTTP desde el navegador con fetch y lectura de respuestas JSON.",
      readMinutes: 18,
    },
    {
      slug: "proyecto-calculadora",
      title: "Proyecto: calculadora interactiva",
      description: "Calculadora con estado, delegación de eventos y función pura de cálculo.",
      readMinutes: 26,
    },
    {
      slug: "proyecto-lista-de-tareas",
      title: "Proyecto: lista de tareas",
      description: "Estado como array de objetos, render, filtros, persistencia y puente a una API.",
      readMinutes: 25,
    },
    {
      slug: "proyecto-ajedrez",
      title: "Proyecto: ajedrez en el navegador",
      description: "Matriz 2D, renderizado, flujo de dos clics, validación, deshacer y persistencia.",
      readMinutes: 28,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, retos avanzados, miniquiz y autoevaluación de asincronía, fetch y proyectos.",
      readMinutes: 30,
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

/** Slugs de lecciones anteriores (temas y proyectos sueltos) → página equivalente vigente (alias de URLs antiguas). */
export const LEGACY_CLASS_REDIRECTS: Record<string, string> = {
  "01-intro-js-y-dom": buildPageSlug(CLASE_01.classSlug, "intro-js-y-dom"),
  "02-js-en-html": buildPageSlug(CLASE_01.classSlug, "js-en-html"),
  "03-variables-y-tipos": buildPageSlug(CLASE_01.classSlug, "variables-y-tipos"),
  "04-operadores-y-decisiones": buildPageSlug(CLASE_01.classSlug, "operadores-y-decisiones"),
  "05-bucles-y-errores": buildPageSlug(CLASE_01.classSlug, "bucles-y-errores"),
  "06-funciones-y-callbacks": buildPageSlug(CLASE_01.classSlug, "funciones-y-callbacks"),
  "07-arrays-json-objetos": buildPageSlug(CLASE_02.classSlug, "arrays-json-objetos"),
  "08-this-scope-clases": buildPageSlug(CLASE_02.classSlug, "this-scope-clases"),
  "09-estructuras-de-datos": buildPageSlug(CLASE_02.classSlug, "estructuras-de-datos"),
  "10-dom-y-eventos": buildPageSlug(CLASE_02.classSlug, "dom-y-eventos"),
  "proyectos/piedra-papel-tijera": buildPageSlug(CLASE_02.classSlug, "proyecto-piedra-papel-tijera"),
  "11-asincronia": buildPageSlug(CLASE_03.classSlug, "asincronia"),
  "12-ajax-fetch": buildPageSlug(CLASE_03.classSlug, "ajax-fetch"),
  "proyectos/calculadora": buildPageSlug(CLASE_03.classSlug, "proyecto-calculadora"),
  "proyectos/todo-list": buildPageSlug(CLASE_03.classSlug, "proyecto-lista-de-tareas"),
  "proyectos/ajedrez": buildPageSlug(CLASE_03.classSlug, "proyecto-ajedrez"),
};
