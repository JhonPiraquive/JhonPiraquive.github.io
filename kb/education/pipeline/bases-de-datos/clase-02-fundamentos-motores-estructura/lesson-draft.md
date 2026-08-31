---
track: bases-de-datos
slug: clase-02-fundamentos-motores-estructura
title: "Fundamentos, motores y estructura"
order: 3
prerequisites:
  - clase-01-historia-bases-de-datos
audience: student
modo: concepto
pagination: true
pages:
  - hub
  - que-es-y-tipos
  - motores-y-gestores
  - estructura-tablas-campos
  - practica-y-cierre
---

## Objetivos de aprendizaje

Al finalizar esta lección podrás:

1. **Definir** qué es una **BD** y qué es un **SGBD**, y explicar cómo colaboran con un ejemplo de PYME LATAM.
2. **Contrastar** bases **relacionales** (tablas + SQL) frente a **NoSQL** (documentos, clave-valor, columnas, grafos) según escenario.
3. **Distinguir** **motor/servidor**, **GUI** y **CLI** (MySQL/MariaDB/MongoDB vs phpMyAdmin/Workbench/DBeaver/Compass vs `mysql`/`mongosh`).
4. **Nombrar y relacionar** tabla, campo/columna, registro/fila y valor, con reglas de nombres y literales entre comillas simples.
5. **Explicar** por qué confundir la GUI con el motor lleva a diagnósticos erróneos.

## Prerrequisitos

- `clase-01-historia-bases-de-datos` (relato: por qué existen las BD y el modelo relacional).

**Siguiente clase:** `clase-03-modelos-datos-er` (diseño conceptual → ER → tablas).

---

## Contenido

> **Modo concepto:** definir con claridad. *Qué es* solo donde defina un término central. Un solo bloque opcional de malas prácticas al final (GUI ≠ motor).

### Página hub — Objetivos e índice

Resumen de objetivos + navegación a las cuatro páginas internas.

---

### Página 1 — `que-es-y-tipos`

#### BD — Base de Datos

**Qué es:** un **conjunto organizado de datos relacionados**, persistentes, pensados para consultarlos, actualizarlos y compartirlos con reglas de consistencia. No es “cualquier archivo con información”.

Varias personas o apps trabajan sobre la **misma fuente de verdad**. Se define un esquema o modelo; el software gestor valida y persiste; otras apps leen datos ya consistentes.

**Ejemplo:** la academia “Rutas Digitales” (Cali) deja de tener nombres de programas distintos por sede en Word/Excel y pasa a una BD `academia` con tabla `Programas`.

#### SGBD — Sistema Gestor de Bases de Datos

**Qué es:** el **software** que administra una o varias BD: crea estructuras, acepta lenguajes de consulta, controla usuarios, almacenamiento y recuperación. “Motor” enfatiza el **servidor** (mysqld, mongod).

**Frase ancla:** la BD es el **contenido organizado**; el SGBD es el **motor + herramientas** que lo hacen usable. phpMyAdmin **no** es el SGBD.

#### Tipos — relacionales

Organizan datos en **tablas** (filas/registros y columnas/campos). Relaciones por **valores** (claves). Lenguaje dominante: **SQL**.

**Encaje:** inventario, matrículas, facturación, órdenes — datos estructurados de negocio. Es el enfoque principal del módulo.

#### Tipos — NoSQL (Not Only SQL)

Familias: **documentos** (MongoDB), **clave-valor**, **columnas anchas**, **grafos**. Esquema más flexible; consistencia según producto.

