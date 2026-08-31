---
track: bases-de-datos
slug: index
title: "Bases de Datos"
order: 1
locale: es
prerequisites: []
related:
  - clase-01-historia-bases-de-datos
source_brief: kb/education/pipeline/bases-de-datos/index/brief.md
topic_expert: topic-expert-databases
audience: student
showInTrackIndex: true
quiz: n/a
tsx_sections:
  - HeroBienvenidaSection
  - QueAprenderasSection
  - PrerrequisitosSection
  - ObjetivosAprendizajeSection
  - ResultadosAprendizajeSection
  - ComoOrganizadoSection
  - CasoMotivadorSection
  - PracticaReflexionSection
  - RetoIntegradorSection
  - CierreHubSection
notes: |
  Hub de orientación (no lección técnica).
  Objetivos (3) y resultados (7): texto OFICIAL literal — no parafrasear.
  UX crítico: ClayCard en rejilla responsive; una card por ítem; número/icono; border-l-4 accent.
  Prohibido: lista plana (<ul>) para objetivos/resultados.
  Sin QuizSection / Miniquiz.
  showInTrackIndex: true — este hub aparece en el índice del track.
  CTA principal → clase-01-historia-bases-de-datos.
---

# Lesson draft — Hub Bases de Datos

## Objetivos de aprendizaje

> Texto oficial del programa. Publicar **exactamente** estos tres ítems en rejilla `ClayCard` (una card por ítem). No parafrasear ni acortar.

1. Implementar Bases de datos de baja complejidad, a partir de un modelo relacional y que cumpla con los requerimientos del cliente
2. Comunicar efectivamente utilizando todos los medios disponibles para ello, reconociendo y respetando las diferencias individuales
3. Demostrar integración y colaboración con los demás compañeros, para la consecución de objetivos comunes

## Prerrequisitos

- **Uso básico de PC:** navegar carpetas, instalar software con asistente, crear y guardar archivos.
- **Nociones de programación (opcionales):** variables, condiciones y lectura de código simple ayudan, pero no son obligatorias para empezar el hub ni la clase 01.

## Resultados de aprendizaje

> Texto oficial del programa. Publicar **exactamente** estos siete ítems en rejilla `ClayCard` (una card por ítem). No parafrasear ni acortar.

1. Instala un sistema gestor de bases de datos, teniendo en cuenta los requerimientos de hardware y software
2. Reconoce los componentes de un sistema de información con base en un modelo definido
3. Identifica modelos relacionales de baja complejidad
4. Utiliza adecuadamente las estructuras DDL y DML para el manejo de bases de datos
5. Usa adecuadamente las sentencias SQL
6. Argumenta las soluciones propuestas utilizando el lenguaje técnico adecuado
7. Alienta y fomenta el trabajo en equipo para buscar soluciones a los problemas planteados

## Contenido

### 1) Hero / bienvenida

**Sección TSX:** `HeroBienvenidaSection`

Bienvenido al módulo universitario / tecnólogo (LATAM) **Bases de Datos**. Este espacio es el **hub de orientación** del track: aquí entiendes qué aprenderás, lees los objetivos y resultados oficiales del programa, revisas prerrequisitos sugeridos y tomas el primer paso hacia la Clase 01.

No es una lección técnica de SQL ni de instalación: es el mapa de entrada al recorrido.

<!-- interactive: Callout -->
{
  "title": "Hub, no tutorial",
  "variant": "info",
  "children": "Aquí te orientas. La historia detallada de las bases de datos está en clase-01-historia-bases-de-datos; instalación de SGBD, modelo relacional, DDL/DML y SQL llegan en clases posteriores."
}

---

### 2) Qué aprenderás

**Sección TSX:** `QueAprenderasSection`

En este módulo implementarás bases de datos relacionales de **baja complejidad** a partir de requerimientos reales (por ejemplo, inventario de una tienda), instalarás un SGBD adecuado al hardware disponible, y practicarás argumentar soluciones en lenguaje técnico y trabajar en equipo — competencias del programa, no solo “saber escribir queries”.

#### Qué es una base de datos

Una **base de datos (BD)** es un conjunto organizado de datos relacionados que se almacenan de forma persistente para consultarlos, actualizarlos y compartirlos con consistencia. En este módulo se trabaja sobre el enfoque relacional de baja complejidad: tablas, relaciones y reglas que reflejan los requerimientos del cliente.

#### Qué es un SGBD

Un **sistema gestor de bases de datos (SGBD)** es el software que administra la BD: crea estructuras, valida datos, ejecuta consultas y controla acceso y almacenamiento. Ejemplos comunes en formación y PYME: MySQL, MariaDB, PostgreSQL, SQL Server. Instalar y configurar un SGBD según hardware y software es un resultado explícito del módulo.

#### Por qué importa este módulo

En Latinoamérica, muchas tiendas, talleres y laboratorios aún gestionan inventario o clientes en hojas de cálculo o cuadernos. Pasar a una BD relacional reduce errores, permite consultas confiables y prepara al estudiante para comunicar soluciones técnicas y trabajar en equipo.

