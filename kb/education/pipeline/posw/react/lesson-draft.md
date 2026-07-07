---
track: posw
slug: react
title: "React: Fundamentos"
order: 15
prerequisites:
  - typescript
  - angular
related:
  - frontend
  - backend
  - modelo-cliente-servidor
  - apis
  - herramientas-desarrollo
source_brief: kb/education/pipeline/posw/react/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueEsReactSection
  - JsxSection
  - ComponentesFuncionalesSection
  - PropsEstadoSection
  - HooksSection
  - EfectosSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** React como librería de UI basada en componentes, Virtual DOM y flujo unidireccional de datos.
- **Escribir** JSX siguiendo sus reglas (`className`, un elemento raíz, expresiones `{}`, componentes con mayúscula).
- **Construir** componentes funcionales con props tipadas y composición padre-hijo (incluyendo `key` en listas).
- **Gestionar** estado local con `useState` (valores simples y objetos en formularios).
- **Aplicar** `useEffect` para efectos secundarios (fetch a API REST, limpieza al desmontar) y nombrar hooks principales.

## Prerrequisitos

- **Lección `typescript`:** interfaces, tipos y props tipadas.
- **Lección `angular`:** componentes, bindings y consumo de APIs REST (para comparar enfoques).
- Familiaridad con HTML, CSS y conceptos de SPA.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre qué es React, reglas de JSX, componentes funcionales, props y estado con hooks, y efectos secundarios con `useEffect` para consumir APIs REST.

<!-- interactive: Callout -->
{
  "title": "React es librería, no framework",
  "children": "React cubre la capa de UI. Routing, estado global y data fetching suelen añadirse con librerías del ecosistema (React Router, TanStack Query, etc.)."
}

---

### 1) ¿Qué es React?

**Sección TSX:** `QueEsReactSection`

#### Mapa mental

- **React:** librería JavaScript (Meta, 2013) para interfaces con componentes reutilizables.
- **Tres pilares:** componentes, Virtual DOM, flujo unidireccional de datos.
- **Virtual DOM:** representación en memoria; React calcula el diff mínimo y actualiza solo lo necesario.
- **Componentes funcionales:** estándar moderno con Hooks (desde 2019).

#### Flujo unidireccional de datos

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  EST[Estado en componente padre] -->|props| HIJO[Componente hijo]\n  HIJO -->|callback onAgregar| EST\n  EST --> RENDER[Re-render Virtual DOM]\n  RENDER --> DOM[DOM real actualizado]"
}

#### React vs Angular

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "React", "Angular"],
  "rows": [
    ["Naturaleza", "Librería de UI", "Framework completo"],
    ["Plantillas", "JSX en JavaScript/TS", "HTML declarativo con directivas"],
    ["Estado", "useState, useReducer, librerías externas", "Servicios + DI integrados"],
    ["Ciclo de vida", "useEffect (hooks)", "ngOnInit, ngOnDestroy, etc."],
    ["HTTP", "fetch, React Query, SWR", "HttpClient integrado"]
  ]
}

#### Crear proyecto con Vite

<!-- code: bash -->
```bash
npm create vite@latest mi-app -- --template react-ts
cd mi-app
npm install
npm run dev
```

#### Caso real: race condition en detalle

<!-- interactive: Callout -->
{
  "title": "Producto equivocado al navegar rápido",
  "children": "El usuario va de /productos/1 a /productos/2. useEffect sin limpieza aplica la respuesta tardía del ID anterior. Decisión: dependencia [id], flag cancelado o AbortController en cleanup."
}

---

### 2) JSX

**Sección TSX:** `JsxSection`

#### Mapa mental

- **JSX:** sintaxis que mezcla HTML en JavaScript; compila a `React.createElement`.
- **`className`** en lugar de `class` (palabra reservada en JS).
- **Un elemento raíz** por return (o Fragment `<>...</>`).
- **Expresiones `{}`:** insertar variables y llamadas a funciones.
- **Componentes con mayúscula:** `<TarjetaProducto />` vs `<div />`.

#### JSX vs React.createElement

