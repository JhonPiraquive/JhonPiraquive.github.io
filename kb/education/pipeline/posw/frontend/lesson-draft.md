---
track: posw
slug: frontend
title: "Frontend: Tecnologías y Frameworks"
order: 9
prerequisites:
  - apis
  - servicios-web
related:
  - backend
  - modelo-cliente-servidor
  - react
  - angular
  - typescript
source_brief: kb/education/pipeline/posw/frontend/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueEsFrontendSection
  - TecnologiasBaseSection
  - FrameworksSection
  - ComoElegirFrameworkSection
  - EjemplosComponentesSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** frontend (client-side) como la capa que el usuario ve e interactúa en el navegador, ejecutada en su dispositivo y separada del backend.
- **Enumerar** las responsabilidades del frontend moderno: renderizar UI, consumir APIs, manejar estado, routing SPA y optimizar UX (rendimiento, accesibilidad, SEO).
- **Comparar** React, Angular, Vue y Svelte en enfoque (librería vs framework), curva de aprendizaje, ecosistema y casos de uso típicos.
- **Aplicar** el árbol de decisión para elegir framework según tamaño de equipo, experiencia en TypeScript y necesidad de SSR/SEO.
- **Leer** e interpretar un componente de UI equivalente en React (JSX), Angular y Vue que consume props y dispara eventos.

## Prerrequisitos

- **Lección `apis`:** consumo de APIs REST con fetch y manejo de respuestas JSON.
- **Lección `servicios-web`:** modelo cliente-servidor y comunicación HTTP.
- Familiaridad básica con HTML y CSS.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección presenta el frontend como capa de presentación e interacción: qué ejecuta en el navegador, con qué tecnologías base, qué frameworks existen y cómo elegir uno según criterios reales del proyecto.

<!-- interactive: Callout -->
{
  "title": "Frontend no es el backend",
  "children": "El frontend renderiza UI y consume APIs; el backend persiste datos y aplica reglas de negocio críticas. La validación en cliente mejora UX, pero el servidor debe ser la fuente de verdad."
}

---

### 1) ¿Qué es el frontend?

**Sección TSX:** `QueEsFrontendSection`

#### Mapa mental

- **Frontend (client-side):** capa que el usuario ve y con la que interactúa en el navegador.
- El código se ejecuta en el **dispositivo del usuario**, no en el servidor.
- Se comunica con el backend por **HTTP** (APIs).
- Responsabilidades: UI, consumo de APIs, estado, routing, rendimiento, accesibilidad, SEO.

#### Separación frontend / backend

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph Browser [Navegador - Frontend]\n    JS[JavaScript / Framework]\n    UI[Componentes UI]\n    JS --> UI\n  end\n  subgraph Server [Servidor - Backend]\n    API[API REST]\n    DB[(Base de datos)]\n    API --> DB\n  end\n  UI -->|HTTP fetch| API\n  API -->|JSON| UI"
}

#### Responsabilidades del frontend moderno

<!-- interactive: StepReveal -->
{
  "title": "Responsabilidades del frontend",
  "steps": [
    {
      "title": "1. Renderizar interfaz",
      "content": "HTML, CSS y componentes reutilizables que el usuario ve y manipula."
    },
    {
      "title": "2. Consumir APIs",
      "content": "fetch o axios hacia el backend; manejar loading, errores HTTP y parsear JSON."
    },
    {
      "title": "3. Manejar estado",
      "content": "Formularios, sesión, carrito — estado local o global (Context, Pinia, Redux)."
    },
    {
      "title": "4. Routing SPA",
      "content": "Navegación entre vistas sin recargar la página completa."
    },
    {
      "title": "5. Optimizar UX",
      "content": "Rendimiento (Core Web Vitals), accesibilidad (labels, alt) y SEO cuando aplica."
    }
  ]
}

#### Consumir API desde JavaScript

<!-- code: javascript -->
```javascript
async function cargarProductos() {
  const res = await fetch("https://api.ejemplo.com/api/v1/productos");
  if (!res.ok) throw new Error(`Error ${res.status}`);
  const productos = await res.json();
  return productos;
}
```

---

### 2) Tecnologías base

**Sección TSX:** `TecnologiasBaseSection`

#### Mapa mental

- **JavaScript (ES2020+):** lenguaje del comportamiento — DOM, eventos, fetch, lógica de UI.
- **TypeScript:** superset con tipado estático opcional; usado por defecto en Angular y común en React enterprise.
- **Motores JS:** V8 (Chrome), SpiderMonkey (Firefox).
- **Componentes:** unidad reutilizable con **props** (datos entrantes) y **eventos** (acciones del usuario).

