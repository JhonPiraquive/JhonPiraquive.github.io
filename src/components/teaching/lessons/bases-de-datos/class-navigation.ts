import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

/** Clase 1 — Fundamentos y modelado de datos (nivel 0–30). */
export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-fundamentos-bd",
  classTitle: "Clase 1: Fundamentos y modelado de datos",
  hubOrder: 2,
  pages: [
    {
      slug: "historia-como-motivacion",
      title: "Historia como motivación",
      description:
        "De archivos planos a Codd y SQL; contraste rápido relacional vs NoSQL (no es un curso de historia).",
      readMinutes: 28,
    },
    {
      slug: "que-es-y-tipos",
      title: "Qué es una BD, SGBD y tipos",
      description:
        "Define BD frente a SGBD, compara relacional vs NoSQL (Not Only SQL) y elige según el escenario.",
      readMinutes: 22,
    },
    {
      slug: "motores-y-gestores",
      title: "Motores, GUI y CLI",
      description:
        "Distingue motor (MySQL, MariaDB, MongoDB) de GUI (phpMyAdmin, Workbench, DBeaver, Compass) y CLI.",
      readMinutes: 20,
    },
    {
      slug: "estructura-tablas-campos",
      title: "Tabla, campo, registro y valor",
      description:
        "Abecedario relacional: Nombre_Programa, literales con comillas y el diagrama de Programas.",
      readMinutes: 18,
    },
    {
      slug: "familias-relacional-nosql-grafos",
      title: "Familias: relacional, NoSQL y grafos",
      description: "Contexto de diseño por forma de pregunta",
      readMinutes: 12,
    },
    {
      slug: "modelos-conceptual-logico-fisico",
      title: "Modelos: conceptual, lógico y físico",
      description: "Plano del negocio vs tipos SQL; del requisito al diseño",
      readMinutes: 18,
    },
    {
      slug: "diagramas-er",
      title: "Diagramas entidad-relación (ER)",
      description: "Entidades, atributos, relaciones, cardinalidad y erDiagram",
      readMinutes: 15,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description:
        "Práctica guiada, reto integrador, miniquiz y autoevaluación de fundamentos y modelado.",
      readMinutes: 30,
    },
  ],
};

/** Clase 2 — Del diseño al esquema en SQL (nivel 30–65). */
export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-del-diseno-al-esquema",
  classTitle: "Clase 2: Del diseño al esquema en SQL",
  hubOrder: 10,
  pages: [
    {
      slug: "redundancia-y-dependencia-funcional",
      title: "Del Excel sucio a las reglas del esquema",
      description: "Anomalías de inserción/actualización/borrado y DF (A → B)",
      readMinutes: 15,
    },
    {
      slug: "formas-normales-1-2-3",
      title: "Formas normales 1FN, 2FN y 3FN",
      description: "Checklist ejecutable 1FN→2FN→3FN + mención BCNF",
      readMinutes: 22,
    },
    {
      slug: "desnormalizacion-y-bi",
      title: "Desnormalización consciente y esquemas BI",
      description: "Cuándo desnormalizar; estrella vs copo de nieve",
      readMinutes: 20,
    },
    {
      slug: "transformacion-tipos-llaves",
      title: "Transformación ER→SQL, tipos y llaves",
      description: "ER → tablas, tipos, PK/FK, padres primero",
      readMinutes: 20,
    },
    {
      slug: "ddl-estructura",
      title: "DDL: crear y modificar el esquema",
      description: "CREATE/DROP DATABASE y TABLE, ALTER y AUTO INCREMENT",
      readMinutes: 20,
    },
    {
      slug: "ddl-restricciones",
      title: "Restricciones: PK, UNIQUE y NOT NULL",
      description: "Integridad de filas y atributos de negocio en el motor",
      readMinutes: 15,
    },
    {
      slug: "dml-insert-select",
      title: "DML: insertar y consultar",
      description: "INSERT, SELECT y reglas de nombres/comillas",
      readMinutes: 15,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description:
        "Práctica guiada, reto integrador, miniquiz y autoevaluación del diseño al esquema en SQL.",
      readMinutes: 30,
    },
  ],
};

