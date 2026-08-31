---
track: bases-de-datos
slug: clase-01-historia-bases-de-datos
title: "Historia de las Bases de Datos"
order: 2
prerequisites:
  - index
audience: student
modo: narrativa
pagination: true
pages:
  - hub
  - linea-de-tiempo-y-archivos
  - navegacion-y-codd
  - sql-comercial-e-imperio
  - nosql-convergencia-y-sintesis
  - practica-y-cierre
---

## Objetivos de aprendizaje

Al finalizar esta lección podrás:

1. **Ordenar cronológicamente** las siete etapas del relato (archivos planos → jerárquico/red → Codd → SQL comercial → imperio relacional → NoSQL → hoy) y nombrar el problema que cada etapa resolvió.
2. **Explicar causa→efecto** en al menos tres hitos (por qué nacieron las BD; por qué el modelo relacional desplazó la navegación por punteros; por qué surgió NoSQL).
3. **Contar con palabras propias** el aporte de Codd (1970): datos en relaciones/tablas e **independencia de datos** (preguntar *qué* se quiere, no *cómo navegar*).
4. **Ubicar** el nacimiento de SQL en System R / INGRES / Oracle comercial, sin confundirlo con “Codd inventó SQL”.
5. **Reconocer** en un escenario cotidiano (p. ej. Excel compartido) el mismo patrón de duplicidad/inconsistencia de la era pre-BD — como comprensión del relato.

## Prerrequisitos

- Haber recorrido el hub del módulo **Bases de datos** (`index`).
- No se exige SQL avanzado: verás una consulta corta solo como ilustración del salto declarativo; el dominio de SQL llega en la clase 04.

**Siguiente clase:** `clase-02-fundamentos-motores-estructura`.

---

## Contenido

> **Paginación ADR 011 (5 páginas + hub):** la estructura de páginas coincide con `layout-spec.md`. El contenido es **narrativa por etapas** — prosa fluida, sin plantilla H3 *Qué es / Para qué / Cómo funciona / Malas prácticas / Señales* en cada etapa.

### Página hub — Objetivos e índice

Resumen de objetivos (arriba) + navegación a las cinco páginas internas.

---

### Página 1 — `linea-de-tiempo-y-archivos`

#### Por qué la historia importa hoy

Las bases de datos no nacieron “completas”. Cada generación resolvió un dolor concreto: duplicidad de archivos, navegación rígida por punteros, falta de un lenguaje común, escala web, operación en la nube e integración con IA. Esos mismos dolores reaparecen en una ferretería de Bogotá con tres Excel o en una startup que elige un motor “porque es moderno” sin mirar el problema.

Esta lección **cuenta un relato en siete etapas**. La línea de tiempo es el mapa; después avanzamos etapa por etapa, con causa→efecto y lenguaje simple.

#### Línea de tiempo — siete etapas

<!-- interactive: MermaidDiagram -->
{
  "title": "Historia de las Bases de Datos",
  "description": "Cronología de siete etapas desde archivos planos hasta NewSQL, cloud y bases vectoriales",
  "chart": "timeline\n  title Historia de las Bases de Datos\n  section Pre-BD\n    1950s-60s : Archivos planos y cintas\n              : Batch, duplicidad e inconsistencia\n  section Navegacional\n    1960s-70s : IBM IMS jerárquico\n              : CODASYL red\n              : Acceso por punteros\n  section Relacional\n    1970 : Codd — modelo relacional\n         : Independencia de datos\n  section SQL comercial\n    1970s : System R e INGRES\n          : Nacimiento de SQL\n          : Oracle comercial\n  section Imperio SQL\n    1980s-90s : DB2 Oracle SQL Server\n              : PostgreSQL y MySQL\n              : ER Chen y SQL estándar\n  section NoSQL\n    2000s : BigTable y Dynamo\n          : MongoDB Cassandra\n          : Familias NoSQL\n  section Hoy\n    2010s-hoy : NewSQL y cloud\n              : HTAP y vectoriales\n              : Convergencia"
}

