---
track: posw
slug: typescript
title: "TypeScript"
order: 13
prerequisites:
  - rest-principios
related:
  - angular
  - react
  - frontend
  - apis
  - backend
source_brief: kb/education/pipeline/posw/typescript/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueEsTypescriptSection
  - PorQueTypescriptSection
  - SistemaTiposSection
  - InterfacesTypesSection
  - GenericosSection
  - ConfiguracionTsSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** TypeScript como superset tipado de JavaScript que compila a JS y explicar el flujo **tsc → JavaScript**.
- **Comparar** JavaScript vs TypeScript en detección de errores (runtime vs compilación) con un ejemplo de tipos incorrectos.
- **Aplicar** el sistema de tipos: primitivos, arrays, tuplas, uniones, literales, `unknown` vs `any`.
- **Modelar** datos de API con interfaces, type aliases y enums; elegir cuándo usar cada uno.
- **Escribir** funciones y clases genéricas reutilizables y configurar un proyecto con `tsconfig.json` en modo `strict`.

## Prerrequisitos

- **Lección `rest-principios`:** recursos REST, contratos JSON y consumo de APIs.
- Familiaridad con JavaScript moderno (funciones, objetos, `async`/`await`).
- Conocimiento básico de JSON como formato de intercambio.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre qué es TypeScript, por qué usarlo frente a JavaScript puro, el sistema de tipos, interfaces y genéricos, y la configuración de un proyecto con `tsconfig.json`.

<!-- interactive: Callout -->
{
  "title": "TypeScript no valida en runtime",
  "children": "Los tipos desaparecen al compilar. TypeScript detecta errores en desarrollo; para respuestas JSON externas sigue siendo necesaria validación runtime (Zod, etc.) en producción."
}

---

### 1) ¿Qué es TypeScript?

**Sección TSX:** `QueEsTypescriptSection`

#### Mapa mental

- **TypeScript:** superset tipado de JavaScript (Microsoft, open-source desde 2012).
- **Regla de oro:** todo JavaScript válido es TypeScript válido.
- **Compilación:** código `.ts` → `tsc` → JavaScript puro → navegador o Node.js.
- **Beneficios inmediatos:** IntelliSense, documentación viva, refactoring seguro.

#### Flujo de compilación

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  TS[Código TypeScript .ts] --> TSC[tsc compilador]\n  TSC --> JS[JavaScript puro]\n  JS --> RUN[Navegador / Node.js]\n  TS --> IDE[Editor IntelliSense]\n  IDE --> ERR[Errores en tiempo de desarrollo]"
}

#### Paso a paso del flujo TS

<!-- interactive: StepReveal -->
{
  "title": "De .ts a ejecución",
  "steps": [
    {
      "title": "1. Escribes código .ts con tipos",
      "content": "El editor muestra autocompletado y errores de tipo en tiempo real."
    },
    {
      "title": "2. tsc compila a JavaScript",
      "content": "El compilador elimina anotaciones de tipo y genera archivos .js en outDir."
    },
    {
      "title": "3. Bundler o Node ejecuta el JS",
      "content": "Vite, Webpack o Node.js corren el JavaScript resultante sin conocer los tipos."
    },
    {
      "title": "4. Errores de tipo nunca llegan a producción",
      "content": "Si el compilador falla, el build se detiene antes del deploy."
    }
  ]
}

#### Instalación y compilación

<!-- code: bash -->
```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Compilar un archivo
tsc mi-archivo.ts

# Inicializar proyecto TypeScript
tsc --init   # genera tsconfig.json

# Compilar en modo watch
tsc --watch
```

#### Ordenar el flujo de desarrollo

<!-- interactive: CodeChallenge -->
{
  "title": "Ordena el flujo de desarrollo TypeScript",
  "template": "1. ___\n2. ___\n3. ___\n4. ___\n5. ___",
  "blanks": [
    { "id": "blank1", "answer": "escribes .ts con tipos", "placeholder": "paso a" },
    { "id": "blank2", "answer": "el editor muestra error de tipo", "placeholder": "paso b" },
    { "id": "blank3", "answer": "tsc genera JavaScript", "placeholder": "paso c" },
    { "id": "blank4", "answer": "el bundler sirve al navegador", "placeholder": "paso d" },
    { "id": "blank5", "answer": "ejecutas tests en Node", "placeholder": "paso e" }
  ]
}

