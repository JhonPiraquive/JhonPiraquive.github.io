import type { ClassPageLink } from "@/components/teaching/ClassPagesNavSection";

export type ClassNavConfig = {
  classSlug: string;
  classTitle: string;
  hubOrder: number;
  pages: ClassPageLink[];
};

export const CLASE_01: ClassNavConfig = {
  classSlug: "clase-01-historia-bases-de-datos",
  classTitle: "Clase 1: Historia de las bases de datos",
  hubOrder: 2,
  pages: [
    {
      slug: "linea-de-tiempo-y-archivos",
      title: "Línea de tiempo y archivos planos",
      description: "Por qué importa la historia, timeline de 7 etapas y el problema raíz de los archivos planos.",
      readMinutes: 18,
    },
    {
      slug: "navegacion-y-codd",
      title: "Navegación por punteros y Codd 1970",
      description: "IMS/CODASYL, modelo relacional e independencia de datos.",
      readMinutes: 20,
    },
    {
      slug: "sql-comercial-e-imperio",
      title: "SQL comercial e imperio relacional",
      description: "System R, Oracle, SQL estándar y el puente ER de Chen.",
      readMinutes: 20,
    },
    {
      slug: "nosql-convergencia-y-sintesis",
      title: "NoSQL, convergencia y comparación de modelos",
      description: "Web-scale, NewSQL/cloud, comparación de modelos, errores y casos LATAM.",
      readMinutes: 22,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto AndinaMarket y cierre",
      description: "Cinco ejercicios, reto integrador, cierre y miniquiz.",
      readMinutes: 25,
    },
  ],
};

export const CLASE_02: ClassNavConfig = {
  classSlug: "clase-02-fundamentos-motores-estructura",
  classTitle: "Clase 2: Fundamentos, motores y estructura",
  hubOrder: 8,
  pages: [
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
      slug: "practica-y-cierre",
      title: "Práctica, reto Andes Tech y cierre",
      description: "Cinco ejercicios, reto integrador Andes Tech, cierre y miniquiz.",
      readMinutes: 22,
    },
  ],
};

export const CLASE_03: ClassNavConfig = {
  classSlug: "clase-03-modelos-datos-er",
  classTitle: "Clase 3: Modelos de datos y diagramas ER",
  hubOrder: 13,
  pages: [
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
      slug: "familias-relacional-nosql-grafos",
      title: "Familias: relacional, NoSQL y grafos",
      description: "Contexto de diseño por forma de pregunta (estrella/copo diferido a clase 5)",
      readMinutes: 12,
    },
    {
      slug: "transformacion-tipos-llaves",
      title: "Transformación ER→SQL, tipos y llaves",
      description: "ER → tablas, tipos, PK/FK, padres primero",
      readMinutes: 20,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica y cierre",
      description: "Ejercicios, reto, cierre y miniquiz",
      readMinutes: 25,
    },
  ],
};

export const CLASE_04: ClassNavConfig = {
  classSlug: "clase-04-ddl-dml-relacional",
  classTitle: "Clase 4: DDL, DML y consultas SQL",
  hubOrder: 22,
  pages: [
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
      description: "INNER, LEFT y RIGHT JOIN con ejemplos",
      readMinutes: 22,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Ejercicios, reto, cierre y miniquiz",
      readMinutes: 25,
    },
  ],
};

export const CLASE_05: ClassNavConfig = {
  classSlug: "clase-05-normalizacion-esquemas",
  classTitle: "Clase 5: Normalización, desnormalización y copo de nieve",
  hubOrder: 28,
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
      description: "Checklist ejecutable 1FN→2FN→3FN + mención BCNF y SQL",
      readMinutes: 22,
    },
    {
      slug: "desnormalizacion",
      title: "Desnormalización consciente",
      description: "Cuándo / por qué / riesgos; snapshot de factura",
      readMinutes: 12,
    },
    {
      slug: "estrella-y-copo-de-nieve",
      title: "Estrella y copo de nieve",
      description: "Dims planas vs normalizadas en BI (no OLTP)",
      readMinutes: 12,
    },
    {
      slug: "practica-y-cierre",
      title: "Práctica, reto y cierre",
      description: "Ejercicios, reto Rutas Digitales, cierre y miniquiz",
      readMinutes: 25,
    },
  ],
};

export const CLASE_06: ClassNavConfig = {
  classSlug: "clase-06-dcl-tcl-objetos-bd",
  classTitle: "Clase 6: DCL, TCL, vistas, funciones, procedimientos y triggers",
  hubOrder: 34,
  pages: [
    {
      slug: "mapa-sql-familias",
      title: "Del abecedario completo · DDL / DML / DCL / TCL",
      description: "Completa el mapa SQL con DCL y TCL; etiquetar cualquier sentencia",
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
      title: "Práctica, reto y cierre",
      description: "Lab, ejercicios, reto Matrícula segura, miniquiz",
      readMinutes: 25,
    },
  ],
};

export const ALL_CLASSES = [CLASE_01, CLASE_02, CLASE_03, CLASE_04, CLASE_05, CLASE_06] as const;

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
