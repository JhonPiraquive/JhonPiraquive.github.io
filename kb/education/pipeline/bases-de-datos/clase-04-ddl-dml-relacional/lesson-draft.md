---
track: bases-de-datos
slug: clase-04-ddl-dml-relacional
title: "DDL, DML y consultas SQL"
order: 5
prerequisites:
  - clase-03-modelos-datos-er
audience: student
modo: procedimiento
pagination: true
pages:
  - hub
  - ddl-estructura
  - ddl-restricciones
  - dml-insert-select
  - dml-filtros-orden
  - agregados-group-having
  - update-delete
  - joins
  - practica-y-cierre
---

## Objetivos de aprendizaje

Al finalizar esta lección podrás:

1. **Aplicar** **DDL** (`CREATE`/`DROP`/`ALTER`, AUTO INCREMENT, PK/UNIQUE/NOT NULL) sobre un esquema de baja complejidad ya diseñado.
2. **Manipular** datos con **DML** (`INSERT`, `SELECT` + filtros/orden, agregados, `UPDATE`, `DELETE`).
3. **Escribir** `INNER JOIN`, `LEFT JOIN` y `RIGHT JOIN` asumiendo el ER y las PK/FK de **clase-03-modelos-datos-er**.
4. **Aplicar** un callout de seguridad: `UPDATE`/`DELETE` siempre con `WHERE`; `DROP` solo con backup.

## Prerrequisitos

- `clase-03-modelos-datos-er` (ER, PK/FK, padres primero). Los JOINs operan sobre ese diseño; no re-enseñamos el modelado completo.

**Siguiente clase:** `clase-05-normalizacion-esquemas`.

---

## Contenido

> **Modo procedimiento:** pasos y práctica con sentencias. Malas prácticas **solo** en el callout WHERE/DROP (no H3 en cada página). JOINs tras ER (clase 03).

### Página hub — Objetivos e índice

Resumen + mapa DDL vs DML + índice de páginas.

| Familia | Qué toca | Ejemplos |
|---------|----------|----------|
| **DDL** | Estructura (esquema) | `CREATE`/`ALTER`/`DROP` TABLE |
| **DML** | Datos (filas) | `INSERT`/`SELECT`/`UPDATE`/`DELETE` |

Progresión: crear esquema → restricciones → cargar/consultar → relacionar con JOIN.

<!-- interactive: MermaidDiagram -->
{
  "title": "Ruta de la clase SQL",
  "description": "Flujo desde CREATE DATABASE hasta UPDATE/DELETE seguros pasando por JOIN",
  "chart": "flowchart TD\n  A[CREATE DATABASE] --> B[CREATE TABLE padres]\n  B --> C[CREATE TABLE hijas + FK]\n  C --> D[INSERT]\n  D --> E[SELECT WHERE ORDER LIMIT]\n  E --> F[Agregados GROUP HAVING]\n  F --> G[JOIN]\n  G --> H[UPDATE DELETE con WHERE]"
}

<!-- interactive: Callout -->
{
  "variant": "callout-warning",
  "title": "Operaciones que rompen datos",
  "body": "Incluye siempre WHERE en UPDATE y DELETE. Sin WHERE se afectan todas las filas. Haz backup (dump/snapshot) antes de DROP DATABASE/DROP TABLE o cambios masivos. Verifica host/BD (SELECT DATABASE();) antes de cualquier DDL destructivo."
}

---

### Página 1 — `ddl-estructura`

#### CREATE / DROP DATABASE y TABLE

**CREATE DATABASE** — contenedor lógico. **DROP DATABASE** es irreversible sin backup.

**CREATE TABLE** — columnas tipadas; nombres sin espacios (`Nombre_Programa`).

**DROP TABLE** — elimina estructura y datos de esa tabla (≠ `DELETE` de filas).

**ALTER TABLE** — agregar/modificar/eliminar columnas; backfill antes de `NOT NULL` sobre datos existentes.

**AUTO INCREMENT** — genera número único al insertar; suele ir en la PK subrogada `id`.

<!-- code: sql -->
```sql
CREATE DATABASE academia_rutas;
USE academia_rutas;

CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede VARCHAR(80) NOT NULL,
  cupos INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa)
);
```

---

### Página 2 — `ddl-restricciones`

#### PRIMARY KEY, UNIQUE, NOT NULL

| Restricción | Rol |
|-------------|-----|
| **PRIMARY KEY** | Identifica de forma única cada fila |
| **UNIQUE** | Valores distintos en la columna (negocio) |
| **NOT NULL** | No admite ausencia; `NULL` ≠ `0` ≠ `''` |

Comparar con `NULL` → `IS NULL` / `IS NOT NULL`.

Padres primero al crear FK; mismo tipo PK/FK (diseño ya visto en clase 03).

<!-- code: sql -->
```sql
CREATE TABLE Inscripciones (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  programa_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_insc_programa
    FOREIGN KEY (programa_id) REFERENCES Programas(id)
);
```

---

### Página 3 — `dml-insert-select`

