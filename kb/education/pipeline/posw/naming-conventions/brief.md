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
source: kb/education/sources/clases/programacion-orientada-sitios-web/naming-conventions.md
topic_expert: topic-expert-web-services
---

## Objetivos medibles

Al finalizar la lección el estudiante podrá:

1. Explicar por qué el **naming** impacta legibilidad, mantenimiento y onboarding en equipos web.
2. Aplicar **camelCase, PascalCase, snake_case, kebab-case y UPPER_SNAKE_CASE** según lenguaje y contexto.
3. Nombrar **variables, funciones, clases, tablas SQL, URLs y archivos** con la convención correcta.
4. Detectar **anti-patrones** (abreviaciones, nombres que mienten, mezcla de estilos en un repo).
5. Mantener **consistencia** entre frontend (React/Angular), backend (TypeScript/C#), SQL y APIs REST.

## Conceptos clave

- **Naming como documentación:** el código se lee más de lo que se escribe; nombres expresivos reducen comentarios y bugs.
- **camelCase:** primera palabra minúscula; siguientes capitalizadas — variables, funciones, métodos, props JSON en JS/TS.
- **PascalCase (UpperCamelCase):** cada palabra capitalizada — clases, interfaces, types, enums, componentes React.
- **snake_case:** minúsculas con `_` — Python, Ruby, tablas y columnas SQL.
- **kebab-case:** minúsculas con `-` — URLs, clases CSS, archivos HTML/CSS, paquetes npm, selectores Angular.
- **UPPER_SNAKE_CASE:** constantes globales y variables de entorno (`MAX_REINTENTOS`, `DATABASE_URL`).
- **Por contexto:** misma entidad puede llamarse `precioUnitario` (TS), `precio_unitario` (SQL), `/tipos-de-usuario` (URL).
- **Cita Karlton:** "There are only two hard things in Computer Science: cache invalidation and naming things."
- **Acuerdo de equipo:** linter (ESLint naming), guía en README o `CLAUDE.md`, code review de nombres nuevos.

## Errores comunes

- **Abreviaciones opacas:** `usrMgr`, `getPr` en lugar de `usuarioManager`, `getProducto`.
- **Nombres de un carácter** fuera de loops (`x`, `tmp` en lógica de negocio).
- **Mezclar convenciones** en el mismo proyecto (`get_user` junto a `calcularTotal`).
- **Nombres genéricos:** `Helper`, `Utils`, `Manager`, `Clase1` sin dominio.
- **Nombres que mienten:** `obtenerUsuario()` que también elimina el registro.
- **PascalCase en URLs:** `/api/ObtenerProductos` rompe convención REST y SEO.
- **camelCase en tablas SQL:** `pedidosDetalle` dificulta queries y herramientas DBA.
- **Constantes en camelCase:** `maxIntentos = 5` que se reasigna por error; usar `MAX_INTENTOS`.

## Casos reales

### 1. Monorepo con tres estilos de naming

Un equipo mezcla `user_id` en SQL, `userId` en API JSON y `UserID` en DTOs C#. Los juniors mapean mal campos; bugs de serialización en producción cada sprint.

**Decisión clave:** tabla de convenciones por capa; DTOs alineados con contrato OpenAPI; snake_case solo en BD, camelCase en JSON, documentado en README.

### 2. Microservicio con endpoints verbales

Rutas como `/getOrders`, `/deleteUser/5` y clases `OrderHelper`. Nuevos devs duplican lógica porque no encuentran el servicio correcto.

**Decisión clave:** kebab-case en URIs (`/api/v1/pedidos`), PascalCase en servicios (`PedidosService`), ESLint `naming-convention` en CI.

## Ejemplos de código sugeridos

### Legibilidad: malo vs bueno

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

### camelCase en TypeScript

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

### PascalCase — clases, tipos, componentes

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

### snake_case en SQL

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

### kebab-case — URLs y rutas HTTP

<!-- code: http -->
```http
GET /api/v1/tipos-de-usuario HTTP/1.1
Host: api.ejemplo.com
Accept: application/json

GET /productos/laptop-pro-15 HTTP/1.1
Host: tienda.ejemplo.com
```

### UPPER_SNAKE_CASE — constantes y .env

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

### JSON — camelCase en APIs REST

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

## Ejercicios de práctica

- **tipo:** reflexion — ¿Por qué `precio_unitario` en SQL y `precioUnitario` en JSON no es inconsistencia sino convención por capa?
- **tipo:** completar-codigo — Renombra: `class usr_svc { getPr(id) {} }` → convenciones TS correctas para clase, método y parámetro.
- **tipo:** ordenar-pasos — Ordena: elegir convención por capa → documentar en README → configurar ESLint → code review → refactor gradual.

## Animación o visual sugerida

- **CompareTable — convención por contexto:** variable TS, clase, tabla SQL, URL, constante, archivo.
- **StepReveal — camel → Pascal → snake → kebab → UPPER** con un mismo concepto (`tarjeta producto`) en cada estilo.
- **Antes/después** de bloque código ilegible vs expresivo.

## Diagrama Mermaid (si aplica)

### Naming por capa en una app web

```mermaid
flowchart TD
  URL["URL kebab-case<br/>/api/tipos-de-usuario"]
  JSON["JSON camelCase<br/>precioUnitario"]
  TS["TS camelCase / PascalCase<br/>calcularIva / ProductoService"]
  SQL["SQL snake_case<br/>precio_unitario"]
  ENV[".env UPPER_SNAKE<br/>DATABASE_URL"]
  URL --> JSON
  JSON --> TS
  TS --> SQL
```

## Secciones TSX sugeridas

- `ObjetivosSection` — 5 objetivos medibles
- `PorQueImportaSection` — lectura vs escritura, cita Karlton
- `CamelCaseSection` — regla, tabla de lenguajes, ejemplos TS/JSON
- `PascalCaseSection` — clases, interfaces, enums, React
- `SnakeCaseSection` — Python/SQL con `CodeBlock`
- `KebabCaseSection` — URLs, CSS, archivos
- `UpperSnakeCaseSection` — constantes + `.env`
- `ResumenContextoSection` — tabla grande + anti-patrones
- `CompruebaTuComprensionSection` — quiz integrado

## Reto integrador

**"Estandariza el naming de un mini-proyecto e-commerce"**

Recibes código inconsistente:
- Tabla `OrdersDetail`, columna `ProductID`.
- API `GET /getAllProducts`, JSON con `product_name`.
- Clase `prodHelper`, componente `tarjeta_producto.tsx`.

1. Propón nombres correctos para tabla, columnas, endpoint, JSON y archivos.
2. Escribe un fragmento OpenAPI con propiedades camelCase coherentes.
3. Lista 5 reglas para el `README` del equipo.
4. Sugiere regla ESLint o equivalente para enforcear PascalCase en componentes.
5. Indica qué renombrarías primero (breaking vs interno).

**Criterio de éxito:** convención por capa clara, endpoint REST idiomático, JSON camelCase, sin abreviaciones opacas.

## Preguntas sugeridas para quiz (5)

1. **¿Qué convención usa JavaScript para nombres de funciones?**
   - A) snake_case
   - B) camelCase
   - C) kebab-case
   - D) PascalCase
   - **Correcta:** B
   - **Feedback:** Funciones y variables en JS/TS usan camelCase: `calcularTotal`.

