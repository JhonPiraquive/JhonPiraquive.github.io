---
track: bases-de-datos
slug: clase-06-dcl-tcl-objetos-bd
title: "DCL, TCL y objetos en el servidor"
order: 7
prerequisites:
  - clase-05-normalizacion-esquemas
audience: student
modo: procedimiento
pagination: true
pages:
  - hub
  - mapa-sql-familias
  - dcl-grant-revoke
  - tcl-transacciones-acid
  - vistas
  - funciones-procedimientos-triggers
  - practica-y-cierre
---

## Objetivos de aprendizaje

Al finalizar esta lección podrás:

1. **Ubicar** DDL / DML / **DCL** / **TCL** en un mapa con ejemplos.
2. **Aplicar** `GRANT`/`REVOKE` (MySQL/MariaDB) con **mínimo privilegio**.
3. **Usar** `START TRANSACTION`/`BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT` y explicar **ACID** con un ejemplo atómico.
4. **Crear y consultar** vistas; contrastarlas con tablas base.
5. **Ejemplificar** UDF, procedimientos y triggers, y decidir cuándo la lógica va en la app vs en la BD.

## Prerrequisitos

- `clase-05-normalizacion-esquemas` (esquema limpio; SQL de clase 04).

**Siguiente:** fin del módulo actual (6 clases + index). Vuelve al hub del track para repasar.

---

## Contenido

> **Modo procedimiento:** pasos ejecutables. Destacar mínimo privilegio y transacciones. Dialecto preferido: MySQL/MariaDB.

### Página hub — Objetivos e índice

Resumen + navegación. Cierre del arco: estructura (DDL), datos (DML), permisos (DCL), unidades de trabajo (TCL) y objetos del servidor.

---

### Página 1 — `mapa-sql-familias`

#### Mapa de familias SQL

| Familia | Controla | Ejemplos |
|---------|----------|----------|
| **DDL** | Estructura | `CREATE`/`ALTER`/`DROP`, `CREATE VIEW` |
| **DML** | Filas | `INSERT`/`SELECT`/`UPDATE`/`DELETE` |
| **DCL** | Permisos | `GRANT`/`REVOKE` |
| **TCL** | Confirmación de unidades de trabajo | `COMMIT`/`ROLLBACK`/`SAVEPOINT` |

`CREATE VIEW` es DDL; `SELECT` sobre la vista es DML.

<!-- interactive: MermaidDiagram -->
{
  "title": "Familias SQL",
  "description": "Mapa DDL DML DCL TCL bajo el paraguas SQL",
  "chart": "flowchart TB\n  SQL[SQL] --> DDL[DDL — esquema]\n  SQL --> DML[DML — filas]\n  SQL --> DCL[DCL — permisos]\n  SQL --> TCL[TCL — transacciones]"
}

<!-- interactive: CompareTable -->
{
  "headers": ["Familia", "Controla", "Ejemplo"],
  "rows": [
    ["DDL", "Estructura", "CREATE TABLE / CREATE VIEW"],
    ["DML", "Filas", "INSERT / SELECT"],
    ["DCL", "Permisos", "GRANT / REVOKE"],
    ["TCL", "Unidad de trabajo", "COMMIT / ROLLBACK"]
  ]
}

---

### Página 2 — `dcl-grant-revoke`

#### GRANT / REVOKE y mínimo privilegio

**DCL** otorga y revoca privilegios; no cambia esquema ni filas: cambia **quién puede** qué.

Principio: **mínimo privilegio** — solo lo necesario para la tarea.

<!-- code: sql -->
```sql
CREATE USER 'app_rutas'@'localhost' IDENTIFIED BY 'clave_segura_lab';
GRANT SELECT, INSERT ON academia_rutas.Inscripciones TO 'app_rutas'@'localhost';
GRANT SELECT ON academia_rutas.Programas TO 'app_rutas'@'localhost';
GRANT SELECT ON academia_rutas.v_programas_cupos TO 'reporte_rutas'@'localhost';
REVOKE DELETE ON academia_rutas.Inscripciones FROM 'app_rutas'@'localhost';
```

