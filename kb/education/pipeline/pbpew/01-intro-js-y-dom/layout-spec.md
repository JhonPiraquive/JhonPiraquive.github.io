---
track: pbpew
slug: 01-intro-js-y-dom
title: "Introducción a JavaScript y al DOM: conceptos, historia y consola"
order: 1
prev: null
next: "02-js-en-html"
---

## IntroJsYDomLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<QueEsJavascriptSection />
<CaracteristicasPrincipalesSection />
<ParaQueSeUsaSection />
<HistoriaBreveYVideoSection />
<QueEsElDomSection />
<CompruebaTuComprensionSection />
<ResumenSection />
<RetoIntegradorSection />      {/* nuevo */}
<CierreSection />              {/* nuevo */}
<MiniquizSection />            {/* nuevo */}
```

Imports a añadir en `IntroJsYDomLesson.tsx`: `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | — | Prose `<ul>` con objetivos medibles del draft L14–20. Actualizar copy al borrador refinado. |
| 2 | ¿Qué es JavaScript? | `sections/QueEsJavascriptSection.tsx` | `Callout` (`error-frecuente-html-vs-js`), `CodeFiddle` (`console-log-intro`) | Callout variant `callout-warning` (`border-[var(--color-accent)]`). CodeFiddle: `language="javascript"`, 3 líneas `console.log` (draft L52–56). |
| 3 | Características principales del lenguaje | `sections/CaracteristicasPrincipalesSection.tsx` | `CompareTable` (`capas-web-html-css-js-dom`) | H2 refinado (lesson-spec Brand). Tabla Capa / Responsabilidad / Ejemplo, 4 filas (draft L71–78). |
| 4 | Ámbitos de uso de JavaScript | `sections/ParaQueSeUsaSection.tsx` | `MermaidDiagram` (`transpilacion-ts-js`), `PracticeExercise` (`ambitos-javascript`) | H2 refinado. H3: Desarrollo web, Node.js, Aplicaciones móviles, Videojuegos. Corregir párrafo móvil (texto pegado en TSX actual). Mermaid: TS → transpilador → JS → navegador/Node (draft L104–106). |
| 5 | Historia de JavaScript | `sections/HistoriaBreveYVideoSection.tsx` | `StepReveal` (`linea-temporal-javascript`), `Callout` (`caso-checkout-roto`) | H2 refinado (sin «y vídeo»). Blockquote vídeo sugerido en prose (draft L149). StepReveal: 5 pasos cronológicos (draft L123–147). Callout info: «Caso real: checkout sin JavaScript» (Brand §Callout 2). |
| 6 | ¿Qué es el DOM? | `sections/QueEsElDomSection.tsx` | `MermaidDiagram` ×2 (`arbol-dom-basico`, `html-parser-dom-js`), `CodeFiddle` (`document-consola`), `Callout` (`caso-spa-titulo`), `CodeChallenge` (`completa-document-tagname`) | Migrar `CodeBlock` → `CodeFiddle`. Añadir 2º diagrama, callout SPA, CodeChallenge 2 blanks (`log`, `tagName`). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 (`comprension-dom`, `comprension-typescript`, `comprension-document-title`) | **Actualizar:** reemplazar `<ul>` estático por 3 `PracticeExercise` apilados (`my-8` cada uno). Props desde draft L206–228. |
| 8 | Resumen | `sections/ResumenSection.tsx` | — | Viñetas draft L234–238. Mencionar lección siguiente `02-js-en-html`. |
| 9 | Reto integrador: diagnóstico de página rota | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` (`reto-diagnostico-pagina-rota`) | **Nuevo.** Enunciado prose: blockquote reporte + lista criterios (draft L244–257). PracticeExercise con 4 hints, textarea larga (`rows={5}`). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Prose: párrafo cierre + ideas clave (3 viñetas Brand) + siguiente paso `02-js-en-html`. Sin quiz inline (patrón SEA). |
| 11 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** Patrón SEA: `QuizSection slug="01-intro-js-y-dom" track="pbpew"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `01-intro-js-y-dom` con 5 preguntas del draft L286–345 (`cierre-quiz`):

| # | Tema |
|---|------|
| 1 | ¿Qué es el DOM? |
| 2 | ¿Dónde se ejecuta JS en PBPEW? |
| 3 | DevTools → Consola |
| 4 | Etiqueta `<script src="...">` |
| 5 | `console.log("Hola")` |

**Infra:** crear `pbpew.ts`; extender `QuizSection.tsx` `QUIZ_MAP` con `pbpew: PBPEW_QUIZZES` (hoy solo `sea`).

## Bloques interactivos — props detalladas

### `QueEsJavascriptSection`

| id | componente | props |
|----|------------|-------|
| `error-frecuente-html-vs-js` | `Callout` | `title`: «Error frecuente»; children: Brand §Callout 1 |
| `console-log-intro` | `CodeFiddle` | `language="javascript"`; code draft L52–56 |

### `CaracteristicasPrincipalesSection`

| id | componente | props |
|----|------------|-------|
| `capas-web-html-css-js-dom` | `CompareTable` | headers: Capa, Responsabilidad, Ejemplo; rows draft L73–77 |

### `ParaQueSeUsaSection`

| id | componente | props |
|----|------------|-------|
| `transpilacion-ts-js` | `MermaidDiagram` | chart draft L105 |
| `ambitos-javascript` | `PracticeExercise` | prompt, 3 hints, keywords, successMessage draft L108–114 |

### `HistoriaBreveYVideoSection`

| id | componente | props |
|----|------------|-------|
| `linea-temporal-javascript` | `StepReveal` | title: «Línea temporal de JavaScript»; steps[5] draft L125–146 |
| `caso-checkout-roto` | `Callout` | title: «Caso real: checkout sin JavaScript»; Brand §Callout 2 |

### `QueEsElDomSection`

| id | componente | props |
|----|------------|-------|
| `arbol-dom-basico` | `MermaidDiagram` | chart draft L169 |
| `html-parser-dom-js` | `MermaidDiagram` | chart draft L174 |
| `document-consola` | `CodeFiddle` | `language="javascript"`; code draft L178–182 |
| `caso-spa-titulo` | `Callout` | title: «Caso real: cambio en HTML que no se refleja»; Brand §Callout 3 |
| `completa-document-tagname` | `CodeChallenge` | template + blanks draft L192–197 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-dom` | `PracticeExercise` | draft L206–212 |
| `comprension-typescript` | `PracticeExercise` | draft L214–220 |
| `comprension-document-title` | `PracticeExercise` | draft L222–228 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| `reto-diagnostico-pagina-rota` | `PracticeExercise` | prompt, 4 hints, keywords draft L259–270 |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizSection.tsx` | `MiniquizSection` | `QuizSection` (shared) |

## Checklist lesson-developer

- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] Aplicar headings refinados (Brand en lesson-spec)
- [ ] Poblar interactivos en secciones 2–6 (stub → draft)
- [ ] Actualizar `CompruebaTuComprensionSection` (3 `PracticeExercise`)
- [ ] Crear `RetoIntegradorSection`, `CierreSection`, `MiniquizSection`
- [ ] Registrar quiz en `teaching-quizzes/pbpew.ts`; extender `QuizSection`
- [ ] Actualizar `IntroJsYDomLesson.tsx` con orden y imports
- [ ] Actualizar `lesson-meta.ts` (title/seo desde lesson-spec)

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `null` |
| `next` | `02-js-en-html` |
