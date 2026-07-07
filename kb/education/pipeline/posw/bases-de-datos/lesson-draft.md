---
track: posw
slug: bases-de-datos
title: "Bases de Datos"
order: 18
prerequisites:
  - herramientas-desarrollo
related:
  - backend
  - cache
  - modelo-cliente-servidor
  - herramientas-desarrollo
source_brief: kb/education/pipeline/posw/bases-de-datos/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - SqlFamiliasSection
  - DdlSection
  - DmlSection
  - DclTclAcidSection
  - SqlVsNosqlSection
  - ClavesSection
  - ColumnarGrafosSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Clasificar** comandos SQL en DDL, DML, DCL y TCL y asignar cada operación a su familia.
- **Escribir** consultas DML con `SELECT`, filtros, `JOIN`, agregaciones y transacciones ACID (`BEGIN`/`COMMIT`/`ROLLBACK`).
- **Diseñar** tablas con claves primarias, foráneas y restricciones que garanticen integridad referencial.
- **Comparar** SQL vs NoSQL y elegir motor según estructura, consistencia y patrón de escala.
- **Distinguir** bases relacionales fila a fila, columnares y de grafos y nombrar un caso de uso para cada una.

## Prerrequisitos

- **Lección `herramientas-desarrollo`:** XAMPP/MariaDB o Docker con motor relacional local.
- **Lección `modelo-cliente-servidor`:** la BD vive en la capa de datos, no expuesta al cliente.
- Familiaridad con JSON y consumo de API desde JavaScript.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

Esta lección introduce SQL como lenguaje estándar para datos relacionales, las garantías ACID, el diseño con claves y cuándo combinar SQL con NoSQL.

<!-- interactive: Callout -->
{
  "title": "El frontend no conecta a la BD",
  "children": "En producción, React u otras apps cliente consumen una API; el backend es quien ejecuta SQL. Conectar directo a PostgreSQL desde el navegador expone credenciales y rompe la arquitectura 3 capas."
}

---

### 1) Familias SQL: DDL, DML, DCL, TCL

**Sección TSX:** `SqlFamiliasSection`

#### Mapa mental

- **DDL (Data Definition Language):** define estructura — `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.
- **DML (Data Manipulation Language):** manipula datos — `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **DCL (Data Control Language):** permisos — `GRANT`, `REVOKE`.
- **TCL (Transaction Control Language):** transacciones — `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`.

#### Diagrama de familias

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  SQL[SQL]\n  SQL --> DDL[DDL: CREATE ALTER DROP]\n  SQL --> DML[DML: SELECT INSERT UPDATE DELETE]\n  SQL --> DCL[DCL: GRANT REVOKE]\n  SQL --> TCL[TCL: BEGIN COMMIT ROLLBACK]"
}

#### StepReveal: un ejemplo por familia

<!-- interactive: StepReveal -->
{
  "title": "Las cuatro familias SQL",
  "steps": [
    { "title": "DDL — CREATE TABLE", "content": "Define categorias con id SERIAL PRIMARY KEY." },
    { "title": "DML — INSERT / SELECT", "content": "Inserta productos y consulta con JOIN." },
    { "title": "DCL — GRANT", "content": "usuario_app puede SELECT e INSERT, no DELETE." },
    { "title": "TCL — BEGIN / COMMIT", "content": "Transferencia de saldos: todo o nada con ROLLBACK si falla." }
  ]
}

#### Clasificar comandos

<!-- interactive: CodeChallenge -->
{
  "title": "¿A qué familia pertenece cada comando?",
  "template": "CREATE TABLE → ___\nSELECT → ___\nGRANT → ___\nCOMMIT → ___",
  "blanks": [
    { "id": "blank1", "answer": "DDL", "placeholder": "CREATE" },
    { "id": "blank2", "answer": "DML", "placeholder": "SELECT" },
    { "id": "blank3", "answer": "DCL", "placeholder": "GRANT" },
    { "id": "blank4", "answer": "TCL", "placeholder": "COMMIT" }
  ]
}

---

### 2) DDL: crear y modificar tablas

**Sección TSX:** `DdlSection`

#### DDL — crear y modificar tablas

<!-- code: sql -->
```sql
CREATE TABLE categorias (
  id    SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE productos (
  id           SERIAL PRIMARY KEY,
  nombre       VARCHAR(200) NOT NULL,
  precio       DECIMAL(12, 2) NOT NULL CHECK (precio > 0),
  stock        INTEGER DEFAULT 0,
  categoria_id INTEGER REFERENCES categorias(id),
  creado_en    TIMESTAMP DEFAULT NOW()
);

ALTER TABLE productos ADD COLUMN descripcion TEXT;
DROP TABLE IF EXISTS productos CASCADE;
```

