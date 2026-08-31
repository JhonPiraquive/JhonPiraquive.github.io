---
track: bases-de-datos
slug: clase-03-modelos-datos-er
title: "Modelos de datos y diagramas ER"
order: 4
prerequisites:
  - clase-02-fundamentos-motores-estructura
audience: student
modo: diseño
pagination: true
pages:
  - hub
  - modelos-conceptual-logico-fisico
  - diagramas-er
  - familias-contexto-diseno
  - transformacion-tipos-llaves
  - practica-y-cierre
---

## Objetivos de aprendizaje

Al finalizar esta lección podrás:

1. **Explicar** qué es un **modelo de datos** y por qué se diseña **antes** de improvisar `CREATE TABLE`.
2. **Diferenciar** modelo **conceptual**, **lógico** y **físico**.
3. **Crear e interpretar** un diagrama **ER** con entidades, atributos, relaciones y cardinalidad (1:1, 1:N, N:M), incluyendo Mermaid `erDiagram`.
4. **Transformar** un ER a tablas SQL eligiendo tipos, **PK** y **FK** (padres primero, mismos tipos, N:M → tabla puente).
5. **Ubicar** familias relacional / NoSQL / grafos como **contexto de elección de diseño** (sin recontar toda la historia de la clase 01).

## Prerrequisitos

- `clase-02-fundamentos-motores-estructura` (BD/SGBD, tablas/campos, motor vs GUI).

**Siguiente clase:** `clase-04-ddl-dml-relacional` (implementar el diseño con SQL).

---

## Contenido

> **Modo diseño:** conceptual → lógico → físico → ER → transformación. Familias solo como contexto. Sin malas prácticas por sección; errores frecuentes al cierre.

### Página hub — Objetivos e índice

Resumen de objetivos + navegación a las páginas internas.

---

### Página 1 — `modelos-conceptual-logico-fisico`

#### Diseñar antes de crear

Imagina que “Rutas Digitales” (Cali) pide “crear ya las tablas”. Primero se diseña: qué existe, cómo se relaciona, qué identifica cada hecho. El SQL de la **siguiente clase** implementará ese diseño; aquí **dibujas y traduces**.

#### Modelo de datos

Representación estructurada del negocio: **entidades**, **atributos**, **relaciones**, con reglas de identificación. No es el motor ni el Excel: es el **plano**.

**Pasos:** requisitos → entidades → atributos → relaciones/cardinalidad → refinar con el cliente → bajar a lógico/físico.

#### Conceptual → lógico → físico

| Nivel | Qué representa | Quién lo usa | Ejemplo |
|-------|----------------|--------------|---------|
| **Conceptual** | Qué existe (entidades y relaciones), lenguaje de negocio | Analista + cliente | “Estudiante se inscribe en Programa” |
| **Lógico** | Atributos, claves, cardinalidad, sin motor concreto | Diseñador | Tablas lógicas + PK/FK |
| **Físico** | Tipos SQL, índices, motor, DDL | DBA / desarrollador | `VARCHAR(200)`, `INT AUTO_INCREMENT` |

El conceptual **no** menciona `INT AUTO_INCREMENT`. El físico es lo que el SGBD realmente crea.

<!-- interactive: MermaidDiagram -->
{
  "title": "Flujo de diseño",
  "description": "De requisitos a datos de prueba pasando por conceptual, lógico y físico",
  "chart": "flowchart TD\n  R[Requisitos] --> C[Conceptual]\n  C --> L[Lógico]\n  L --> F[Físico / DDL]\n  F --> T[Datos de prueba + chequeo FK]"
}

<!-- interactive: StepReveal -->
{
  "title": "Niveles del mismo dominio",
  "steps": [
    { "title": "Conceptual", "content": "Estudiante se inscribe en Programa — lenguaje de negocio, sin tipos SQL." },
    { "title": "Lógico", "content": "Entidades con atributos, PK/FK y cardinalidad; aún sin motor concreto." },
    { "title": "Físico", "content": "VARCHAR, INT AUTO_INCREMENT, índices y DDL del motor elegido." }
  ]
}

---

### Página 2 — `diagramas-er`

#### Diagrama ER

Dibujo (o descripción formal) de entidades, atributos y relaciones con **cardinalidad**.

| Pieza | Idea |
|-------|------|
| Entidad | Cosa del negocio |
| Atributo | Dato que la describe |
| Relación | Vínculo semántico |
| 1:1 / 1:N / N:M | Cuántas instancias de cada lado |

**Cómo se crea:** listar entidades → atributos → verbos de relación → cardinalidad → revisar N:M → dibujar (Mermaid / pizarra) → contrastar con requisitos.

<!-- interactive: MermaidDiagram -->
{
  "title": "ER — Programas, Estudiantes, Inscripciones",
  "description": "Diagrama entidad-relación con cardinalidades y PK/FK",
  "chart": "erDiagram\n  PROGRAMAS ||--o{ INSCRIPCIONES : tiene\n  ESTUDIANTES ||--o{ INSCRIPCIONES : realiza\n  PROGRAMAS {\n    int id PK\n    varchar Nombre_Programa UK\n    varchar sede\n    int cupos\n  }\n  ESTUDIANTES {\n    int id PK\n    varchar Nombre_Estudiante\n    varchar documento UK\n  }\n  INSCRIPCIONES {\n    int id PK\n    int estudiante_id FK\n    int programa_id FK\n    date fecha\n  }"
}