<!-- interactive: StepReveal -->
{
  "title": "Qué problema resolvió cada etapa",
  "steps": [
    {
      "title": "1. Archivos planos (50s–60s)",
      "content": "Cada aplicación con sus archivos → duplicidad, inconsistencia y dependencia del formato físico. Sin motor central de integridad."
    },
    {
      "title": "2. Jerárquico / red (60s–70s)",
      "content": "Relacionar datos en mainframe sin reescribir cintas enteras. Acceso por rutas de punteros conocidas."
    },
    {
      "title": "3. Modelo relacional (Codd 1970)",
      "content": "Independencia de datos: preguntar QUÉ se quiere, no CÓMO navegar. Relaciones por valores (claves)."
    },
    {
      "title": "4. System R, INGRES, Oracle",
      "content": "Demostrar que el modelo era implementable. Nace SQL/SEQUEL y el mercado de SGBD comerciales."
    },
    {
      "title": "5. Imperio relacional (80s–90s)",
      "content": "SQL como estándar; ER de Chen como puente requisitos→tablas; ecosistema de motores SQL."
    },
    {
      "title": "6. NoSQL web-scale (2000s)",
      "content": "Escala horizontal y esquemas flexibles para patrones que el SQL monolítico clásico sufría."
    },
    {
      "title": "7. Hoy: convergencia",
      "content": "NewSQL, cloud, HTAP, vectoriales. Elegir garantías según el problema, no según la moda."
    }
  ]
}

#### Etapa 1 — Archivos planos / pre-BD (años 50 – inicio 60)

Antes de los gestores de bases de datos, las organizaciones guardaban información en **archivos planos** sobre cintas y discos tempranos. Cada aplicación abría y escribía **sus** archivos. El procesamiento era casi siempre **por lotes (batch)**: se leía la cinta de punta a punta, se actualizaba un maestro y se generaba un reporte.

El mismo cliente o producto vivía en varias copias; al actualizar una, las otras quedaban viejas (**duplicidad e inconsistencia**). Si cambiaba el formato del archivo, había que **reescribir los programas**. Ese era el problema raíz: no había una fuente de verdad compartida ni un motor que cuidara la integridad.

Hoy, cuando una ferretería o academia usa varias hojas Excel/Sheets como “sistema” compartido, reproduce el mismo patrón: ediciones concurrentes, teléfonos viejos, stock que no cuadra. Esa es la razón por la que nacieron las bases de datos — el museo y la PYME cuentan la misma historia.

<!-- interactive: Callout -->
{
  "variant": "callout-info",
  "title": "Puente al presente",
  "body": "Excel compartido no es “malo por definición”: es el mismo patrón pre-BD con otra herramienta. Sirve para entender el relato; el módulo enseñará cómo un SGBD cierra ese arco."
}

---

### Página 2 — `navegacion-y-codd`

#### Etapa 2 — Jerárquico (IMS) y red / CODASYL (años 60 – principios 70)

Nace la **era navegacional**. Los datos se organizan como **árboles** (jerárquico, por ejemplo IBM IMS) o **grafos** (red CODASYL / IDS / IDMS). El programa **sigue punteros** de registro en registro (`GET NEXT`, `FIND OWNER`…); no escribe una consulta declarativa del estilo “tráeme los pedidos de Cali”.

Eso resolvió acceso eficiente en mainframes y relaciones entre datos sin reescribir cintas enteras. Pero el programador debía conocer las **rutas** de punteros: cambiar la estructura de enlaces obligaba a reescribir código. Esa rigidez preparó el terreno para el salto siguiente.

#### Etapa 3 — Modelo relacional — Codd 1970

Edgar F. “Ted” Codd publica *A Relational Model of Data for Large Shared Data Banks*. Propone representar datos como **relaciones** (tablas de filas y columnas) con base matemática, relacionando tablas por **valores** (claves), no por punteros ocultos.