#### Modelo ER simplificado

<!-- interactive: MermaidDiagram -->
{
  "chart": "erDiagram\n  CATEGORIAS ||--o{ PRODUCTOS : contiene\n  PRODUCTOS {\n    int id PK\n    string nombre\n    decimal precio\n    int categoria_id FK\n  }\n  CATEGORIAS {\n    int id PK\n    string nombre\n  }"
}

#### Errores comunes

- `DROP` sin backup en tablas con datos productivos.
- `TRUNCATE` confundido con `DELETE`: TRUNCATE vacía rápido y puede reiniciar identidad.

---

### 3) DML: consultar y modificar datos

**Sección TSX:** `DmlSection`

#### Insertar, consultar, actualizar

<!-- code: sql -->
```sql
INSERT INTO productos (nombre, precio, stock, categoria_id)
VALUES ('Laptop Pro 15', 4500000.00, 10, 1);

SELECT p.id, p.nombre, p.precio, c.nombre AS categoria
FROM productos p
INNER JOIN categorias c ON p.categoria_id = c.id
WHERE p.precio BETWEEN 100000 AND 1000000
  AND p.stock > 0
ORDER BY p.precio ASC
LIMIT 10;

UPDATE productos
SET precio = precio * 0.9, stock = stock - 1
WHERE id = 42;

DELETE FROM productos WHERE stock = 0;
```

#### Agregaciones con GROUP BY

<!-- code: sql -->
```sql
SELECT
  c.nombre AS categoria,
  COUNT(p.id) AS total_productos,
  AVG(p.precio) AS precio_promedio
FROM productos p
JOIN categorias c ON p.categoria_id = c.id
GROUP BY c.nombre
HAVING COUNT(p.id) > 5
ORDER BY precio_promedio DESC;
```

#### Completar consulta agregada

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la consulta GROUP BY",
  "template": "SELECT ___, AVG(precio) FROM productos GROUP BY categoria_id HAVING ___ > 3",
  "blanks": [
    { "id": "blank1", "answer": "categoria_id", "placeholder": "columnas SELECT" },
    { "id": "blank2", "answer": "COUNT(*)", "placeholder": "condición HAVING" }
  ]
}

#### Cliente JavaScript (API como capa)

<!-- code: javascript -->
```javascript
// El frontend NO debe conectar directo a la BD en producción
async function listarProductos() {
  const res = await fetch("/api/productos?stock_gt=0");
  if (!res.ok) throw new Error("Error al consultar productos");
  return res.json();
}
```

#### Errores comunes

- `DELETE` sin `WHERE`: borra toda la tabla.
- Omitir `COMMIT`: cambios pendientes que otros no ven.

---

### 4) DCL, TCL y ACID

**Sección TSX:** `DclTclAcidSection`

#### Permisos y transacción

<!-- code: sql -->
```sql
GRANT SELECT, INSERT, UPDATE ON productos TO usuario_app;
REVOKE DELETE ON productos FROM usuario_app;

BEGIN;
UPDATE cuentas SET saldo = saldo - 500000 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 500000 WHERE id = 2;
COMMIT;
-- ROLLBACK; si algo falla
```

#### Propiedades ACID

<!-- interactive: CompareTable -->
{
  "headers": ["Propiedad", "Significado", "Ejemplo"],
  "rows": [
    ["Atomicidad (A)", "Todas las operaciones ocurren o ninguna", "Transferencia: débito y crédito juntos o ROLLBACK"],
    ["Consistencia (C)", "La BD pasa de un estado válido a otro", "CHECK (saldo >= 0) se respeta tras COMMIT"],
    ["Aislamiento (I)", "Transacciones concurrentes no se pisan", "Dos compras del último ítem: una gana, otra falla"],
    ["Durabilidad (D)", "Tras COMMIT, los datos persisten", "Apagón tras COMMIT no pierde la transferencia"]
  ]
}

#### Caso real: fintech sin transacción

<!-- interactive: Callout -->
{
  "title": "Transferencia a medias",
  "children": "Dos UPDATE de saldo sin BEGIN/COMMIT: el primero corre, hay timeout de red y el segundo nunca ejecuta. Decisión: envolver en TCL, ROLLBACK ante fallo, CHECK (saldo >= 0) y permisos DCL mínimos."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué una transferencia bancaria necesita TCL y las propiedades ACID? Da un escenario de fallo sin transacción.",
  "hints": ["Dos UPDATE", "Timeout entre ellos", "ROLLBACK"],
  "expectedKeywords": ["transacción", "ROLLBACK", "atomicidad", "COMMIT"],
  "successMessage": "Correcto. Sin transacción, un débito sin crédito deja datos inconsistentes; ACID garantiza todo-o-nada."
}

