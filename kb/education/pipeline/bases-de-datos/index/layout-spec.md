---
track: bases-de-datos
slug: index
title: "Bases de Datos: orientación al módulo"
order: 1
prev: null
next: clase-01-historia-bases-de-datos
seo_title: "Bases de Datos: hub, objetivos y recorrido"
seo_description: "Hub Bases de Datos: objetivos y resultados oficiales, prerrequisitos y mapa a la Clase 01 (historia). Orientación para universitarios LATAM."
showInTrackIndex: true
layout: LessonLayout
lesson_component: BasesDeDatosLesson
tsx_target: src/components/teaching/lessons/bases-de-datos/index/
---

# Layout spec — Hub Bases de Datos (`index`)

Hub de orientación (corto). **Sin paginación interna ADR 011** — una sola vista `LessonLayout` con todas las secciones.

## Páginas

| slug | component | layout | notas |
|------|-----------|--------|-------|
| `index` | `BasesDeDatosLesson` | `LessonLayout` | Hub completo; no `ClassPageLayout` |

Nav prev/next: `prev: null`, `next: clase-01-historia-bases-de-datos` (lesson-meta + registry).

---

## BasesDeDatosLesson.tsx — orden de secciones

```tsx
<HeroBienvenidaSection />
<QueAprenderasSection />
<PrerrequisitosSection />
<ObjetivosAprendizajeSection />
<ResultadosAprendizajeSection />
<ComoOrganizadoSection />
<CasoMotivadorSection />
<PracticaReflexionSection />
<RetoIntegradorSection />
<CierreHubSection />
```

**TSX target:** `src/components/teaching/lessons/bases-de-datos/index/`  
**Secciones:** `src/components/teaching/lessons/bases-de-datos/index/sections/`  
**Regla:** 1 componente exportado por archivo (PascalCase = nombre de archivo).

**Prohibido:** `QuizSection` / `Quiz` / Miniquiz.

---

## Secciones

| orden | heading | tsx_file | tsx_component | props clave |
|-------|---------|----------|---------------|-------------|
| 1 | Bienvenida al módulo | `sections/HeroBienvenidaSection.tsx` | `HeroBienvenidaSection` | prose bienvenida; `Callout` title «Hub, no tutorial» (info) |
| 2 | Qué aprenderás en este módulo | `sections/QueAprenderasSection.tsx` | `QueAprenderasSection` | prose BD / SGBD / por qué; `Callout` title «Errores frecuentes al empezar» (warning) |
| 3 | Prerrequisitos sugeridos | `sections/PrerrequisitosSection.tsx` | `PrerrequisitosSection` | tabla Obligatorio / Opcional; prose cierre |
| 4 | Objetivos de aprendizaje | `sections/ObjetivosAprendizajeSection.tsx` | `ObjetivosAprendizajeSection` | **3× `ClayCard`** grid; texto **literal**; `number` 1–3; `border-l-4 border-[var(--color-accent)]` |
| 5 | Resultados de aprendizaje | `sections/ResultadosAprendizajeSection.tsx` | `ResultadosAprendizajeSection` | **7× `ClayCard`** grid; texto **literal**; `number` 1–7; mismo borde accent |
| 6 | Cómo está organizado el módulo | `sections/ComoOrganizadoSection.tsx` | `ComoOrganizadoSection` | `MermaidDiagram` + `StepReveal` + CTA link clase-01 + `Callout` tip |
| 7 | Caso motivador: tienda de barrio | `sections/CasoMotivadorSection.tsx` | `CasoMotivadorSection` | prose caso PYME; `Callout` info «Conexión con el programa» |
| 8 | Práctica: un proceso de tu entorno | `sections/PracticaReflexionSection.tsx` | `PracticaReflexionSection` | `PracticeExercise` (prompt, hints, expectedKeywords, rows=6) |
| 9 | Reto integrador: tres hitos de la Clase 01 | `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `ChallengeCard` (integrador) + `Callout` tip «Cómo entregar el reto» |
| 10 | Cierre: checklist antes de continuar | `sections/CierreHubSection.tsx` | `CierreHubSection` | checklist 5 ítems; CTA → `clase-01-historia-bases-de-datos` |

---

## UX crítico — Objetivos y resultados (ClayCard rejilla)

### Reglas (ADR 003 + lesson-spec)

- **NO** lista plana (`<ul>` / `<ol>`) para objetivos ni resultados.
- Una `ClayCard` por ítem; número visible; `className` incluye `border-l-4 border-[var(--color-accent)]`.
- Texto **exactamente** el del programa (constantes tipadas / `as const`); no parafrasear.
- Profundidad clay máx. 2 (LessonLayout ClayCard nivel 1; grid cards nivel 2).
- Tokens: accent `#6B4EFF`, secondary `#00C2FF`, primary `#0A2540`.

