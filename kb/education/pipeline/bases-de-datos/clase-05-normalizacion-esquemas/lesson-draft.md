---
track: bases-de-datos
slug: clase-05-normalizacion-esquemas
title: "Normalización y esquemas"
order: 6
prerequisites:
  - clase-04-ddl-dml-relacional
audience: student
modo: procedimiento
pagination: true
pages:
  - hub
  - redundancia-y-dependencia-funcional
  - formas-normales-1-2-3
  - desnormalizacion
  - estrella-y-copo-de-nieve
  - practica-y-cierre
---

## Objetivos de aprendizaje

Al finalizar esta lección podrás:

1. **Explicar** **redundancia** y anomalías de inserción, actualización y borrado con un ejemplo de matrículas/facturas.
2. **Definir** **dependencia funcional** (DF: *si conozco A, determino B*) y detectarlas en una tabla sucia.
3. **Ejecutar** el procedimiento **1FN → 2FN → 3FN** con checklist y antes/después; mencionar **BCNF** sin exigir dominio formal completo.
4. **Argumentar** cuándo **desnormalizar** de forma consciente (snapshot, lecturas) y qué riesgo acepta.
5. **Distinguir** esquema en **estrella** vs **copo de nieve** y relacionarlos con normalización de dimensiones en BI.

## Prerrequisitos

- `clase-04-ddl-dml-relacional` (y el ER de clase 03): ya sabes crear tablas y consultarlas; ahora **limpias** el diseño.

**Siguiente clase:** `clase-06-dcl-tcl-objetos-bd`.

---

## Contenido

> **Modo procedimiento:** pasos ejecutables. Anti-patrones solo si ayudan (p. ej. CSV en celdas = viola 1FN).

### Página hub — Objetivos e índice

Tras ER (clase 03) y SQL (clase 04), se limpia el esquema: redundancia → DF → formas normales → desnormalización consciente → formas analíticas (estrella/copo).

---

### Página 1 — `redundancia-y-dependencia-funcional`

#### Redundancia y anomalías

**Redundancia:** la misma verdad de negocio copiada en varios sitios y puede divergir.

| Anomalía | Idea |
|----------|------|
| Inserción | No puedes insertar un hecho sin inventar otro |
| Actualización | Cambias en N sitios y olvidas uno |
| Borrado | Al borrar una fila pierdes un hecho que aún necesitabas |

Detección: ¿este valor se repite y describe otra entidad? ¿Si lo cambio, toco varios sitios?

**Caso — Rutas Digitales.** Tabla `Todo` con teléfono de sede repetido; al corregir, mitad de filas viejas.

#### Dependencia funcional (DF)

**A → B:** si conozco A, determino B de forma única (regla del esquema).

Base para ejecutar formas: 2FN → dependencias **parciales** de PK compuesta; 3FN → dependencias **transitivas** (no-clave → no-clave).

---

### Página 2 — `formas-normales-1-2-3`

#### Procedimiento 1FN → 2FN → 3FN

| Forma | Idea | Cómo ejecutarla |
|-------|------|-----------------|
| **1FN** | Valores atómicos; sin grupos repetidos | Separar listas/`curso1`…`cursoN` en filas o tablas hijas |
| **2FN** | Sin DF parcial de PK **compuesta** | Extraer atributos que dependen solo de parte de la clave + FK |
| **3FN** | Sin DF transitiva | Extraer determinantes no-clave + FK |
| **BCNF** (mención) | Refuerzo: determinante debe ser superclave | Detectar DF “rara”; no exigir descomposición formal completa |

**Orden en pizarra:** tabla sucia → listar DFs → checklist 1FN → 2FN → 3FN → (mención BCNF).

Si la PK es **simple** y hay 1FN, 2FN suele cumplirse; igual verificar DFs.

#### Ejemplo hilo (Rutas Digitales)

- Viola 1FN: columna `programas = 'A, B'`.
- Viola 2FN: PK `(estudiante_id, programa_id)` con `Nombre_Programa` solo dependiente de `programa_id`.
- Viola 3FN: en `Programas`, `sede → telefono_sede` (extraer `Sedes`).

<!-- interactive: MermaidDiagram -->
{
  "title": "Procedimiento de normalización",
  "description": "Flujo checklist de tabla sucia a 3FN pasando por DFs, 1FN y 2FN",
  "chart": "flowchart TD\n  S[Tabla sucia] --> DF[Listar DFs y clave]\n  DF --> F1{Atómicos y sin grupos repetidos?}\n  F1 -->|No| A1[Separar multivalor]\n  A1 --> F1\n  F1 -->|Sí| N1[1FN OK]\n  N1 --> F2{DF parcial en PK compuesta?}\n  F2 -->|Sí| A2[Extraer + FK]\n  A2 --> F2\n  F2 -->|No| N2[2FN OK]\n  N2 --> F3{DF transitiva?}\n  F3 -->|Sí| A3[Extraer + FK]\n  A3 --> F3\n  F3 -->|No| N3[3FN OK]"
}

