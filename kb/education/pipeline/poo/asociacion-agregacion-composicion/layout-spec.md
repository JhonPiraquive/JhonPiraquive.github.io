---
track: poo
slug: asociacion-agregacion-composicion
title: "Asociación, Agregación y Composición"
order: 4
prev: herencia
next: abstraccion-clases-abstractas-interfaces
---

## AsociacionAgregacionComposicionLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<AsociacionSection />
<AgregacionSection />
<ComposicionSection />
<ComparacionRelacionesSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir en `AsociacionAgregacionComposicionLesson.tsx`: `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

**Eliminar:** `AntesDeEmpezarIdeaSection` (contenido absorbido por `ObjetivosDelTemaSection`).

**Renombrar:** `ComparacionRapidaAsociacionVsSection` → `ComparacionRelacionesSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L15–43). |
| 2 | Asociación: colaboración sin propiedad | `sections/AsociacionSection.tsx` | `CodeFiddle` ×2, `MermaidDiagram`, `CodeChallenge` | Poblar stub. H2 sin prefijo «1)». |
| 3 | Agregación: todo–parte débil | `sections/AgregacionSection.tsx` | `CodeFiddle`, `StepReveal`, `MermaidDiagram`, `PracticeExercise` | Poblar stub. H2 sin prefijo «2)». |
| 4 | Composición: todo–parte fuerte | `sections/ComposicionSection.tsx` | `CodeFiddle` ×2, `StepReveal`, `MermaidDiagram` | Poblar stub. H2 sin prefijo «3)». |
| 5 | Comparación y decisión de diseño | `sections/ComparacionRelacionesSection.tsx` | `CompareTable`, `MermaidDiagram` ×2, `Callout` | Renombrar desde `ComparacionRapidaAsociacionVsSection`. H2 sin prefijo «4)». |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** Viñetas 6 puntos (draft L407–412). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L420). Ejercicios apilados `my-8`. |
| 8 | Reto integrador: biblioteca y tienda en consola | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Partes A–D + criterio éxito (draft L464–487). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `abstraccion-clases-abstractas-interfaces` (draft L507–516). |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="asociacion-agregacion-composicion" track="poo"`. H2: «Mini-quiz». |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `asociacion-agregacion-composicion` con 5 preguntas del draft L525–572:

| # | Tema |
|---|------|
| 1 | V/F: asociación sin propiedad fuerte |
| 2 | Agregación = todo agrupa partes independientes |
| 3 | Par composición: Pedido–LineaPedido |
| 4 | V/F: composición y ciclo de vida del todo |
| 5 | Lista pública `Lineas` rompe control del Pedido |

**Infra:** `<QuizSection slug="asociacion-agregacion-composicion" track="poo" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Asociación, agregación y composición en C# \| POO` |
| `seoDescription` | `Lección 4 POO: Doctor–Paciente, Biblioteca–Libro y Pedido–LineaPedido; criterios de ciclo de vida para asociación, agregación y composición. Mini-quiz.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: csharp -->` del draft → `CodeFiddle` con `language="csharp"` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L17–23 |
| Prerrequisitos | prose `<ul>` | herencia, encapsulamiento, dotnet (draft L25–29) |
| `relacionar-no-heredar` | `Callout` | `variant="callout-info"`; title: «Relacionar ≠ heredar»; children draft L39–42 |

### `AsociacionSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 3 viñetas (draft L51–55) |
| Qué es / Señales | prose | definición Doctor–Paciente (draft L57–65) |
| `doctor-paciente` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\n\npublic class Paciente\n{\n    public string Nombre { get; }\n    public Paciente(string nombre) => Nombre = nombre;\n}\n\npublic class Doctor\n{\n    public string Nombre { get; }\n    public Doctor(string nombre) => Nombre = nombre;\n\n    public void Atender(Paciente paciente)\n    {\n        Console.WriteLine($"{Nombre} atiende a {paciente.Nombre}");\n    }\n}` |
| Asociación formalizada (H3) | prose | clase puente (draft L91–93) |
| `clase-cita` | `CodeFiddle` | `language="csharp"`; code: |
| | | `public class Cita\n{\n    public Doctor Doctor { get; }\n    public Paciente Paciente { get; }\n    public DateTime Fecha { get; }\n\n    public Cita(Doctor doctor, Paciente paciente, DateTime fecha)\n    {\n        Doctor = doctor ?? throw new ArgumentNullException(nameof(doctor));\n        Paciente = paciente ?? throw new ArgumentNullException(nameof(paciente));\n        Fecha = fecha;\n    }\n}\n\n// Doctor.Atender(Cita cita) imprime fecha + nombres` |
| Caso real hospital | prose | Consulta : Paciente (draft L114–118) |
| `diagrama-asociacion` | `MermaidDiagram` | chart draft L122–125 |
| Errores comunes | prose `<ul>` | 2 ítems (draft L127–130) |
| `completa-asociacion` | `CodeChallenge` | title: «Completa la asociación»; template: `public void Atender(___ paciente)\n{\n    Console.WriteLine($"{Nombre} atiende a {paciente.Nombre}");\n}`; blanks: `[{ "id": "b1", "answer": "Paciente", "hint": "Tipo del parámetro que recibe el doctor" }]` |

