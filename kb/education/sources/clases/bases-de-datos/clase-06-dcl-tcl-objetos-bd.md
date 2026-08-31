# Clase 6 — DCL, TCL, vistas, funciones, procedimientos y triggers

**Posición en la curva:** nivel avanzado del módulo. El estudiante ya consulta y diseña; ahora controla **quién** hace qué, **transacciones** y **lógica en el servidor**.

**Modo docente + autoestudio:** “hoy ampliamos SQL más allá de SELECT”. Cada objeto: qué es → significado del acrónimo → para qué → cómo se crea (pasos + CodeFiddle) → cuándo usarlo → peligro típico.

## Objetivos de la clase
1. Usar DCL (Data Control Language — Lenguaje de Control de Datos): `GRANT`, `REVOKE`.
2. Usar TCL (Transaction Control Language — Lenguaje de Control de Transacciones): `BEGIN`/`START TRANSACTION`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`; ligar a ACID.
3. Crear y consultar vistas (`CREATE VIEW`).
4. Explicar y ejemplificar funciones, procedimientos almacenados y triggers.
5. Distinguir cuándo la lógica va en la app vs en la BD.

## Bloques (orden de aprendizaje)

### 1. Mapa de “familias” SQL (repaso puente)
DDL / DML / DCL / TCL — tabla comparativa con acrónimos expandidos.

### 2. DCL — Data Control Language
- Qué es / significa / para qué.
- `GRANT`, `REVOKE` (y mención de roles/usuarios en MySQL/MariaDB).
- Principio de mínimo privilegio.
- Malas prácticas: root compartido, GRANT ALL sin necesidad.

### 3. TCL — Transaction Control Language
- Qué es / significa / para qué.
- Transacción; ACID (Atomicity, Consistency, Isolation, Durability — atomicidad, consistencia, aislamiento, durabilidad).
- `COMMIT`, `ROLLBACK`, `SAVEPOINT`.
- Ejemplo: transferencia o inscripción atómica.
- Malas prácticas: commits implícitos mal entendidos; dejar transacciones abiertas.

### 4. Vistas
Qué son, para qué (seguridad, simplificar consultas), `CREATE VIEW` / consultar / limitaciones, vs tabla.

### 5. Funciones
Funciones definidas por el usuario (UDF — User-Defined Function): retornan un valor; uso en SELECT.

### 6. Procedimientos almacenados
`PROCEDURE`: rutinas con parámetros; encapsular lógica; diferencias con funciones.

### 7. Triggers
Disparadores `BEFORE`/`AFTER` `INSERT`/`UPDATE`/`DELETE`; auditoría, validaciones; riesgos de complejidad oculta.

### 8. Criterio de diseño
Tabla “¿app o BD?” + casos LATAM (PYME, hosting compartido con límites de routines).

### Cierre
PracticeExercise, reto (vista + procedimiento + trigger de auditoría + GRANT), quiz ×5.

**Nota dialecto:** ejemplos preferir MySQL/MariaDB (alineado al track); anotar diferencias menores si aplica.
