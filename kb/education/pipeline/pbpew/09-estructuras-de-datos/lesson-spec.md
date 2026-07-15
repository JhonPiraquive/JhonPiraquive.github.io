---
track: pbpew
slug: 09-estructuras-de-datos
title: "Estructuras de datos en JavaScript: Map, Set, pila LIFO y cola FIFO"
order: 9
prev: "08-this-scope-clases"
next: "10-dom-y-eventos"
interactive_blocks:
  - type: mermaid
    id: arbol-decision-estructuras
  - type: callout
    id: error-frecuente-map-api
  - type: callout
    id: caso-cache-sesion-map
  - type: code-challenge
    id: map-inventario-challenge
  - type: step-reveal
    id: set-elimina-duplicados
  - type: code-challenge
    id: set-registrar-visitas-challenge
  - type: practice-exercise
    id: set-size-duplicados
  - type: mermaid
    id: flujo-pila-lifo
  - type: callout
    id: error-frecuente-pop-lifo
  - type: code-challenge
    id: pila-historial-challenge
  - type: mermaid
    id: flujo-cola-fifo
  - type: callout
    id: caso-cola-tickets-al-reves
  - type: compare-table
    id: comparativa-lifo-fifo
  - type: practice-exercise
    id: comprension-lifo-fifo
  - type: compare-table
    id: comparativa-objeto-map
  - type: callout
    id: serializacion-map-json
  - type: practice-exercise
    id: comprension-set-spread
  - type: practice-exercise
    id: comprension-orden-fifo
  - type: practice-exercise
    id: comprension-set-referencias
  - type: practice-exercise
    id: reto-centro-turnos-cache
  - type: quiz
    id: cierre-quiz
brand_tone: academico-universitario
---

## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — material docente universitario del track PBPEW. Referencia de formato: `kb/education/pipeline/pbpew/06-funciones-y-callbacks/lesson-spec.md` (§ Brand); alineación de headings con § SEO cuando exista en este mismo archivo.

### Tono (`brand_tone`)

- **Registro:** académico universitario en español; preciso, didáctico y orientado a elegir la estructura según la regla de negocio.
- **Persona:** segunda persona (*tú*) en ejercicios, retos y miniquiz; tercera persona o impersonal en objetivos y definiciones (*el estudiante podrá…*, *una estructura de datos organiza…*).
- **Voz:** profesional, clara, confiable; enfatiza *patrón frente a tipo nativo* y *objeto literal frente a Map* como decisiones de diseño, no como preferencias arbitrarias.
- **Evitar:** jerga vacía, tono infantil, humor forzado, metáforas gamer o estilo blog informal; no presentar pila/cola como «trucos de array» sin el contrato LIFO/FIFO.
- **Preferir:** verbos de acción concretos (*definir*, *distinguir*, *crear*, *iterar*, *encolar*, *desencolar*, *elegir*, *integrar*).

### Título de lección refinado

**ES:** `Estructuras de datos en JavaScript: Map, Set, pila LIFO y cola FIFO`

- Añade *Estructuras de datos en JavaScript* para contexto académico y coherencia con el track PBPEW.
- Mantiene las cuatro ideas del borrador: `Map`, `Set`, pila LIFO y cola FIFO.
- Sustituye paréntesis en el título por subtítulo con dos puntos, alineado a lecciones 01 y 06.

### Voice notes — encabezados de sección

| Sección | Copy sugerido | Notas de voz |
|---------|---------------|--------------|
| Objetivos del tema | Objetivos de aprendizaje | Neutro, catalogable; no repetir el título de la lección |
| Introducción | Estructuras de datos en JavaScript | H2 nominal; definir estructura de datos en una oración antes del diagrama de decisión |
| Map | `Map` en JavaScript: pares clave-valor | H2 con API en backticks en primera mención del bloque |
| Set | `Set` en JavaScript: valores únicos | H2 paralelo a Map; enfatizar unicidad con `===` |
| Pila | Pila (LIFO) en JavaScript | Conservar acrónimo LIFO en subtítulo; metáfora de platos en cuerpo |
| Cola | Cola (FIFO) en JavaScript | Conservar acrónimo FIFO; metáfora de fila en cuerpo |
| Map vs objeto | `Map` frente a objeto literal | H2 de decisión; tabla comparativa como apoyo, no como sustituto del criterio |
| Resumen | Resumen | Viñetas con sustantivos o infinitivos; preview lección 10 al final |
| Comprueba tu comprensión | Comprueba tu comprensión | Imperativo amable; tono de autoevaluación formativa |
| Reto integrador | Reto integrador: centro de turnos y caché de consultas | Subtítulo en minúsculas tras dos puntos; escenario de soporte y caché |
| Cierre | Cierre de la lección | Formal breve; enlace explícito a lección 10 |
| Mini-quiz | Mini-quiz | Consistente con PBPEW 02–06; sin guión en slug del componente |

