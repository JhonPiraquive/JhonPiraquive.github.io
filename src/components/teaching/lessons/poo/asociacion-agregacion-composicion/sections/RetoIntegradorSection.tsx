import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: biblioteca y tienda en consola"}
      </h2>
      <p className="my-4">
        {"Prototipo .NET que demuestre los tres tipos de relación en dominios distintos."}
      </p>
      <p className="my-4 font-semibold">{"Parte A — Asociación"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Clases Profesor, Estudiante, Clase (nombre de materia, DateTime, referencias a profesor y lista de estudiantes inscritos)."
          }
        </li>
        <li>{"Método Profesor.Dictar(Clase) que imprime materia, fecha y cantidad de estudiantes."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte B — Agregación"}</p>
      <ol className="my-4 list-decimal pl-6" start={3}>
        <li>{"Biblioteca con Agregar, Quitar, Listar; libros creados en Main antes de agregarse."}</li>
        <li>{"Demostrar que tras Quitar, una variable local al Libro sigue imprimiendo su título."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte C — Composición"}</p>
      <ol className="my-4 list-decimal pl-6" start={5}>
        <li>{"Pedido que solo crea LineaPedido vía AgregarLinea; sin exponer la lista."}</li>
        <li>{"QuitarProducto, Total() y al menos dos líneas con total correcto en Main."}</li>
      </ol>
      <p className="my-4 font-semibold">{"Parte D — Justificación"}</p>
      <ol className="my-4 list-decimal pl-6" start={7}>
        <li>
          {
            "Párrafo breve: por qué Clase no hereda de Estudiante y por qué LineaPedido no se pasa ya construida desde Main."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: compila; las tres relaciones son distinguibles en código y justificación; ninguna relación “tiene un” usa herencia."
        }
      </p>
      <PracticeExercise
        prompt="Redacta la justificación (Parte D): ¿por qué Clase no hereda de Estudiante y por qué LineaPedido no se construye en Main?"
        hints={[
          "Estudiante no es un tipo de Clase — son roles distintos en asociación",
          "LineaPedido solo tiene sentido dentro de un Pedido concreto",
          "El Pedido debe controlar creación y reglas de sus líneas",
        ]}
        expectedKeywords={["herencia", "composición", "asociación", "ciclo de vida"]}
        successMessage="Excelente. Has distinguido colaboración, agrupación débil y parte fuerte."
        rows={6}
      />
    </section>
  );
}