<!-- interactive: Callout -->
{
  "title": "Errores comunes al empezar",
  "variant": "warning",
  "children": "No confundas “base de datos” con solo Excel o un archivo suelto: datos ≠ SGBD. No saltes directo a SQL sin leer objetivos/resultados ni el hilo del módulo. Comunicación y trabajo en equipo también se evalúan. No hace falta ser programador avanzado para empezar el hub ni la clase 01."
}

---

### 3) Prerrequisitos

**Sección TSX:** `PrerrequisitosSection`

Antes de avanzar, confirma que cumples lo mínimo sugerido:

| Nivel | Qué necesitas |
|-------|----------------|
| Obligatorio | Uso básico de PC: carpetas, instaladores con asistente, crear y guardar archivos |
| Opcional | Nociones de programación (variables, condiciones, leer código simple) |

Si solo tienes el nivel obligatorio, puedes completar este hub y la Clase 01 sin problema.

---

### 4) Objetivos de aprendizaje — rejilla ClayCard (3)

**Sección TSX:** `ObjetivosAprendizajeSection`

**UX crítico:** rejilla responsive (`grid`), **NO** lista plana (`<ul>`). Una `ClayCard` por ítem; número o icono visible; borde de acento (`border-l-4 border-[var(--color-accent)]` o equivalente). Texto **literal**.

#### Card 1

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 1,
  "children": "Implementar Bases de datos de baja complejidad, a partir de un modelo relacional y que cumpla con los requerimientos del cliente"
}

#### Card 2

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 2,
  "children": "Comunicar efectivamente utilizando todos los medios disponibles para ello, reconociendo y respetando las diferencias individuales"
}

#### Card 3

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 3,
  "children": "Demostrar integración y colaboración con los demás compañeros, para la consecución de objetivos comunes"
}

**Layout sugerido (developer):** contenedor `grid grid-cols-1 md:grid-cols-3 gap-4` (o 1→2→3 breakpoints). Cada card: número grande + párrafo con el texto oficial completo.

---

### 5) Resultados de aprendizaje — rejilla ClayCard (7)

**Sección TSX:** `ResultadosAprendizajeSection`

Misma regla UX: rejilla `ClayCard`, una por resultado, número/icono, borde de acento, texto **literal**. Sin `<ul>` de resultados.

#### Card 1

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 1,
  "children": "Instala un sistema gestor de bases de datos, teniendo en cuenta los requerimientos de hardware y software"
}

#### Card 2

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 2,
  "children": "Reconoce los componentes de un sistema de información con base en un modelo definido"
}

#### Card 3

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 3,
  "children": "Identifica modelos relacionales de baja complejidad"
}

#### Card 4

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 4,
  "children": "Utiliza adecuadamente las estructuras DDL y DML para el manejo de bases de datos"
}

#### Card 5

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 5,
  "children": "Usa adecuadamente las sentencias SQL"
}

#### Card 6

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 6,
  "children": "Argumenta las soluciones propuestas utilizando el lenguaje técnico adecuado"
}

#### Card 7

<!-- interactive: ClayCard -->
{
  "className": "border-l-4 border-[var(--color-accent)]",
  "number": 7,
  "children": "Alienta y fomenta el trabajo en equipo para buscar soluciones a los problemas planteados"
}