#### INSERT y SELECT

**Reglas de escritura:** campos sin espacios; textos entre comillas simples; valores pueden tener tildes/espacios.

**INSERT** — listar columnas explícitamente.

**SELECT** — proyectar lo necesario; base de filtros, agregados y JOINs.

<!-- code: sql -->
```sql
INSERT INTO Programas (Nombre_Programa, sede, cupos) VALUES
  ('Técnica Profesional en Configuración de Servicios Web', 'Cali', 30),
  ('Técnica en Sistemas', 'Cali', 25);

INSERT INTO Inscripciones (Nombre_Estudiante, programa_id) VALUES
  ('Ana Ruiz', 1),
  ('Luis Pérez', 1);

SELECT id, Nombre_Programa, cupos FROM Programas;
```

---

### Página 4 — `dml-filtros-orden`

#### WHERE, DISTINCT, ORDER BY, LIMIT

| Cláusula | Pregunta que responde |
|----------|----------------------|
| **WHERE** | Filas que cumplen condición (también seguridad de UPDATE/DELETE) |
| **DISTINCT** | Valores únicos en el resultado |
| **ORDER BY** | Orden de entrega (sin él el orden no está garantizado) |
| **LIMIT** | Cuántas filas devolver (mejor con ORDER BY) |

<!-- code: sql -->
```sql
SELECT Nombre_Programa, cupos
FROM Programas
WHERE sede = 'Cali'
ORDER BY cupos DESC
LIMIT 2;

SELECT DISTINCT sede FROM Programas;
```

---

### Página 5 — `agregados-group-having`

#### AVG, SUM, COUNT, MAX, MIN + GROUP BY + HAVING

<!-- code: sql -->
```sql
SELECT AVG(cupos), SUM(cupos), COUNT(*), MAX(cupos), MIN(cupos)
FROM Programas
WHERE sede = 'Cali';

SELECT sede, COUNT(*) AS programas, AVG(cupos) AS promedio
FROM Programas
GROUP BY sede
HAVING COUNT(*) >= 1;
```

**GROUP BY** — agregar por grupos. **HAVING** — filtrar **después** de agrupar; WHERE filtra filas antes.

<!-- interactive: CompareTable -->
{
  "headers": ["Cláusula", "Cuándo", "Ejemplo"],
  "rows": [
    ["WHERE", "Filtra filas antes de agrupar", "WHERE sede = 'Cali'"],
    ["HAVING", "Filtra grupos tras GROUP BY", "HAVING COUNT(*) >= 2"]
  ]
}

---

### Página 6 — `update-delete`

#### UPDATE y DELETE (con WHERE)

<!-- code: sql -->
```sql
UPDATE Programas SET cupos = 35 WHERE id = 1;
DELETE FROM Programas WHERE id = 3;
-- Peligroso: sin WHERE → todas las filas
```

Practicar: `SELECT` con el mismo WHERE → contar filas → luego UPDATE/DELETE.

**Caso — Rutas Digitales.** `DELETE FROM Inscripciones;` sin WHERE en BD con matrículas reales. Restaurar dump; checklist SELECT-count; usuario sin DELETE masivo.

---

### Página 7 — `joins`

#### INNER, LEFT, RIGHT (ER ya visto)

En clase 03 diseñaste Programas 1:N Inscripciones y PK/FK. Aquí solo operas:

| JOIN | Idea |
|------|------|
| **INNER** | Solo coincidencias |
| **LEFT** | Toda la izquierda + matches; NULL a la derecha si no hay |
| **RIGHT** | Toda la derecha + matches; NULL a la izquierda si no hay |

<!-- code: sql -->
```sql
SELECT p.Nombre_Programa, i.Nombre_Estudiante
FROM Programas p
INNER JOIN Inscripciones i ON i.programa_id = p.id;

SELECT p.Nombre_Programa, i.Nombre_Estudiante
FROM Programas p
LEFT JOIN Inscripciones i ON i.programa_id = p.id;
```

**Caso — Ferretería “El Tornillo”.** Reportan “todos los productos se venden” con INNER JOIN. Corrección: LEFT + `WHERE v.id IS NULL` para productos sin ventas.

Recordatorio breve: padres primero al crear FK; mismo tipo PK/FK.

---

