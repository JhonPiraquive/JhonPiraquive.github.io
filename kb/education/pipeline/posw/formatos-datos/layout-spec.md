---
track: posw
slug: formatos-datos
title: "Formatos de Datos: XML y JSON"
order: 2
prev: servicios-web
next: protocolos-seguridad
---

## FormatosDatosLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<XmlSection />
<JsonSection />
<ComparativaXmlJsonSection />
<CasosDeUsoSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 4 secciones temáticas + 6 bloques pedagógicos (10 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `XmlSection`, `JsonSection`, `ComparativaXmlJsonSection`, `CasosDeUsoSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L27–55). |
| 2 | XML: eXtensible Markup Language | `sections/XmlSection.tsx` | `CodeFiddle` ×2, `MermaidDiagram`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | JSON: JavaScript Object Notation | `sections/JsonSection.tsx` | `CodeFiddle` ×3, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | Comparativa XML vs JSON | `sections/ComparativaXmlJsonSection.tsx` | `CompareTable`, `MermaidDiagram`, `StepReveal` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Casos de uso reales | `sections/CasosDeUsoSection.tsx` | `Callout`, `PracticeExercise` | **Nuevo.** Tablas cuándo XML/JSON; H2 sin prefijo «4)». |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L330–335). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 8 | Reto integrador: marketplace colombiano | `sections/RetoIntegradorSection.tsx` | `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Enunciado + ejemplos (draft L369–420). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `protocolos-seguridad` (draft L424–437). |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="formatos-datos" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `formatos-datos` con 5 preguntas del draft L445–503:

| # | Tema |
|---|------|
| 1 | Elemento raíz único en XML |
| 2 | Tipos nativos JSON |
| 3 | Regla práctica REST 2025 |
| 4 | Atributo XML → campo JSON |
| 5 | JSON.parse() vs DOMParser |

**Infra:** `<QuizSection slug="formatos-datos" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `XML vs JSON: formatos de datos en servicios web \| POSW` |
| `seoDescription` | `Compara XML y JSON con ejemplos de pedidos, parsing en JavaScript, regla práctica REST vs SOAP y casos DIAN. Segunda lección del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L29–35 |
| Prerrequisitos | prose `<ul>` | draft L39–41 |
| `regla-practica-formato` | `Callout` | `variant="callout-info"`; title: «Regla práctica»; children draft L52–54 |

### `XmlSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L63–68 |
| Qué es / Estructura | prose + `<ol>` | draft L70–79 |
| `pedido-xml` | `CodeFiddle` | `language="xml"`; title: «Pedido en XML»; code draft L84–105 |
| `arbol-pedido-xml` | `MermaidDiagram` | chart draft L109–111 |
| `parsear-xml-domparser` | `CodeFiddle` | `language="javascript"`; title: «Parsear XML en el navegador»; code draft L117–122 |
| `error-raiz-unica` | `Callout` | title: «Error frecuente»; children draft L125–127 |
| `practica-domparser` | `PracticeExercise` | prompt: «Parsea un XML mínimo con DOMParser y lee un atributo del elemento raíz. ¿Qué método usas para obtener el valor del atributo id?»; hints: `["DOMParser con application/xml", "getAttribute en documentElement"]`; expectedKeywords: `["DOMParser", "getAttribute", "documentElement"]`; successMessage: «Correcto. DOMParser construye el árbol; getAttribute lee atributos de un elemento.» |

### `JsonSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L146–151 |
| Qué es | prose | draft L153–155 |
| `pedido-json` | `CodeFiddle` | `language="json"`; title: «Mismo pedido en JSON»; code draft L160–183 |
| `parsear-json` | `CodeFiddle` | `language="javascript"`; title: «Parsear JSON en JavaScript»; code draft L188–195 |
| `json-invalido` | `CodeFiddle` | `language="json"`; title: «Anti-ejemplo: JSON inválido»; code draft L200–205 |
| `error-comentarios-json` | `Callout` | title: «Error frecuente»; children draft L208–210 |
| `completa-tipos-json` | `CodeChallenge` | title: «Completa los tipos nativos de JSON»; template: `JSON soporta tipos nativos como ___, ___, ___ y ___ (además de array y object).`; blanks: `[{ "id": "blank1", "answer": "string", "placeholder": "texto" }, { "id": "blank2", "answer": "number", "placeholder": "numérico" }, { "id": "blank3", "answer": "boolean", "placeholder": "true/false" }, { "id": "blank4", "answer": "null", "placeholder": "ausencia de valor" }]` |

### `ComparativaXmlJsonSection`

| id | componente | props |
|----|------------|-------|
| `tabla-xml-vs-json` | `CompareTable` | headers draft L236–237; rows draft L238–247 |
| Por qué JSON es más compacto | prose `<ul>` | draft L251–254 |
| `decision-formato` | `MermaidDiagram` | chart draft L258–260 |
| `regla-practica-step-reveal` | `StepReveal` | title: «Regla práctica: cuándo cada formato»; steps[4] draft L266–283 |

### `CasosDeUsoSection`

| id | componente | props |
|----|------------|-------|
| Cuándo XML | prose `<table>` | draft L294–299 |
| Cuándo JSON | prose `<table>` | draft L303–308 |
| `caso-integracion-bancaria` | `Callout` | title: «Caso real: integración bancaria»; children draft L311–313 |
| `practica-api-catalogo` | `PracticeExercise` | prompt: «Tu API nueva expone catálogo de productos para app móvil y web. ¿XML o JSON? Justifica con interoperabilidad y tamaño.»; hints: `["API REST moderna", "Ecosistema web y parsing nativo"]`; expectedKeywords: `["JSON", "compacto", "REST", "parse"]`; successMessage: «Correcto. JSON es el predeterminado en APIs REST nuevas: compacto, tipos nativos y parsing trivial en clientes web y móviles.» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L330–335 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-tamano-xml-json` | `PracticeExercise` | prompt: «¿Por qué el mismo pedido ocupa ~520 bytes en XML y ~320 en JSON? Menciona al menos dos causas.»; hints: `["Etiquetas de cierre", "Atributos vs objetos anidados"]`; expectedKeywords: `["etiquetas", "cierre", "verbos", "atributo"]`; successMessage: «Correcto. Las etiquetas de apertura/cierre y la sintaxis más verbosa de XML aumentan el tamaño frente a JSON.» |
| `comprension-orden-xml` | `PracticeExercise` | prompt: «Ordena partes de un documento XML válido: (a) elemento raíz, (b) declaración <?xml?>, (c) elementos hijos anidados, (d) atributos en apertura. ¿Cuál va primero?»; hints: `["La declaración precede al contenido", "Un solo raíz envuelve hijos"]`; expectedKeywords: `["b", "a", "c", "d"]`; successMessage: «Correcto. Orden: (b) declaración → (a) raíz → (c) hijos anidados; (d) atributos van en la etiqueta de apertura del elemento.» |
| `comprension-casos-xml` | `PracticeExercise` | prompt: «Nombra dos casos de uso reales donde XML sigue siendo la opción correcta aunque JSON sea más popular.»; hints: `["Piensa en SOAP bancario", "Regulación o facturación"]`; expectedKeywords: `["SOAP", "facturación", "WSDL", "legado"]`; successMessage: «Correcto. SOAP bancario, facturación DIAN, WSDL y configs Maven/Spring son casos donde XML sigue siendo obligatorio o convencional.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Elige y modela el formato del contrato»; tareas 1–5 + criterio éxito (draft L373–389) |
| `reto-producto-json` | `CodeFiddle` | `language="json"`; title: «Producto en JSON»; code draft L392–398 |
| `reto-producto-xml` | `CodeFiddle` | `language="xml"`; title: «Producto en XML»; code draft L401–407 |
| `reto-marketplace-formato` | `PracticeExercise` | prompt: «Asigna formato a las tres integraciones del marketplace (API REST, facturación DIAN, RSS) y escribe los ejemplos JSON y XML del producto. ¿Cómo validarías cada uno?»; hints: `["API REST → JSON", "Facturación DIAN → XML", "RSS → XML", "JSON Schema vs XSD"]`; expectedKeywords: `["JSON", "XML", "DIAN", "Schema"]`; successMessage: «Excelente. Has aplicado la regla práctica y modelado ambos formatos con validación adecuada.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L428 |
| Ideas clave | `<ul>` 4 viñetas draft L432–435 |
| Siguiente paso | enlace `protocolos-seguridad` draft L437 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="formatos-datos" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/XmlSection.tsx` | `XmlSection` | `CodeFiddle` ×2, `MermaidDiagram`, `Callout`, `PracticeExercise` |
| `sections/JsonSection.tsx` | `JsonSection` | `CodeFiddle` ×3, `Callout`, `CodeChallenge` |
| `sections/ComparativaXmlJsonSection.tsx` | `ComparativaXmlJsonSection` | `CompareTable`, `MermaidDiagram`, `StepReveal` |
| `sections/CasosDeUsoSection.tsx` | `CasosDeUsoSection` | `Callout`, `PracticeExercise` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle` ×2, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 4 secciones temáticas |
| `FormatosDatosLesson.tsx` | Orden 10 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«4)»)
- [ ] Migrar todo código → `CodeFiddle` (`xml`, `json`, `javascript` — 7 bloques en draft)
- [ ] Crear 10 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `formatos-datos` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `servicios-web` |
| `next` | `protocolos-seguridad` |