El aporte central es la **independencia de datos**: las aplicaciones no deben depender del orden físico ni de rutas de almacenamiento. Se pregunta *qué* se quiere; el sistema elige *cómo* acceder. Sin este cambio conceptual no existirían el SQL ni el ecosistema de tablas que usarás en el resto del módulo.

<!-- interactive: Callout -->
{
  "variant": "callout-info",
  "title": "Independencia de datos, en una frase",
  "body": "Preguntas QUÉ quieres (filas que cumplan una condición); el motor decide CÓMO llegar a ellas (índices, orden de joins)."
}

<!-- code: sql -->
```sql
-- Relacional: se declara el QUÉ (join + filtro).
-- En IMS/CODASYL el programador escribiría pasos GET/FIND sobre punteros.
SELECT p.*
FROM pedido p
JOIN cliente c ON c.id = p.cliente_id
WHERE c.ciudad = 'Cali';
```

---

### Página 3 — `sql-comercial-e-imperio`

#### Etapa 4 — Prototipos y SQL comercial (años 70)

La teoría se vuelve producto:

- **System R (IBM):** prototipo; nace **SEQUEL/SQL**; transacciones y optimizador.
- **INGRES (UC Berkeley):** otro linaje; influencia posterior en PostgreSQL.
- **Oracle (1977–79):** una de las primeras ofertas comerciales relacionales/SQL exitosas.

Hilo claro: Codd inventó el **modelo**; SQL nace en el ecosistema de System R y se populariza con productos comerciales. El usuario escribe SQL declarativo; el **optimizador** elige índices y orden de joins.

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Navegacional (IMS/CODASYL)", "Relacional + SQL"],
  "rows": [
    ["Acceso", "Punteros / rutas conocidas", "Consulta declarativa"],
    ["Pregunta del programador", "Cómo navegar", "Qué filas quiero"],
    ["Cambiar estructura", "A menudo reescribir código", "Independencia de datos (ideal)"],
    ["Lenguaje típico", "GET/FIND…", "SELECT … JOIN … WHERE"]
  ]
}

#### Etapa 5 — Imperio relacional (años 80 – 90)

Consolidación: **DB2**, **Oracle**, **SQL Server**, **PostgreSQL**, **MySQL**; estandarización SQL (ANSI/ISO). El modelado conceptual con el **diagrama entidad-relación (ER) de Peter Chen (1976)** se vuelve lenguaje común entre analistas y técnicos.

Casi toda PYME formaliza datos en tablas SQL. El puente requisitos → tablas (ER) es el mismo que el módulo enseñará en la **clase 03** (diseño) antes del SQL de la clase 04.

<!-- interactive: MermaidDiagram -->
{
  "title": "Puente ER (Chen) — cliente y pedido",
  "description": "Diagrama entidad-relación mínimo cliente-pedido como lenguaje común del imperio relacional",
  "chart": "erDiagram\n  CLIENTE ||--o{ PEDIDO : realiza\n  CLIENTE {\n    int id PK\n    string nombre\n    string ciudad\n  }\n  PEDIDO {\n    int id PK\n    int cliente_id FK\n    date fecha\n  }"
}

---

### Página 4 — `nosql-convergencia-y-sintesis`

#### Etapa 6 — NoSQL y web-scale (años 2000)

Internet a escala impulsó sistemas **no (solo) relacionales**: BigTable, Dynamo, MongoDB (documentos), Cassandra (columnas), almacenes clave-valor y grafos. Priorizan particionado horizontal y esquemas flexibles; a menudo relajan consistencia fuerte.

La causa→efecto: volúmenes y patrones (sesiones, catálogos enormes, timelines) que el SQL monolítico clásico sufría. El relato **no** dice “NoSQL reemplazó a SQL”; dice “aparecieron opciones según el problema”.

<!-- code: json -->
```json
{
  "clienteId": "c-100",
  "nombre": "Ana Ruiz",
  "pedidos": [{ "id": 101, "total": 150000 }]
}
```

