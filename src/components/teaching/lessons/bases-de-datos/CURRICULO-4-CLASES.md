# Currículo Bases de Datos — 4 clases (universidad)

Reorganización del track `bases-de-datos` de **6 → 4** sesiones de ~2–3 h (120–180 min), progresión principiante→experto, español LATAM.

Fuente de verdad de navegación: `class-navigation.ts` (`ALL_CLASSES` = 4).

---

## Clase 1 — Fundamentos de bases de datos

**Slug:** `clase-01-fundamentos-bd`  
**Outcomes:** Explicar por qué existen las BD (motivación histórica breve); definir BD vs SGBD; distinguir motor/GUI/CLI; usar el abecedario tabla–campo–registro–valor; contrastar relacional vs NoSQL a alto nivel.

| Página | Min |
|--------|-----|
| `historia-como-motivacion` | 28 |
| `que-es-y-tipos` | 22 |
| `motores-y-gestores` | 20 |
| `estructura-tablas-campos` | 18 |
| `practica-y-cierre` | 25 |
| **Total** | **~113** (ventana 2 h; ampliar práctica en aula hasta ~150) |

**Puente de salida:** vocabulario operativo + motor abierto → alimentar el diseño ER de la Clase 2.

**Origen (6 clases):** fusión de **clase-01-historia** (condensada en una página) + **clase-02-fundamentos**. Páginas históricas completas viven en `pages/_legacy-historia/` (archivo, fuera del nav).

---

## Clase 2 — Diseño de datos y diagramas ER

**Slug:** `clase-02-diseno-modelos-er`  
**Outcomes:** Separar conceptual/lógico/físico; dibujar ER con cardinalidad; situar familias; transformar ER→SQL con tipos, PK/FK y padres primero.

| Página | Min |
|--------|-----|
| `modelos-conceptual-logico-fisico` | 18 |
| `diagramas-er` | 15 |
| `familias-relacional-nosql-grafos` | 12 |
| `transformacion-tipos-llaves` | 20 |
| `practica-y-cierre` | 25 |
| **Total** | **~90** (espacio para laboratorio de dibujo ER hasta ~150–180) |

**Puente de entrada:** retoma abecedario y motores de Clase 1.  
**Puente de salida:** diseño con PK/FK listo para DDL (mismo caso en Clase 3).

**Origen:** renombrado/reordenado de **clase-03-modelos-datos-er**.

---

## Clase 3 — SQL — DDL, DML y JOINs

**Slug:** `clase-03-sql-ddl-dml`  
**Outcomes:** DDL + restricciones; DML insert/select/filtros/agregados; UPDATE/DELETE seguros; JOINs sobre el ER de Clase 2.

| Página | Min |
|--------|-----|
| `ddl-estructura` | 20 |
| `ddl-restricciones` | 15 |
| `dml-insert-select` | 15 |
| `dml-filtros-orden` | 18 |
| `agregados-group-having` | 18 |
| `update-delete` | 15 |
| `relacional-fk-joins` | 22 |
| `practica-y-cierre` | 25 |
| **Total** | **~148** |

**Puente de entrada:** “materializa el CONSTRAINT; no re-enseñamos el modelo”.  
**Puente de salida:** esquema vivo + consultas → normalización y objetos en Clase 4.  
**Coherencia:** JOINs solo después de FK (Clase 2).

**Origen:** renombrado de **clase-04-ddl-dml-relacional**.

---

## Clase 4 — Experto — normalización, permisos y objetos

**Slug:** `clase-04-experto-bd`  
**Outcomes:** 1FN–3FN (+ BCNF breve); desnormalización consciente / estrella–copo; DCL; TCL/ACID; vistas; UDF/PROCEDURE/TRIGGER; criterio app vs BD.

| Página | Min |
|--------|-----|
| `redundancia-y-dependencia-funcional` | 15 |
| `formas-normales-1-2-3` | 22 |
| `desnormalizacion-y-bi` | 20 |
| `mapa-sql-familias` | 12 |
| `dcl-grant-revoke` | 15 |
| `tcl-transacciones-acid` | 18 |
| `vistas` | 12 |
| `funciones-procedimientos-triggers` | 20 |
| `practica-y-cierre` | 28 |
| **Total** | **~162** |

**Puente de entrada:** esquema SQL de Clase 3.  
**Puente de salida:** cierre del módulo (hub).  
**Coherencia:** normalización después de saber leer un esquema; DCL/TCL tras DDL/DML.

**Origen:** fusión **clase-05-normalizacion** + **clase-06-dcl-tcl-objetos**.  
`desnormalizacion` + `estrella-y-copo-de-nieve` → página única `desnormalizacion-y-bi`.  
Práctica DCL antigua en `pages/_legacy-dcl-practica/`; split norm en `pages/_legacy-norm-split/`.

---

## Mapa de fusión (viejas 01–06 → nuevas 1–4)

| Antigua | Destino |
|---------|---------|
| clase-01-historia-* | Clase 1 página `historia-como-motivacion` (+ `_legacy-historia`) |
| clase-02-fundamentos-* | Clase 1 (resto de páginas) |
| clase-03-modelos-datos-er | Clase 2 |
| clase-04-ddl-dml-relacional | Clase 3 |
| clase-05-normalizacion-esquemas | Clase 4 (norm + BI) |
| clase-06-dcl-tcl-objetos-bd | Clase 4 (DCL/TCL/objetos) |

**Aliases:** URLs antiguas registradas en `_aliases/` + `LEGACY_CLASS_REDIRECTS` + `kb/content/legacy-redirects.json` → redirigen a las páginas nuevas (no están en `ALL_CLASSES`).

---

## Puentes pedagógicos (resumen)

1. **1→2:** de “sé nombrar una tabla” a “diseño ER con llaves”.  
2. **2→3:** de “diseño en papel” a “CREATE/INSERT/JOIN del mismo caso”.  
3. **3→4:** de “el esquema funciona” a “¿está limpio? ¿quién puede? ¿es atómico? ¿qué va en la app?”.

Cada clase: apertura con entregable previo → práctica + reto + miniquiz al cierre.