**Layout sugerido (developer):** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` (7 cards; la séptima puede ocupar una celda o span según diseño).

---

### 6) Cómo está organizado el curso

**Sección TSX:** `ComoOrganizadoSection`

El recorrido del módulo sigue un hilo claro: orientación (este hub) → contexto histórico → (futuro) SGBD, sistemas de información, modelo relacional, DDL/DML y SQL.

<!-- interactive: MermaidDiagram -->
{
  "title": "Mapa de recorrido del módulo",
  "description": "Flujo de alto nivel desde el hub hasta clases futuras",
  "chart": "flowchart LR\n  Hub[Hub Bases de Datos] --> C01[Clase 01 Historia]\n  C01 -.-> C02[Futuro: SGBD]\n  C02 -.-> C03[Futuro: SI y modelo]\n  C03 -.-> C04[Futuro: DDL DML SQL]"
}

<!-- interactive: StepReveal -->
{
  "title": "Preview del recorrido",
  "steps": [
    {
      "title": "Hub (estás aquí)",
      "content": "Orientación, objetivos y resultados oficiales, prerrequisitos y primera práctica de reflexión."
    },
    {
      "title": "Clase 01 — Historia",
      "content": "Por qué existen las bases de datos modernas: hitos desde archivos planos hasta el modelo relacional y SQL. Slug: clase-01-historia-bases-de-datos."
    },
    {
      "title": "Futuro: SGBD",
      "content": "Instalación y configuración de un sistema gestor según hardware y software disponible."
    },
    {
      "title": "Futuro: SI y modelo",
      "content": "Componentes de un sistema de información y modelos relacionales de baja complejidad."
    },
    {
      "title": "Futuro: DDL, DML y SQL",
      "content": "Estructuras DDL/DML y sentencias SQL para manejar la base de datos con rigor."
    }
  ]
}

**CTA principal:** ir a **Clase 01 — Historia de las Bases de Datos** (`clase-01-historia-bases-de-datos`).

<!-- interactive: Callout -->
{
  "title": "Siguiente clase",
  "variant": "tip",
  "children": "Cuando termines este hub (objetivos, resultados, reflexión y reto), abre clase-01-historia-bases-de-datos para contextualizar por qué existen las BD modernas."
}

---

### 7) Caso motivador PYME

**Sección TSX:** `CasoMotivadorSection`

#### Tienda de barrio sin base de datos

Una tienda de abarrotes en un barrio de Bogotá (o ciudad equivalente) lleva el inventario en un cuaderno y precios en una hoja de cálculo compartida por WhatsApp. Cuando hay dos vendedores, se duplican pedidos, se “pierden” unidades y nadie sabe el stock real al cierre. El dueño pide “un sistema sencillo” que registre productos, ventas y existencias.

**Decisión formativa:** el módulo apunta a implementar una BD relacional de baja complejidad que cumpla esos requerimientos, instalar un SGBD adecuado al equipo disponible, y argumentar la solución al cliente en lenguaje técnico claro — alineado con objetivos y resultados oficiales.

<!-- interactive: Callout -->
{
  "title": "Conexión con el programa",
  "variant": "info",
  "children": "Este caso no pide SQL todavía: pide ver el problema de negocio (datos inconsistentes) y el camino del módulo (modelo → SGBD → consultas → argumentación y equipo)."
}

---

### 8) Práctica: reflexión breve

**Sección TSX:** `PracticaReflexionSection`

<!-- interactive: PracticeExercise -->
{
  "title": "Un proceso de tu entorno que merece una BD",
  "prompt": "En 4–6 líneas, describe un proceso de tu entorno (casa, trabajo, estudio o un negocio conocido) que hoy se lleva en papel, chat o Excel y que se beneficiaría de una base de datos. Indica qué datos guardarías y qué pregunta querrías responder con ellos (ej. «¿cuánto stock queda?»).",
  "hints": [
    "Piensa en algo concreto: inventario, asistencia, préstamos, pedidos, horarios.",
    "Nombra al menos un tipo de dato a guardar (producto, cliente, fecha, cantidad…).",
    "Formula una pregunta de negocio que hoy es difícil de responder con papel o WhatsApp."
  ],
  "expectedKeywords": [
    "dato",
    "datos",
    "stock",
    "inventario",
    "cliente",
    "consulta",
    "pregunta",
    "excel",
    "papel",
    "guardar"
  ],
  "rows": 6
}

**Criterio de éxito:** menciona al menos un tipo de dato a guardar y una consulta/pregunta de negocio; no exige SQL.

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

### Leer clase-01 y anotar 3 hitos

Tras explorar este hub, abre **`clase-01-historia-bases-de-datos`** y anota **tres hitos históricos** que te parezcan clave (por ejemplo: archivos planos → modelo relacional → SQL, u otros que la clase destaque). Trae las anotaciones a la siguiente sesión o déjalas en tu cuaderno digital.

<!-- interactive: Callout -->
{
  "title": "Cómo entregar el reto",
  "variant": "tip",
  "children": "No hace falta un ensayo: tres viñetas con nombre del hito + por qué te parece clave bastan. El detalle histórico se estudia en clase-01; aquí solo te comprometes a leerla con un objetivo concreto."
}

---

## Cierre

**Sección TSX:** `CierreHubSection`

### Checklist antes de salir del hub

1. Leer objetivos y resultados (rejilla ClayCard).
2. Revisar prerrequisitos sugeridos.
3. Completar la reflexión breve (`PracticeExercise`).
4. Ir a **Clase 01 — Historia de las Bases de Datos** (`clase-01-historia-bases-de-datos`).
5. Anotar tres hitos históricos (reto integrador).

### Qué sigue

En **clase-01** se contextualiza por qué existen las BD modernas. Luego el módulo avanzará hacia instalación de SGBD, sistemas de información, modelo relacional, DDL/DML y SQL (catálogo futuro del topic-expert).

**CTA final:** Continuar → `clase-01-historia-bases-de-datos`

---

## Notas para layout / developer

| Ítem | Instrucción |
|------|-------------|
| `showInTrackIndex` | `true` |
| Quiz | **No** incluir `Quiz` / `QuizSection` / Miniquiz |
| Objetivos | Exactamente 3 ClayCard; texto literal del brief |
| Resultados | Exactamente 7 ClayCard; texto literal del brief |
| Listas planas | Prohibidas para objetivos y resultados |
| Código | n/a — sin snippets en este hub |
| Profundidad | Conceptos BD/SGBD: 1 párrafo corto c/u (ya redactado); no expandir a tutorial |
| Malas prácticas H3 | Omitidas (hub de orientación); errores comunes van en Callout de la sección 2 |
