# Clase 5 — Redundancia, normalización, desnormalización y esquemas dimensionales

**Posición en la curva:** después de diseñar ER y tablas (clase 4). Ahora se aprende a **limpiar** el diseño y a decidir cuándo no normalizar.

**Modo docente + autoestudio:** guía paso a paso “como en el pizarrón”: tabla mal diseñada → detectar problema → aplicar forma normal → ver resultado. Ejercicios de refuerzo en cada forma.

## Objetivos de la clase
1. Explicar redundancia y sus riesgos (anomalías de inserción/actualización/borrado).
2. Definir dependencia funcional (DF).
3. Aplicar 1FN, 2FN y 3FN (y mención breve de BCNF) con procedimiento ejecutable.
4. Explicar desnormalización: cuándo y por qué (rendimiento/lecturas).
5. Distinguir esquema en estrella vs copo de nieve (snowflake) y relacionarlos con normalización de dimensiones.

## Bloques (orden de aprendizaje)

### 1. Redundancia
Qué es, por qué aparece, consecuencias con ejemplo de facturas/clientes duplicados.

### 2. Dependencia funcional
A → B en lenguaje simple (“si conozco A, determino B”).
Ejemplos con `id_programa → Nombre_Programa`.

### 3. Formas normales — cómo ejecutarlas
Para cada forma: definición → checklist → ejemplo “antes/después” → CodeFiddle SQL → malas prácticas.

| Forma | Idea en una frase | Cómo ejecutarla |
|-------|-------------------|-----------------|
| 1FN (1NF) | Valores atómicos; sin grupos repetidos | Separar listas multivalor en filas/tablas |
| 2FN (2NF) | Sin dependencias parciales de PK compuesta | Extraer atributos que dependen solo de parte de la clave |
| 3FN (3NF) | Sin dependencias transitivas | Extraer atributos que dependen de no-clave |
| BCNF | Refuerzo de 3FN (mención) | Cuando hay DF raras entre determinantes |

### 4. Desnormalización
Qué es, para qué (reportes, lecturas masivas), riesgos, ejemplo consciente.

### 5. Estrella vs copo de nieve
- Estrella: hecho + dimensiones desnormalizadas.
- Copo de nieve: dimensiones normalizadas (jerarquías en tablas).
Diagramas Mermaid + cuándo usar cada uno en BI/analítica.

### Cierre
PracticeExercise (normalizar una tabla “sucia”), reto, quiz.
