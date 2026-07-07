---
track: poo
slug: diagramas-de-clases
title: "Diagramas de Clases"
order: 8
prev: override-y-sobrecarga
next: solid-principios
---

## DiagramasDeClasesLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<ElementosBasicosSection />
<HerenciaInterfacesDiagramaSection />
<RelacionesDiagramaSection />
<CasoIntegradoTiendaSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

**Renombrar/refactor:** `ParaQueSirvenLosSection` → absorber en `ObjetivosDelTemaSection` (eliminar stub); `ElementosBasicosClaseAtributosSection` → `ElementosBasicosSection`; `HerenciaEInterfacesEnSection` → `HerenciaInterfacesDiagramaSection`; `AsociacionAgregacionComposicionRecordatorioSection` → `RelacionesDiagramaSection`; `CasoIntegradoTiendaPedidosSection` → `CasoIntegradoTiendaSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout`, `MermaidDiagram` | **Nuevo.** 5 objetivos + prerrequisitos + callout estructura vs secuencia (draft L35–50). |
| 2 | Elementos básicos del diagrama | `sections/ElementosBasicosSection.tsx` | `MermaidDiagram`, `CodeFiddle`, `StepReveal` | Refactor desde `ElementosBasicosClaseAtributosSection`. H2 sin prefijo «1)». **Único `CodeFiddle` de la lección.** |
| 3 | Herencia e interfaces en el diagrama | `sections/HerenciaInterfacesDiagramaSection.tsx` | `MermaidDiagram` ×2, `PracticeExercise` | Refactor desde `HerenciaEInterfacesEnSection`. H2 sin prefijo «2)». |
| 4 | Relaciones: asociación, agregación y composición | `sections/RelacionesDiagramaSection.tsx` | `CompareTable`, `MermaidDiagram` ×2, `PracticeExercise` | Refactor desde `AsociacionAgregacionComposicionRecordatorioSection`. H2 sin prefijo «3)». |
| 5 | Caso integrado: tienda de pedidos | `sections/CasoIntegradoTiendaSection.tsx` | `MermaidDiagram`, `StepReveal`, `PracticeExercise` | Refactor desde `CasoIntegradoTiendaPedidosSection`. H2 sin prefijo «4)». |
| 6 | Resumen | `sections/ResumenSection.tsx` | `CompareTable` | **Nuevo.** Viñetas 6 puntos + checklist símbolos Mermaid (draft L285–309). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L317). Ejercicios `my-8`. |
| 8 | Reto integrador: modelo de pedidos | `sections/RetoIntegradorSection.tsx` | `MermaidDiagram` | **Nuevo.** Partes A–D + diagrama Checkout/IPasarelaPago (draft L357–392). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `solid-principios` (draft L396–409). |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="diagramas-de-clases" track="poo"`. |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `diagramas-de-clases` con 5 preguntas del draft L419–458:

| # | Tema |
|---|------|
| 1 | V/F: diagrama muestra algoritmos y orden de ejecución |
| 2 | Qué muestra mejor un diagrama de clases |
| 3 | Notación Mermaid para implementación de interfaz (`<\|..`) |
| 4 | Relación Pedido — LineaPedido (composición `*--`) |
| 5 | V/F: modelo UML traducible a clases C# |

**Infra:** `<QuizSection slug="diagramas-de-clases" track="poo" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO / lesson-draft) |
|-------|-----------------------------------|
| `seoTitle` | `Diagramas de clases UML en Mermaid: herencia y relaciones \| POO` |
| `seoDescription` | `Aprende diagramas de clases con Mermaid: herencia, interfaces, asociación, agregación y composición. Modela tienda de pedidos y alinea UML con C#.` |

## Bloques interactivos — props detalladas

> **Regla:** solo el bloque `<!-- code: csharp -->` del draft (Producto) → `CodeFiddle`. Resto de contenido técnico = `MermaidDiagram` / prose. No `CodeBlock`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L18–24 |
| Prerrequisitos | prose `<ul>` | asociación, override, abstracción, polimorfismo (draft L26–31) |
| Intro | prose | diagrama UML como plano (draft L39) |
| `estructura-no-secuencia` | `Callout` | `variant="callout-info"`; title: «Estructura, no secuencia»; children draft L44 |
| `uml-a-csharp-flow` | `MermaidDiagram` | chart draft L49 |

