import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <PracticeExercise
        prompt="Describir la anomalía de actualización cuando el teléfono de la sede se repite en cada fila de Programas."
        hints={["Hay que cambiarlo en N sitios", "Olvidar una fila deja datos contradictorios"]}
        expectedKeywords={["actualización", "redundancia", "teléfono", "sede"]}
        successMessage="Hay que actualizar muchas filas; si se olvida una, la verdad diverge."
        rows={5}
      />
      <PracticeExercise
        prompt="Pasar una celda con programas = 'A, B' a un esquema en 1FN, describiendo las tablas y filas resultantes."
        hints={["Una fila por valor", "O una tabla hija de inscripción"]}
        expectedKeywords={["1FN", "atómico", "fila", "CSV"]}
        successMessage="Cada programa va en su propia fila (o relación); no hay listas dentro de una celda."
        rows={5}
      />
      <PracticeExercise
        prompt="Ordenar los pasos: tabla sucia, dependencias funcionales, 1FN, 2FN, 3FN y BCNF (como mención)."
        hints={["Primero se listan las dependencias", "BCNF es un refuerzo al final"]}
        expectedKeywords={["DF", "1FN", "2FN", "3FN", "BCNF"]}
        successMessage="Sucia → DFs → 1FN → 2FN → 3FN → mención de BCNF."
        rows={5}
      />
      <PracticeExercise
        prompt="La clave primaria es (estudiante_id, programa_id) y Nombre_Programa depende solo de programa_id. Escribir el DDL en 2FN, extrayendo Programas y agregando la clave foránea."
        hints={["Programas es la tabla padre", "Inscripción guarda solo claves foráneas"]}
        expectedKeywords={["CREATE TABLE", "FOREIGN KEY", "Nombre_Programa", "programa_id"]}
        successMessage="Nombre_Programa sale de la inscripción y vive en Programas."
        rows={5}
      />
      <PracticeExercise
        prompt="En 4–6 líneas, contrastar la desnormalización consciente (un snapshot en la factura) con la incorrecta (copiar nombres en cuatro tablas operativas sin sincronizar)."
        hints={["Quién es dueño de la verdad", "Historia frente a operación"]}
        expectedKeywords={["snapshot", "factura", "sync", "3FN", "riesgo"]}
        successMessage="Un snapshot documentado en documentos históricos no equivale a duplicar datos sin dueño en tablas operativas."
        rows={5}
      />
      <PracticeExercise
        prompt="Ordenar: (a) CREATE de las tablas hijas, (b) requisitos, (c) ER, (d) CREATE de las tablas padre, (e) tipos físicos, (f) INSERT de prueba."
        hints={["Primero entender, luego dibujar, luego DDL", "Padres antes que hijas"]}
        expectedKeywords={["requisitos", "ER", "físicos", "padres", "hijas", "INSERT"]}
        successMessage="b → c → e → d → a → f."
        rows={5}
      />
      <PracticeExercise
        prompt="Programa–Instructor es N:M. Escribir el esqueleto DDL con tabla puente y dos claves foráneas, creando los padres primero."
        hints={["Tablas Programas e Instructores primero", "El puente lleva programa_id e instructor_id"]}
        expectedKeywords={["CREATE TABLE", "FOREIGN KEY", "puente", "instructor"]}
        successMessage="Primero los padres y después la tabla puente con claves foráneas hacia ambos lados."
        rows={5}
      />
      <PracticeExercise
        prompt="Escribir CREATE DATABASE y CREATE TABLE Programas con clave primaria, AUTO_INCREMENT y UNIQUE; luego un INSERT del nombre largo con tildes."
        hints={["USE después de CREATE DATABASE", "Literales entre comillas simples"]}
        expectedKeywords={["CREATE DATABASE", "AUTO_INCREMENT", "UNIQUE", "INSERT", "'"]}
        successMessage="Esquema creado y fila insertada con el literal correcto."
        rows={5}
      />
    </section>
  );
}