---

### 5) SQL vs NoSQL

**Sección TSX:** `SqlVsNosqlSection`

#### Comparativa

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "SQL relacional", "NoSQL"],
  "rows": [
    ["Esquema", "Rígido, tablas normalizadas", "Flexible (documentos, clave-valor, grafos)"],
    ["Escala", "Vertical (más CPU/RAM al servidor)", "Horizontal (más nodos)"],
    ["JOINs", "Nativos y potentes", "Limitados o modelados en aplicación"],
    ["ACID", "Fuerte en OLTP (PostgreSQL, MySQL)", "Variable según motor y configuración"],
    ["Motores ejemplo", "PostgreSQL, MySQL, SQLite", "MongoDB, Redis, Cassandra, Neo4j"],
    ["Cuándo elegir", "Pedidos, facturación, relaciones complejas", "Logs variables, sesiones, escala masiva"]
  ]
}

#### Regla práctica

- Relaciones complejas + transacciones fuertes → **SQL**.
- Esquema muy variable + escala horizontal masiva → **NoSQL**.
- Proyectos reales suelen **combinar ambos**.

#### Caso real: e-commerce políglota

<!-- interactive: Callout -->
{
  "title": "PostgreSQL + Redis + MongoDB",
  "children": "Catálogo y pedidos en PostgreSQL (ACID); sesiones y carrito en Redis; logs de clics en MongoDB por esquema variable. Meter logs en tablas SQL rígidas bloqueó releases semanales."
}

---

### 6) Claves: PK, FK y tipos de clave

**Sección TSX:** `ClavesSection`

#### Mapa mental

- **Primary Key (PK):** identifica fila única; no NULL ni duplicada.
- **Foreign Key (FK):** referencia PK de otra tabla; integridad referencial.
- **Unique Key:** valores no repetidos.
- **Composite Key:** PK de varias columnas (ej. `usuario_id + producto_id`).
- **Surrogate vs Natural Key:** artificial (`SERIAL`, UUID) vs significado de negocio (ISBN, NIT).

#### Errores comunes

- PK natural inestable: email como PK y romper referencias al cambiar email.
- FK sin índice en columna referenciada: JOINs lentos en tablas grandes.
- Elegir NoSQL solo por moda cuando el dominio es altamente relacional.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Modela usuarios, pedidos y detalle_pedido indicando PK y FK entre tablas. ¿Por qué detalle_pedido suele tener clave compuesta o surrogate id?",
  "hints": ["pedido_id FK", "producto_id FK", "Un pedido tiene varios ítems"],
  "expectedKeywords": ["FK", "PK", "pedido", "detalle"],
  "successMessage": "Correcto. detalle_pedido enlaza pedidos con productos; la FK garantiza integridad referencial."
}

---

### 7) Columnares, grafos y OLTP vs OLAP

**Sección TSX:** `ColumnarGrafosSection`

#### OLTP vs OLAP

| Tipo | Patrón | Motor típico |
|------|--------|--------------|
| OLTP | Transacciones fila a fila (compras, saldos) | PostgreSQL, MySQL |
| OLAP | Agregaciones masivas (`AVG(precio)` millones de filas) | BigQuery, ClickHouse |
| Grafos | Relaciones entre entidades (recomendaciones, fraude) | Neo4j |

#### Grafo en Cypher (Neo4j)

<!-- code: sql -->
```cypher
CREATE (ana:Persona {nombre: "Ana"})
CREATE (luis:Persona {nombre: "Luis"})
CREATE (laptop:Producto {nombre: "Laptop Pro 15"})
CREATE (ana)-[:CONOCE]->(luis)
CREATE (ana)-[:COMPRO {fecha: "2025-01-15"}]->(laptop)
CREATE (luis)-[:COMPRO]->(laptop)

MATCH (ana:Persona {nombre: "Ana"})-[:CONOCE]->(amigo)-[:COMPRO]->(p)
WHERE (ana)-[:COMPRO]->(p)
RETURN amigo.nombre, p.nombre
```

#### Cuándo no usar grafos

No uses Neo4j para CRUD tabular simple que PostgreSQL resuelve mejor. Reserva grafos para consultas de rutas, recomendaciones o detección de patrones en relaciones.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un equipo quiere guardar logs de clics con campos que cambian cada semana. ¿SQL o NoSQL? ¿Qué motor del caso e-commerce políglota usarías?",
  "hints": ["Esquema variable", "MongoDB en el brief", "PostgreSQL para pedidos"],
  "expectedKeywords": ["NoSQL", "MongoDB", "logs"],
  "successMessage": "Correcto. Logs variables encajan en documentos; pedidos y stock siguen en SQL con ACID."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña el modelo de datos de una tienda online"**