/** Clase 3 — Consultas y administración (nivel 65–100). */
export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-consultas-y-administracion",
  classTitle: "Clase 3: Consultas y administración",
  hubOrder: 18,
  pages: [
    {
      slug: "dml-filtros-orden",
      title: "WHERE, DISTINCT, ORDER BY y LIMIT",
      description: "Filtrar, deduplicar, ordenar y acotar resultados",
      readMinutes: 18,
    },
    {
      slug: "agregados-group-having",
      title: "Agregados, GROUP BY y HAVING",
      description: "AVG/SUM/COUNT/MAX/MIN y filtros sobre grupos",
      readMinutes: 18,
    },
    {
      slug: "update-delete",
      title: "UPDATE y DELETE con WHERE y backup",
      description: "Advertencia crítica: nunca sin WHERE",
      readMinutes: 15,
    },
    {
      slug: "relacional-fk-joins",
      title: "Consultas entre tablas: JOINs",
      description: "INNER, LEFT y RIGHT JOIN con el caso de la Clase 2",
      readMinutes: 22,
    },
    {
      slug: "mapa-sql-familias",
      title: "Mapa SQL: DDL / DML / DCL / TCL",
      description: "Completa el mapa SQL; etiquetar cualquier sentencia",
      readMinutes: 12,
    },
    {
      slug: "dcl-grant-revoke",
      title: "DCL: GRANT, REVOKE y mínimo privilegio",
      description: "Usuarios/roles, privilegios acotados y offboarding",
      readMinutes: 15,
    },
    {
      slug: "tcl-transacciones-acid",
      title: "TCL y ACID: COMMIT, ROLLBACK, SAVEPOINT",
      description: "Inscripción atómica cupo + matrícula; Atomicity",
      readMinutes: 18,
    },
    {
      slug: "vistas",
      title: "CREATE VIEW, proyección y vs tabla",
      description: "Consulta guardada, seguridad por columnas, límites honestos",
      readMinutes: 12,
    },
    {
      slug: "funciones-procedimientos-triggers",
      title: "UDF, PROCEDURE, TRIGGER y app vs BD",
      description: "Valor vs proceso vs automático; criterio de diseño LATAM",
      readMinutes: 20,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description:
        "Práctica guiada, reto integrador, miniquiz y autoevaluación de consultas y administración.",
      readMinutes: 35,
    },
  ],
};

export const ALL_CLASSES = [CLASE_01, CLASE_02, CLASE_03] as const;

export function buildPageSlug(classSlug: string, pageSlug: string): string {
  return `${classSlug}/${pageSlug}`;
}

/** First content page of a class (hubs/índices de clase ya no forman parte de la cadena). */
export function getClassFirstPageSlug(config: ClassNavConfig): string {
  return buildPageSlug(config.classSlug, config.pages[0]!.slug);
}

export function getClassLastPageSlug(config: ClassNavConfig): string {
  return buildPageSlug(config.classSlug, config.pages[config.pages.length - 1]!.slug);
}

/** Old class slugs → first live page (aliases / legacy bookmarks). */
export const LEGACY_CLASS_REDIRECTS: Record<string, string> = {
  "clase-01-historia-bases-de-datos": getClassFirstPageSlug(CLASE_01),
  "clase-02-fundamentos-motores-estructura": buildPageSlug(CLASE_01.classSlug, "que-es-y-tipos"),
  "clase-03-modelos-datos-er": buildPageSlug(CLASE_01.classSlug, "modelos-conceptual-logico-fisico"),
  "clase-04-ddl-dml-relacional": buildPageSlug(CLASE_02.classSlug, "ddl-estructura"),
  "clase-05-normalizacion-esquemas": getClassFirstPageSlug(CLASE_02),
  "clase-06-dcl-tcl-objetos-bd": buildPageSlug(CLASE_03.classSlug, "mapa-sql-familias"),
  "clase-02-diseno-modelos-er": buildPageSlug(CLASE_01.classSlug, "modelos-conceptual-logico-fisico"),
  "clase-03-sql-ddl-dml": buildPageSlug(CLASE_02.classSlug, "ddl-estructura"),
  "clase-04-experto-bd": getClassFirstPageSlug(CLASE_02),
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
