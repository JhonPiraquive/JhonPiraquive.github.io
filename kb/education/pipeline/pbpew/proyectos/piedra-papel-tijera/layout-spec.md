---
track: pbpew
slug: proyectos/piedra-papel-tijera
title: "Piedra, papel o tijera"
order: 102
prev: proyectos/calculadora
next: proyectos/todo-list
---

## PiedraPapelTijeraLesson.tsx — orden de secciones

```tsx
<ObjetivosDeAprendizajeSection />
<PrerrequisitosSection />
<ProyectoIntegradorIntroSection />
<DemoInteractivaSection />
<ReglasDelJuegoSection />
<ConstantesYEstadoSection />
<EleccionAleatoriaCpuSection />
<DeterminarGanadorSection />
<MarcadorYRenderizadoSection />
<OrquestarRondaSection />
<ValidacionDefensivaSection />
<ExtensionesOpcionalesSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

Reemplazar stub `ContenidoSection` y actualizar imports en `PiedraPapelTijeraLesson.tsx`.

Actualizar `lesson-meta.ts`: `prev: "proyectos/calculadora"`, `next: "proyectos/todo-list"`, `seoDescription` desde lesson-spec.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de aprendizaje | `sections/ObjetivosDeAprendizajeSection.tsx` | — | 6 objetivos medibles (draft L29–36). |
| 2 | Prerrequisitos | `sections/PrerrequisitosSection.tsx` | — | Lista enlazada lecciones 01–12 + integración (draft L38–45). |
| 3 | Proyecto integrador: un juego completo en el navegador | `sections/ProyectoIntegradorIntroSection.tsx` | `MermaidDiagram` | Flujo fijo de ronda + sequence (draft L49–58). |
| 4 | Demo interactiva: juega una ronda ahora | `sections/DemoInteractivaSection.tsx` | `RockPaperScissorsDemo`, `Callout` | **Prioridad layout.** Hero demo antes del primer código largo. |
| 5 | Reglas del juego y modelo mental | `sections/ReglasDelJuegoSection.tsx` | `MermaidDiagram`, `StepReveal` | Lista reglas + flowchart + 5 pasos (draft L84–108). |
| 6 | Constantes y estado inicial | `sections/ConstantesYEstadoSection.tsx` | `CodeFiddle`, `CodeChallenge` | OPCIONES, EMOJI, marcador (draft L112–138). |
| 7 | Elección aleatoria de la CPU | `sections/EleccionAleatoriaCpuSection.tsx` | `CodeFiddle`, `Callout`, `CodeChallenge`, `PracticeExercise` | `obtenerEleccionCpu` (draft L142–179). |
| 8 | Determinar el ganador: lógica pura | `sections/DeterminarGanadorSection.tsx` | H3×2, `CodeFiddle`×2, `CompareTable`, `MermaidDiagram`, `CodeChallenge`, `PracticeExercise` | VENCE_A + if/else alternativa (draft L183–252). |
| 9 | Marcador y renderizado en el DOM | `sections/MarcadorYRenderizadoSection.tsx` | `CodeFiddle`, `CompareTable`, `CodeChallenge`, `PracticeExercise` | actualizarMarcador + renderizarRonda (draft L256–313). |
| 10 | Orquestar la ronda y conectar eventos | `sections/OrquestarRondaSection.tsx` | `CodeFiddle`×3, `Callout`, `CodeChallenge`×2 | jugarRonda, delegación, HTML mínimo (draft L317–385). |
| 11 | Validación defensiva y errores comunes | `sections/ValidacionDefensivaSection.tsx` | `CodeFiddle`, prose `<ul>`, `Callout`, `PracticeExercise` | jugarRondaSegura + errores típicos (draft L389–424). |
| 12 | Extensiones opcionales (nivel avanzado) | `sections/ExtensionesOpcionalesSection.tsx` | `CodeFiddle`, prose `<ol>`, `PracticeExercise` | setTimeout + retos 1–4 (draft L428–458). |
| 13 | Reto integrador | `sections/RetoIntegradorSection.tsx` | prose requisitos, `PracticeExercise` | Requisitos obligatorios + criterios éxito (draft L462–498). |
| 14 | Cierre | `sections/CierreSection.tsx` | — | Ideas clave + proyectos hermanos (draft L502–514). Sin quiz inline. |
| 15 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | `QuizSection slug="proyectos/piedra-papel-tijera" track="pbpew"`. H2: «Mini-quiz». |

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` (`code`, `language`). No `CodeBlock`.