Entidades: `categorias`, `productos`, `usuarios`, `pedidos`, `detalle_pedido` (cantidad, precio unitario).

1. Escribe DDL con PK, FK y al menos un `CHECK` (precio > 0).
2. Inserta datos de ejemplo con DML (mínimo 3 productos, 1 pedido con 2 ítems).
3. Consulta: total vendido por categoría (`JOIN` + `SUM`).
4. Simula compra del último ítem en stock con `BEGIN`/`COMMIT` o `ROLLBACK` si stock < 1.
5. Argumenta qué parte iría en SQL vs Redis vs MongoDB si añades carrito temporal y logs de clics.

**Criterio de éxito:** integridad referencial, transacción de stock coherente, consulta agregada correcta, justificación políglota razonada.

<!-- code: sql -->
```sql
-- Esqueleto DDL (completar en el reto)
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  creado_en TIMESTAMP DEFAULT NOW()
);

CREATE TABLE detalle_pedido (
  id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES pedidos(id),
  producto_id INTEGER REFERENCES productos(id),
  cantidad INTEGER NOT NULL CHECK (cantidad > 0),
  precio_unitario DECIMAL(12, 2) NOT NULL CHECK (precio_unitario > 0)
);
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto de la tienda: DDL con FK, INSERT de ejemplo, SUM por categoría y transacción de stock con ROLLBACK si stock < 1.",
  "hints": [
    "REFERENCES en producto_id y pedido_id",
    "BEGIN antes de UPDATE stock",
    "JOIN categorias + SUM(cantidad * precio_unitario)"
  ],
  "expectedKeywords": ["DDL", "JOIN", "COMMIT", "ROLLBACK"],
  "successMessage": "Excelente. Has diseñado un modelo relacional con integridad y transacciones coherentes."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has recorrido SQL desde la definición de tablas hasta transacciones ACID y la decisión SQL vs NoSQL.

**Ideas clave para retener:**

- **DDL** define; **DML** manipula; **DCL** permisos; **TCL** transacciones.
- **PK y FK** garantizan identidad e integridad referencial.
- **ACID** protege operaciones críticas como transferencias y compras.
- **SQL** para relaciones y transacciones; **NoSQL** para flexibilidad y escala horizontal.
- **Columnares** para OLAP; **grafos** para relaciones complejas entre entidades.
- El **frontend** consume API; nunca expone la BD directamente.

**Siguiente paso:** lección `principios-solid` — diseño de software mantenible en el backend.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿A qué familia SQL pertenece CREATE TABLE?",
      "options": [
        "DML",
        "DDL",
        "DCL",
        "TCL"
      ],
      "correctIndex": 1,
      "feedback": "DDL define y modifica la estructura del esquema."
    },
    {
      "question": "¿Qué garantiza la Atomicidad (A de ACID)?",
      "options": [
        "Que las consultas usen índices",
        "Que todas las operaciones de la transacción ocurren o ninguna",
        "Que los datos estén cifrados",
        "Que solo haya una tabla"
      ],
      "correctIndex": 1,
      "feedback": "O se confirma todo con COMMIT o se revierte con ROLLBACK."
    },
    {
      "question": "¿Qué establece una Foreign Key?",
      "options": [
        "Que la columna sea única en toda la BD",
        "Relación e integridad referencial con la PK de otra tabla",
        "Que la tabla no pueda borrarse",
        "Permiso de lectura al usuario"
      ],
      "correctIndex": 1,
      "feedback": "La FK apunta a una PK válida en la tabla relacionada."
    },
    {
      "question": "¿Cuándo suele preferirse NoSQL sobre SQL relacional?",
      "options": [
        "Facturación con transacciones estrictas",
        "Esquema muy variable y escala horizontal masiva",
        "Reportes con muchos JOINs normalizados",
        "Siempre; SQL está obsoleto"
      ],
      "correctIndex": 1,
      "feedback": "NoSQL brilla en flexibilidad y escala; SQL en relaciones y ACID."
    },
    {
      "question": "¿Qué tipo de base es más adecuada para AVG(precio) sobre millones de filas analíticas?",
      "options": [
        "Row-based OLTP (PostgreSQL transaccional)",
        "Columnar OLAP (BigQuery, ClickHouse)",
        "Solo archivos JSON en disco",
        "Base de grafos Neo4j"
      ],
      "correctIndex": 1,
      "feedback": "Las columnares leen solo las columnas necesarias; ideales para agregaciones masivas."
    }
  ]
}