#### Request autenticado desde frontend

<!-- code: javascript -->
```javascript
async function obtenerPerfil(token) {
  const res = await fetch("/api/perfil", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  if (res.status === 401) redirectToLogin();
  return res.json();
}
```

<!-- interactive: Callout -->
{
  "title": "Caso real: SPA sin SSR pierde SEO",
  "children": "Un e-commerce migra a React SPA puro sin server-side rendering. Los crawlers ven HTML casi vacío; el tráfico orgánico cae 40%. Decisión: evaluar SSR (Next.js) cuando SEO importa; medir indexación y Core Web Vitals."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja mentalmente la separación frontend/backend de una app de mensajería. ¿Qué corre en el navegador y qué en el servidor? ¿Cómo se comunican?",
  "hints": ["UI y fetch en navegador", "BD y lógica en servidor", "HTTP + JSON"],
  "expectedKeywords": ["navegador", "servidor", "API", "HTTP"],
  "successMessage": "Correcto. Frontend: UI, estado local, fetch. Backend: persistencia, auth, reglas de negocio. Comunicación por API REST."
}

---

### 3) Frameworks: React, Angular, Vue, Svelte

**Sección TSX:** `FrameworksSection`

#### Mapa mental

- **React (Meta, 2013):** librería de UI; JSX; Virtual DOM; mayor demanda laboral (~40.6%).
- **Angular (Google, 2016):** framework completo; TypeScript por defecto; enterprise (~17.1%).
- **Vue.js (Evan You, 2014):** framework progresivo; curva baja (~15.4%).
- **Svelte (Rich Harris, 2016):** compila a JS puro; sin Virtual DOM runtime (~6.5%).

#### Comparativa de frameworks

<!-- interactive: CompareTable -->
{
  "headers": ["Framework", "Tipo", "Curva", "Ecosistema / meta-framework", "Mejor para"],
  "rows": [
    ["React", "Librería", "Media", "Next.js, Redux, React Query", "Mayor demanda laboral, flexibilidad"],
    ["Angular", "Framework completo", "Alta", "Angular CLI integrado", "Enterprise, equipos grandes con TS"],
    ["Vue", "Framework progresivo", "Baja", "Nuxt.js, Pinia", "Aprender rápido, adopción incremental"],
    ["Svelte", "Compilador", "Baja-media", "SvelteKit", "Apps pequeñas/medianas, alto rendimiento"]
  ]
}

#### React vs librería vs framework

- **React** es una **librería**: necesitas elegir routing, estado y herramientas de build.
- **Angular** es un **framework**: trae MVC, DI, módulos y CLI integrados.
- **Vue** es **progresivo**: puedes usar solo la capa de vista o escalar a SPA completa.
- **Svelte** mueve trabajo al **compilador** en build time — menos overhead en runtime.

<!-- interactive: CodeChallenge -->
{
  "title": "Completa características de cada framework",
  "template": "React usa ___ para mezclar HTML en JS\nAngular usa ___ por defecto\nVue 3 expone lógica reutilizable con ___ API\nSvelte compila en ___ time sin Virtual DOM runtime",
  "blanks": [
    { "id": "blank1", "answer": "JSX", "placeholder": "sintaxis" },
    { "id": "blank2", "answer": "TypeScript", "placeholder": "lenguaje" },
    { "id": "blank3", "answer": "Composition", "placeholder": "API" },
    { "id": "blank4", "answer": "build", "placeholder": "tiempo" }
  ]
}

---

### 4) Cómo elegir framework

**Sección TSX:** `ComoElegirFrameworkSection`

#### Árbol de decisión

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  START[¿Elegir framework?] --> BIG{¿Proyecto grande?}\n  BIG -->|Sí| TS{¿Experiencia TS?}\n  TS -->|Sí| ANG[Angular]\n  TS -->|No| REACT[React + TypeScript]\n  BIG -->|No| FAST{¿Aprender rápido?}\n  FAST -->|Sí| VUE[Vue o Svelte]\n  FAST -->|No| REACT2[React]\n  SEO{¿Necesitas SSR/SEO?} --> NEXT[Next / Nuxt / SvelteKit]"
}

#### Criterios de elección

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "React", "Angular", "Vue", "Svelte"],
  "rows": [
    ["Demanda laboral", "Muy alta", "Alta (enterprise)", "Media-alta", "Creciente"],
    ["TypeScript", "Opcional (común)", "Por defecto", "Opcional", "Opcional"],
    ["SSR / SEO", "Next.js", "Angular Universal", "Nuxt.js", "SvelteKit"],
    ["Curva de aprendizaje", "Media", "Alta", "Baja", "Baja-media"]
  ]
}