### `AgregacionSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 3 viñetas (draft L147–151) |
| Qué es / Señales | prose | Biblioteca–Libro (draft L153–161) |
| `biblioteca-libro` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\nusing System.Collections.Generic;\n\npublic class Libro\n{\n    public string Titulo { get; }\n    public Libro(string titulo) => Titulo = titulo;\n}\n\npublic class Biblioteca\n{\n    private readonly List<Libro> _libros = new();\n\n    public void Agregar(Libro libro) => _libros.Add(libro);\n\n    public bool Quitar(string titulo)\n    {\n        var idx = _libros.FindIndex(l => l.Titulo == titulo);\n        if (idx < 0) return false;\n        _libros.RemoveAt(idx);\n        return true;\n    }\n\n    public void Listar()\n    {\n        foreach (var libro in _libros)\n            Console.WriteLine(libro.Titulo);\n    }\n}` |
| `ciclo-agregar-quitar` | `StepReveal` | title: «Agregar y quitar libro»; steps[5] draft L200–209 |
| Caso real e-commerce | prose | Carrito–Producto (draft L212–214) |
| `diagrama-agregacion` | `MermaidDiagram` | chart draft L218–221 |
| Errores comunes | prose `<ul>` | 2 ítems (draft L223–226) |
| `agregacion-biblioteca` | `PracticeExercise` | prompt: «¿Por qué `Biblioteca` con `List<Libro>` privada es agregación y no composición? Menciona quién crea el `Libro` y qué pasa al quitar.»; hints: `["El Libro se crea fuera de Biblioteca", "Quitar solo elimina la referencia en la lista", "El objeto Libro puede seguir existiendo"]`; expectedKeywords: `["referencia", "crea", "quitar", "independiente"]`; successMessage: «Correcto. Agregación: el todo agrupa referencias; las partes tienen ciclo de vida propio.» |

### `ComposicionSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 3 viñetas (draft L246–250) |
| Qué es / Señales | prose | Pedido–LineaPedido (draft L252–260) |
| `pedido-linea` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class LineaPedido\n{\n    public string Producto { get; }\n    public int Cantidad { get; }\n    public decimal PrecioUnitario { get; }\n\n    public LineaPedido(string producto, int cantidad, decimal precioUnitario)\n    {\n        if (string.IsNullOrWhiteSpace(producto)) throw new ArgumentException("Producto requerido");\n        if (cantidad <= 0) throw new ArgumentException("Cantidad inválida");\n        if (precioUnitario < 0) throw new ArgumentException("Precio inválido");\n        Producto = producto;\n        Cantidad = cantidad;\n        PrecioUnitario = precioUnitario;\n    }\n\n    public decimal Subtotal() => Cantidad * PrecioUnitario;\n}\n\npublic class Pedido\n{\n    private readonly List<LineaPedido> _lineas = new();\n\n    public void AgregarLinea(string producto, int cantidad, decimal precioUnitario)\n    {\n        _lineas.Add(new LineaPedido(producto, cantidad, precioUnitario));\n    }\n\n    public void QuitarProducto(string producto)\n    {\n        _lineas.RemoveAll(l => l.Producto == producto);\n    }\n\n    public decimal Total() => _lineas.Sum(l => l.Subtotal());\n}` |
| Anti-patrón lista pública (H3) | `CodeFiddle` | `language="csharp"`; code: `// MAL: rompe el control del Pedido sobre sus líneas\npublic List<LineaPedido> Lineas { get; set; }` |
| Prose anti-patrón | prose | mutación externa (draft L314) |
| `ciclo-linea-pedido` | `StepReveal` | title: «Línea de pedido»; steps[4] draft L318–326 |
| Caso real marketplace | prose | precio congelado (draft L329–333) |
| `diagrama-composicion` | `MermaidDiagram` | chart draft L337–340 |
| Errores comunes | prose `<ul>` | 2 ítems (draft L342–345) |