### Página 8 — `practica-y-cierre`

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "id": "practica-ddl-programas",
  "prompt": "Escribe CREATE DATABASE + CREATE TABLE Programas con PK, AUTO INCREMENT y UNIQUE; luego un INSERT del nombre largo con tildes.",
  "hints": ["USE tras CREATE DATABASE", "Literales con comillas simples"],
  "expectedKeywords": ["CREATE DATABASE", "AUTO_INCREMENT", "UNIQUE", "INSERT", "'"],
  "successMessage": "Esquema creado y fila insertada con literal correcto."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-select-filtros",
  "prompt": "Escribe un SELECT con WHERE, ORDER BY y LIMIT sobre Programas.",
  "hints": ["ORDER BY antes de LIMIT"],
  "expectedKeywords": ["SELECT", "WHERE", "ORDER BY", "LIMIT"],
  "successMessage": "Consulta filtrada, ordenada y limitada."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-agregados",
  "prompt": "Agrega por sede (GROUP BY) y filtra grupos con HAVING COUNT(*) >= 1.",
  "hints": ["HAVING usa agregados", "WHERE sería antes del GROUP BY"],
  "expectedKeywords": ["GROUP BY", "HAVING", "COUNT"],
  "successMessage": "Agregación por sede con filtro de grupos."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-delete-sin-where",
  "prompt": "¿Qué pasa con DELETE FROM Programas sin WHERE si hay FK desde Inscripciones? 3–5 líneas.",
  "hints": ["Todas las filas", "Restricción de FK puede bloquear"],
  "expectedKeywords": ["WHERE", "todas", "FK", "backup"],
  "successMessage": "Sin WHERE intenta borrar todas las filas; con FK puede fallar o cascada según definición — siempre WHERE + backup."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-inner-vs-left",
  "prompt": "Escribe INNER y LEFT JOIN Programas–Inscripciones y di cuál detecta programas sin inscritos.",
  "hints": ["LEFT mantiene la izquierda", "Busca NULL en el lado derecho"],
  "expectedKeywords": ["INNER JOIN", "LEFT JOIN", "NULL"],
  "successMessage": "LEFT JOIN + filtro WHERE i.id IS NULL muestra programas sin inscritos."
}

---

## Reto integrador

**“Matrículas de Rutas Digitales”**

1. DDL: BD + Programas/Inscripciones (PK, AUTO INCREMENT, UNIQUE, FK; padres primero).
2. DML: ≥3 programas (uno con el nombre largo exacto) + ≥5 inscripciones.
3. Consultas: WHERE, DISTINCT sedes, top 2 por cupos.
4. Agregados + GROUP BY + HAVING.
5. INNER y LEFT (detectar programas sin inscritos).
6. Un UPDATE y un DELETE **seguros** + 3–4 líneas sobre qué pasaría sin WHERE y por qué backup.

<!-- interactive: ChallengeCard -->
{
  "title": "Matrículas de Rutas Digitales",
  "difficulty": "intermedio",
  "prompt": "Script integral DDL+DML+JOIN+UPDATE/DELETE seguros sobre el esquema de matrículas.",
  "acceptanceCriteria": [
    "Padres antes que hijas con FK",
    "Consultas con WHERE/ORDER/LIMIT y agregados",
    "INNER y LEFT documentados",
    "UPDATE/DELETE con WHERE + reflexión sobre backup"
  ],
  "hints": ["Reusa el ER de clase 03", "SELECT-count antes de borrar"]
}

---

## Cierre

- DDL = estructura; DML = filas.
- WHERE es filtro **y** cinturón de seguridad.
- JOINs asumen el ER de clase 03.
- **Siguiente:** `clase-05-normalizacion-esquemas` — limpiar el esquema (1FN→3FN).

<!-- interactive: Quiz -->
{
  "slug": "clase-04-ddl-dml-relacional",
  "questions": [
    {
      "prompt": "DDL vs DML:",
      "options": [
        "DDL manipula filas; DML crea tablas",
        "DDL = estructura; DML = datos (filas)",
        "Ambos solo sirven para JOIN",
        "DDL es NoSQL"
      ],
      "correctIndex": 1,
      "feedback": "CREATE/ALTER/DROP vs INSERT/SELECT/UPDATE/DELETE."
    },
    {
      "prompt": "DELETE FROM Programas sin WHERE:",
      "options": [
        "Solo borra la primera fila",
        "No hace nada sin LIMIT",
        "Elimina TODOS los registros; riesgo de pérdida — WHERE + backup",
        "Borra la base de datos"
      ],
      "correctIndex": 2,
      "feedback": "Sin WHERE aplica a todas las filas."
    },
    {
      "prompt": "Al crear tablas con FK:",
      "options": [
        "Primero hijas, luego padres",
        "Primero padres; FK y PK del mismo tipo",
        "FK de distinto tipo por seguridad",
        "No se pueden nombrar CONSTRAINT"
      ],
      "correctIndex": 1,
      "feedback": "Orden y tipos alineados (diseño clase 03 → DDL aquí)."
    },
    {
      "prompt": "LEFT JOIN:",
      "options": [
        "Solo filas sin coincidencia",
        "Todos los de la izquierda + coincidentes de la derecha; NULL a la derecha si no hay match",
        "Solo intersección, nunca NULL",
        "Producto cartesiano"
      ],
      "correctIndex": 1,
      "feedback": "Con o sin hijos."
    },
    {
      "prompt": "HAVING vs WHERE:",
      "options": [
        "HAVING crea tablas",
        "HAVING filtra filas antes de leer",
        "HAVING filtra grupos tras GROUP BY",
        "HAVING elimina la BD"
      ],
      "correctIndex": 2,
      "feedback": "WHERE = filas; HAVING = grupos."
    }
  ]
}
