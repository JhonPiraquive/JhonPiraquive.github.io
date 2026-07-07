---
track: poo
slug: override-y-sobrecarga
title: "Override y Sobrecarga"
order: 7
prev: polimorfismo
next: diagramas-de-clases
---

## OverrideYSobrecargaLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<OverrideSection />
<OverloadSection />
<OverrideVsOverloadSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

**Renombrar/refactor:** `OverrideSobrescrituraSection` → `OverrideSection`; `OverloadSobrecargaSection` → `OverloadSection`; `OverloadVsOverrideComparacionSection` → `OverrideVsOverloadSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `CompareTable`, `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + tabla override vs overload (draft L15–54). |
| 2 | Override (sobrescritura) | `sections/OverrideSection.tsx` | `CodeFiddle` ×2, `StepReveal`, `MermaidDiagram`, `CodeChallenge` | Refactor desde `OverrideSobrescrituraSection`. H2 sin prefijo «1)». |
| 3 | Overload (sobrecarga) | `sections/OverloadSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `PracticeExercise` | Refactor desde `OverloadSobrecargaSection`. H2 sin prefijo «2)». |
| 4 | Comparación práctica: override, overload y `new` | `sections/OverrideVsOverloadSection.tsx` | `CodeFiddle` ×2, `MermaidDiagram`, `PracticeExercise` | Refactor desde `OverloadVsOverrideComparacionSection`. H2 sin prefijo «3)». |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** Viñetas 5 puntos (draft L311–319). |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L327). Ejercicios `my-8`. |
| 7 | Reto integrador: notificaciones y operaciones | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Partes A–C + criterio éxito (draft L367–406). |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `diagramas-de-clases` (draft L410–423). |
| 9 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="override-y-sobrecarga" track="poo"`. |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `override-y-sobrecarga` con 5 preguntas del draft L433–468:

| # | Tema |
|---|------|
| 1 | V/F: override funciona sin herencia |
| 2 | V/F: base debe marcar virtual o abstract |
| 3 | Keyword `override` en derivada |
| 4 | V/F: overload se resuelve en runtime |
| 5 | `new void Hablar()` con referencia Animal — no polimorfiza |

**Infra:** `<QuizSection slug="override-y-sobrecarga" track="poo" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO / lesson-draft) |
|-------|-----------------------------------|
| `seoTitle` | `Override y sobrecarga en C#: diferencias y ejemplos \| POO` |
| `seoDescription` | `Aprende override vs overload en C# con Mensaje, Calculadora y Animal. Resolución en runtime y compile time, y cuándo usar new frente a override.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: csharp -->` del draft → `CodeFiddle` con `language="csharp"` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L17–23 |
| Prerrequisitos | prose `<ul>` | polimorfismo, herencia, abstracción (draft L25–29) |
| `override-vs-overload-tabla` | `CompareTable` | headers: `["Aspecto", "Override", "Overload"]`; rows draft L42–47 |
| `dos-mecanismos-dos-momentos` | `Callout` | `variant="callout-info"`; title: «Dos mecanismos, dos momentos»; children draft L52–53 |

### `OverrideSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | override reemplaza implementación (draft L62–66) |
| Qué es / Señales | prose | Mensaje + dispatch runtime (draft L68–76) |
| `mensajes-polimorficos` | `CodeFiddle` | `language="csharp"`; code draft L82–101 |
| `lista-mensajes-override` | `CodeFiddle` | `language="csharp"`; code draft L108–115 |
| `enviar-runtime-step` | `StepReveal` | title: «m.Enviar() con referencia Mensaje»; steps[4] draft L123–127 |
| Caso real | prose | canal notificaciones 200 líneas (draft L138–140) |
| `jerarquia-mensaje` | `MermaidDiagram` | chart draft L135 |
| Errores comunes | prose `<ul>` | 3 ítems (draft L142–146) |
| `completa-override-enviar` | `CodeChallenge` | title: «Completa el override de Enviar»; template draft L151; blanks: `[{ "id": "b1", "answer": "override", "hint": "Keyword para redefinir un método virtual de la base" }]` |

### `OverloadSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | firmas distintas, compile time (draft L163–167) |
| Qué es | prose | ergonomía API Calculadora (draft L169–171) |
| `calculadora-sobrecargas` | `CodeFiddle` | `language="csharp"`; code draft L177–189 |
| `resolucion-firma-overload` | `MermaidDiagram` | chart draft L197 |
| Caso real | prose | API búsqueda unificada (draft L200–202) |
| Errores comunes | prose `<ul>` | 4 ítems (draft L204–209) |
| `predice-sumar-params` | `PracticeExercise` | prompt: «Predice qué firma de `Sumar` usa el compilador para `Sumar(1, 2, 3, 4)` antes de ejecutar. Verifica en consola.»; hints: `["Cuatro argumentos int no coincide con Sumar(int,int)", "params int[] acepta cualquier cantidad de int", "La resolución es en compile time"]`; expectedKeywords: `["params", "int[]", "4"]`; successMessage: «Correcto. Sumar(params int[] valores) suma los cuatro enteros.» |

