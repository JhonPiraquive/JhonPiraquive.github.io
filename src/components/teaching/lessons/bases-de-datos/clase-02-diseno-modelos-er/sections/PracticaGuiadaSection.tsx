import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <PracticeExercise
        prompt="¿Qué gana Rutas Digitales al pasar por conceptual → lógico → físico antes del SQL? 4–6 líneas."
        hints={["Alineación con el negocio", "Menos retrabajo de DDL"]}
        expectedKeywords={["requisitos", "conceptual", "lógico", "físico", "retrabajo"]}
        successMessage="El plano compartido reduce tablas mal pensadas y DDL que hay que tirar."
        rows={5}
      />
      <PracticeExercise
        prompt="Describe o dibuja un ER Programa–Estudiante–Inscripción con cardinalidades (usa 1:N / N:M según corresponda)."
        hints={["Inscripción es el vínculo", "Un estudiante en muchos programas"]}
        expectedKeywords={["1:N", "N:M", "Inscripciones", "Programas", "Estudiantes"]}
        successMessage="N:M se resuelve con Inscripciones (puente) y FKs a ambas entidades."
        rows={5}
      />
      <PracticeExercise
        prompt="Ordena: (a) CREATE hijas, (b) requisitos, (c) ER, (d) CREATE padres, (e) tipos físicos, (f) INSERT prueba."
        hints={["Primero entender, luego dibujar, luego DDL", "Padres antes que hijas"]}
        expectedKeywords={["requisitos", "ER", "físicos", "padres", "hijas", "INSERT"]}
        successMessage="b → c → e → d → a → f."
        rows={5}
      />
      <PracticeExercise
        prompt="Programa–Instructor es N:M. Escribe el esqueleto DDL con tabla puente y dos FKs (padres primero)."
        hints={["Tablas Programas e Instructores primero", "Puente con programa_id e instructor_id"]}
        expectedKeywords={["CREATE TABLE", "FOREIGN KEY", "puente", "instructor"]}
        successMessage="Padres + tabla puente con FKs a ambos lados."
        rows={5}
      />
      <PracticeExercise
        prompt='Elige familia (relacional / documentos / grafo) para: facturas; caché de sesión; “quién estudió con quién”. Una frase por escenario.'
        hints={["Integridad → relacional", "Clave simple → KV", "Caminos → grafo"]}
        expectedKeywords={["relacional", "clave-valor", "grafo", "documentos"]}
        successMessage="Facturas: relacional. Sesión: clave-valor. Co-estudio: grafo (o capa)."
        rows={5}
      />
    </section>
  );
}