<!-- interactive: Callout -->
{
  "variant": "callout-info",
  "title": "Moda no es arquitectura",
  "body": "Elegir documentos o columnas porque “es lo que usan en Silicon Valley” sin mirar pagos, reportes o integridad es saltarse el final del relato: convergencia según el problema."
}

#### Etapa 7 — Hoy — NewSQL, cloud, HTAP, vectoriales y convergencia

El presente no es una guerra SQL vs NoSQL, sino **convergencia**:

- NewSQL / SQL distribuido (SQL + ACID + escala).
- Bases managed en la nube.
- HTAP (transacciones + analítica cercana).
- Bases o extensiones **vectoriales** (búsqueda semántica / IA).
- Motores multi-modelo.

Cierre del relato: *elige garantías y modelo según el problema*, no según la moda de una década. Empezar simple (por ejemplo un PostgreSQL/MariaDB bien modelado) y crecer con evidencia.

<!-- interactive: MermaidDiagram -->
{
  "title": "Familias de bases de datos hoy",
  "description": "Mapa mental de convergencia: SQL, NoSQL, NewSQL, cloud, HTAP y vectoriales",
  "chart": "mindmap\n  root((BD hoy))\n    Relacional SQL\n      MySQL MariaDB\n      PostgreSQL\n      Oracle SQL Server\n    NoSQL\n      Documentos\n      Clave-valor\n      Columnas\n      Grafos\n    Convergencia\n      NewSQL\n      Cloud managed\n      HTAP\n      Vectoriales"
}

#### Comparación de modelos (síntesis del relato)

<!-- interactive: CompareTable -->
{
  "headers": ["Modelo", "Época clave", "Acceso", "Idea central"],
  "rows": [
    ["Archivos planos", "50s–60s", "Secuencial / batch", "Sin motor de integridad"],
    ["Jerárquico", "60s–70s", "Punteros árbol", "Rutas conocidas"],
    ["Red (CODASYL)", "60s–70s", "Punteros grafo", "Varios padres"],
    ["Relacional", "70s→hoy", "SQL declarativo", "Tablas + independencia"],
    ["Documentos / KV / columnas / grafos", "2000s→", "Según familia", "Flexibilidad / escala / caminos"],
    ["NewSQL / cloud", "2010s→", "SQL distribuido / managed", "Convergencia"]
  ]
}

#### Errores de comprensión del relato (y dos casos)

Antes de la práctica, revisa estos mitos frecuentes:

1. Creer que Codd “inventó SQL” (inventó el **modelo**; SQL nace en System R / SEQUEL).
2. Pensar que IMS/CODASYL “ya no existen” (persisten en cores bancarios).
3. Contar la historia como “NoSQL mató a SQL” en lugar de convergencia.
4. No conectar Excel compartido con el problema pre-BD.
5. Confundir la línea de tiempo (poner NoSQL antes de Codd, u Oracle antes del modelo relacional).

**Caso — Ferretería “El Tornillo” (Bogotá).** Tres Excel (mostrador, bodega, contador). Precios y stock divergen. Lectura histórica: patrón de archivos planos con otra herramienta. Migrar a un SGBD con una fuente de verdad cierra el arco del relato.

**Caso — Startup “RutaAndina” (Medellín).** Eligen MongoDB para *todo* (incluidos pagos). Reportes contables fallan. Lectura histórica: usaron la respuesta web-scale donde el relato de Codd (datos compartidos consistentes) era el que importaba; hoy la convergencia favorece un enfoque políglota con responsabilidad clara.

---