Evitar `root` compartido y `GRANT ALL ON *.*` “para que funcione el lab”.

**Caso — Rutas Digitales.** App y pasante comparten `root`; script de limpieza borra matrículas. Remedio: usuario app con SELECT/INSERT; reportería solo-lectura.

---

### Página 3 — `tcl-transacciones-acid`

#### Transacciones y ACID

**Transacción:** unidad todo-o-nada.

| Sentencia | Rol |
|-----------|-----|
| `START TRANSACTION` / `BEGIN` | Inicia |
| `COMMIT` | Confirma |
| `ROLLBACK` | Deshace |
| `SAVEPOINT` / `ROLLBACK TO SAVEPOINT` | Rollback parcial |

| ACID | Idea |
|------|------|
| **Atomicity** | Todo o nada |
| **Consistency** | De estado válido a válido |
| **Isolation** | Concurrentes no se pisan de forma anómala (según nivel) |
| **Durability** | Tras COMMIT, sobrevive a caídas |

<!-- interactive: StepReveal -->
{
  "title": "Inscripción atómica",
  "steps": [
    { "title": "START TRANSACTION", "content": "Abre la unidad de trabajo." },
    { "title": "UPDATE cupos", "content": "Descuenta solo si cupos > 0 (WHERE de seguridad)." },
    { "title": "INSERT inscripción", "content": "Registra al estudiante en el programa." },
    { "title": "COMMIT o ROLLBACK", "content": "Confirma ambos cambios o ninguno." }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "title": "Secuencia inscripción + COMMIT",
  "description": "App y BD coordinan START TRANSACTION, UPDATE, INSERT y COMMIT",
  "chart": "sequenceDiagram\n  participant App\n  participant BD\n  App->>BD: START TRANSACTION\n  App->>BD: UPDATE cupos WHERE cupos > 0\n  App->>BD: INSERT Inscripciones\n  App->>BD: COMMIT"
}

<!-- code: sql -->
```sql
START TRANSACTION;
UPDATE Programas SET cupos = cupos - 1 WHERE id = 1 AND cupos > 0;
INSERT INTO Inscripciones (Nombre_Estudiante, programa_id) VALUES ('Ana Ruiz', 1);
COMMIT;
-- o ROLLBACK si el UPDATE no afectó filas
```

Transacciones **cortas**; motor transaccional (InnoDB). WHERE en el UPDATE de cupos evita dejar cupos negativos.

**Caso — Ferretería / Andes Tech.** Descontar stock + registrar venta sin transacción; cae la red a mitad. Remedio: START TRANSACTION … COMMIT/ROLLBACK.

---

### Página 4 — `vistas`

#### CREATE VIEW

Consulta `SELECT` con nombre. Vista típica **no** almacena filas propias; recalcula desde tablas base.

Usos: simplificar JOINs; **proyección segura** + `GRANT` solo sobre la vista; API de lectura estable.

Limitaciones: no todas son actualizables; no “magia” de índices; evitar torres de vistas opacas.

<!-- code: sql -->
```sql
CREATE VIEW v_programas_cupos AS
SELECT id, Nombre_Programa, cupos FROM Programas;

SELECT * FROM v_programas_cupos;

GRANT SELECT ON academia_rutas.v_programas_cupos TO 'reporte_rutas'@'localhost';
```

---

### Página 5 — `funciones-procedimientos-triggers`

#### UDF, PROCEDURE, TRIGGER

| Objeto | Idea | Uso típico |
|--------|------|------------|
| **UDF** | Retorna un valor; usable en expresiones/SELECT | Cálculo pequeño (`fn_etiqueta_cupos`) |
| **PROCEDURE** | Proceso; se invoca con `CALL` | Inscripción atómica multi-paso |
| **TRIGGER** | Se dispara BEFORE/AFTER INSERT/UPDATE/DELETE | Auditoría delgada |

En MySQL/MariaDB enseñar `DELIMITER` al crear rutinas. Hosting compartido puede limitar routines → plan B en app.

#### ¿App o BD?

| Preferir en la **BD** | Preferir en la **app** |
|----------------------|------------------------|
| Integridad PK/FK/UNIQUE | UX / orquestación de pantallas |
| Invariantes ante cualquier cliente SQL | Reglas que cambian cada sprint |
| Auditoría mínima | Email, pagos, colas externas |
| Transacciones cortas multi-tabla | Flujos multi-sistema |
| Vistas + GRANT | Personalización compleja |

<!-- interactive: CompareTable -->
{
  "headers": ["Objeto", "Se invoca", "Retorno"],
  "rows": [
    ["UDF", "En SELECT / expresión", "Un valor"],
    ["PROCEDURE", "CALL", "Proceso (puede tener OUT)"],
    ["TRIGGER", "Evento DML", "Efecto lateral (p. ej. audit)"]
  ]
}

<!-- interactive: Callout -->
{
  "variant": "callout-warning",
  "title": "Triggers encadenados",
  "body": "Una auditoría delgada AFTER INSERT está bien. Encadenar lógica oculta entre varios triggers es anti-patrón: difícil de depurar y de razonar."
}

---

### Página 6 — `practica-y-cierre`

#### Errores frecuentes

1. Confundir DCL con DML (`DELETE` no revoca privilegios).
2. `root` / `GRANT ALL` en lab y luego en prod.
3. Multi-tabla sin transacción; transacciones abiertas demasiado tiempo.
4. Creer que la vista guarda una copia física permanente.
5. Confundir UDF con PROCEDURE; triggers encadenados opacos.
6. Seguridad solo en el frontend sin GRANT/vistas.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "id": "practica-etiquetar-familias",
  "prompt": "Etiqueta cada sentencia como DDL/DML/DCL/TCL: GRANT; CREATE TABLE; COMMIT; INSERT; CREATE VIEW.",
  "hints": ["VIEW = DDL", "GRANT = DCL", "COMMIT = TCL"],
  "expectedKeywords": ["DDL", "DML", "DCL", "TCL"],
  "successMessage": "GRANT=DCL; CREATE TABLE/VIEW=DDL; COMMIT=TCL; INSERT=DML."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-grant-minimo",
  "prompt": "Escribe GRANT SELECT sobre v_programas_cupos al usuario reporte y REVOKE DELETE al usuario app sobre Inscripciones.",
  "hints": ["ON bd.objeto", "TO 'user'@'host'"],
  "expectedKeywords": ["GRANT", "REVOKE", "SELECT", "DELETE"],
  "successMessage": "Reportería solo-lectura; app sin DELETE masivo."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-transaccion-cupo",
  "prompt": "Escribe la transacción cupo + inscripción; indica cuándo harías ROLLBACK si cupos = 0.",
  "hints": ["WHERE cupos > 0", "Revisar filas afectadas"],
  "expectedKeywords": ["START TRANSACTION", "COMMIT", "ROLLBACK", "cupos"],
  "successMessage": "Si el UPDATE no afecta filas, ROLLBACK y no insertes la inscripción."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-acid-cuatro",
  "prompt": "Explica ACID en 4 frases cortas con el ejemplo de inscripción.",
  "hints": ["Todo-o-nada", "Estado válido", "Concurrentes", "Tras COMMIT"],
  "expectedKeywords": ["Atomicity", "Consistency", "Isolation", "Durability"],
  "successMessage": "A: ambos cambios o ninguno. C: cupos e inscripción coherentes. I: dos apps no pisan mal. D: tras COMMIT persiste."
}