<!-- code: javascript -->
```javascript
// Sin JSX
const elemento = React.createElement(
  "div",
  { className: "tarjeta" },
  React.createElement("h2", null, "Laptop Pro 15"),
  React.createElement("p", { className: "precio" }, "$4.500.000")
);

// Con JSX
const elemento = (
  <div className="tarjeta">
    <h2>Laptop Pro 15</h2>
    <p className="precio">$4.500.000</p>
  </div>
);
```

#### Reglas de JSX

<!-- interactive: CompareTable -->
{
  "headers": ["Regla", "HTML clásico", "JSX correcto"],
  "rows": [
    ["Clase CSS", "class=\"tarjeta\"", "className=\"tarjeta\""],
    ["Atributo for", "for=\"email\"", "htmlFor=\"email\""],
    ["Cerrar tags", "Opcional en algunos", "Obligatorio: <img />, <br />"],
    ["Componente custom", "N/A", "Nombre con mayúscula inicial"],
    ["JavaScript en template", "N/A", "Expresiones entre llaves {precio}"]
  ]
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Convierte este HTML a JSX válido: <div class=\"catalogo\"><h2>Productos</h2><img src={url}></div>",
  "hints": ["className", "self-closing img", "llaves para url"],
  "expectedKeywords": ["className", "img", "src"],
  "successMessage": "Correcto. className reemplaza class; img debe ser self-closing con src en llaves."
}

---

### 3) Componentes funcionales

**Sección TSX:** `ComponentesFuncionalesSection`

#### Mapa mental

- **Componente funcional:** función que recibe props y retorna JSX.
- **Props tipadas:** interface TypeScript para contrato padre-hijo.
- **Composición:** componentes pequeños que se ensamblan.
- **`key` en listas:** ID estable para reconciliación del Virtual DOM.

#### Componente con props tipadas

<!-- code: typescript -->
```tsx
interface TarjetaProductoProps {
  nombre: string;
  precio: number;
  imagen: string;
  onAgregar: (nombre: string) => void;
}

function TarjetaProducto({ nombre, precio, imagen, onAgregar }: TarjetaProductoProps) {
  const precioFormateado = precio.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  });

  return (
    <article className="tarjeta-producto">
      <img src={imagen} alt={`Foto de ${nombre}`} loading="lazy" />
      <h3>{nombre}</h3>
      <p className="precio">{precioFormateado}</p>
      <button onClick={() => onAgregar(nombre)}>Agregar al carrito</button>
    </article>
  );
}
```

#### Composición y lista con key

<!-- code: typescript -->
```tsx
function Catalogo() {
  const productos = [
    { id: 1, nombre: "Laptop Pro 15", precio: 4500000, imagen: "/img/laptop.jpg" },
    { id: 2, nombre: "Mouse inalámbrico", precio: 85000, imagen: "/img/mouse.jpg" }
  ];

  const handleAgregar = (nombre: string) => {
    console.log(`${nombre} agregado al carrito`);
  };

  return (
    <section className="catalogo">
      {productos.map(p => (
        <TarjetaProducto
          key={p.id}
          nombre={p.nombre}
          precio={p.precio}
          imagen={p.imagen}
          onAgregar={handleAgregar}
        />
      ))}
    </section>
  );
}
```

#### Completar key y map

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el render de lista",
  "template": "productos.map(p => <TarjetaProducto key={___} nombre={p.nombre} ... />)",
  "blanks": [
    { "id": "blank1", "answer": "p.id", "placeholder": "key estable" }
  ]
}

---

### 4) Props y estado

**Sección TSX:** `PropsEstadoSection`

#### Mapa mental

- **Props:** datos de solo lectura del padre al hijo; nunca mutar props.
- **`useState`:** estado local; actualizar con setter, no mutar directamente.
- **Objetos en estado:** usar spread `setForm(prev => ({ ...prev, ... }))`.
- **Flujo unidireccional:** padre posee el estado; hijo notifica con callbacks.

#### Props vs estado

<!-- interactive: CompareTable -->
{
  "headers": ["Concepto", "Quién lo controla", "Mutable en hijo", "Ejemplo"],
  "rows": [
    ["Props", "Componente padre", "No (solo lectura)", "nombre, precio, onAgregar"],
    ["Estado (useState)", "El propio componente", "Sí, vía setter", "contador, formulario, cargando"],
    ["Callback prop", "Padre define función", "Hijo solo invoca", "onAgregar(nombre)"]
  ]
}