#### SSR y meta-frameworks

- **React** → **Next.js** para SSR y SEO.
- **Vue** → **Nuxt.js**.
- **Svelte** → **SvelteKit**.

<!-- interactive: Callout -->
{
  "title": "Caso real: framework incorrecto para el equipo",
  "children": "Una startup elige Angular para un MVP con dos devs junior sin TypeScript. Tres meses después el velocity es bajo. Decisión: aplicar criterios reales — para MVP rápido → Vue o React; Angular cuando hay equipo enterprise con TS."
}

---

### 5) Ejemplos de componentes

**Sección TSX:** `EjemplosComponentesSection`

El mismo componente `TarjetaProducto` en tres frameworks: recibe props (`nombre`, `precio`, `imagen`) y dispara evento al agregar al carrito.

#### React (JSX)

<!-- code: jsx -->
```jsx
function TarjetaProducto({ nombre, precio, imagen }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="precio">${precio.toLocaleString("es-CO")}</p>
      <button onClick={() => agregarAlCarrito(nombre)}>
        Agregar al carrito
      </button>
    </div>
  );
}
```

#### Angular

<!-- code: typescript -->
```typescript
@Component({
  selector: "app-tarjeta-producto",
  template: `
    <div class="tarjeta">
      <img [src]="imagen" [alt]="nombre" />
      <h3>{{ nombre }}</h3>
      <p class="precio">{{ precio | currency:'COP' }}</p>
      <button (click)="agregarAlCarrito()">Agregar al carrito</button>
    </div>
  `,
})
export class TarjetaProductoComponent {
  @Input() nombre = "";
  @Input() precio = 0;
  @Input() imagen = "";

  agregarAlCarrito() {
    console.log(`Agregando ${this.nombre}`);
  }
}
```

#### Vue 3 (Composition API)

<!-- code: javascript -->
```javascript
// Vue SFC — script setup
const props = defineProps({
  nombre: String,
  precio: Number,
  imagen: String,
});
const formatPrecio = (p) => p.toLocaleString("es-CO");
const agregarAlCarrito = () => console.log(`Agregando ${props.nombre}`);
```

**Patrón común:** props entrantes + evento/handler de salida. La lógica de negocio crítica (precio final, stock) debe validarse en el backend.

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Frontend** ejecuta en el navegador: UI, consumo de APIs, estado, routing y UX.
- **JavaScript** es la base; **TypeScript** añade tipado; los **componentes** encapsulan props y eventos.
- **React** (librería + JSX), **Angular** (framework enterprise + TS), **Vue** (progresivo), **Svelte** (compilador, sin Virtual DOM runtime).
- **Elegir framework:** tamaño de equipo, experiencia TS, demanda laboral, necesidad de SSR/SEO.
- **Meta-frameworks SSR:** Next.js, Nuxt.js, SvelteKit.
- **Siguiente lección:** `backend` — capa servidor, lógica de negocio y persistencia.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un proyecto necesita SEO fuerte y el equipo tiene experiencia en React. ¿Qué framework base y meta-framework elegirías según el árbol de decisión?",
  "hints": ["SSR para crawlers", "Meta-framework de React"],
  "expectedKeywords": ["React", "Next.js", "SSR", "SEO"],
  "successMessage": "Correcto. React como base + Next.js para server-side rendering e indexación en buscadores."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué no debes calcular el precio final con descuento solo en el frontend antes de enviar el pago?",
  "hints": ["Cliente manipulable", "Fuente de verdad", "Validación en servidor"],
  "expectedKeywords": ["backend", "validación", "manipular", "servidor"],
  "successMessage": "Correcto. El frontend es manipulable; el backend debe recalcular y validar precios y stock antes de procesar el pago."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Compara React y Angular: ¿cuál es librería vs framework completo y qué implica para un proyecto nuevo?",
  "hints": ["React = decisiones adicionales", "Angular = todo integrado", "Curva de aprendizaje"],
  "expectedKeywords": ["librería", "framework", "routing", "TypeScript"],
  "successMessage": "Correcto. React es librería (eliges routing/estado/build); Angular es framework opinionado con TS, módulos y DI integrados."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Propón el stack frontend de una app de reservas de coworking"**