### `ObjetivosAprendizajeSection`

- Grid: `grid grid-cols-1 md:grid-cols-3 gap-4`
- Constantes literales:

| # | children (literal) |
|---|-------------------|
| 1 | Implementar Bases de datos de baja complejidad, a partir de un modelo relacional y que cumpla con los requerimientos del cliente |
| 2 | Comunicar efectivamente utilizando todos los medios disponibles para ello, reconociendo y respetando las diferencias individuales |
| 3 | Demostrar integración y colaboración con los demás compañeros, para la consecución de objetivos comunes |

### `ResultadosAprendizajeSection`

- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` (7 cards)
- Constantes literales:

| # | children (literal) |
|---|-------------------|
| 1 | Instala un sistema gestor de bases de datos, teniendo en cuenta los requerimientos de hardware y software |
| 2 | Reconoce los componentes de un sistema de información con base en un modelo definido |
| 3 | Identifica modelos relacionales de baja complejidad |
| 4 | Utiliza adecuadamente las estructuras DDL y DML para el manejo de bases de datos |
| 5 | Usa adecuadamente las sentencias SQL |
| 6 | Argumenta las soluciones propuestas utilizando el lenguaje técnico adecuado |
| 7 | Alienta y fomenta el trabajo en equipo para buscar soluciones a los problemas planteados |

---

## Mapa de interactivos

| id | sección | componente | props / notas |
|----|---------|------------|---------------|
| `hub-no-tutorial` | HeroBienvenidaSection | `Callout` | title: «Hub, no tutorial»; borde secondary (info); children draft |
| `errores-empezar` | QueAprenderasSection | `Callout` | title: «Errores frecuentes al empezar»; borde accent (warning); children draft |
| `objetivos-grid` | ObjetivosAprendizajeSection | `ClayCard` ×3 | ver tabla literales; número + border-l-4 accent |
| `resultados-grid` | ResultadosAprendizajeSection | `ClayCard` ×7 | ver tabla literales; número + border-l-4 accent |
| `mapa-recorrido` | ComoOrganizadoSection | `MermaidDiagram` | title: «Mapa de recorrido del módulo»; description aria; `chart` flowchart LR Hub→C01 -.-> futuros (draft; sin entidades HTML) |
| `preview-recorrido` | ComoOrganizadoSection | `StepReveal` | title: «Preview del recorrido»; 5 steps (Hub, Clase 01, Futuro SGBD, Futuro SI/modelo, Futuro DDL/DML/SQL) |
| `siguiente-clase` | ComoOrganizadoSection | `Callout` | title: «Siguiente paso: Clase 01» / «Siguiente clase»; tip; CTA prose + link slug |
| `conexion-programa` | CasoMotivadorSection | `Callout` | title: «Conexión con el programa»; info |
| `practice-reflexion` | PracticaReflexionSection | `PracticeExercise` | title opcional; prompt 4–6 líneas; hints×3; expectedKeywords; `rows={6}` |
| `reto-tres-hitos` | RetoIntegradorSection | `ChallengeCard` | title: tres hitos Clase 01; `difficulty: "integrador"`; prompt leer clase-01 + anotar 3 hitos; acceptanceCriteria (3 viñetas hito + por qué); hints opcionales |
| `entregar-reto` | RetoIntegradorSection | `Callout` | title: «Cómo entregar el reto»; tip — **fuera** del ChallengeCard (no anidar Callout) |

### PracticeExercise — props exactas

```ts
{
  title: "Un proceso de tu entorno que merece una BD",
  prompt: "En 4–6 líneas, describe un proceso de tu entorno (casa, trabajo, estudio o un negocio conocido) que hoy se lleva en papel, chat o Excel y que se beneficiaría de una base de datos. Indica qué datos guardarías y qué pregunta querrías responder con ellos (ej. «¿cuánto stock queda?»).",
  hints: [
    "Piensa en algo concreto: inventario, asistencia, préstamos, pedidos, horarios.",
    "Nombra al menos un tipo de dato a guardar (producto, cliente, fecha, cantidad…).",
    "Formula una pregunta de negocio que hoy es difícil de responder con papel o WhatsApp.",
  ],
  expectedKeywords: [
    "dato", "datos", "stock", "inventario", "cliente",
    "consulta", "pregunta", "excel", "papel", "guardar",
  ],
  rows: 6,
}
```

### ChallengeCard — props sugeridas (reto hub)

> Si `ChallengeCard` aún no existe en `src/components/teaching/`, lesson-developer lo crea (ClayCard + borde accent + badge dificultad) según `contrib-clay` del track; no inventar Quiz.

```ts
{
  title: "Leer clase-01 y anotar 3 hitos",
  difficulty: "integrador",
  prompt: "Tras explorar este hub, abre clase-01-historia-bases-de-datos y anota tres hitos históricos clave. Trae las anotaciones a la siguiente sesión o déjalas en tu cuaderno digital.",
  acceptanceCriteria: [
    "Tres viñetas con nombre del hito",
    "Cada viñeta incluye por qué te parece clave",
    "Basado en la lectura de clase-01-historia-bases-de-datos",
  ],
  hints: [
    "Ejemplos de arco: archivos planos → modelo relacional → SQL",
    "No hace falta un ensayo: viñetas bastan",
  ],
}
```

### MermaidDiagram — chart

```
flowchart LR
  Hub[Hub Bases de Datos] --> C01[Clase 01 Historia]
  C01 -.-> C02[Futuro: SGBD]
  C02 -.-> C03[Futuro: SI y modelo]
  C03 -.-> C04[Futuro: DDL DML SQL]
