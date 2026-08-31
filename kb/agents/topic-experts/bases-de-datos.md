# Bases de Datos — topic expert

Track: `bases-de-datos` | Agent: `topic-expert-databases` | index + 6 clases

Briefs en `kb/education/briefs/bases-de-datos/`.

## Catálogo (curva de aprendizaje — reorganizado 2026-08-27)

Orden: **historia → fundamentos → diseño → SQL → calidad → control**.

| order | slug | title | modo | foco (una sola cosa) |
|-------|------|-------|------|----------------------|
| 1 | index | Bases de Datos | hub | Objetivos y resultados literales (ClayCard) |
| 2 | clase-01-historia-bases-de-datos | Historia de las Bases de Datos | **narrativa** | Contar la historia por etapas, simple y clara. Sin fichas qué/para qué ni malas prácticas. |
| 3 | clase-02-fundamentos-motores-estructura | Fundamentos, motores y estructura | **concepto** | Qué es una BD/SGBD, tipos, motores/gestores, tabla·campo·registro·valor. |
| 4 | clase-03-modelos-datos-er | Modelos de datos y diagramas ER | **diseño** | Conceptual/lógico/físico, ER, transformación a tablas, tipos, PK/FK. Familias solo como contexto de diseño. |
| 5 | clase-04-ddl-dml-relacional | DDL, DML y consultas SQL | **procedimiento** | DDL, DML, filtros, agregados, UPDATE/DELETE, JOINs. SQL con ejemplos; malas prácticas solo donde el error rompe datos. |
| 6 | clase-05-normalizacion-esquemas | Normalización y esquemas | **procedimiento** | Redundancia, DF, 1FN–3FN, desnormalización, estrella/copo. |
| 7 | clase-06-dcl-tcl-objetos-bd | DCL, TCL y objetos en el servidor | **procedimiento** | GRANT/REVOKE, transacciones/ACID, vistas, funciones, procedimientos, triggers. |

### Prerrequisitos

| slug | prerequisites |
|------|---------------|
| index | — |
| clase-01-… | index |
| clase-02-… | clase-01 |
| clase-03-modelos-datos-er | clase-02 |
| clase-04-ddl-dml-relacional | clase-03-modelos-datos-er |
| clase-05-… | clase-04-ddl-dml-relacional |
| clase-06-… | clase-05 |

### Nota de migración de slugs (2026-08-27)

| Antes | Ahora |
|-------|--------|
| `clase-03-ddl-dml-relacional` | `clase-04-ddl-dml-relacional` |
| `clase-04-modelos-datos-er` | `clase-03-modelos-datos-er` |

Redirects legacy deben apuntar a las nuevas rutas.

## Objetivos / resultados del módulo

Texto **literal** en el index (ver `objetivos-y-resultados.md`).

## Tono y pedagogía

- Enseñanza a una persona; comprensión simple.
- **Foco por clase** (tabla de modos). No plantilla *Qué es / Para qué / Malas prácticas / Señales* en todas las secciones.
- Historia = relato. SQL/normalización/DCL = pasos y ejemplos; anti-patrones solo si aportan.
- Ver `kb/education/pedagogy-standards.md`.

## Fuentes

- `kb/education/sources/clases/bases-de-datos/`

## Dominio clave

Historia BD · fundamentos SGBD · modelos ER · DDL/DML/SQL · normalización · DCL/TCL · vistas/funciones/procedimientos/triggers.