---

### 2) ¿Por qué TypeScript?

**Sección TSX:** `PorQueTypescriptSection`

#### Mapa mental

- **Detección temprana:** errores en editor/compilación, no en producción.
- **Documentación viva:** firmas y formas de objetos explícitas en el código.
- **Refactoring seguro:** renombrar propiedades actualiza todos los usos tipados.
- **Contratos con APIs REST:** tipar respuestas evita desajustes con el backend.

#### JavaScript vs TypeScript

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "JavaScript", "TypeScript"],
  "rows": [
    ["Detección de errores de tipo", "En runtime (producción)", "En compilación/editor"],
    ["Autocompletado", "Limitado sin tipos", "IntelliSense completo"],
    ["Refactoring", "Frágil en proyectos grandes", "Renombrado seguro con tipos"],
    ["Contrato API REST", "Fácil usar `any` sin aviso", "Interfaces y genéricos explícitos"],
    ["Curva inicial", "Menor", "Requiere aprender sistema de tipos"]
  ]
}

#### Bug en JavaScript — error en producción

<!-- code: javascript -->
```javascript
// JavaScript — el error aparece en producción
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}
calcularTotal("4500", 3); // Retorna "450045004500"
```

#### Misma función en TypeScript — error en el editor

<!-- code: typescript -->
```typescript
// TypeScript — el error aparece en el editor
function calcularTotal(precio: number, cantidad: number): number {
  return precio * cantidad;
}
calcularTotal("4500", 3);
// Error TS: Argument of type 'string' is not assignable to parameter of type 'number'
```

#### Caso real: e-commerce checkout

<!-- interactive: Callout -->
{
  "title": "Concatenación de precios en checkout",
  "children": "Un campo de formulario envía \"4500\" (string) y el total se concatena: \"450045004500\". Decisión: migrar el módulo de carrito a TypeScript con firmas `number`; el compilador rechaza `calcularTotal(\"4500\", 3)` antes del deploy."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica por qué `calcularTotal(\"4500\", 3)` falla en TypeScript pero no en JavaScript. ¿En qué capa se detecta cada error?",
  "hints": ["Multiplicación vs concatenación", "Compilación vs runtime", "Firmas number"],
  "expectedKeywords": ["compilación", "runtime", "string", "number"],
  "successMessage": "Correcto. JS concatena en runtime; TS rechaza el argumento incompatible en compilación."
}

---

### 3) Sistema de tipos

**Sección TSX:** `SistemaTiposSection`

#### Mapa mental

- **Primitivos:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Compuestos:** arrays (`number[]`), tuplas (`[number, number]`), uniones (`string | number`).
- **Literales:** `"norte" | "sur"` restringe valores permitidos.
- **`any` vs `unknown`:** `any` desactiva el tipado; `unknown` exige narrowing.
- **`never`:** funciones que nunca retornan (error o bucle infinito).

#### Jerarquía del sistema de tipos

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  P[Primitivos] --> C[Compuestos: array, tupla, union]\n  C --> I[Interfaces y types]\n  I --> G[Genéricos T]\n  G --> API[ApiResponse T para REST]"
}

#### Tipos primitivos y compuestos

<!-- code: typescript -->
```typescript
let nombre: string = "Ana";
let precios: number[] = [100, 200, 300];
let coordenada: [number, number] = [4.710, -74.072];
let id: string | number = 42;

type Direccion = "norte" | "sur" | "este" | "oeste";
let rumbo: Direccion = "norte";

let desconocido: unknown = obtenerDato();
if (typeof desconocido === "string") {
  console.log(desconocido.toUpperCase());
}
```

#### any vs unknown

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Comportamiento", "Cuándo usar", "Riesgo"],
  "rows": [
    ["any", "Desactiva verificación", "Migración gradual legacy", "Anula beneficios de TS"],
    ["unknown", "Exige narrowing antes de usar", "Datos de origen desconocido (JSON externo)", "Más seguro, requiere comprobación"],
    ["never", "Valor imposible", "Funciones que lanzan o no retornan", "Útil en exhaustiveness checks"]
  ]
}