```

No envolver Mermaid ni StepReveal en ClayCard extra (ADR 003 / clay depth).

### Callout — variantes visuales

`Callout` actual no tipa `variant`; lesson-developer aplica borde:

| Variante (spec) | Borde sugerido |
|-----------------|----------------|
| info | `border-[var(--color-secondary)]` (default) |
| warning | `border-[var(--color-accent)]` |
| tip | `border-[var(--color-secondary)]` o accent suave |

---

## lesson-meta.ts

| Campo | Valor |
|-------|--------|
| `track` | `"bases-de-datos"` |
| `slug` | `"index"` |
| `title` | `"Bases de Datos: orientación al módulo"` |
| `order` | `1` |
| `prev` | `null` |
| `next` | `"clase-01-historia-bases-de-datos"` |
| `seoTitle` | `"Bases de Datos: hub, objetivos y recorrido"` |
| `seoDescription` | `"Hub Bases de Datos: objetivos y resultados oficiales, prerrequisitos y mapa a la Clase 01 (historia). Orientación para universitarios LATAM."` |
| `showInTrackIndex` | `true` |

Archivo: `src/components/teaching/lessons/bases-de-datos/index/lesson-meta.ts`

---

## Registry / índices (lesson-developer)

| Acción | Detalle |
|--------|---------|
| Registry | Entrada `"bases-de-datos/index"` → `BasesDeDatosLesson` + `lesson-meta` en `teaching-lessons-registry.ts` |
| Track | Asegurar track `bases-de-datos` en portal / `teaching-tracks` / routing `/es/teaching/bases-de-datos/` |
| Legacy | Redirect `teaching/bases-de-datos/index.html` → `/es/teaching/bases-de-datos/` (si aplica infra existente) |
| Nav clase-01 | `prev` de clase-01 → `index`; hub `next` → `clase-01-historia-bases-de-datos` |
| Quiz registry | **No** añadir clave quiz para este slug |
| Componentes nuevos | 10 sections + lesson shell; posible `ChallengeCard` compartido si no existe |

---

## Componentes nuevos vs reutilizados

| Pieza | Estado | Notas |
|-------|--------|-------|
| `LessonLayout` | Reutilizar | Shell estándar hub |
| `ClayCard` | Reutilizar `@/components/clay` | Grids objetivos/resultados |
| `Callout` | Reutilizar | 5 callouts |
| `MermaidDiagram` | Reutilizar | Mapa recorrido |
| `StepReveal` | Reutilizar | Preview 5 pasos |
| `PracticeExercise` | Reutilizar | Reflexión |
| `ChallengeCard` | **Nuevo o escalar** | Si no hay export en teaching; patrón ClayCard accent (contrib-clay) |
| 10× `*Section` | **Nuevos** | Un archivo c/u bajo `sections/` |
| `BasesDeDatosLesson` | **Nuevo** | default export lesson |

No requiere componente en `sections/` genérico del shell más allá de los listados; no paginación.

---

## Notas ADR / alcance

- **ADR 011:** hub corto → **sin** tabla de páginas internas; no hub+`{pagina}`.
- **ADR 013:** Mermaid + StepReveal contiguos en `ComoOrganizadoSection` (mapa visual real, no solo prosa).
- **ADR 003:** máx. 2 niveles clay; sin neón; radius 20–28px.
- Malas prácticas H3: omitidas (hub); errores comunes solo en Callout warning de sección 2.
- Sin `<!-- code: -->` / CodeFiddle en este hub.
- Audience: student only.
