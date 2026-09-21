import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <PracticeExercise
        prompt="Escribe CREATE DATABASE + CREATE TABLE Programas con PK, AUTO INCREMENT y UNIQUE; luego un INSERT del nombre largo con tildes."
        hints={["USE tras CREATE DATABASE", "Literales con comillas simples"]}
        expectedKeywords={["CREATE DATABASE", "AUTO_INCREMENT", "UNIQUE", "INSERT", "'"]}
        successMessage="Esquema creado y fila insertada con literal correcto."
        rows={5}
      />
      <PracticeExercise
        prompt="Escribe un SELECT con WHERE, ORDER BY y LIMIT sobre Programas."
        hints={["ORDER BY antes de LIMIT"]}
        expectedKeywords={["SELECT", "WHERE", "ORDER BY", "LIMIT"]}
        successMessage="Consulta filtrada, ordenada y limitada."
        rows={4}
      />
      <PracticeExercise
        prompt="Agrega por sede (GROUP BY) y filtra grupos con HAVING COUNT(*) >= 1."
        hints={["HAVING usa agregados", "WHERE sería antes del GROUP BY"]}
        expectedKeywords={["GROUP BY", "HAVING", "COUNT"]}
        successMessage="Agregación por sede con filtro de grupos."
        rows={4}
      />
      <PracticeExercise
        prompt="¿Qué pasa con DELETE FROM Programas sin WHERE si hay FK desde Inscripciones? 3–5 líneas."
        hints={["Todas las filas", "Restricción de FK puede bloquear"]}
        expectedKeywords={["WHERE", "todas", "FK", "backup"]}
        successMessage="Sin WHERE intenta borrar todas las filas; con FK puede fallar o cascada según definición — siempre WHERE + backup."
        rows={5}
      />
      <PracticeExercise
        prompt="Escribe INNER y LEFT JOIN Programas–Inscripciones y di cuál detecta programas sin inscritos."
        hints={["LEFT mantiene la izquierda", "Busca NULL en el lado derecho"]}
        expectedKeywords={["INNER JOIN", "LEFT JOIN", "NULL"]}
        successMessage="LEFT JOIN + filtro WHERE i.id IS NULL muestra programas sin inscritos."
        rows={5}
      />
    </section>
  );
}