### `ComparacionRelacionesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 3 viñetas (draft L353–357) |
| `tabla-comparativa` | `CompareTable` | headers: `["Criterio", "Asociación", "Agregación", "Composición"]`; rows draft L363–369 |
| `flujo-decision` | `MermaidDiagram` | chart draft L374–377 |
| Cuatro casos de dominio | prose tabla | draft L381–386 |
| `tres-relaciones-vistazo` | `MermaidDiagram` | chart draft L390–393 |
| `error-frecuente-list` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L396–398 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L407–412 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L420 |
| `comprension-cuatro-pares` | `PracticeExercise` | prompt: «Para cada par elige asociación, agregación o composición y justifica mencionando ciclo de vida: (1) Universidad–Departamento, (2) CarritoDeCompras–Producto, (3) Factura–LineaFactura, (4) Usuario–Sesion.»; hints: `["¿La parte puede existir sin el todo?", "¿Quién crea la parte?", "¿El vínculo es solo uso puntual o agrupación con reglas?"]`; expectedKeywords: `["agregación", "composición", "ciclo de vida", "asociación"]`; successMessage: «Correcto. Usa ciclo de vida y propiedad como criterio principal, no solo la sintaxis de colecciones.» |
| `comprension-clase-cita` | `PracticeExercise` | prompt: «Implementa `Cita` con `Doctor`, `Paciente` y `DateTime`. Cambia `Doctor.Atender(Paciente)` por `Doctor.Atender(Cita)` imprimiendo fecha y nombres de ambos participantes.»; hints: `["Cita recibe doctor, paciente y fecha en el constructor", "Atender(Cita cita) accede a cita.Doctor, cita.Paciente, cita.Fecha", "Valida null en el constructor de Cita"]`; expectedKeywords: `["Cita", "DateTime", "Atender"]`; successMessage: «Correcto. Has formalizado una asociación temporal con una clase de enlace.» |
| `comprension-quitar-biblioteca` | `PracticeExercise` | prompt: «En `Biblioteca`, quita un libro con `Quitar(string titulo)` y demuestra en comentarios o `Main` que el objeto `Libro` sigue usable si otra variable lo referencia.»; hints: `["Crea el Libro antes de agregarlo", "Guarda referencia en variable local", "Después de Quitar, imprime libro.Titulo desde la variable local"]`; expectedKeywords: `["Quitar", "referencia", "sigue"]`; successMessage: «Correcto. Quitar de una agregación no destruye la parte en memoria.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Biblioteca y tienda en consola»; Partes A–D + criterio éxito (draft L464–487) |
| `reto-justificacion-parte-d` | `PracticeExercise` | prompt: «Redacta la justificación (Parte D): ¿por qué Clase no hereda de Estudiante y por qué LineaPedido no se construye en Main?»; hints: `["Estudiante no es un tipo de Clase — son roles distintos en asociación", "LineaPedido solo tiene sentido dentro de un Pedido concreto", "El Pedido debe controlar creación y reglas de sus líneas"]`; expectedKeywords: `["herencia", "composición", "asociación", "ciclo de vida"]`; successMessage: «Excelente. Has distinguido colaboración, agrupación débil y parte fuerte.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L507 |
| Ideas clave | `<ul>` 4 viñetas draft L511–514 |
| Siguiente paso | enlace `abstraccion-clases-abstractas-interfaces` draft L516 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="asociacion-agregacion-composicion" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/ComparacionRelacionesSection.tsx` | `ComparacionRelacionesSection` | `CompareTable`, `MermaidDiagram` ×2, `Callout` (renombrar desde `ComparacionRapidaAsociacionVsSection`) |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `AntesDeEmpezarIdeaSection.tsx` | **Eliminar** — reemplazado por `ObjetivosDelTemaSection` |
| `AsociacionSection.tsx` | Poblar: 2 `CodeFiddle` (csharp), `MermaidDiagram`, `CodeChallenge`; H2 «Asociación: colaboración sin propiedad» |
| `AgregacionSection.tsx` | Poblar: `CodeFiddle`, `StepReveal`, `MermaidDiagram`, `PracticeExercise`; H2 «Agregación: todo–parte débil» |
| `ComposicionSection.tsx` | Poblar: 2 `CodeFiddle` (csharp), `StepReveal`, `MermaidDiagram`; H2 «Composición: todo–parte fuerte» |
| `ComparacionRapidaAsociacionVsSection.tsx` | Renombrar → `ComparacionRelacionesSection.tsx`; poblar `CompareTable`, 2 `MermaidDiagram`, `Callout`; H2 «Comparación y decisión de diseño» |
| `AsociacionAgregacionComposicionLesson.tsx` | Orden 10 secciones + imports; quitar `AntesDeEmpezarIdeaSection` |

## Checklist lesson-developer

- [ ] H2 según lesson-spec § Headings (sin prefijos «1)» / «2)»)
- [ ] Migrar todo código → `CodeFiddle` con `language="csharp"` (5 bloques en draft)
- [ ] Crear `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`
- [ ] Renombrar y poblar `ComparacionRelacionesSection`; poblar `AsociacionSection`, `AgregacionSection`, `ComposicionSection`
- [ ] Eliminar `AntesDeEmpezarIdeaSection`
- [ ] Registrar quiz `asociacion-agregacion-composicion` en `teaching-quizzes/poo.ts`
- [ ] Actualizar `AsociacionAgregacionComposicionLesson.tsx` con orden y imports
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `herencia` |
| `next` | `abstraccion-clases-abstractas-interfaces` |
