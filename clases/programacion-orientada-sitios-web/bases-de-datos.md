# Instrucciones para frontend-developer: bases-de-datos.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/bases-de-datos.html`

---

1. Crear `clases/programacion-orientada-sitios-web/bases-de-datos.html`. `<html lang="es">`. Título: "Bases de Datos | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "SQL Básico", "DDL/DML/DCL/TCL", "SQL vs NoSQL", "Keys", "Columnar", "Grafos".
4. Hero: badge "Tema 19", `<h1>` "Bases de Datos", subtítulo "SQL, NoSQL, claves, bases columnares, de grafos y los comandos que las gobiernan." Botón scroll a `#sql`.
5. Crear `<section id="sql">` padding 80px 0. Contiene:
   - `<h2>` "SQL — Structured Query Language".
   - Párrafo: "SQL es el lenguaje estándar para gestionar bases de datos relacionales. Se divide en cuatro sub-lenguajes según el tipo de operación que realizan."
   - Cuatro tarjetas de colores distintos para las familias de comandos:
     - DDL (Data Definition Language) — color `--accent`: "Define y modifica la estructura de la base de datos." Comandos: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.
     - DML (Data Manipulation Language) — color `#2ed573`: "Manipula los datos almacenados." Comandos: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
     - DCL (Data Control Language) — color `#ffa502`: "Controla los permisos de acceso." Comandos: `GRANT`, `REVOKE`.
     - TCL (Transaction Control Language) — color `--accent2`: "Gestiona transacciones." Comandos: `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`.
6. Crear `<section id="ddl">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "DDL — Data Definition Language".
   - Ejemplos con highlight.js (lenguaje SQL):
     ```sql
     -- Crear tabla
     CREATE TABLE productos (
       id          SERIAL PRIMARY KEY,
       nombre      VARCHAR(200) NOT NULL,
       precio      DECIMAL(12, 2) NOT NULL CHECK (precio > 0),
       stock       INTEGER DEFAULT 0,
       categoria_id INTEGER REFERENCES categorias(id),
       creado_en   TIMESTAMP DEFAULT NOW()
     );

     -- Agregar columna
     ALTER TABLE productos ADD COLUMN descripcion TEXT;

     -- Modificar columna
     ALTER TABLE productos ALTER COLUMN nombre TYPE VARCHAR(300);

     -- Eliminar columna
     ALTER TABLE productos DROP COLUMN descripcion;

     -- Eliminar tabla (con todos sus datos)
     DROP TABLE IF EXISTS productos;

     -- Vaciar tabla sin eliminarla (más rápido que DELETE sin WHERE)
     TRUNCATE TABLE productos RESTART IDENTITY;
     ```
7. Crear `<section id="dml">` padding 80px 0. Contiene:
   - `<h2>` "DML — Data Manipulation Language".
   - Ejemplos SQL completos:
     ```sql
     -- INSERT
     INSERT INTO productos (nombre, precio, stock, categoria_id)
     VALUES ('Laptop Pro 15', 4500000.00, 10, 1);

     -- INSERT múltiple
     INSERT INTO productos (nombre, precio, stock) VALUES
       ('Mouse inalámbrico', 85000.00, 50),
       ('Teclado mecánico', 320000.00, 25);

     -- SELECT con filtros, orden y límite
     SELECT p.id, p.nombre, p.precio, c.nombre AS categoria
     FROM productos p
     INNER JOIN categorias c ON p.categoria_id = c.id
     WHERE p.precio BETWEEN 100000 AND 1000000
       AND p.stock > 0
     ORDER BY p.precio ASC
     LIMIT 10 OFFSET 0;

     -- UPDATE
     UPDATE productos
     SET precio = precio * 0.9, -- 10% de descuento
         stock = stock - 1
     WHERE id = 42;

     -- DELETE
     DELETE FROM productos WHERE stock = 0;

     -- Funciones de agregación
     SELECT
       c.nombre AS categoria,
       COUNT(p.id) AS total_productos,
       AVG(p.precio) AS precio_promedio,
       MAX(p.precio) AS mas_caro,
       MIN(p.precio) AS mas_barato
     FROM productos p
     JOIN categorias c ON p.categoria_id = c.id
     GROUP BY c.nombre
     HAVING COUNT(p.id) > 5
     ORDER BY precio_promedio DESC;
     ```
8. Crear `<section id="dcl-tcl">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "DCL y TCL".
   - DCL:
     ```sql
     -- Dar permisos de SELECT al usuario de la app
     GRANT SELECT, INSERT, UPDATE ON productos TO usuario_app;

     -- Revocar permiso de DELETE
     REVOKE DELETE ON productos FROM usuario_app;
     ```
   - TCL:
     ```sql
     -- Transacción: transferencia de saldo (debe ser atómica)
     BEGIN;

     UPDATE cuentas SET saldo = saldo - 500000 WHERE id = 1;
     UPDATE cuentas SET saldo = saldo + 500000 WHERE id = 2;

     -- Si todo está bien:
     COMMIT;

     -- Si algo falló (en el bloque de manejo de errores):
     ROLLBACK;
     ```
   - Propiedades ACID en tabla: Propiedad | Significado | Ejemplo. Datos:
     - Atomicidad | Todas las operaciones de una transacción ocurren o ninguna | La transferencia descuenta Y acredita, o no hace nada
     - Consistencia | La DB pasa de un estado válido a otro válido | No puede quedar saldo negativo si hay CHECK CONSTRAINT
     - Aislamiento | Las transacciones concurrentes no se interfieren | Dos usuarios comprando el último stock no lo oversell
     - Durabilidad | Un COMMIT es permanente, incluso ante fallos | Un corte de luz no revierte el COMMIT