## Quiz — `src/lib/teaching-quizzes/pbpew.ts`

Registrar slug `proyectos/piedra-papel-tijera` con 5 preguntas del draft L520–578 (`cierre-quiz`):

| # | Tema |
|---|------|
| 1 | Índice aleatorio: `Math.floor(Math.random() * 3)` |
| 2 | Tijera vs papel → `"jugador"` |
| 3 | Cuándo incrementar `marcador.victorias` |
| 4 | `addEventListener` / delegación vs `onclick` inline |
| 5 | `textContent` para mensaje «Empate.» |

**Infra:** añadir entrada en `PBPEW_QUIZZES` de `pbpew.ts`; extender `QuizSection` `QUIZ_MAP` si falta la clave compuesta con `/`.

## Componente nuevo (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `src/components/teaching/RockPaperScissorsDemo.tsx` | `RockPaperScissorsDemo` | Lógica vanilla en `useEffect` o state React; `ClayCard`; botones `data-choice` internos |

### Props `RockPaperScissorsDemo` (draft L66–74)

| prop | tipo | valor draft |
|------|------|-------------|
| `opciones` | `string[]` | `["piedra", "papel", "tijera"]` |
| `emoji` | `Record<string, string>` | `{ piedra: "✊", papel: "✋", tijera: "✌️" }` |
| `showMarcador` | `boolean` | `true` |
| `showJugadas` | `boolean` | `true` |
| `highlightResultado` | `boolean` | `true` |
| `mensajeInicial` | `string` | `"Elige una opción para empezar."` |

**Clay (lesson-spec):** `ClayCard` `my-8 p-6`; botones min-h ~44px; `aria-live="polite"` en zona resultado; clases estado opcionales `ganaste` / `empate` / `perdiste` sin neón.

## Bloques interactivos — props detalladas

### `ProyectoIntegradorIntroSection`

| id | componente | props |
|----|------------|-------|
| `flujo-ronda-sequence` | `MermaidDiagram` | chart draft L55–58 |

### `DemoInteractivaSection`

| id | componente | props |
|----|------------|-------|
| `demo-piedra-papel-tijera` | `RockPaperScissorsDemo` | ver tabla props arriba |
| `que-observar-demo` | `Callout` | `title`: «Qué observar en la demo»; children draft L76–80; variant `callout-info` |

### `ReglasDelJuegoSection`

| id | componente | props |
|----|------------|-------|
| `reglas-flowchart` | `MermaidDiagram` | chart draft L93–96 |
| `una-ronda-paso-a-paso` | `StepReveal` | `title`: «Una ronda completa (paso a paso)»; `steps[5]` draft L100–107 |

### `ConstantesYEstadoSection`

| id | componente | props |
|----|------------|-------|
| `constantes-estado-inicial` | `CodeFiddle` | `language="javascript"`; code draft L117–127 |
| `estado-inicial-marcador` | `CodeChallenge` | template + 3 blanks en `0` (draft L129–138) |

### `EleccionAleatoriaCpuSection`

| id | componente | props |
|----|------------|-------|
| `obtener-eleccion-cpu` | `CodeFiddle` | `language="javascript"`; code draft L147–155 |
| `error-frecuente-random` | `Callout` | `title`: «Error frecuente»; children draft L157–161; variant `callout-warning` |
| `indice-aleatorio-seguro` | `CodeChallenge` | blanks `floor`, `length` (draft L163–171) |
| `math-floor-indice` | `PracticeExercise` | prompt, hints, keywords draft L173–179 |

### `DeterminarGanadorSection`

| id | componente | props |
|----|------------|-------|
| `vence-a-mapa` | `CodeFiddle` | H3 «Enfoque mantenible»; code draft L189–202 |
| `determinar-if-else` | `CodeFiddle` | H3 «Alternativa didáctica»; code draft L206–219 |
| `if-vs-mapa-reglas` | `CompareTable` | headers + rows draft L221–230 |
| `determinar-ganador-flowchart` | `MermaidDiagram` | chart draft L232–235 |
| `resultado-tijera-papel` | `CodeChallenge` | blank `jugador` (draft L237–244) |
| `separar-determinar-actualizar` | `PracticeExercise` | draft L246–252 |

### `MarcadorYRenderizadoSection`

| id | componente | props |
|----|------------|-------|
| `actualizar-renderizar` | `CodeFiddle` | `language="javascript"`; code draft L260–287 |
| `mutar-vs-recrear-dom` | `CompareTable` | headers + rows draft L289–296 |
| `textcontent-marcador` | `CodeChallenge` | blank `textContent` (draft L298–305) |
| `incrementar-victorias` | `PracticeExercise` | draft L307–313 |