### Página 5 — `practica-y-cierre`

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "id": "practica-ordenar-etapas",
  "prompt": "Ordena cronológicamente estas etapas del relato: (a) NoSQL web-scale, (b) archivos planos, (c) imperio relacional + ER, (d) Codd 1970, (e) NewSQL/cloud/vectores, (f) IMS/CODASYL, (g) System R / Oracle SQL. Escribe el orden con letras y, en una frase, el problema que resolvió la etapa (d).",
  "hints": [
    "Empieza por el problema raíz (antes de gestores).",
    "Codd va antes que SQL comercial.",
    "NoSQL es del 2000s; convergencia es lo más reciente."
  ],
  "expectedKeywords": ["archivos", "IMS", "Codd", "System R", "imperio", "NoSQL", "NewSQL", "independencia"],
  "successMessage": "Orden esperado: b → f → d → g → c → a → e. Codd resolvió la dependencia de rutas físicas con independencia de datos."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-causa-efecto-codd",
  "prompt": "En 4–6 líneas, explica causa→efecto: ¿por qué el modelo navegacional (IMS/CODASYL) empujó a Codd a proponer independencia de datos?",
  "hints": [
    "Piensa en qué tenía que conocer el programador (rutas de punteros).",
    "¿Qué pasaba si cambiaba la estructura de enlaces?"
  ],
  "expectedKeywords": ["punteros", "rutas", "reescribir", "independencia", "qué", "cómo"],
  "successMessage": "La navegación por punteros acoplaba el código a la estructura física; Codd propuso preguntar qué se quiere sin fijar cómo navegar."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-excel-prebd",
  "prompt": "¿Por qué una ferretería con Excel compartido “cuenta la misma historia” que los años 50? Responde en 3–5 líneas (duplicidad e inconsistencia).",
  "hints": [
    "Varias copias del mismo dato.",
    "Sin motor de concurrencia ni fuente única."
  ],
  "expectedKeywords": ["duplicidad", "inconsistencia", "Excel", "fuente", "copia"],
  "successMessage": "Varias hojas = varias copias; al actualizar una, otras quedan viejas: el patrón pre-BD."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-mito-codd-sql",
  "prompt": "Corrige el mito: “Codd inventó SQL”. ¿Qué inventó cada uno (modelo vs lenguaje/producto)?",
  "hints": [
    "Paper de 1970 vs System R / SEQUEL.",
    "Oracle populariza el producto comercial."
  ],
  "expectedKeywords": ["modelo", "relacional", "System R", "SQL", "SEQUEL"],
  "successMessage": "Codd: modelo relacional. SQL: nace en System R (SEQUEL) y se consolida con productos comerciales."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-arco-consulta",
  "prompt": "Ordena el arco de una consulta SQL moderna: (a) plan del optimizador, (b) texto SQL, (c) filas resultado, (d) parseo. Di en qué etapa del relato nace la idea de escribir el QUÉ y dejar que el sistema elija el CÓMO.",
  "hints": [
    "Primero escribes el texto; luego el motor lo interpreta.",
    "La independencia de datos es el hito de Codd."
  ],
  "expectedKeywords": ["SQL", "parseo", "optimizador", "Codd", "independencia"],
  "successMessage": "Orden: b → d → a → c. La idea nace con el modelo relacional / independencia de datos (etapa Codd), implementada en SQL comercial."
}

---

## Reto integrador

**“Cuenta la historia de AndinaMarket”**

Marketplace PYME (Colombia/Perú): catálogo flexible, pedidos/pagos con integridad, sesiones, recomendaciones futuras con embeddings.

Debes:

1. **Narrar en orden** las 7 etapas (título + una frase de causa→efecto cada una).
2. Explicar qué problemas **pre-BD** reaparecerían si todo viviera en Google Sheets.
3. Indicar qué aporte de **Codd** protege pedidos/pagos.
4. Ubicar en la timeline dónde nace la idea que usan para pedidos (SQL/relacional) y dónde encajan sesiones/recomendaciones (familias posteriores).
5. Cerrar con una frase de convergencia: no un solo hype, sino modelo según el problema.

**Criterio de éxito:** orden correcto, causa→efecto explícita, Codd ≠ SQL, sin lista de “malas prácticas” inventada por etapa.