#### useState: contador

<!-- code: typescript -->
```tsx
import { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(c => c + 1)}>+1</button>
    </div>
  );
}
```

#### useState: formulario con objeto

<!-- code: typescript -->
```tsx
function FormularioContacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <input name="nombre" value={form.nombre} onChange={handleChange} />
  );
}
```

#### Errores comunes

- Mutar estado directamente (`cuenta++`) en lugar de `setCuenta(c => c + 1)`.
- Usar índice como `key` en listas que cambian de orden.
- Inicializar estado local desde props sin considerar sincronización.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Compara el flujo de datos en React (props hacia abajo) con @Input/@Output en Angular. ¿Qué similitudes y diferencias encuentras?",
  "hints": ["Props ≈ Input", "Callback ≈ Output", "JSX vs templates"],
  "expectedKeywords": ["props", "padre", "hijo", "callback"],
  "successMessage": "Correcto. Ambos fluyen datos del padre al hijo; React usa callbacks en lugar de EventEmitter."
}

---

### 5) Hooks principales

**Sección TSX:** `HooksSection`

#### Mapa mental

- **Hooks:** funciones que conectan componentes funcionales con capacidades de React.
- **`useState`:** estado local.
- **`useEffect`:** efectos secundarios tras render.
- **`useContext`:** consumir contexto sin props drilling.
- **`useRef`:** referencia mutable que no causa re-render.
- **`useMemo` / `useCallback`:** optimización de cálculos y funciones.

#### Hooks principales

<!-- interactive: CompareTable -->
{
  "headers": ["Hook", "Propósito", "Cuándo usar"],
  "rows": [
    ["useState", "Estado local", "Contador, formularios, flags de UI"],
    ["useEffect", "Efectos secundarios", "Fetch API, suscripciones, timers"],
    ["useContext", "Contexto compartido", "Tema, usuario autenticado, idioma"],
    ["useReducer", "Estado complejo", "Múltiples sub-valores con acciones"],
    ["useRef", "Referencia DOM o valor mutable", "Focus en input, guardar valor sin re-render"],
    ["useMemo", "Memoizar cálculo costoso", "Filtrar lista grande sin recalcular cada render"]
  ]
}

#### Reglas de los hooks

<!-- interactive: Callout -->
{
  "title": "Solo en el nivel superior",
  "children": "No llames hooks dentro de condicionales, bucles o funciones anidadas. Siempre en el cuerpo del componente funcional, en el mismo orden en cada render."
}

#### Completar actualización de estado

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la actualización del contador",
  "template": "setCuenta(c => ___)",
  "blanks": [
    { "id": "blank1", "answer": "c + 1", "placeholder": "nuevo valor" }
  ]
}

---

### 6) Efectos con useEffect

**Sección TSX:** `EfectosSection`

#### Mapa mental

- **`useEffect`:** ejecuta código tras render (side effects).
- **Array de dependencias:** controla cuándo se re-ejecuta el efecto.
- **Función de limpieza:** se ejecuta antes del siguiente efecto o al desmontar.
- **Fetch en React:** `useEffect` + `fetch`; manejar loading, error y cancelación.

#### Ciclo de useEffect

<!-- interactive: StepReveal -->
{
  "title": "Ciclo de useEffect con dependencia [id]",
  "steps": [
    {
      "title": "1. Montaje → render inicial",
      "content": "React pinta el componente en el DOM por primera vez."
    },
    {
      "title": "2. useEffect ejecuta fetch",
      "content": "Tras el render, el efecto llama a la API con el id actual."
    },
    {
      "title": "3. id cambia → limpieza anterior",
      "content": "La función de cleanup cancela el fetch pendiente (flag o AbortController)."
    },
    {
      "title": "4. Nuevo efecto con id actualizado",
      "content": "Se inicia un nuevo fetch con el id correcto."
    },
    {
      "title": "5. Desmontaje → limpieza final",
      "content": "Al salir de la ruta, cleanup evita actualizar estado en componente desmontado."
    }
  ]
}

#### Ciclo visual

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  M[Montaje] --> E1[useEffect ejecuta]\n  E1 --> R[Re-render si hay cambio estado]\n  R --> D{¿Cambió dependencia?}\n  D -->|Sí| L[Limpieza anterior]\n  L --> E2[Nuevo efecto]\n  D -->|No| E1\n  U[Desmontaje] --> LF[Limpieza final]"
}