**Caso — Rutas Digitales.** Una tabla `Todo` con `estudiante1`, `estudiante2`… Redibujar el ER (`Programas`, `Estudiantes`, `Inscripciones`) y migrar con PK/FK.

---

### Página 3 — `familias-contexto-diseno`

#### Familias como contexto de diseño (breve)

No repetimos la historia completa de la clase 01. Al elegir **cómo modelar**:

| Familia | Organización | Cuándo encaja el diseño |
|---------|--------------|-------------------------|
| Relacional | Tablas + PK/FK + SQL | Matrículas, facturas, inventario |
| Documentos / NoSQL | JSON flexible | Catálogo con atributos variables |
| Grafos | Nodos + aristas first-class | “Quién estudió con quién”, recomendaciones |

El **núcleo** del módulo y de Rutas Digitales es relacional; otras familias son complemento según la forma de la pregunta.

<!-- interactive: CompareTable -->
{
  "headers": ["Familia", "Organización", "Cuándo encaja"],
  "rows": [
    ["Relacional", "Tablas + PK/FK + SQL", "Matrículas, facturas, inventario"],
    ["Documentos", "JSON flexible", "Catálogo con atributos variables"],
    ["Grafos", "Nodos + aristas", "Caminos / recomendaciones"]
  ]
}

**Caso — Andes Tech (recomendaciones).** Quieren caminos de co-inscripción y también facturación. Relacional para matrículas/pagos; grafo (o capa) para recomendaciones — la familia sigue a la pregunta.

> Estrella/copo (hechos + dimensiones): solo reconocimiento visual aquí; detalle en **clase 05**.

---

### Página 4 — `transformacion-tipos-llaves`

#### Transformación ER → tablas SQL

1. Cada entidad fuerte → una tabla; atributos → columnas.
2. Elegir **PK** (subrogada `id` recomendada; UNIQUE de negocio aparte).
3. **1:N** → FK en el lado **N**.
4. **1:1** → FK en el lado dependiente (documentar).
5. **N:M** → **tabla puente** con al menos dos FKs (+ atributos de la relación).
6. Opcionales → `NULL` / `NOT NULL`.
7. `CREATE` **padres primero**, luego hijos/puentes.
8. Probar inserts válidos e inválidos (FK rota).

#### Tipos de datos (criterio)

| Familia | Tipos | Uso |
|---------|-------|-----|
| Enteros | `INT`, `BIGINT`… | IDs, cupos |
| Decimales | `DECIMAL` | Dinero |
| Texto | `VARCHAR`, `TEXT` | Nombres |
| Fecha/hora | `DATE`, `DATETIME`… | Inscripciones |
| Booleano | según motor | Flags |

No todo es `VARCHAR`: fechas como `DATE`, dinero como `DECIMAL`.

#### PK y FK

- **PK:** identifica de forma única cada fila; estable (no el nombre del programa).
- **FK:** valor que debe existir en la PK/UNIQUE del padre; **mismo tipo**; integridad referencial en el motor.

<!-- code: sql -->
```sql
CREATE TABLE Estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  documento VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (documento)
);

CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede VARCHAR(80) NOT NULL,
  cupos INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa)
);

CREATE TABLE Inscripciones (
  id INT NOT NULL AUTO_INCREMENT,
  estudiante_id INT NOT NULL,
  programa_id INT NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (estudiante_id, programa_id),
  CONSTRAINT fk_insc_est FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(id),
  CONSTRAINT fk_insc_prog FOREIGN KEY (programa_id) REFERENCES Programas(id)
);
```

---

### Página 5 — `practica-y-cierre`

#### Errores frecuentes (cierre global)