**Reglas transversales para headings:**

- H2: tema nominal o pregunta clave; sin emojis ni mayúsculas innecesarias.
- H3/H4: concreto y escaneable; reservar nombres de API (`.set`, `.get`, `push`, `shift`) para subtítulos técnicos.
- No duplicar en H2 y primer párrafo la misma frase literal.

### Callouts — copy y tono

#### 1. Error frecuente — API de `Map`

- **Título:** `Error frecuente`
- **Tono:** preventivo, didáctico; señala confusión típica sin culpar al estudiante.
- **Copy refinado:** `No uses Map como objeto plano: mapa.nombre = "Ana" no funciona. Hace falta mapa.set("nombre", "Ana") y mapa.get("nombre"). Confundir .size con .length también es habitual — Map y Set usan .size; los arrays usan .length.`
- **Variante Clay (referencia):** `callout-warning`; borde accent — preventivo de API.

#### 2. Caso real — caché de sesión con `Map`

- **Título:** `Caso real: caché de sesión en dashboard`
- **Tono:** narrativa breve de incidente profesional; síntoma → causa → decisión técnica.
- **Copy refinado:** `Un dashboard guarda datos por userId (número) en un objeto: cache[userId] = datos. Al borrar usuarios inactivos notan claves convertidas a string y colisiones con el prototipo en tests. Migran a const cache = new Map() con .set(userId, datos) y .delete(userId) — altas y bajas claras, y .size exacto para métricas.`
- **Variante Clay:** `callout-info`; borde secondary — incidente de negocio, no error del estudiante.

#### 3. Error frecuente — `pop` en pila LIFO

- **Título:** `Error frecuente`
- **Tono:** preventivo; conecta método con orden de salida.
- **Copy refinado:** `Pensar que pop saca el primero. En una pila LIFO, pop saca el último que entró con push. Si necesitas FIFO — primero en entrar, primero en salir — no uses pop en la cola de atención.`
- **Variante Clay:** `callout-warning`.

#### 4. Caso real — cola de tickets implementada como pila

- **Título:** `Caso real: cola de tickets al revés`
- **Tono:** incidente en soporte; refuerza elegir patrón según regla de negocio.
- **Copy refinado:** `Un equipo modela tickets con push + pop pensando en «el más reciente primero». Los clientes que esperan desde ayer nunca son atendidos. El bug es de patrón: implementaron una pila donde el negocio exige cola FIFO (push + shift). Elige la estructura según la regla de negocio, no según el método que recuerdes primero.`
- **Variante Clay:** `callout-info`.

#### 5. Serialización de `Map`

- **Título:** `Serialización: Map y JSON`
- **Tono:** informativo, técnico breve; evita sorpresa al persistir datos.
- **Copy refinado:** `JSON.stringify(new Map([[1, 2]])) devuelve "{}". Para persistir un Map hay que convertirlo — por ejemplo a array de pares con [...mapa]. Los objetos literales serializan de forma natural con JSON.stringify.`
- **Variante Clay:** `callout-info`; borde secondary.