<!-- interactive: PracticeExercise -->
{
  "id": "practica-app-vs-bd",
  "prompt": "Decide app vs BD para: formato de email; FK; WhatsApp de bienvenida; descuento de cupo atómico. Una línea cada uno.",
  "hints": ["Integridad → BD", "UX externa → app"],
  "expectedKeywords": ["app", "BD", "FK", "cupo", "email"],
  "successMessage": "Email/WhatsApp→app; FK y cupo atómico→BD (o BD+app coordinada)."
}

---

## Reto integrador

**“Matrícula segura”**

1. Mapa DDL/DML/DCL/TCL del flujo.
2. VIEW de programas/cupos + SELECT.
3. Inscripción atómica (UPDATE+INSERT) argumentando Atomicity; WHERE en cupos.
4. GRANT/REVOKE app vs reporte; mínimo privilegio.
5. Esbozo UDF + PROCEDURE (o equivalente en app si no hay routines).
6. Diseño trigger AFTER INSERT de auditoría.
7. Cuatro decisiones app vs BD.

<!-- interactive: ChallengeCard -->
{
  "title": "Matrícula segura",
  "difficulty": "avanzado",
  "prompt": "Arma el flujo completo: vista, transacción, privilegios mínimos, rutinas/triggers y decisiones app vs BD.",
  "acceptanceCriteria": [
    "Mapa de familias correcto",
    "Transacción con WHERE en cupos",
    "GRANT mínimo app vs reporte",
    "Vista + al menos un objeto rutina/trigger esbozado",
    "Cuatro decisiones app vs BD"
  ],
  "hints": ["No uses root compartido", "Triggers delgados"]
}