#### Errores comunes

- Usar `any` por comodidad en lugar de `unknown` + narrowing.
- Ignorar errores con `@ts-ignore` en lugar de corregir el contrato.
- Asumir que TypeScript valida respuestas JSON en runtime.

---

### 4) Interfaces, types y enums

**Sección TSX:** `InterfacesTypesSection`

#### Mapa mental

- **Interfaces:** contratos para forma de objetos; `?` opcional, `readonly`, `extends`.
- **Type aliases:** uniones, intersecciones y alias complejos.
- **Regla práctica:** `interface` para objetos/clases; `type` para uniones (`Producto | Error`).
- **Enums:** constantes con nombre; preferir string enums para JSON predecible.

#### Interface y respuesta de API genérica

<!-- code: typescript -->
```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion?: string;
  readonly creado_en: Date;
}

type ApiResponse<T> = {
  data: T;
  status: number;
  mensaje: string;
  timestamp: string;
};

function mostrarProducto(p: Producto): string {
  return `${p.nombre} - $${p.precio.toLocaleString("es-CO")}`;
}
```

#### Enum para estado de pedido

<!-- code: typescript -->
```typescript
enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO",
  ENTREGADO = "ENTREGADO"
}

interface Pedido {
  id: number;
  estado: EstadoPedido;
  total: number;
}
```

#### Caso real: contrato API roto

<!-- interactive: Callout -->
{
  "title": "Frontend enterprise: precio cambia de number a string",
  "children": "El backend cambia `precio` a \"150000.00\". El frontend tipó la respuesta como `any` y compila sin error; `toLocaleString()` falla en runtime. Decisión: `interface Producto` compartida o generada desde OpenAPI; CI falla si el contrato no coincide."
}

#### interface vs type

<!-- interactive: CompareTable -->
{
  "headers": ["Constructo", "Mejor para", "Ejemplo"],
  "rows": [
    ["interface", "Forma de objetos y clases", "interface Usuario { id: number; nombre: string }"],
    ["type", "Uniones e intersecciones", "type Resultado = Producto | ErrorApi"],
    ["enum", "Conjunto de constantes nombradas", "enum EstadoPedido { PENDIENTE = \"PENDIENTE\" }"]
  ]
}

---

### 5) Genéricos

**Sección TSX:** `GenericosSection`

#### Mapa mental

- **Genéricos `<T>`:** código reutilizable que conserva información de tipo.
- **Funciones genéricas:** `function primerElemento<T>(arr: T[]): T | undefined`.
- **Clases genéricas:** repositorios, cachés, wrappers de API.
- **Restricciones:** `T extends { id: number }` limita el tipo aceptado.

#### Repositorio genérico

<!-- code: typescript -->
```typescript
class Repositorio<T extends { id: number }> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  buscarPorId(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

const repoProductos = new Repositorio<Producto>();
```

#### Función genérica

<!-- code: typescript -->
```typescript
function primerElemento<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const primero = primerElemento([1, 2, 3]); // infiere number
const texto = primerElemento(["a", "b"]);   // infiere string
```

#### Completar firma genérica

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la firma genérica",
  "template": "function primerElemento<T>(arr: T[]): ___",
  "blanks": [
    { "id": "blank1", "answer": "T | undefined", "placeholder": "tipo de retorno" }
  ]
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué tipo infiere TypeScript en `primerElemento([1, 2, 3])`? ¿Por qué los genéricos son útiles frente a usar `any`?",
  "hints": ["Inferencia automática", "Conserva el tipo del array", "number"],
  "expectedKeywords": ["number", "genérico", "inferencia", "tipo"],
  "successMessage": "Correcto. Infiere `number` y mantiene type safety sin perder flexibilidad."
}

---

### 6) Configuración tsconfig.json

**Sección TSX:** `ConfiguracionTsSection`

#### Mapa mental