### Otros bloques interactivos — títulos y tono

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| `MermaidDiagram` | Árbol de decisión | Sin H3 obligatorio; párrafo puente: «Usa este mapa para elegir Map, Set, objeto, pila o cola según lo que necesites» |
| `CodeChallenge` | Map inventario | Título: `Completa el Map — inventario` — guión largo, minúsculas en subtítulo |
| `StepReveal` | Set sin duplicados | Título: `Set elimina duplicados — paso a paso`; pasos en presente indicativo |
| `CodeChallenge` | Set visitas | Título: `Completa el Set — registrar visitas` |
| `PracticeExercise` | Set size | Éxito: `Correcto. Set almacena cada valor una sola vez; el segundo 2 no aumenta el tamaño.` — sin exclamaciones |
| `MermaidDiagram` | Flujo pila | Complementar con metáfora de platos en párrafo previo |
| `CodeChallenge` | Pila historial | Título: `Completa la pila — historial de acciones` |
| `MermaidDiagram` | Flujo cola | Complementar con metáfora de fila en banco |
| `CompareTable` | LIFO vs FIFO | Introducir con: «El mismo array admite ambos patrones; lo que cambia es qué extremo usas al sacar» |
| `CompareTable` | Headers LIFO/FIFO | `Patrón` · `Entrada` · `Salida` · `Métodos típicos` · `Ejemplo mental` — paralelismo del draft |
| `PracticeExercise` | LIFO vs FIFO metáforas | Éxito: `Correcto. Pila = último apilado sale primero; cola = quien llegó primero es atendido primero.` |
| `CompareTable` | Objeto vs Map | Introducir con: «Ambos guardan pares clave-valor; la diferencia está en tipos de clave, tamaño e iteración» |
| `CompareTable` | Headers objeto/Map | `Criterio` · `Objeto {}` · `Map` — columna PBPEW como «Caso PBPEW» |
| `PracticeExercise` | Set + spread | Éxito: `Correcto. [...new Set(nums)] devuelve [1, 2, 3, 4].` |
| `PracticeExercise` | Orden FIFO | Éxito: orden (b) → (d) → (c) → (a) explicado de forma didáctica |
| `PracticeExercise` | Set referencias | Éxito: `Correcto. Cada literal {} es una referencia distinta; Set no fusiona objetos por contenido.` |
| `PracticeExercise` | Reto integrador | Éxito: `Excelente. Has integrado Map (caché), Set (sin duplicados), cola FIFO y pila LIFO en un flujo coherente.` |
| `Quiz` | Feedback general | Una oración por ítem; mencionar LIFO, FIFO, `.set`, `.size` o criterio objeto vs Map según la pregunta |
| Cierre | Ideas clave | Viñetas paralelas; *objeto vs Map* y *patrón vs tipo nativo* al cierre |
| Cierre | Siguiente paso | `Siguiente lección: DOM y eventos — colas de eventos del navegador, listeners y callbacks.` — tono de itinerario académico |

### Prosa de apertura y cierre (ajustes de voz)

**Introducción (primer párrafo):**

> Una **estructura de datos** es la forma de organizar y acceder a información en memoria. En PBPEW ya usaste **arrays** y **objetos literales**; aquí amplías el repertorio con `Map`, `Set` y dos **patrones** clásicos: **pila** (LIFO) y **cola** (FIFO). Pila y cola no son tipos nativos de JavaScript: son **convenciones** sobre cómo usar un array. Lo importante es respetar el contrato de entrada y salida.

**Cierre (párrafo intro):**

> Has completado el estudio de `Map`, `Set`, pila LIFO y cola FIFO en JavaScript. Estas estructuras amplían arrays y objetos de la lección 7 y conectan con eventos y callbacks de la lección 10.

### Notas EN (fase i18n)

- Título EN sugerido: `Data structures in JavaScript: Map, Set, LIFO stack, and FIFO queue`
- Mantener equivalencia terminológica: *LIFO*, *FIFO*, *stack*, *queue*, *spread*, *cache*.
- «Comprueba tu comprensión» → `Check your understanding`; «Reto integrador» → `Integrative challenge`; «Centro de turnos y caché de consultas» → `Turn center and query cache`.
- «Caso real: caché de sesión en dashboard» → `Real case: session cache in a dashboard`; conservar escenario técnico neutro.
- «Caso real: cola de tickets al revés» → `Real case: ticket queue implemented backwards`.

## Nota de remediación visual ADR 013 (2026-07-15)

- **Estado:** `in_progress`; esta nota no reescribe el `lesson-draft.md`.
- En layout/TSX, toda promesa de mapa mental, diagrama, flujo, ciclo, árbol, jerarquía, topología o línea de tiempo debe tener un visual real contiguo.
- Usar `MermaidDiagram`, `figure` + `img` o `StepReveal` con diagrama; las matrices/heatmaps deben ser tablas semánticas.