### `ElementosBasicosSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | compartimentos UML (draft L58–62) |
| Qué representa | prose | interfaz pública del dominio (draft L64–66) |
| `diagrama-producto` | `MermaidDiagram` | chart draft L72 |
| `producto-csharp` | `CodeFiddle` | `language="csharp"`; code draft L79–95 |
| `leer-diagrama-clase` | `StepReveal` | title: «Leer un diagrama de clase»; steps[4] draft L104–108 |
| Errores comunes | prose `<ul>` | 3 ítems (draft L112–116) |

### `HerenciaInterfacesDiagramaSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | herencia `<|--`, interfaz `<|..` (draft L124–128) |
| `notificacion-abstracta` | `MermaidDiagram` | chart draft L134 |
| `pasarelas-interfaz` | `MermaidDiagram` | chart draft L141 |
| Señales en el diagrama | prose `<ul>` | 3 ítems (draft L144–148) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L150–154) |
| `anade-notificacion-diagrama` | `PracticeExercise` | prompt: «Añade al diagrama de Producto la clase abstracta Notificacion con NotificacionEmail y NotificacionSms. Usa estereotipos y herencia correctos en Mermaid.»; hints: `["Notificacion lleva <<abstract>>", "Herencia de clase usa <|--", "NotificacionEmail y NotificacionSms heredan de Notificacion"]`; expectedKeywords: `["abstract", "<|--", "NotificacionEmail", "NotificacionSms"]`; successMessage: «Correcto. Has modelado jerarquía abstracta con sintaxis Mermaid válida.» |

### `RelacionesDiagramaSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | asociación, agregación, composición, cardinalidad (draft L174–179) |
| `comparacion-relaciones-uml` | `CompareTable` | headers: `["Relación", "Símbolo Mermaid", "Ciclo de vida", "Ejemplo típico"]`; rows draft L186–190 |
| `relaciones-recordatorio` | `MermaidDiagram` | chart draft L197 |
| `composicion-pedido-linea` | `MermaidDiagram` | chart draft L204 |
| Caso real | prose | onboarding tienda online (draft L207–209) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L211–215) |
| `doctor-paciente-relacion` | `PracticeExercise` | prompt: «Para Doctor y Paciente en una consulta, ¿asociación, agregación o composición? Argumenta ciclo de vida en 2–3 frases.»; hints: `["El paciente existe sin esa consulta específica", "No es composición — el paciente no muere con la consulta", "Asociación simple con flecha suele bastar"]`; expectedKeywords: `["asociación", "ciclo de vida", "independiente"]`; successMessage: «Correcto. Doctor y Paciente se relacionan sin propiedad fuerte de ciclo de vida.» |

### `CasoIntegradoTiendaSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | modelo completo tienda (draft L235–239) |
| `caso-integrado-tienda` | `MermaidDiagram` | chart draft L245 |
| `uml-a-csharp-tienda` | `StepReveal` | title: «Caso tienda: de UML a C#»; steps[4] draft L253–257 |
| Caso real | prose | refactor checkout 90 min (draft L261–263) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L265–269) |
| `carrito-producto-agregacion` | `PracticeExercise` | prompt: «Dibuja en Mermaid Usuario, Carrito y Producto. Conecta carrito con varios productos. Justifica agregación vs composición.»; hints: `["Carrito o-- Producto si el producto existe en catálogo sin carrito", "Cardinalidad 0..* en productos del carrito", "No uses composición si Producto es catálogo compartido"]`; expectedKeywords: `["Carrito", "Producto", "agregación", "o--"]`; successMessage: «Correcto. Agregación refleja que el producto del catálogo sobrevive al carrito.» |

### `ResumenSection`