- **`target`:** versión de JS de salida (ES2020, ESNext).
- **`module` / `moduleResolution`:** sistema de módulos y resolución.
- **`strict: true`:** activa null checks, no implicit any, etc.
- **`outDir` / `rootDir`:** carpetas de salida y fuente.
- **`esModuleInterop`:** compatibilidad con imports CommonJS.

#### tsconfig.json recomendado para proyecto web

<!-- code: json -->
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### Opciones críticas

<!-- interactive: CompareTable -->
{
  "headers": ["Opción", "Qué hace", "Por qué importa"],
  "rows": [
    ["strict", "Activa verificaciones estrictas", "Evita null/undefined silenciosos y any implícito"],
    ["noImplicitAny", "Prohíbe any implícito", "Fuerza anotar tipos en parámetros sin tipo"],
    ["strictNullChecks", "null/undefined son tipos distintos", "Previene accesos a propiedades de null"],
    ["outDir", "Carpeta de JS compilado", "Separa fuente .ts de artefactos .js"],
    ["esModuleInterop", "Imports default desde CommonJS", "Compatibilidad con librerías npm legacy"]
  ]
}

#### Inicializar proyecto

<!-- code: bash -->
```bash
tsc --init
# Edita compilerOptions.strict = true antes de escribir código
```

---

### Resumen

**Sección TSX:** `ResumenSection`

- **TypeScript** es un superset tipado de JavaScript que compila a JS con `tsc`.
- **Ventaja principal:** detectar errores de tipo en desarrollo, no en producción.
- **Sistema de tipos:** primitivos → compuestos → interfaces/types → genéricos.
- **`unknown` > `any`** para datos externos; validar JSON en runtime además de tipar.
- **`interface`** para objetos; **`type`** para uniones; **string enums** para APIs REST.
- **Genéricos** reutilizan código conservando información de tipo (`ApiResponse<T>`).
- **`strict: true`** en `tsconfig.json` es la base de un proyecto mantenible.
- **Siguiente lección:** `angular` — framework opinionado que usa TypeScript de forma nativa.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué TypeScript no elimina la necesidad de validar respuestas JSON del servidor en runtime? ¿Qué capa cubre cada una?",
  "hints": ["Tipos desaparecen al compilar", "Compilación vs ejecución", "Zod o similar"],
  "expectedKeywords": ["runtime", "compilación", "validación", "tipos"],
  "successMessage": "Correcto. TS cubre desarrollo; la validación runtime cubre datos externos en ejecución."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un colega propone tipar toda respuesta de `fetch` como `any` para ir más rápido. ¿Qué riesgo hay y qué alternativa propones?",
  "hints": ["Contrato roto con API", "interface Producto", "ApiResponse<T>"],
  "expectedKeywords": ["any", "interface", "contrato", "runtime"],
  "successMessage": "Correcto. `any` anula los beneficios; interfaces y genéricos documentan el contrato REST."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo usarías `type` en lugar de `interface`? Da un ejemplo de unión de tipos.",
  "hints": ["Uniones", "Producto | Error", "No solo objetos"],
  "expectedKeywords": ["type", "unión", "interface", "objeto"],
  "successMessage": "Correcto. `interface` para forma de objetos; `type` para uniones como `Producto | ErrorApi`."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Tipa el cliente de una API REST de pedidos"**

Un backend expone `GET /api/v1/pedidos/:id` con JSON:

<!-- code: json -->
```json
{
  "data": {
    "id": 1,
    "estado": "PENDIENTE",
    "items": [{ "productoId": 42, "cantidad": 2, "precioUnitario": 150000 }]
  },
  "status": 200,
  "mensaje": "OK",
  "timestamp": "2025-06-23T10:00:00Z"
}
```

1. Define `enum EstadoPedido`, `interface ItemPedido`, `interface Pedido` y `type ApiResponse<T>`.
2. Escribe `async function obtenerPedido(id: number): Promise<ApiResponse<Pedido>>` con `fetch` tipado.
3. Escribe `function calcularTotal(pedido: Pedido): number` que multiplique cantidad × precioUnitario.
4. Indica qué error detectaría TypeScript si `precioUnitario` fuera `string` en el interface.
5. Propón una opción de `tsconfig.json` crítica para este proyecto y justifica `strict: true`.