### `OverrideVsOverloadSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | coexistencia override+overload; `new` oculta (draft L229–233) |
| `animal-perro-overload` | `CodeFiddle` | `language="csharp"`; code draft L239–258 |
| `new-vs-override-gato` | `CodeFiddle` | `language="csharp"`; code draft L265–276 |
| `animal-override-overload-diagram` | `MermaidDiagram` | chart draft L283 |
| Cuándo usar cada uno | prose `<ul>` | 2 ítems (draft L286–289) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L291–295) |
| `hablar-referencia-perro` | `PracticeExercise` | prompt: «Con `Animal a = new Perro()` y `Perro p = new Perro()`, ¿cambia la salida de `Hablar()` en cada caso? Explica override y tipo de referencia.»; hints: `["Perro usa override de Hablar", "a es referencia Animal pero instancia Perro — dispatch polimórfico", "p es referencia Perro — misma implementación override"]`; expectedKeywords: `["Guau", "override", "runtime", "referencia"]`; successMessage: «Correcto. Ambas imprimen Guau! porque override resuelve por tipo real del objeto.» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 5 puntos draft L315–319 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L327 |
| `comprension-mensaje-sms` | `PracticeExercise` | prompt: «Crea `MensajeSms : Mensaje` con `override` de `Enviar`; añádela a `List<Mensaje>` y verifica salida en `foreach`.»; hints: `["MensajeSms implementa override Enviar con formato SMS", "Añade instancia a List<Mensaje> junto a MensajeEmail", "foreach llama Enviar polimórficamente"]`; expectedKeywords: `["MensajeSms", "override", "foreach"]`; successMessage: «Correcto. Override permite procesar canales distintos en un bucle uniforme.» |
| `comprension-sumar-params` | `PracticeExercise` | prompt: «Añade `Sumar(params int[] valores)` a `Calculadora` si no existe. Predice qué firma usa `Sumar(1, 2, 3, 4)` antes de ejecutar.»; hints: `["params acepta arreglo variable de int", "Cuatro argumentos no encajan en Sumar(int,int) ni Sumar(int,int,int)", "Compilador elige en compile time"]`; expectedKeywords: `["params", "10", "compile"]`; successMessage: «Correcto. La sobrecarga variádica suma todos los valores.» |
| `comprension-new-vs-override` | `PracticeExercise` | prompt: «Documenta en un comentario qué pasaría si `MensajePush` usara `new void Enviar` en lugar de `override` con variable `Mensaje`.»; hints: `["new oculta sin dispatch polimórfico", "foreach sobre List<Mensaje> llamaría versión base", "override es necesario para polimorfismo real"]`; expectedKeywords: `["new", "base", "override", "Mensaje"]`; successMessage: «Correcto. Con new, el cliente con referencia Mensaje no ve la implementación de la derivada.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Notificaciones y operaciones con override y overload»; Partes A–C + criterio éxito (draft L371–394) |
| `reto-runtime-vs-compile` | `PracticeExercise` | prompt: «En el reto, enumera qué partes usan resolución en runtime y cuáles en compile time. Justifica con un ejemplo de cada una.»; hints: `["Override Enviar en foreach — runtime", "Total con distintos argumentos — compile time", "MensajePush override vs new — contraste runtime"]`; expectedKeywords: `["runtime", "compile", "override", "overload"]`; successMessage: «Excelente. Has integrado ambos mecanismos en un mismo sistema.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L414 |
| Ideas clave | `<ul>` 4 viñetas draft L418–421 |
| Siguiente paso | enlace `diagramas-de-clases` draft L423 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="override-y-sobrecarga" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `CompareTable`, `Callout` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `OverrideSobrescrituraSection.tsx` | Renombrar → `OverrideSection.tsx`; poblar: 2 `CodeFiddle`, `StepReveal`, `MermaidDiagram`, `CodeChallenge`; H2 «Override (sobrescritura)» |
| `OverloadSobrecargaSection.tsx` | Renombrar → `OverloadSection.tsx`; poblar: `CodeFiddle`, `MermaidDiagram`, `PracticeExercise`; H2 «Overload (sobrecarga)» |
| `OverloadVsOverrideComparacionSection.tsx` | Renombrar → `OverrideVsOverloadSection.tsx`; poblar: 2 `CodeFiddle`, `MermaidDiagram`, `PracticeExercise`; H2 «Comparación práctica: override, overload y `new`» |
| `OverrideYSobrecargaLesson.tsx` | Orden 9 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)» / «2)» / «3)»)
- [ ] Migrar todo código → `CodeFiddle` con `language="csharp"` (5 bloques en draft)
- [ ] Crear secciones pedagógicas (`ObjetivosDelTemaSection`, `ResumenSection`, etc.)
- [ ] Renombrar y poblar `OverrideSection`, `OverloadSection`, `OverrideVsOverloadSection`
- [ ] Registrar quiz `override-y-sobrecarga` en `teaching-quizzes/poo.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `polimorfismo` |
| `next` | `diagramas-de-clases` |