9. Crear `<section id="sqlvsnosql">` padding 80px 0. Contiene:
   - `<h2>` "SQL vs NoSQL".
   - Tabla comparativa: Criterio | SQL (Relacional) | NoSQL (No relacional). Datos:
     - Estructura | Tablas con filas y columnas | Documentos, pares clave-valor, grafos, columnar
     - Esquema | Rígido (definido antes) | Flexible (puede variar por documento)
     - Escalabilidad | Vertical (más CPU/RAM) | Horizontal (más nodos)
     - Relaciones | JOINs entre tablas | Embedding o referencias manuales
     - ACID | Garantizado nativamente | Varía por motor (eventual consistency)
     - Consultas | SQL estándar | APIs propias o variantes de SQL
     - Ejemplos | PostgreSQL, MySQL, SQLite, SQL Server | MongoDB, Redis, Cassandra, Neo4j
     - Ideal para | Datos estructurados, transacciones | Datos variables, alta escala, tiempo real
   - Regla de selección: "¿Tienes relaciones complejas y necesitas consistencia fuerte? → SQL. ¿Datos variables por documento, escala masiva o tiempo real? → NoSQL. En proyectos reales, se usan ambos: PostgreSQL para datos transaccionales + Redis para caché + MongoDB para logs."
10. Crear `<section id="keys">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "Tipos de Claves en Bases de Datos".
    - Tabla: Tipo | Definición | Ejemplo. Datos:
      - Primary Key (PK) | Identifica de forma única cada fila de una tabla. No puede ser NULL ni duplicada | `id SERIAL PRIMARY KEY`
      - Foreign Key (FK) | Referencia la PK de otra tabla. Establece la relación. Garantiza integridad referencial | `categoria_id REFERENCES categorias(id)`
      - Unique Key | Los valores en la columna no se pueden repetir (pero puede ser NULL) | `email VARCHAR UNIQUE`
      - Candidate Key | Columna o combinación de columnas que podría ser PK | email, dni, username
      - Composite Key | PK formada por dos o más columnas | `PRIMARY KEY (usuario_id, producto_id)`
      - Surrogate Key | Clave artificial generada (UUID, SERIAL). No tiene significado de negocio | `id UUID DEFAULT gen_random_uuid()`
      - Natural Key | Clave con significado de negocio real | NIT de una empresa, ISBN de un libro
11. Crear `<section id="columnar">` padding 80px 0. Contiene:
    - `<h2>` "Bases de Datos Columnares".
    - Párrafo: "Las bases relacionales tradicionales almacenan los datos fila por fila. Las bases columnares los almacenan columna por columna. Esto las hace extremadamente eficientes para consultas analíticas que agregan grandes volúmenes de datos en pocas columnas."
    - Diagrama comparativo:
      ```
      ROW-BASED (PostgreSQL):         COLUMN-BASED (BigQuery):
      ┌────┬──────────┬───────┐       Col id:    [1, 2, 3, 4, ...]
      │ id │ nombre   │precio │       Col nombre: ["Laptop", "Mouse", ...]
      ├────┼──────────┼───────┤       Col precio: [4500000, 85000, ...]
      │  1 │ Laptop   │4500000│
      │  2 │ Mouse    │  85000│       ✅ SELECT AVG(precio) → leer solo col precio
      │  3 │ Teclado  │ 320000│       ❌ No eficiente para cargar filas completas
      └────┴──────────┴───────┘
      ✅ Ideal para OLTP (transacciones)  ✅ Ideal para OLAP (analítica)
      ```
    - Ejemplos de bases columnares: Apache Cassandra (distribuida), Google BigQuery (cloud), Amazon Redshift, ClickHouse (open-source, extremadamente rápida).
12. Crear `<section id="grafos">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "Bases de Datos de Grafos".
    - Párrafo: "Las bases de grafos modelan datos como nodos (entidades) y aristas (relaciones). Son ideales cuando las relaciones entre los datos son tan importantes como los datos mismos."
    - Casos de uso: redes sociales (amigos de amigos), sistemas de recomendación, detección de fraude (redes de transacciones), mapas y rutas, knowledge graphs.
    - Ejemplo en Cypher (Neo4j):
      ```cypher
      // Crear nodos
      CREATE (ana:Persona {nombre: "Ana", edad: 28})
      CREATE (luis:Persona {nombre: "Luis", edad: 32})
      CREATE (laptop:Producto {nombre: "Laptop Pro 15"})

      // Crear relaciones
      CREATE (ana)-[:CONOCE {desde: 2020}]->(luis)
      CREATE (ana)-[:COMPRO {fecha: "2025-01-15"}]->(laptop)

      // Consultar: amigos de amigos de Ana que compraron el mismo producto
      MATCH (ana:Persona {nombre: "Ana"})-[:CONOCE*2]->(conocido)
      MATCH (conocido)-[:COMPRO]->(p:Producto)
      WHERE (ana)-[:COMPRO]->(p)
      RETURN conocido.nombre, p.nombre
      ```
    - Motor más popular: Neo4j. Alternativas: Amazon Neptune, ArangoDB.
13. Sección recursos: `backend.html`, `cache.html`, `herramientas-desarrollo.html`.
14. Footer estándar. Highlight.js. Animaciones. Responsivo.