**Criterio de éxito:** sin `any`, enums string para estado, genérico en respuesta API, función de total con tipos numéricos explícitos.

<!-- code: typescript -->
```typescript
enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO"
}

interface ItemPedido {
  productoId: number;
  cantidad: number;
  precioUnitario: number;
}

interface Pedido {
  id: number;
  estado: EstadoPedido;
  items: ItemPedido[];
}

type ApiResponse<T> = {
  data: T;
  status: number;
  mensaje: string;
  timestamp: string;
};

async function obtenerPedido(id: number): Promise<ApiResponse<Pedido>> {
  const res = await fetch(`/api/v1/pedidos/${id}`);
  return res.json();
}

function calcularTotal(pedido: Pedido): number {
  return pedido.items.reduce(
    (sum, item) => sum + item.cantidad * item.precioUnitario,
    0
  );
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de pedidos: define interfaces, enum string, ApiResponse<T> y calcularTotal sin usar any.",
  "hints": [
    "EstadoPedido como string enum",
    "precioUnitario: number",
    "strict: true en tsconfig",
    "reduce para sumar items"
  ],
  "expectedKeywords": ["enum", "interface", "ApiResponse", "number"],
  "successMessage": "Excelente. Has tipado un cliente REST completo con genéricos y sin any."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado los fundamentos de TypeScript: superset de JS, sistema de tipos, interfaces, genéricos y configuración estricta.

**Ideas clave para retener:**

- TypeScript **extiende** JavaScript; compila a JS con `tsc`.
- Los errores de tipo se detectan en **desarrollo**, no en runtime.
- **`unknown` + narrowing** es más seguro que `any` para datos externos.
- **`interface`** para objetos; **`type`** para uniones; **genéricos** para APIs reutilizables.
- **`strict: true`** evita bugs silenciosos de null y any implícito.

**Siguiente paso:** lección `angular` — framework de Google que aprovecha TypeScript en componentes, servicios y DI.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué relación tiene TypeScript con JavaScript?",
      "options": [
        "Es un lenguaje incompatible que reemplaza JavaScript",
        "Es un superset: todo JS válido es TS válido",
        "Solo funciona en el navegador",
        "No necesita compilación"
      ],
      "correctIndex": 1,
      "feedback": "TypeScript extiende JavaScript con tipos; se compila a JS con tsc."
    },
    {
      "question": "¿Cuándo se detecta calcularTotal(\"4500\", 3) si la firma exige number?",
      "options": [
        "Solo en producción",
        "En compilación o en el editor, antes de ejecutar",
        "Nunca, TypeScript valida en runtime",
        "Solo si usas any"
      ],
      "correctIndex": 1,
      "feedback": "El compilador rechaza argumentos incompatibles en tiempo de desarrollo."
    },
    {
      "question": "¿Cuál es más seguro que any para datos de origen desconocido?",
      "options": [
        "never",
        "unknown con narrowing",
        "void",
        "object sin más comprobación"
      ],
      "correctIndex": 1,
      "feedback": "unknown obliga a verificar el tipo antes de usar el valor."
    },
    {
      "question": "Regla práctica: ¿cuándo preferir type sobre interface?",
      "options": [
        "Siempre para clases",
        "Para uniones e intersecciones complejas",
        "Solo en archivos .js",
        "Nunca, interface reemplaza a type"
      ],
      "correctIndex": 1,
      "feedback": "interface para forma de objetos; type para uniones como Producto | Error."
    },
    {
      "question": "¿Qué hace \"strict\": true en tsconfig.json?",
      "options": [
        "Desactiva todos los tipos",
        "Activa verificaciones estrictas (null checks, no implicit any, etc.)",
        "Compila a ES5 obligatoriamente",
        "Impide usar genéricos"
      ],
      "correctIndex": 1,
      "feedback": "strict agrupa opciones que evitan errores silenciosos de tipado."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** TypeScript: Tipos, Interfaces y Genéricos | POSW
- **seoDescription:** Aprende TypeScript como superset de JavaScript: sistema de tipos, interfaces, genéricos, tsconfig strict y tipado de APIs REST. Lección 13 del track POSW.