1. Empezar por `CREATE TABLE` sin modelo ni ER.
2. Mezclar niveles (tipos SQL en el conceptual).
3. Cardinalidad incorrecta; N:M sin tabla puente; FK en el lado 1 de una 1:N.
4. Todo `VARCHAR`; PK inestable; FK y PK de tipos distintos; hijas antes que padres.
5. Elegir familia por moda sin mirar la forma de la pregunta.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "id": "practica-ganar-diseno",
  "prompt": "¿Qué gana Rutas Digitales al pasar por conceptual → lógico → físico antes del SQL? 4–6 líneas.",
  "hints": ["Alineación con el negocio", "Menos retrabajo de DDL"],
  "expectedKeywords": ["requisitos", "conceptual", "lógico", "físico", "retrabajo"],
  "successMessage": "El plano compartido reduce tablas mal pensadas y DDL que hay que tirar."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-er-matriculas",
  "prompt": "Describe o dibuja un ER Programa–Estudiante–Inscripción con cardinalidades (usa 1:N / N:M según corresponda).",
  "hints": ["Inscripción es el vínculo", "Un estudiante en muchos programas"],
  "expectedKeywords": ["1:N", "N:M", "Inscripciones", "Programas", "Estudiantes"],
  "successMessage": "N:M se resuelve con Inscripciones (puente) y FKs a ambas entidades."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-orden-diseno",
  "prompt": "Ordena: (a) CREATE hijas, (b) requisitos, (c) ER, (d) CREATE padres, (e) tipos físicos, (f) INSERT prueba.",
  "hints": ["Primero entender, luego dibujar, luego DDL", "Padres antes que hijas"],
  "expectedKeywords": ["requisitos", "ER", "físicos", "padres", "hijas", "INSERT"],
  "successMessage": "b → c → e → d → a → f."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-puente-nm",
  "prompt": "Programa–Instructor es N:M. Escribe el esqueleto DDL con tabla puente y dos FKs (padres primero).",
  "hints": ["Tablas Programas e Instructores primero", "Puente con programa_id e instructor_id"],
  "expectedKeywords": ["CREATE TABLE", "FOREIGN KEY", "puente", "instructor"],
  "successMessage": "Padres + tabla puente con FKs a ambos lados."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-elegir-familia",
  "prompt": "Elige familia (relacional / documentos / grafo) para: facturas; caché de sesión; “quién estudió con quién”. Una frase por escenario.",
  "hints": ["Integridad → relacional", "Clave simple → KV", "Caminos → grafo"],
  "expectedKeywords": ["relacional", "clave-valor", "grafo", "documentos"],
  "successMessage": "Facturas: relacional. Sesión: clave-valor. Co-estudio: grafo (o capa)."
}

---

## Reto integrador

1. Conceptual (6–8 líneas) del dominio matrículas.
2. `erDiagram` con ≥3 entidades y cardinalidades correctas.
3. Justificar núcleo relacional + un complemento (grafo/documentos) si aplica.
4. DDL padres primero con tipos, PK, UNIQUE, FK.
5. 2–3 INSERT válidos + 1 inválido (FK) documentado.
6. Argumentar en lenguaje técnico comprensible para un coordinador.

<!-- interactive: ChallengeCard -->
{
  "title": "Diseño de matrículas — Rutas Digitales",
  "difficulty": "intermedio",
  "prompt": "Entrega conceptual, ER, justificación de familia, DDL y pruebas de FK para el dominio de matrículas.",
  "acceptanceCriteria": [
    "Niveles conceptual/lógico/físico distinguibles",
    "ER con cardinalidades correctas",
    "DDL padres primero con PK/FK",
    "Al menos un INSERT inválido documentado"
  ],
  "hints": ["Inscripciones como puente", "documento UNIQUE de negocio"]
}

---

## Cierre

- Diseñar antes de crear: requisitos → ER → físico → DDL.
- Cardinalidad correcta y N:M con tabla puente.
- Familias = contexto de la pregunta, no moda.
- **Siguiente:** `clase-04-ddl-dml-relacional` — sentencias SQL sobre el esquema ya modelado (incluye JOINs).

<!-- interactive: Quiz -->
{
  "slug": "clase-03-modelos-datos-er",
  "questions": [
    {
      "prompt": "Conceptual vs físico:",
      "options": [
        "Conceptual ya define VARCHAR; físico solo dibuja",
        "Conceptual = qué existe en el negocio; físico = tipos SQL, motor, índices",
        "Son sinónimos de NoSQL",
        "El físico no usa PK"
      ],
      "correctIndex": 1,
      "feedback": "El lógico está en medio (atributos/claves sin motor)."
    },
    {
      "prompt": "En 1:N, ¿dónde va la FK?",
      "options": [
        "Siempre en el lado 1",
        "En el lado N (tabla hija)",
        "Nunca se usa FK",
        "Solo en NoSQL"
      ],
      "correctIndex": 1,
      "feedback": "El hijo apunta al padre."
    },
    {
      "prompt": "Grafos frente a relacional típico:",
      "options": [
        "No pueden representar relaciones",
        "Las aristas son ciudadanas de primera clase; consultas por caminos",
        "Solo almacenan Excel",
        "Obligan a VARCHAR"
      ],
      "correctIndex": 1,
      "feedback": "Forma de pregunta distinta → familia distinta."
    },
    {
      "prompt": "N:M a SQL:",
      "options": [
        "IDs separados por coma en una columna",
        "Tabla puente con FKs a ambas entidades",
        "Dos PRIMARY KEY en la misma tabla padre",
        "Solo LEFT JOIN sin tablas nuevas"
      ],
      "correctIndex": 1,
      "feedback": "Asociación explícita."
    },
    {
      "prompt": "Orden de diseño sano:",
      "options": [
        "CREATE TABLE → luego preguntar al negocio",
        "Requisitos → conceptual/ER → lógico → físico/DDL",
        "Solo físico",
        "Solo NoSQL primero"
      ],
      "correctIndex": 1,
      "feedback": "Diseñar antes de crear."
    }
  ]
}