<!-- interactive: StepReveal -->
{
  "title": "Antes → después (Rutas Digitales)",
  "steps": [
    { "title": "Sucia", "content": "Listas en celdas, Nombre_Programa en la PK compuesta, teléfono de sede repetido." },
    { "title": "1FN", "content": "Una fila por inscripción; sin CSV en celdas." },
    { "title": "2FN", "content": "Nombre_Programa vive en Programas; la inscripción solo guarda FKs." },
    { "title": "3FN", "content": "Sedes es dueña del teléfono; Programas referencia sede_id." }
  ]
}

<!-- code: sql -->
```sql
CREATE TABLE Sedes (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_sede VARCHAR(80) NOT NULL,
  telefono VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (nombre_sede)
);

CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede_id INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa),
  CONSTRAINT fk_prog_sede FOREIGN KEY (sede_id) REFERENCES Sedes(id)
);
```

---

### Página 3 — `desnormalizacion`

#### Desnormalización consciente

Reintroducir redundancia **después** de entender el modelo normalizado, por lecturas, reportes o historia — no por pereza.

**Ejemplo consciente:** al emitir factura, copiar `Nombre_Programa` y precio **congelados** (snapshot). La factura histórica no debe cambiar si mañana renombran el programa.

Decisión: modelo 3FN que funciona → medir dolor de JOINs → técnica (snapshot, resumen, vista) → dueño de la verdad + sync → documentar riesgo.

<!-- code: sql -->
```sql
CREATE TABLE FacturaDetalle (
  id INT NOT NULL AUTO_INCREMENT,
  factura_id INT NOT NULL,
  programa_id INT NOT NULL,
  Nombre_Programa_snapshot VARCHAR(200) NOT NULL,
  precio_snapshot DECIMAL(12,2) NOT NULL,
  PRIMARY KEY (id)
);
```

**Caso — Andes Tech.** OLTP bien normalizado pero tablero lento. Alguien copia nombres en 4 tablas operacionales sin sync. Separar: 3FN en transacciones; snapshot en factura; estrella para BI.

---

### Página 4 — `estrella-y-copo-de-nieve`

#### Estrella vs copo

| Forma | Dimensiones | Fortaleza | Cuidado |
|-------|-------------|-----------|--------|
| **Estrella** | Planas / a menudo desnormalizadas | Pocos JOINs en BI | Redundancia controlada en dims |
| **Copo (snowflake)** | Normalizadas en subdims | Menos duplicación en jerarquías | Más JOINs |
| **OLTP 3FN** | N/A (transacciones) | Integridad día a día | No es un DW |

No mezclar el almacén analítico con la carga operacional sin criterio.

<!-- interactive: MermaidDiagram -->
{
  "title": "Estrella vs copo (inscripciones)",
  "description": "Hecho Inscripcion con dimensiones planas (estrella) frente a dimensión normalizada (copo)",
  "chart": "flowchart LR\n  subgraph estrella\n    F1[Hecho Inscripcion] --> D1[Dim Programa]\n    F1 --> D2[Dim Estudiante]\n    F1 --> D3[Dim Tiempo]\n  end\n  subgraph copo\n    F2[Hecho Inscripcion] --> P[Dim Programa]\n    P --> S[Dim Sede]\n    F2 --> E[Dim Estudiante]\n  end"
}

<!-- interactive: CompareTable -->
{
  "headers": ["Forma", "Dimensiones", "Uso típico"],
  "rows": [
    ["Estrella", "Planas", "Tableros BI con pocos JOINs"],
    ["Copo", "Normalizadas", "Jerarquías sin duplicar tanto"],
    ["OLTP 3FN", "N/A", "Operación diaria / integridad"]
  ]
}

---

### Página 5 — `practica-y-cierre`

#### Errores frecuentes