| id | componente | props |
|----|------------|-------|
| Viñetas | prose `<ul>` | 6 puntos draft L289–294 |
| `checklist-simbolos-mermaid` | `CompareTable` | headers: `["Concepto", "Sintaxis Mermaid"]`; rows draft L301–308 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L317 |
| `comprension-carrito-mermaid` | `PracticeExercise` | prompt: «Dibuja en Mermaid Usuario, Carrito y Producto; conecta carrito con varios productos. Justifica agregación vs composición.»; hints: `["Producto del catálogo no desaparece al vaciar carrito", "Rombo vacío o-- para agregación", "Incluye cardinalidad en la relación"]`; expectedKeywords: `["Mermaid", "agregación", "Producto", "Carrito"]`; successMessage: «Correcto. Has modelado relación con ciclo de vida independiente del catálogo.» |
| `comprension-producto-notificacion` | `PracticeExercise` | prompt: «Añade AplicarDescuento(decimal porcentaje) al diagrama de Producto y la jerarquía Notificacion abstracta con Email y Sms.»; hints: `["Método en cuerpo de Producto en classDiagram", "<<abstract>> en Notificacion", "Notificacion <|-- NotificacionEmail"]`; expectedKeywords: `["AplicarDescuento", "abstract", "NotificacionEmail"]`; successMessage: «Correcto. Diagrama actualizado con método y jerarquía abstracta.» |
| `comprension-srp-diagrama` | `PracticeExercise` | prompt: «Señala en el caso tienda una clase que podría violar SRP si se le añaden más de cinco responsabilidades distintas. ¿Cuál y por qué?»; hints: `["PedidoService o clase que mezcla dominios", "Muchos métodos de áreas distintas en una caja", "Preview lección SOLID — un motivo de cambio"]`; expectedKeywords: `["SRP", "responsabilidad", "Pedido"]`; successMessage: «Correcto. Diagramas con clases sobrecargadas anticipan refactor SOLID.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Modelo de pedidos: de UML a diseño C#»; Partes A–D + criterio éxito (draft L361–387) |
| `reto-checkout-pasarela` | `MermaidDiagram` | chart draft L391 — referencia Parte C (Checkout + IPasarelaPago) |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L400 |
| Ideas clave | `<ul>` 4 viñetas draft L404–407 |
| Siguiente paso | enlace `solid-principios` draft L409 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="diagramas-de-clases" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout`, `MermaidDiagram` |
| `sections/ResumenSection.tsx` | `ResumenSection` | `CompareTable` |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `MermaidDiagram` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ParaQueSirvenLosSection.tsx` | **Eliminar** — contenido absorbido por `ObjetivosDelTemaSection` |
| `ElementosBasicosClaseAtributosSection.tsx` | Renombrar → `ElementosBasicosSection.tsx`; poblar: `MermaidDiagram`, `CodeFiddle` (Producto), `StepReveal`; H2 «Elementos básicos del diagrama» |
| `HerenciaEInterfacesEnSection.tsx` | Renombrar → `HerenciaInterfacesDiagramaSection.tsx`; poblar: 2 `MermaidDiagram`, `PracticeExercise`; H2 «Herencia e interfaces en el diagrama» |
| `AsociacionAgregacionComposicionRecordatorioSection.tsx` | Renombrar → `RelacionesDiagramaSection.tsx`; poblar: `CompareTable`, 2 `MermaidDiagram`, `PracticeExercise`; H2 «Relaciones: asociación, agregación y composición» |
| `CasoIntegradoTiendaPedidosSection.tsx` | Renombrar → `CasoIntegradoTiendaSection.tsx`; poblar: `MermaidDiagram`, `StepReveal`, `PracticeExercise`; H2 «Caso integrado: tienda de pedidos» |
| `DiagramasDeClasesLesson.tsx` | Orden 10 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)» … «4)»)
- [ ] **Un solo** `CodeFiddle` (`Producto`) — resto Mermaid-heavy
- [ ] Crear secciones pedagógicas
- [ ] Renombrar y poblar las 4 secciones técnicas refactorizadas
- [ ] Eliminar `ParaQueSirvenLosSection`
- [ ] Registrar quiz `diagramas-de-clases` en `teaching-quizzes/poo.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `override-y-sobrecarga` |
| `next` | `solid-principios` |
