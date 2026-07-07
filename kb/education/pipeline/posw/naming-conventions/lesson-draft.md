---
track: posw
slug: naming-conventions
title: "Convenciones de Nomenclatura"
order: 20
prerequisites:
  - principios-solid
related:
  - typescript
  - angular
  - react
  - backend
source_brief: kb/education/pipeline/posw/naming-conventions/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - PorQueImportaSection
  - CamelCaseSection
  - PascalCaseSection
  - SnakeCaseSection
  - KebabCaseSection
  - UpperSnakeCaseSection
  - ResumenContextoSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** por qué el naming impacta legibilidad, mantenimiento y onboarding en equipos web.
- **Aplicar** camelCase, PascalCase, snake_case, kebab-case y UPPER_SNAKE_CASE según lenguaje y contexto.
- **Nombrar** variables, funciones, clases, tablas SQL, URLs y archivos con la convención correcta.
- **Detectar** anti-patrones (abreviaciones, nombres que mienten, mezcla de estilos en un repo).
- **Mantener** consistencia entre frontend (React/Angular), backend (TypeScript/C#), SQL y APIs REST.

## Prerrequisitos

- **Lección `principios-solid`:** clases, interfaces y capas de servicio.
- Familiaridad con TypeScript/JavaScript y SQL básico.
- Noción de APIs REST y JSON.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

El código se lee más de lo que se escribe. Los nombres expresivos son documentación viva que reduce comentarios, bugs y tiempo de onboarding.

<!-- interactive: Callout -->
{
  "title": "Phil Karlton",
  "children": "There are only two hard things in Computer Science: cache invalidation and naming things. Acordar convenciones por capa evita el caos en monorepos."
}

---

### 1) Por qué importa el naming

**Sección TSX:** `PorQueImportaSection`

#### Legibilidad: malo vs bueno

<!-- code: javascript -->
```javascript
// ❌ Sin convención ni significado
let x = 4500000;
function fn1(a, b) { return a * b; }

// ✅ Expresivo
const precioProductoBase = 4500000;
function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}
```

#### Anti-patrones frecuentes

- Abreviaciones opacas: `usrMgr`, `getPr`.
- Nombres de un carácter fuera de loops (`x`, `tmp` en lógica de negocio).
- Nombres que mienten: `obtenerUsuario()` que también elimina el registro.
- Nombres genéricos: `Helper`, `Utils`, `Clase1` sin dominio.

#### Caso real: monorepo con tres estilos

<!-- interactive: Callout -->
{
  "title": "user_id vs userId vs UserID",
  "children": "SQL en snake_case, JSON en camelCase y DTOs en PascalCase mal alineados generan bugs de serialización cada sprint. Decisión: tabla de convenciones por capa documentada en README y alineada con OpenAPI."
}

---

### 2) camelCase — variables, funciones y JSON

**Sección TSX:** `CamelCaseSection`

#### Regla

Primera palabra en minúscula; siguientes capitalizadas. Estándar en JavaScript/TypeScript para variables, funciones, métodos y props JSON.

<!-- code: typescript -->
```typescript
let nombreCompleto = "Ana García";
let estaActivo = true;

function calcularDescuento(precio: number, porcentaje: number): number {
  return precio * (porcentaje / 100);
}

class Producto {
  nombreProducto: string;
  precioBase: number;
  fechaCreacion: Date;
}
```

#### JSON en APIs REST

<!-- code: json -->
```json
{
  "nombreCompleto": "Ana García",
  "fechaNacimiento": "1997-03-15",
  "estaActivo": true,
  "pedidosRecientes": [
    { "pedidoId": 101, "precioTotal": 5355000 }
  ]
}
```

---

### 3) PascalCase — clases, tipos y componentes

**Sección TSX:** `PascalCaseSection`

#### Regla

Cada palabra capitalizada. Clases, interfaces, types, enums y componentes React.

<!-- code: typescript -->
```typescript
interface ProductoResponse {
  id: number;
  nombre: string;
  precio: number;
}

type EstadoPedido = "PENDIENTE" | "ENVIADO" | "ENTREGADO";

enum RolUsuario {
  Admin = "ADMIN",
  Vendedor = "VENDEDOR",
}

function TarjetaProducto() {
  return null; // componente React
}
```

#### Errores comunes

- PascalCase en URLs: `/api/ObtenerProductos` rompe convención REST.
- camelCase en nombres de componente React: el JSX espera PascalCase.

---

### 4) snake_case — SQL y Python

**Sección TSX:** `SnakeCaseSection`

#### Regla

Minúsculas con guión bajo. Estándar en tablas y columnas SQL, y en Python/Ruby.

<!-- code: sql -->
```sql
CREATE TABLE pedidos_detalle (
  pedido_id       INTEGER REFERENCES pedidos(id),
  producto_id     INTEGER REFERENCES productos(id),
  cantidad        INTEGER NOT NULL,
  precio_unitario DECIMAL(12, 2) NOT NULL,
  PRIMARY KEY (pedido_id, producto_id)
);
```

#### ¿Inconsistencia o convención por capa?

`precio_unitario` en SQL y `precioUnitario` en JSON **no es inconsistencia**: cada capa tiene su idioma. El mapeo ocurre en el repositorio o DTO.

---

### 5) kebab-case — URLs, CSS y archivos

**Sección TSX:** `KebabCaseSection`

#### Regla

Minúsculas con guión. URLs HTTP, clases CSS, archivos HTML/CSS, paquetes npm y selectores Angular.

<!-- code: http -->
```http
GET /api/v1/tipos-de-usuario HTTP/1.1
Host: api.ejemplo.com
Accept: application/json

GET /productos/laptop-pro-15 HTTP/1.1
Host: tienda.ejemplo.com
```

#### Errores comunes

- Endpoints verbales: `/getOrders`, `/deleteUser/5`.
- Mezclar snake_case en URLs: `/api/obtener_usuarios`.

---

### 6) UPPER_SNAKE_CASE — constantes y .env

**Sección TSX:** `UpperSnakeCaseSection`

#### Regla

Mayúsculas con guión bajo. Constantes globales inmutables y variables de entorno.

<!-- code: typescript -->
```typescript
const MAX_INTENTOS_LOGIN = 5;
const URL_BASE_API = "https://api.ejemplo.com/v1";
const TIEMPO_EXPIRACION_TOKEN = 3600;
```

<!-- code: bash -->
```bash
# .env
DATABASE_URL=postgresql://user:pass@localhost:5432/mi_db
JWT_SECRET_KEY=cambiar_en_produccion
MAX_POOL_SIZE=10
NODE_ENV=production
```

#### Errores comunes

- `maxIntentos = 5` en camelCase que se reasigna por error; usar `MAX_INTENTOS`.

---

### 7) Resumen por capa

**Sección TSX:** `ResumenContextoSection`

#### Naming por capa en una app web

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  URL[\"URL kebab-case<br/>/api/tipos-de-usuario\"]\n  JSON[\"JSON camelCase<br/>precioUnitario\"]\n  TS[\"TS camelCase / PascalCase<br/>calcularIva / ProductoService\"]\n  SQL[\"SQL snake_case<br/>precio_unitario\"]\n  ENV[\".env UPPER_SNAKE<br/>DATABASE_URL\"]\n  URL --> JSON\n  JSON --> TS\n  TS --> SQL"
}

#### Tabla comparativa por contexto

<!-- interactive: CompareTable -->
{
  "headers": ["Contexto", "Convención", "Ejemplo"],
  "rows": [
    ["Variable TS", "camelCase", "precioUnitario"],
    ["Clase / componente", "PascalCase", "ProductoService / TarjetaProducto"],
    ["Tabla / columna SQL", "snake_case", "pedidos_detalle / precio_unitario"],
    ["URL REST", "kebab-case", "/api/v1/tipos-de-usuario"],
    ["Constante global", "UPPER_SNAKE_CASE", "MAX_REINTENTOS"],
    ["Archivo React", "kebab-case", "tarjeta-producto.tsx"]
  ]
}

#### StepReveal: un concepto, cinco estilos

<!-- interactive: StepReveal -->
{
  "title": "Tarjeta de producto en cada convención",
  "steps": [
    { "title": "camelCase", "content": "tarjetaProducto — variable o prop en TS/JSON" },
    { "title": "PascalCase", "content": "TarjetaProducto — componente React o clase" },
    { "title": "snake_case", "content": "tarjeta_producto — tabla o columna SQL" },
    { "title": "kebab-case", "content": "tarjeta-producto — URL o nombre de archivo" },
    { "title": "UPPER_SNAKE", "content": "MAX_TARJETAS_POR_PAGINA — constante global" }
  ]
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Renombra según convenciones TS: class usr_svc { getPr(id) {} } → clase, método y parámetro correctos.",
  "hints": ["PascalCase para clase", "camelCase para método", "nombre de dominio expresivo"],
  "expectedKeywords": ["UsuarioService", "getProducto", "productoId"],
  "successMessage": "Correcto. class UsuarioService { getProducto(productoId: number) {} }"
}

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: CodeChallenge -->
{
  "title": "Elige la convención correcta",
  "template": "Componente React → ___\nColumna SQL → ___\nURL de API → ___\nConstante global → ___",
  "blanks": [
    { "id": "blank1", "answer": "PascalCase", "placeholder": "React" },
    { "id": "blank2", "answer": "snake_case", "placeholder": "SQL" },
    { "id": "blank3", "answer": "kebab-case", "placeholder": "URL" },
    { "id": "blank4", "answer": "UPPER_SNAKE_CASE", "placeholder": "constante" }
  ]
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Estandariza el naming de un mini-proyecto e-commerce"**

Código inconsistente recibido:

- Tabla `OrdersDetail`, columna `ProductID`.
- API `GET /getAllProducts`, JSON con `product_name`.
- Clase `prodHelper`, componente `tarjeta_producto.tsx`.

1. Propón nombres correctos para tabla, columnas, endpoint, JSON y archivos.
2. Escribe un fragmento OpenAPI con propiedades camelCase coherentes.
3. Lista 5 reglas para el `README` del equipo.
4. Sugiere regla ESLint para enforcear PascalCase en componentes.
5. Indica qué renombrarías primero (breaking vs interno).

**Criterio de éxito:** convención por capa clara, endpoint REST idiomático, JSON camelCase, sin abreviaciones opacas.

<!-- code: json -->
```json
{
  "paths": {
    "/api/v1/productos": {
      "get": {
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "productoId": { "type": "integer" },
                      "nombreProducto": { "type": "string" },
                      "precioUnitario": { "type": "number" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto: nombra la tabla SQL, el endpoint REST y el componente React correctos para el e-commerce inconsistente.",
  "hints": [
    "pedidos_detalle / producto_id",
    "GET /api/v1/productos",
    "TarjetaProducto.tsx"
  ],
  "expectedKeywords": ["snake_case", "kebab-case", "PascalCase", "camelCase"],
  "successMessage": "Excelente. Convención por capa aplicada de forma coherente."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has aprendido las convenciones de nomenclatura por capa en aplicaciones web.

**Ideas clave para retener:**

- El naming es **documentación**; el código se lee más de lo que se escribe.
- **camelCase** en variables, funciones y JSON; **PascalCase** en clases y componentes.
- **snake_case** en SQL; **kebab-case** en URLs y archivos; **UPPER_SNAKE** en constantes y `.env`.
- Misma entidad, distinto estilo por capa: no es inconsistencia si está documentado.
- Acuerdo de equipo: README, ESLint `naming-convention` y code review de nombres nuevos.

**Siguiente paso:** lección `ia-en-desarrollo-web` — IA como amplificador de productividad con verificación humana.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué convención usa JavaScript para nombres de funciones?",
      "options": [
        "snake_case",
        "camelCase",
        "kebab-case",
        "PascalCase"
      ],
      "correctIndex": 1,
      "feedback": "Funciones y variables en JS/TS usan camelCase: calcularTotal."
    },
    {
      "question": "¿Cómo debe llamarse un componente React?",
      "options": [
        "tarjeta-producto",
        "tarjeta_producto",
        "TarjetaProducto",
        "TARJETA_PRODUCTO"
      ],
      "correctIndex": 2,
      "feedback": "Componentes React usan PascalCase por convención y por el JSX."
    },
    {
      "question": "¿Qué convención es estándar para columnas SQL?",
      "options": [
        "camelCase",
        "PascalCase",
        "snake_case",
        "kebab-case"
      ],
      "correctIndex": 2,
      "feedback": "precio_unitario es la convención más extendida en SQL."
    },
    {
      "question": "¿Cuál es el estilo correcto para una URL de API?",
      "options": [
        "/api/ObtenerUsuarios",
        "/api/obtener_usuarios",
        "/api/obtener-usuarios",
        "/api/OBTENER_USUARIOS"
      ],
      "correctIndex": 2,
      "feedback": "URLs usan kebab-case minúsculas; sustantivos plurales en REST."
    },
    {
      "question": "¿Cómo nombrar una constante global de máximo de reintentos?",
      "options": [
        "maxReintentos",
        "Max_Reintentos",
        "MAX_REINTENTOS",
        "max-reintentos"
      ],
      "correctIndex": 2,
      "feedback": "Constantes inmutables globales usan UPPER_SNAKE_CASE."
    }
  ]
}