2. **¿Cómo debe llamarse un componente React?**
   - A) `tarjeta-producto`
   - B) `tarjeta_producto`
   - C) `TarjetaProducto`
   - D) `TARJETA_PRODUCTO`
   - **Correcta:** C
   - **Feedback:** Componentes React usan PascalCase por convención y por el JSX.

3. **¿Qué convención es estándar para columnas SQL?**
   - A) camelCase
   - B) PascalCase
   - C) snake_case
   - D) kebab-case
   - **Correcta:** C
   - **Feedback:** `precio_unitario` es la convención más extendida en SQL.

4. **¿Cuál es el estilo correcto para una URL de API?**
   - A) `/api/ObtenerUsuarios`
   - B) `/api/obtener_usuarios`
   - C) `/api/obtener-usuarios`
   - D) `/api/OBTENER_USUARIOS`
   - **Correcta:** C
   - **Feedback:** URLs usan kebab-case minúsculas; sustantivos plurales en REST.

5. **¿Cómo nombrar una constante global de máximo de reintentos?**
   - A) `maxReintentos`
   - B) `Max_Reintentos`
   - C) `MAX_REINTENTOS`
   - D) `max-reintentos`
   - **Correcta:** C
   - **Feedback:** Constantes inmutables globales usan UPPER_SNAKE_CASE.

## Referencias

- Fuente docente: `kb/education/sources/clases/programacion-orientada-sitios-web/naming-conventions.md`
- Prerrequisito: `principios-solid`
- Siguiente lección: `ia-en-desarrollo-web`
- Lecciones relacionadas: `typescript`, `angular`, `react`, `backend`
- Phil Karlton — cita sobre naming (citada en fuente docente)