### `OrquestarRondaSection`

| id | componente | props |
|----|------------|-------|
| `jugar-ronda` | `CodeFiddle` | `language="javascript"`; code draft L322–328 |
| `delegacion-eventos` | `CodeFiddle` | `language="javascript"`; code draft L334–344 |
| `html-minimo` | `CodeFiddle` | `language="html"`; code draft L349–359 |
| `error-callback-mal-pasado` | `Callout` | `title`: «Error frecuente: callback mal pasado»; children draft L361–365; variant `callout-warning` |
| `delegacion-data-choice` | `CodeChallenge` | blanks `click`, `choice` (draft L367–375) |
| `orden-flujo-ronda` | `CodeChallenge` | blanks orden ronda (draft L377–385) |

### `ValidacionDefensivaSection`

| id | componente | props |
|----|------------|-------|
| `jugar-ronda-segura` | `CodeFiddle` | `language="javascript"`; code draft L394–402 |
| `caso-real-marcador-miente` | `Callout` | `title`: «Caso real: marcador que «miente»»; children draft L412–416; variant `callout-info` |
| `validacion-opcion-invalida` | `PracticeExercise` | draft L418–424 |

### `ExtensionesOpcionalesSection`

| id | componente | props |
|----|------------|-------|
| `settimeout-cpu-pensando` | `CodeFiddle` | `language="javascript"`; code draft L431–443 |
| `boton-reiniciar` | `PracticeExercise` | draft L452–458 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| `reto-integrador-completo` | `PracticeExercise` | prompt, 4 hints, keywords draft L487–498; textarea `rows={8}` |

### `MiniquizSection`

| id | componente | props |
|----|------------|-------|
| `cierre-quiz` | `QuizSection` | `slug="proyectos/piedra-papel-tijera"` `track="pbpew"` |

## Componentes nuevos en `sections/` (15 archivos)

| archivo | export |
|---------|--------|
| `sections/ObjetivosDeAprendizajeSection.tsx` | `ObjetivosDeAprendizajeSection` |
| `sections/PrerrequisitosSection.tsx` | `PrerrequisitosSection` |
| `sections/ProyectoIntegradorIntroSection.tsx` | `ProyectoIntegradorIntroSection` |
| `sections/DemoInteractivaSection.tsx` | `DemoInteractivaSection` |
| `sections/ReglasDelJuegoSection.tsx` | `ReglasDelJuegoSection` |
| `sections/ConstantesYEstadoSection.tsx` | `ConstantesYEstadoSection` |
| `sections/EleccionAleatoriaCpuSection.tsx` | `EleccionAleatoriaCpuSection` |
| `sections/DeterminarGanadorSection.tsx` | `DeterminarGanadorSection` |
| `sections/MarcadorYRenderizadoSection.tsx` | `MarcadorYRenderizadoSection` |
| `sections/OrquestarRondaSection.tsx` | `OrquestarRondaSection` |
| `sections/ValidacionDefensivaSection.tsx` | `ValidacionDefensivaSection` |
| `sections/ExtensionesOpcionalesSection.tsx` | `ExtensionesOpcionalesSection` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` |
| `sections/CierreSection.tsx` | `CierreSection` |
| `sections/MiniquizSection.tsx` | `MiniquizSection` |

Eliminar `sections/ContenidoSection.tsx` tras migración.

## Checklist lesson-developer

- [ ] Implementar `RockPaperScissorsDemo` en `src/components/teaching/RockPaperScissorsDemo.tsx`
- [ ] Crear 15 secciones; solo `CodeFiddle` para snippets (10 bloques código)
- [ ] `DemoInteractivaSection` como ancla visual tras intro (orden 4)
- [ ] 3 `MermaidDiagram`, 1 `StepReveal`, 2 `CompareTable`, 6 `CodeChallenge`, 6 `PracticeExercise`, 4 `Callout`
- [ ] Registrar quiz `proyectos/piedra-papel-tijera` en `teaching-quizzes/pbpew.ts`
- [ ] H2 unificado: `text-2xl font-bold text-[var(--color-primary)]`
- [ ] Actualizar `PiedraPapelTijeraLesson.tsx` con orden y imports
- [ ] Actualizar `lesson-meta.ts` (`prev`, `next`, SEO)

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `proyectos/calculadora` |
| `next` | `proyectos/todo-list` |