Requisitos: web responsive, app móvil futura (misma API), SEO en página de sedes, equipo de 4 devs (2 conocen React, 1 Angular, 1 junior), lanzamiento en 4 meses.

1. Justifica si el frontend es SPA, SSR o híbrido y qué meta-framework usarías.
2. Elige el framework principal aplicando el árbol de decisión y la tabla de criterios.
3. Escribe un componente `TarjetaSede` en el framework elegido: props `nombre`, `ciudad`, `cupos`, evento al reservar.
4. Muestra cómo ese componente consumiría `GET /api/v1/sedes` con manejo de loading y error.
5. Lista dos errores que evitarías (lógica de negocio solo en cliente, SPA sin SEO, framework incompatible con el equipo).

**Criterio de éxito:** decisión fundamentada en criterios reales, componente con props/eventos, fetch con estados, separación clara frontend/backend.

<!-- code: jsx -->
```jsx
function TarjetaSede({ nombre, ciudad, cupos, onReservar }) {
  return (
    <article className="tarjeta-sede">
      <h3>{nombre}</h3>
      <p>{ciudad} — {cupos} cupos</p>
      <button onClick={() => onReservar(nombre)}>Reservar</button>
    </article>
  );
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de coworking: elige React+Next.js (justifica), escribe fetch con loading/error para GET /api/v1/sedes y lista dos errores a evitar.",
  "hints": [
    "SSR híbrido para SEO en sedes",
    "Equipo con 2 devs React",
    "Estados: loading, error, data",
    "Evitar Angular con junior sin TS"
  ],
  "expectedKeywords": ["Next.js", "SSR", "loading", "error", "fetch"],
  "successMessage": "Excelente. Decisión fundamentada en equipo, SEO y plazo con componente y consumo de API bien estructurado."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el panorama del frontend: qué hace, con qué tecnologías y cómo elegir framework. La mejor elección sirve al equipo y al producto, no a la moda del momento.

**Ideas clave para retener:**

- El frontend **consume APIs**; no es la fuente de verdad de reglas de negocio críticas.
- **SPA sin SSR** puede perder SEO — evalúa Next/Nuxt/SvelteKit cuando importa indexación.
- **React = librería flexible**; **Angular = framework enterprise**; elige según equipo y plazo.
- Siempre maneja **loading y error** en fetch; la UI congelada confunde al usuario.

**Siguiente paso:** lección `backend` — servidor, APIs, base de datos y lógica de negocio.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Dónde se ejecuta principalmente el código frontend?",
      "options": [
        "En el servidor de base de datos",
        "En el dispositivo del usuario (navegador)",
        "En el API Gateway",
        "En el CDN solamente"
      ],
      "correctIndex": 1,
      "feedback": "El frontend (client-side) corre en el navegador del usuario; el backend corre en el servidor."
    },
    {
      "question": "¿Cuál es una responsabilidad típica del frontend moderno?",
      "options": [
        "Persistir datos en PostgreSQL",
        "Consumir APIs del backend",
        "Configurar firewalls",
        "Firmar certificados SSL"
      ],
      "correctIndex": 1,
      "feedback": "El frontend renderiza UI y consume APIs; la persistencia y seguridad de infra son backend/DevOps."
    },
    {
      "question": "¿Qué framework usa JSX y Virtual DOM como enfoque central?",
      "options": [
        "Angular",
        "React",
        "Django",
        "Express"
      ],
      "correctIndex": 1,
      "feedback": "React es una librería de UI basada en componentes y JSX; Angular usa plantillas TypeScript."
    },
    {
      "question": "¿Qué meta-framework de React ayuda con SSR y SEO?",
      "options": [
        "Redux",
        "Next.js",
        "Vite",
        "Webpack"
      ],
      "correctIndex": 1,
      "feedback": "Next.js añade server-side rendering y routing a React; Vue usa Nuxt, Svelte usa SvelteKit."
    },
    {
      "question": "¿Por qué Svelte suele tener buen rendimiento en apps pequeñas/medianas?",
      "options": [
        "Porque no usa JavaScript",
        "Porque compila a JS puro en build time sin Virtual DOM runtime",
        "Porque solo funciona en servidor",
        "Porque reemplaza HTTP por WebSockets"
      ],
      "correctIndex": 1,
      "feedback": "Svelte mueve trabajo al compilador; menos overhead en runtime que Virtual DOM tradicional."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Frontend: Tecnologías y Frameworks Web | POSW
- **seoDescription:** Define el frontend, compara React, Angular, Vue y Svelte, elige framework con criterios reales y lee componentes que consumen APIs. Lección 9 del track POSW.