#### Fetch con limpieza

<!-- code: typescript -->
```tsx
import { useState, useEffect } from "react";

function ProductoDetalle({ id }: { id: number }) {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let cancelado = false;
    setCargando(true);

    fetch(`/api/productos/${id}`)
      .then(r => r.json())
      .then(datos => {
        if (!cancelado) {
          setProducto(datos);
          setCargando(false);
        }
      });

    return () => { cancelado = true; };
  }, [id]);

  if (cargando) return <div>Cargando...</div>;
  return <h1>{producto?.nombre}</h1>;
}
```

#### Ordenar ciclo useEffect

<!-- interactive: CodeChallenge -->
{
  "title": "Ordena el ciclo de useEffect con [id]",
  "template": "1. ___\n2. ___\n3. ___\n4. ___",
  "blanks": [
    { "id": "blank1", "answer": "render inicial", "placeholder": "paso a" },
    { "id": "blank2", "answer": "efecto fetch", "placeholder": "paso b" },
    { "id": "blank3", "answer": "id cambia → limpieza → nuevo efecto", "placeholder": "paso c" },
    { "id": "blank4", "answer": "desmontaje ejecuta limpieza", "placeholder": "paso d" }
  ]
}

#### Caso real: tipos compartidos

<!-- interactive: Callout -->
{
  "title": "Equipo híbrido Angular + React",
  "children": "Portal en Angular y app móvil-web en React duplican tipos de Producto manualmente. Decisión: paquete @empresa/api-types generado desde OpenAPI; ambos consumen el mismo contrato REST."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **React** es una librería de UI con componentes, Virtual DOM y flujo unidireccional.
- **JSX** compila a `createElement`; usa `className`, llaves `{}` y componentes con mayúscula.
- **Props** son de solo lectura; el padre controla datos y callbacks.
- **`useState`** gestiona estado local sin mutación directa.
- **Hooks** conectan lógica al componente funcional (`useState`, `useEffect`, etc.).
- **`useEffect`** maneja side effects con dependencias y función de limpieza.
- **`key` estable** (ID) en listas para reconciliación correcta del Virtual DOM.
- **Siguiente lección:** `modelo-cliente-servidor` — arquitectura completa cliente-servidor.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué `setCuenta(cuenta + 1)` puede fallar si hay múltiples actualizaciones rápidas? ¿Qué forma es más segura?",
  "hints": ["Estado asíncrono", "Forma funcional", "c => c + 1"],
  "expectedKeywords": ["funcional", "setter", "asíncrono"],
  "successMessage": "Correcto. La forma funcional setCuenta(c => c + 1) usa el valor más reciente del estado."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un useEffect hace fetch pero no tiene array de dependencias ni cleanup. ¿Qué bugs pueden aparecer?",
  "hints": ["Bucle infinito", "Race condition", "Warning al desmontar"],
  "expectedKeywords": ["infinito", "desmontar", "dependencias"],
  "successMessage": "Correcto. Sin deps puede buclear; sin cleanup actualiza estado tras desmontar o aplica datos obsoletos."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué usar p.id como key en lugar del índice del array en una lista de productos editable?",
  "hints": ["Reconciliación", "Reordenar o borrar", "Virtual DOM"],
  "expectedKeywords": ["key", "id", "reconciliación", "índice"],
  "successMessage": "Correcto. El índice cambia al reordenar; React reutiliza nodos incorrectamente."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Catálogo React consumiendo API REST"**

Implementa una vista que liste productos desde `GET /api/v1/productos`.

1. Crea proyecto con `npm create vite@latest -- --template react-ts`.
2. Define `TarjetaProducto` con props tipadas y botón que llame `onAgregar`.
3. En `Catalogo`, usa `useState` para `productos`, `cargando` y `error`.
4. En `useEffect`, fetch a la API con limpieza al desmontar o al cambiar filtros.
5. Renderiza lista con `key={p.id}`; muestra estados vacío, carga y error.

**Criterio de éxito:** sin mutar props/estado directamente, `useEffect` con dependencias correctas, manejo de race conditions, tipos TypeScript en props y respuesta API.

<!-- code: typescript -->
```tsx
function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;
    setCargando(true);
    setError(null);

    fetch("/api/v1/productos")
      .then(r => {
        if (!r.ok) throw new Error("Error al cargar productos");
        return r.json();
      })
      .then(datos => {
        if (!cancelado) {
          setProductos(datos);
          setCargando(false);
        }
      })
      .catch(err => {
        if (!cancelado) {
          setError(err.message);
          setCargando(false);
        }
      });

    return () => { cancelado = true; };
  }, []);

  if (cargando) return <div>Cargando productos...</div>;
  if (error) return <div className="error">{error}</div>;
  if (productos.length === 0) return <div>No hay productos.</div>;

  return (
    <section className="catalogo">
      {productos.map(p => (
        <TarjetaProducto
          key={p.id}
          nombre={p.nombre}
          precio={p.precio}
          imagen={p.imagen}
          onAgregar={nombre => console.log(nombre)}
        />
      ))}
    </section>
  );
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el catálogo React: useState para productos/cargando/error, useEffect con cleanup y lista con key={p.id}.",
  "hints": [
    "react-ts template con Vite",
    "flag cancelado en cleanup",
    "manejar r.ok en fetch",
    "props tipadas en TarjetaProducto"
  ],
  "expectedKeywords": ["useState", "useEffect", "key", "fetch"],
  "successMessage": "Excelente. Has construido un catálogo React con manejo correcto de estado y efectos."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado los fundamentos de React: JSX, componentes funcionales, props, estado con hooks y efectos para consumir APIs.

**Ideas clave para retener:**

- React es **librería de UI**; el ecosistema añade routing y data fetching.
- **Props** fluyen hacia abajo; **callbacks** notifican al padre.
- **Nunca mutar estado** directamente; usa el setter de `useState`.
- **`useEffect`** necesita dependencias correctas y **función de limpieza**.
- **`key` con ID estable** en listas dinámicas.

**Siguiente paso:** lección `modelo-cliente-servidor` — cómo cliente y servidor colaboran en una arquitectura web completa.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿React es un framework o una librería?",
      "options": [
        "Framework completo con routing y HTTP integrados",
        "Librería enfocada en construir interfaces con componentes",
        "Lenguaje de programación independiente",
        "Base de datos para el frontend"
      ],
      "correctIndex": 1,
      "feedback": "React cubre la capa de UI; routing y estado global suelen añadirse aparte."
    },
    {
      "question": "¿Qué atributo JSX reemplaza a class de HTML?",
      "options": [
        "class",
        "className",
        "cssClass",
        "styleName"
      ],
      "correctIndex": 1,
      "feedback": "En JSX se usa className porque class es palabra reservada en JavaScript."
    },
    {
      "question": "¿Las props en un componente hijo pueden modificarse dentro del hijo?",
      "options": [
        "Sí, con useState inicializado desde props",
        "No, son de solo lectura; el padre es quien las actualiza",
        "Solo en componentes de clase",
        "Sí, mutando el objeto props directamente"
      ],
      "correctIndex": 1,
      "feedback": "Las props fluyen del padre; mutar props rompe el modelo unidireccional."
    },
    {
      "question": "¿Cuándo se re-ejecuta un useEffect(() => {...}, [id])?",
      "options": [
        "En cada render del árbol completo de la app",
        "Solo al montar, nunca más",
        "Al montar y cuando id cambia",
        "Solo al desmontar"
      ],
      "correctIndex": 2,
      "feedback": "El array de dependencias controla cuándo el efecto se vuelve a ejecutar."
    },
    {
      "question": "¿Por qué es importante la prop key en productos.map()?",
      "options": [
        "Para estilos CSS automáticos",
        "Para que React identifique elementos en listas dinámicas",
        "Para encriptar datos",
        "Es opcional y no afecta el comportamiento"
      ],
      "correctIndex": 1,
      "feedback": "key estable (ID) ayuda a la reconciliación correcta del Virtual DOM."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** React: JSX, Hooks y Estado | POSW
- **seoDescription:** Aprende React: componentes funcionales, JSX, props, useState, useEffect y consumo de APIs REST con TypeScript y Vite. Lección 15 del track POSW.