---

## Cierre

- DCL = quién puede; TCL = todo-o-nada; vistas = proyección/simplificación.
- Mínimo privilegio y transacciones cortas cierran el módulo operativo.
- Fin de las 6 clases de contenido: vuelve al **index** del track para el mapa completo.

<!-- interactive: Quiz -->
{
  "slug": "clase-06-dcl-tcl-objetos-bd",
  "questions": [
    {
      "prompt": "¿Qué es DCL?",
      "options": [
        "INSERT/UPDATE/DELETE",
        "Otorgar y revocar privilegios (GRANT/REVOKE)",
        "Solo crear tablas",
        "Un motor NoSQL"
      ],
      "correctIndex": 1,
      "feedback": "Quién puede qué."
    },
    {
      "prompt": "Atomicity:",
      "options": [
        "Datos bonitos en reportes",
        "Tras COMMIT no hay backup",
        "Todo-o-nada: todos los cambios o ninguno",
        "Solo un usuario en el SGBD"
      ],
      "correctIndex": 2,
      "feedback": "Evita cupo descontado sin inscripción."
    },
    {
      "prompt": "Motivación típica de una vista:",
      "options": [
        "Reemplazar siempre tablas base como almacén",
        "Simplificar consultas y/o exponer solo columnas autorizadas",
        "Eliminar transacciones",
        "Convertir a NoSQL"
      ],
      "correctIndex": 1,
      "feedback": "Consulta guardada + proyección."
    },
    {
      "prompt": "UDF vs PROCEDURE:",
      "options": [
        "No hay diferencia",
        "UDF retorna valor (SELECT); PROCEDURE se CALL y encapsula procesos",
        "PROCEDURE solo en Excel",
        "UDF reemplaza GRANT"
      ],
      "correctIndex": 1,
      "feedback": "Valor vs proceso."
    },
    {
      "prompt": "Mala práctica con triggers:",
      "options": [
        "Auditoría delgada AFTER INSERT",
        "Encadenar lógica oculta entre varios triggers",
        "Documentar BEFORE/AFTER",
        "Preferir FK cuando basta"
      ],
      "correctIndex": 1,
      "feedback": "Complejidad oculta = anti-patrón."
    }
  ]
}
