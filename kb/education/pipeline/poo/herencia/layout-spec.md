---
track: poo
slug: herencia
title: "Herencia"
order: 3
prev: encapsulamiento
next: asociacion-agregacion-composicion
---

## HerenciaLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<HerenciaQueEsYSection />
<CuandoNoUsarHerenciaSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir en `HerenciaLesson.tsx`: `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos medibles + prerrequisitos + callout regla diseño (draft L15–41). |
| 2 | Herencia: qué es y para qué sirve | `sections/HerenciaQueEsYSection.tsx` | `CodeFiddle` ×6, `StepReveal` ×2, `MermaidDiagram`, `Callout`, `CodeChallenge` | Poblar stub. H2 sin prefijo «1)». |
| 3 | ¿Cuándo NO usar herencia? (composición como alternativa) | `sections/CuandoNoUsarHerenciaSection.tsx` | `CodeFiddle` ×3, `CompareTable`, `MermaidDiagram` ×2, `PracticeExercise` | Poblar stub. H2 sin prefijo «2)». |
| 4 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** Viñetas 6 puntos (draft L361–366). |
| 5 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L374–375). Ejercicios apilados `my-8`. |
| 6 | Reto integrador: sistema de flota y alertas | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Enunciado Partes A–C + criterio éxito (draft L419–440). |
| 7 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `asociacion-agregacion-composicion` (draft L458–469). |
| 8 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="herencia" track="poo"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `herencia` con 5 preguntas del draft L477–534:

| # | Tema |
|---|------|
| 1 | Herencia = relación «es un» |
| 2 | `virtual` en base + `override` en derivada |
| 3 | V/F: herencia solo para evitar duplicar código |
| 4 | Celular tiene cámara → composición |
| 5 | `Vehiculo v = new Carro(...)` — dispatch en runtime |

**Infra:** `<QuizSection slug="herencia" track="poo" />` en `MiniquizFinalSection`.

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: csharp -->` del draft → `CodeFiddle` con `language="csharp"` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L17–23 |
| Prerrequisitos | prose `<ul>` | encapsulamiento, C#, dotnet (draft L25–29) |
| `regla-diseno-herencia` | `Callout` | `variant="callout-info"`; title: «Regla de diseño»; children draft L39–40 |

### `HerenciaQueEsYSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 4 viñetas is-a (draft L49–54) |
| Qué es / Para qué sirve | prose | definición `: Vehiculo`, beneficios (draft L56–71) |
| Sintaxis herencia | `CodeFiddle` | `language="csharp"`; code draft L61–62 (`class Carro : Vehiculo { }`) |
| Constructor y `base(...)` (H3) | prose | delegación obligatoria (draft L73–75) |
| `virtual` / `override` (H3) | prose | lista 3 puntos (draft L77–81) |
| `construccion-derivada-base` | `StepReveal` | title: «Construcción de una derivada»; steps[4] draft L84–91 |
| Ejemplo Vehiculo/Carro/Moto (H3) | `CodeFiddle` | `language="csharp"`; code draft L98–130 |
| Polimorfismo tipo base (H3) | `CodeFiddle` | `language="csharp"`; code draft L137–141 |
| `llamada-polimorfica-dispatch` | `StepReveal` | title: «Llamada polimórfica»; steps[3] draft L145–151 |
| Parar() sin override (H3) | prose + `CodeFiddle` | `language="csharp"`; code draft L160–169 |
| Lista polimórfica (H3) | `CodeFiddle` | `language="csharp"`; code draft L176–186 |
| Caso real flota transporte | prose | narrativa CamionRefrigerado / Parar (draft L189–193) |
| `jerarquia-vehiculos` | `MermaidDiagram` | chart draft L198–199 |
| Señales buen/mal uso | prose `<ul>` | dos listas Aplica/No aplica (draft L202–213) |
| `error-frecuente-base-override` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L217–218 |
| `completa-lista-polimorfica` | `CodeChallenge` | title, template, blanks draft L222–229 |

Intercalar al menos un `CodeFiddle` entre los dos `StepReveal` para no apilar steppers.

### `CuandoNoUsarHerenciaSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | reutilizar ≠ heredar (draft L238–242) |
| Qué es / Para qué composición | prose | celular tiene cámara (draft L244–252) |
| Caso real alertas | prose | AlarmaEmail vs INotificador (draft L254–256) |
| Alarma + INotificador (H3) | `CodeFiddle` | `language="csharp"`; code draft L261–292 |
| Extender WhatsApp (H3) | `CodeFiddle` | `language="csharp"`; code draft L298–307 |
| `herencia-vs-composicion` | `CompareTable` | headers, rows draft L313–321 |
| `alarma-notificadores` | `MermaidDiagram` | chart draft L327–328 |
| Decisión de diseño (H3) | `MermaidDiagram` | chart draft L334–335; id `decision-diseno-herencia-composicion` |
| Errores comunes | prose `<ul>` | 4 antipatrones (draft L338–343) |
| `es-un-vs-tiene-un` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L346–354 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L361–366 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L374–375 |
| `comprension-override-moto-carro` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L377–385 |
| `senales-buen-mal-uso-herencia` | `PracticeExercise` | draft L388–398 |
| `orden-constructor-carro-base` | `PracticeExercise` | draft L401–410 |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Sistema de flota y alertas»; Partes A–C + criterio éxito (draft L419–440) |
| `reto-justificacion-diseno` | `PracticeExercise` | prompt, hints, keywords, successMessage draft L443–451; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L460 |
| Ideas clave | `<ul>` 4 viñetas draft L462–467 |
| Siguiente paso | enlace `asociacion-agregacion-composicion` draft L469 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="herencia" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `HerenciaQueEsYSection.tsx` | Poblar: 6 `CodeFiddle` (csharp), 2 `StepReveal`, `MermaidDiagram`, `Callout`, `CodeChallenge`; migrar `CodeBlock` → `CodeFiddle`; H2 «Herencia: qué es y para qué sirve» |
| `CuandoNoUsarHerenciaSection.tsx` | Poblar: 3 `CodeFiddle` (csharp), `CompareTable`, 2 `MermaidDiagram`, `PracticeExercise`; migrar `CodeBlock` → `CodeFiddle`; H2 «¿Cuándo NO usar herencia? (composición como alternativa)» |
| `HerenciaLesson.tsx` | Orden 8 secciones + imports según bloque superior |

## Checklist lesson-developer

- [ ] H2 según lesson-spec § Clay UI (sin prefijos «1)» / «2)»)
- [ ] Migrar todo código → `CodeFiddle` con `language="csharp"` (9 bloques en draft)
- [ ] Crear `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`
- [ ] Poblar `HerenciaQueEsYSection`, `CuandoNoUsarHerenciaSection` (stubs → draft)
- [ ] Registrar quiz `herencia` en `teaching-quizzes/poo.ts`
- [ ] Actualizar `HerenciaLesson.tsx` con orden y imports
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § Brand

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `encapsulamiento` |
| `next` | `asociacion-agregacion-composicion` |