<!-- interactive: ChallengeCard -->
{
  "title": "AndinaMarket — cuenta la historia",
  "difficulty": "intermedio",
  "prompt": "Narra las 7 etapas con causa→efecto, conecta Sheets con pre-BD, separa Codd de SQL, y cierra con convergencia para pedidos vs sesiones vs embeddings.",
  "acceptanceCriteria": [
    "Orden histórico correcto de las 7 etapas",
    "Al menos 3 causa→efecto explícitas",
    "Deja claro que Codd no inventó SQL",
    "Frase final de convergencia según el problema"
  ],
  "hints": [
    "Usa la timeline de la página 1 como checklist.",
    "Pedidos/pagos → relato relacional; sesiones/recomendaciones → familias posteriores."
  ]
}

---

## Cierre

Ideas clave del relato:

1. Archivos planos → duplicidad e inconsistencia.
2. Navegacional → eficiencia con costo de rutas rígidas.
3. Codd → tablas e independencia de datos.
4. System R / INGRES / Oracle → nace y se vende SQL.
5. Imperio SQL + ER Chen → lenguaje común de la industria.
6. NoSQL → opciones para escala y flexibilidad, no “muerte de SQL”.
7. Hoy → convergencia: elige según el problema.

**Pregunta operativa:** si mañana una PYME te muestra tres Excel y un MongoDB “para todo”, ¿qué capítulo de la historia le estás viendo en cada caso?

**Siguiente clase:** fundamentos, motores y estructura (`clase-02-fundamentos-motores-estructura`) — ya con el relato en la cabeza, definirás BD, SGBD y cómo se organizan los datos.

<!-- interactive: Quiz -->
{
  "slug": "clase-01-historia-bases-de-datos",
  "questions": [
    {
      "prompt": "¿Cuál fue el problema central de los archivos planos en los años 50–60?",
      "options": [
        "Demasiadas transacciones ACID",
        "Duplicidad e inconsistencia entre aplicaciones, con dependencia del formato físico",
        "Exceso de independencia de datos",
        "Uso obligatorio de SQL"
      ],
      "correctIndex": 1,
      "feedback": "Cada app tenía sus archivos; actualizar un dato en un lugar no lo actualizaba en todos."
    },
    {
      "prompt": "¿Qué distingue al modelo relacional de Codd frente a IMS/CODASYL?",
      "options": [
        "Usa solo cintas magnéticas",
        "Relaciona datos por valores en tablas y busca independencia de datos, no navegación por punteros",
        "Elimina por completo los esquemas",
        "Solo funciona en la nube"
      ],
      "correctIndex": 1,
      "feedback": "Codd propuso relaciones (tablas) e independencia frente al acceso navegacional."
    },
    {
      "prompt": "¿Dónde nace SQL en el relato?",
      "options": [
        "Solo en el paper de Codd 1970",
        "En System R (SEQUEL/SQL) e influencias de INGRES; luego productos comerciales como Oracle",
        "Únicamente en CODASYL",
        "En BigTable"
      ],
      "correctIndex": 1,
      "feedback": "El modelo es de Codd; el lenguaje SQL surge en el ecosistema System R."
    },
    {
      "prompt": "Ordena el sentido histórico correcto:",
      "options": [
        "NoSQL → Codd → archivos planos",
        "Archivos planos → navegacional → Codd → SQL comercial → imperio relacional → NoSQL → convergencia",
        "Oracle → IMS → archivos planos",
        "Vectoriales → CODASYL → Codd"
      ],
      "correctIndex": 1,
      "feedback": "El relato sigue esa línea de causa→efecto."
    },
    {
      "prompt": "¿Qué lectura histórica corresponde a una startup que pone Excel compartido como única “base” de pedidos?",
      "options": [
        "Cumple el modelo CODASYL",
        "Reproduce fallas pre-BD: choques de edición, duplicados e inconsistencias",
        "Activa HTAP por defecto",
        "Demuestra que Codd inventó SQL"
      ],
      "correctIndex": 1,
      "feedback": "Sin motor de concurrencia ni fuente única, reaparece el problema de los años 50."
    }
  ]
}