1. Hablar de 2FN/3FN sin listar DFs.
2. CSV/listas en celdas (“ya hay tablas”) — viola 1FN.
3. Desnormalizar el día 1 o confundir con “quitar FK”.
4. Llamar estrella/copo al ER operacional sin hechos/dimensiones.
5. Copo extremo “por pureza” que hace inviables los tableros.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "id": "practica-anomalia-telefono",
  "prompt": "Describe la anomalía de actualización cuando el teléfono de sede está repetido en cada fila de Programas.",
  "hints": ["Cambias en N sitios", "Olvidas una fila"],
  "expectedKeywords": ["actualización", "redundancia", "teléfono", "sede"],
  "successMessage": "Hay que actualizar muchas filas; si olvidas una, la verdad diverge."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-1fn-csv",
  "prompt": "De una celda programas = 'A, B' a un esquema 1FN: describe tablas/filas resultantes.",
  "hints": ["Una fila por valor", "O tabla hija de inscripción"],
  "expectedKeywords": ["1FN", "atómico", "fila", "CSV"],
  "successMessage": "Cada programa en su fila (o relación); nada de listas en una celda."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-orden-fn",
  "prompt": "Ordena: sucia → DFs → 1FN → 2FN → 3FN → BCNF (mención).",
  "hints": ["Primero listar dependencias", "BCNF es refuerzo al final"],
  "expectedKeywords": ["DF", "1FN", "2FN", "3FN", "BCNF"],
  "successMessage": "Sucia → DFs → 1FN → 2FN → 3FN → mención BCNF."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-2fn-ddl",
  "prompt": "PK (estudiante_id, programa_id) con Nombre_Programa solo de programa_id. Escribe el DDL 2FN (extraer Programas + FK).",
  "hints": ["Programas es padre", "Inscripción guarda solo FKs"],
  "expectedKeywords": ["CREATE TABLE", "FOREIGN KEY", "Nombre_Programa", "programa_id"],
  "successMessage": "Nombre_Programa sale de la inscripción; vive en Programas."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-snapshot-vs-mal",
  "prompt": "En 4–6 líneas: desnormalización consciente (snapshot en factura) vs incorrecta (copiar nombres en 4 tablas OLTP sin sync).",
  "hints": ["Dueño de la verdad", "Historia vs operación"],
  "expectedKeywords": ["snapshot", "factura", "sync", "3FN", "riesgo"],
  "successMessage": "Snapshot documentado en documentos históricos ≠ duplicar sin dueño en tablas operativas."
}

---

## Reto integrador

1. Tabla sucia (≥5 columnas) + una anomalía de cada tipo.
2. ≥4 DFs A → B.
3. Procedimiento 1FN→2FN→3FN con evidencia de qué se extrajo.
4. 3–5 líneas sobre cuándo sospechar BCNF.
5. Un atributo a congelar en factura + riesgo aceptado.
6. Estrella mínima + variante copo; aclarar que no es el OLTP.
7. Argumentación para coordinador no técnico.

<!-- interactive: ChallengeCard -->
{
  "title": "De tabla sucia a 3FN + BI",
  "difficulty": "avanzado",
  "prompt": "Normaliza un dominio de matrículas/facturas, justifica un snapshot y dibuja estrella vs copo sin confundirlos con el OLTP.",
  "acceptanceCriteria": [
    "Anomalías y DFs explícitas",
    "Pasos 1FN→3FN con evidencia",
    "Desnormalización consciente documentada",
    "Estrella/copo distintos del OLTP"
  ],
  "hints": ["Teléfono de sede → Sedes", "Snapshot solo en factura"]
}

---

## Cierre

- Redundancia → anomalías; DF → formas normales.
- 1FN→2FN→3FN es un procedimiento, no un eslogan.
- Desnormalizar con dueño de la verdad; estrella/copo son BI.
- **Siguiente:** `clase-06-dcl-tcl-objetos-bd` — permisos, transacciones y objetos del servidor.

<!-- interactive: Quiz -->
{
  "slug": "clase-05-normalizacion-esquemas",
  "questions": [
    {
      "prompt": "DF A → B:",
      "options": [
        "A y B son la misma columna",
        "Si conozco A, determino de forma única B según la regla del esquema",
        "B causa físicamente a A",
        "Solo existe en NoSQL"
      ],
      "correctIndex": 1,
      "feedback": "Base para 2FN/3FN."
    },
    {
      "prompt": "PK (estudiante_id, programa_id) + Nombre_Programa solo de programa_id:",
      "options": [
        "Solo BCNF",
        "1FN (enteros no atómicos)",
        "2FN (dependencia parcial)",
        "Diseño ideal"
      ],
      "correctIndex": 2,
      "feedback": "Extraer a Programas."
    },
    {
      "prompt": "Desnormalización consciente:",
      "options": [
        "Borrar todas las FK",
        "No diseñar nunca",
        "Redundancia documentada (p. ej. snapshot) tras modelo normalizado",
        "CSV en una celda"
      ],
      "correctIndex": 2,
      "feedback": "Decisión con dueño de la verdad."
    },
    {
      "prompt": "Estrella vs copo:",
      "options": [
        "Estrella = NoSQL; copo = SQL",
        "Estrella = dims planas; copo = dims normalizadas (más JOINs)",
        "Sinónimos de 1FN y 2FN",
        "Copo sin hechos"
      ],
      "correctIndex": 1,
      "feedback": "Ambas son formas analíticas."
    },
    {
      "prompt": "1FN ataca principalmente:",
      "options": [
        "Dependencias transitivas",
        "Valores no atómicos / grupos repetidos",
        "Solo rendimiento de JOINs",
        "Permisos DCL"
      ],
      "correctIndex": 1,
      "feedback": "Piso antes de 2FN/3FN."
    }
  ]
}
