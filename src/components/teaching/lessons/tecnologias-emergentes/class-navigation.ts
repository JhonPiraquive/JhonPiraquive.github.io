import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-identificar-tecnologias-emergentes",
  classTitle: "Clase 1: Identificar una tecnología emergente",
  hubOrder: 0,
  pages: [
    {
      slug: "que-es-una-tecnologia-emergente",
      title: "Qué es una tecnología emergente",
      description: "Definición, cinco atributos, diferencia con una moda y ejemplos de tecnologías que fueron emergentes.",
      readMinutes: 20,
    },
    {
      slug: "como-evoluciona",
      title: "Cómo evoluciona una tecnología",
      description: "Curva S, ciclo de sobreexpectación, difusión de innovaciones, el abismo y niveles de madurez tecnológica.",
      readMinutes: 25,
    },
    {
      slug: "como-identificarlas",
      title: "Cómo identificar una tecnología emergente",
      description: "Señales, fuentes de vigilancia, radar tecnológico y una ficha para analizar una tecnología.",
      readMinutes: 22,
    },
    {
      slug: "panorama-actual",
      title: "Tecnologías emergentes hoy",
      description: "Inteligencia artificial, computación espacial, IoT, robótica, energía, biotecnología y tecnologías de la web.",
      readMinutes: 22,
    },
    {
      slug: "tecnologias-del-futuro",
      title: "Posibles tecnologías emergentes del futuro",
      description: "Horizontes de innovación, candidatas para los próximos años y los límites de predecir el futuro.",
      readMinutes: 20,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios, mini-quiz, autoevaluación y recursos.",
      readMinutes: 25,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-inteligencia-artificial-moderna",
  classTitle: "Clase 2: La inteligencia artificial moderna, de modelos a agentes",
  hubOrder: 0,
  pages: [
    {
      slug: "modelos-de-lenguaje",
      title: "Qué es un modelo de lenguaje",
      description: "De la IA al modelo de lenguaje, tokens, entrenamiento e inferencia, tipos de modelos y sus límites.",
      readMinutes: 25,
    },
    {
      slug: "prompts-contexto-y-sesiones",
      title: "Prompts, contexto y sesiones",
      description: "Roles de los mensajes, ventana de contexto, sesiones sin memoria, compactación, memoria persistente y RAG.",
      readMinutes: 25,
    },
    {
      slug: "herramientas-y-agentes",
      title: "Herramientas, agentes y harness",
      description: "Uso de herramientas, el ciclo de un agente, qué es un harness, subagentes y niveles de autonomía.",
      readMinutes: 25,
    },
    {
      slug: "extender-un-agente",
      title: "Extender un agente: instrucciones, comandos, skills, MCP, hooks y plugins",
      description: "Archivos de instrucciones, comandos, skills, el protocolo MCP, hooks, plugins y cuándo usar cada uno.",
      readMinutes: 28,
    },
    {
      slug: "riesgos-y-uso-responsable",
      title: "Riesgos y uso responsable de la IA",
      description: "Permisos, inyección de instrucciones, secretos, verificación de lo generado, ética y regulación.",
      readMinutes: 22,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios, mini-quiz, autoevaluación y recursos.",
      readMinutes: 25,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-decidir-y-adoptar",
  classTitle: "Clase 3: Decidir si adoptar una tecnología y cómo hacerlo",
  hubOrder: 0,
  pages: [
    {
      slug: "criterios-de-decision",
      title: "Criterios para decidir",
      description: "Criterios técnicos, de negocio y de personas, matriz de decisión ponderada y por qué lo nuevo no siempre es lo mejor.",
      readMinutes: 25,
    },
    {
      slug: "de-la-idea-a-la-adopcion",
      title: "De la idea a la adopción",
      description: "Prueba de concepto, piloto, métricas de éxito y los anillos de un radar tecnológico.",
      readMinutes: 22,
    },
    {
      slug: "registrar-y-gestionar-la-decision",
      title: "Registrar y gestionar la decisión",
      description: "Registro de decisión (ADR), riesgos, reversibilidad, plan de salida y gestión del cambio.",
      readMinutes: 22,
    },
    {
      slug: "casos-de-decision",
      title: "Casos de decisión",
      description: "Un equipo que evalúa un agente de programación y un panel administrativo que elige su pila web.",
      readMinutes: 25,
    },
    {
      slug: "aprender-y-mantenerse-al-dia",
      title: "Aprender una tecnología nueva y mantenerse al día",
      description: "Un método para aprender cualquier tecnología, aprender con IA sin dejar de aprender y vigilancia personal.",
      readMinutes: 20,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios, mini-quiz, autoevaluación y recursos.",
      readMinutes: 25,
    },
  ],
};

export const APOYO_01: ClassNavConfig = {
  classSlug: "apoyo-react-01-javascript-y-componentes",
  classTitle: "Guía de apoyo React, parte 1: JavaScript moderno y primer componente",
  hubOrder: 0,
  pages: [
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

export const APOYO_02: ClassNavConfig = {
  classSlug: "apoyo-react-02-interfaces-mui-router",
  classTitle: "Guía de apoyo React, parte 2: interfaces con MUI y React Router",
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

export const APOYO_03: ClassNavConfig = {
  classSlug: "apoyo-react-03-datos-y-crud",
  classTitle: "Guía de apoyo React, parte 3: datos reales, CRUD y calidad",
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
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Práctica guiada, ejercicios, mini-quiz, autoevaluación y recursos.",
      readMinutes: 22,
    },
  ],
};

/** Clases del módulo seguidas de la guía de apoyo React (misma cadena de navegación). */
export const MAIN_CLASSES = [CLASE_01, CLASE_02, CLASE_03] as const;
export const APOYO_REACT = [APOYO_01, APOYO_02, APOYO_03] as const;
export const ALL_CLASSES = [...MAIN_CLASSES, ...APOYO_REACT] as const;

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