<!-- interactive: CompareTable -->
{
  "headers": ["Escenario", "Mejor encaje"],
  "rows": [
    ["Inventario / stock / facturación", "Relacional (MySQL/MariaDB)"],
    ["Catálogo con atributos distintos por categoría", "Documentos (MongoDB) o híbrido"],
    ["Sesiones / caché", "Clave-valor"],
    ["Red de referidos / fraude", "Grafo"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "title": "BD, SGBD y clientes",
  "description": "Flujo: GUI, CLI y aplicación hablan con el motor; el motor persiste en disco",
  "chart": "flowchart LR\n  GUI[GUI] --> MOTOR[Motor SGBD]\n  CLI[CLI] --> MOTOR\n  APP[Aplicación] --> MOTOR\n  MOTOR --> DATA[(Datos en disco)]"
}

---

### Página 2 — `motores-y-gestores`

#### Motores / servidores

| Motor | Familia | Perfil |
|-------|---------|--------|
| MySQL | Relacional SQL | Web LAMP; hosting LATAM |
| MariaDB | Relacional SQL | Distros Linux / aulas |
| MongoDB | Documentos | JSON flexible |

El motor **guarda y procesa**. Elegir motor es elegir modelo + ecosistema + operación.

#### Gestores visuales (GUI) y CLI

| Rol | Qué es | Ejemplos |
|-----|--------|----------|
| **GUI** | Cliente gráfico; habla con el motor | phpMyAdmin, Workbench, DBeaver, Compass |
| **CLI** | Cliente de texto | `mysql`/`mariadb`, `mongosh` |

La misma BD `academia` en MariaDB puede administrarse con phpMyAdmin, con `mariadb` en terminal o desde una app — **no son tres bases distintas**.

**Caso — “Andes Tech” (Medellín).** Excel por sede con nombres oficiales divergentes. Solución: MariaDB + `Programas` con `Nombre_Programa` UTF-8; GUI solo para admin; la app lee por SQL.

**Caso — “Catálogo Libre” (Lima).** 60 columnas nullable en MySQL para atributos variables → `ALTER` constantes. Mejor: pedidos/stock relacional; atributos flexibles en documentos (o diseño por tipo).

---

### Página 3 — `estructura-tablas-campos`

#### Tabla, campo, registro, valor

| Elemento | Definición operativa | Ejemplo |
|----------|----------------------|---------|
| Tabla | Contenedor de filas del mismo tipo de hecho | `Programas` |
| Campo / columna | Atributo tipado | `Nombre_Programa` |
| Registro / fila | Una instancia | Un programa ofertado |
| Valor | Dato en la celda | `'Técnica Profesional en Configuración de Servicios Web'` |

**Reglas de escritura:**

1. Nombres sin espacios → `Nombre_Programa`.
2. Literales de texto entre comillas simples `'…'`.
3. Los **valores** sí pueden llevar espacios, tildes y caracteres especiales.
4. No confundir identificador (campo) con contenido (valor).

<!-- interactive: StepReveal -->
{
  "title": "De la tabla al valor",
  "steps": [
    { "title": "Tabla", "content": "Programas — contenedor de filas del mismo tipo de hecho." },
    { "title": "Campos", "content": "id, Nombre_Programa, cupos — atributos tipados (sin espacios en el nombre)." },
    { "title": "Registro", "content": "Una fila: el programa ofertado en Cali con 30 cupos." },
    { "title": "Valor", "content": "El texto largo con tildes va entre comillas simples en SQL." }
  ]
}

<!-- code: sql -->
```sql
CREATE TABLE Programas (
  id               INTEGER PRIMARY KEY,
  Nombre_Programa  VARCHAR(200) NOT NULL,
  cupos            INTEGER NOT NULL
);

INSERT INTO Programas (id, Nombre_Programa, cupos) VALUES
  (1, 'Técnica Profesional en Configuración de Servicios Web', 30);

SELECT id, Nombre_Programa FROM Programas WHERE cupos >= 25;
```

<!-- code: sql -->
```sql
-- Correcto: literal con comillas simples (tildes y espacios OK en el valor)
SELECT * FROM Programas
WHERE Nombre_Programa = 'Técnica Profesional en Configuración de Servicios Web';
```

---

### Página 4 — `practica-y-cierre`

#### Cuidado operativo (un solo bloque) — GUI ≠ motor

Confundir la GUI con el motor (y variantes cercanas) lleva a diagnósticos erróneos:

1. Reinstalar phpMyAdmin porque “se borró la BD” → diagnosticar el **servicio del motor** y el datadir.
2. Documentar el stack solo como “usamos Workbench/phpMyAdmin” → nombrar siempre **motor + versión + cliente**.
3. Creer que sin GUI “no hay base de datos” en un VPS → practicar **CLI**.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "id": "practica-bd-sgbd-gui",
  "prompt": "En una frase cada uno, diferencia BD, SGBD y phpMyAdmin usando el ejemplo de la academia en Cali.",
  "hints": [
    "BD = contenido organizado.",
    "SGBD = software/motor.",
    "phpMyAdmin = cliente GUI."
  ],
  "expectedKeywords": ["BD", "SGBD", "phpMyAdmin", "motor", "datos"],
  "successMessage": "BD: datos de la academia; SGBD: MariaDB/MySQL; phpMyAdmin: solo la ventana para administrarlos."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-clasificar-roles",
  "prompt": "Clasifica cada uno en motor / GUI / CLI: MariaDB, DBeaver, mongosh, MongoDB, phpMyAdmin, mysql.",
  "hints": ["Servidor = motor", "Gráfico = GUI", "Terminal = CLI"],
  "expectedKeywords": ["motor", "GUI", "CLI", "MariaDB", "MongoDB"],
  "successMessage": "Motores: MariaDB, MongoDB. GUI: DBeaver, phpMyAdmin. CLI: mongosh, mysql."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-escenario-familia",
  "prompt": "¿Por qué inventario → relacional y catálogo heterogéneo → documentos? Responde en 4–6 líneas.",
  "hints": ["Estructura fija vs atributos variables", "SQL e integridad vs flexibilidad"],
  "expectedKeywords": ["relacional", "documentos", "inventario", "flexible", "esquema"],
  "successMessage": "Inventario necesita integridad y consultas estructuradas; catálogos variables evitan columnas nullable infinitas con documentos."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-insert-tildes",
  "prompt": "Escribe un INSERT válido de un programa cuyo Nombre_Programa tenga tildes y espacios (usa comillas simples).",
  "hints": ["Lista columnas explícitamente", "Valor entre comillas simples"],
  "expectedKeywords": ["INSERT", "Nombre_Programa", "'"],
  "successMessage": "INSERT INTO Programas (id, Nombre_Programa, cupos) VALUES (…, '…con tildes…', …);"
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-etiquetar-estructura",
  "prompt": "Dibuja (o describe) la tabla Programas con 2 registros y etiqueta: tabla, campo, registro, valor.",
  "hints": ["Fila = registro", "Columna = campo", "Celda = valor"],
  "expectedKeywords": ["tabla", "campo", "registro", "valor"],
  "successMessage": "Programas es la tabla; Nombre_Programa un campo; cada fila un registro; el texto en la celda es el valor."
}

---

## Reto integrador

**“Criterio de Andes Tech”**

1. Definir BD vs SGBD en el proyecto.
2. Elegir motor(es) por workload (cupos vs ficha flexible).
3. Indicar una GUI y una CLI coherentes.
4. Proponer `Programas` + `INSERT` válido del nombre largo con tildes.
5. Explicar en 3 líneas el riesgo de confundir GUI con motor.

<!-- interactive: ChallengeCard -->
{
  "title": "Criterio de Andes Tech",
  "difficulty": "intermedio",
  "prompt": "Define BD/SGBD, elige motores por workload, indica GUI+CLI, propone Programas + INSERT con tildes, y explica el riesgo GUI≠motor.",
  "acceptanceCriteria": [
    "BD vs SGBD claros",
    "Motor justificado por escenario",
    "GUI y CLI nombrados",
    "INSERT con literales correctos",
    "Riesgo de confundir GUI con motor explicado"
  ],
  "hints": ["Cupos/inventario → SQL", "Atributos variables → documentos o diseño por tipo"]
}

---

## Cierre

- BD = datos organizados; SGBD = software que los administra; GUI/CLI = clientes.
- Relacional vs NoSQL según la forma de la pregunta, no según la moda.
- Identificadores sin espacios; literales con comillas simples; tildes en el **valor**.
- Siguiente: diseñar antes de crear — `clase-03-modelos-datos-er`.

<!-- interactive: Quiz -->
{
  "slug": "clase-02-fundamentos-motores-estructura",
  "questions": [
    {
      "prompt": "¿Qué describe mejor BD frente a SGBD?",
      "options": [
        "BD es phpMyAdmin; SGBD es Excel",
        "BD es el conjunto organizado de datos; SGBD es el software que los administra",
        "Son sinónimos exactos",
        "SGBD solo existe en NoSQL"
      ],
      "correctIndex": 1,
      "feedback": "Contenido organizado vs sistema que lo gestiona."
    },
    {
      "prompt": "Relacional vs documental:",
      "options": [
        "Relacional = tablas/SQL; documental = documentos flexibles (p. ej. MongoDB)",
        "NoSQL prohíbe texto",
        "Relacional no permite claves",
        "MongoDB solo funciona sin disco"
      ],
      "correctIndex": 0,
      "feedback": "Dos familias distintas de organización y consulta."
    },
    {
      "prompt": "Motores vs gestores:",
      "options": [
        "phpMyAdmin es el motor que guarda los datos",
        "MySQL/MariaDB/MongoDB son motores; phpMyAdmin/Workbench/DBeaver/Compass son GUI",
        "La CLI reemplaza al motor",
        "DBeaver almacena tablas en el navegador"
      ],
      "correctIndex": 1,
      "feedback": "El motor persiste; GUI/CLI son clientes."
    },
    {
      "prompt": "Campo y valor correctos:",
      "options": [
        "Nombre Programa y valor sin comillas",
        "Nombre_Programa y 'Técnica Profesional en Configuración de Servicios Web'",
        "Campo con espacios y valor entre corchetes",
        "Los valores nunca pueden tener tildes"
      ],
      "correctIndex": 1,
      "feedback": "Identificadores sin espacios; literales con comillas; tildes en el valor OK."
    },
    {
      "prompt": "¿Qué pasaría si tres sedes editan cupos solo en Excel compartido?",
      "options": [
        "ACID automático de MariaDB",
        "Inconsistencias y choques de edición propios de no tener un SGBD",
        "Se convierte en MongoDB",
        "phpMyAdmin corrige solo"
      ],
      "correctIndex": 1,
      "feedback": "Sin motor de concurrencia/integridad, el patrón pre-BD vuelve."
    }
  ]
}
