import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Para cada par elige asociación, agregación o composición y justifica mencionando ciclo de vida: (1) Universidad–Departamento, (2) CarritoDeCompras–Producto, (3) Factura–LineaFactura, (4) Usuario–Sesion."
        hints={[
          "¿La parte puede existir sin el todo?",
          "¿Quién crea la parte?",
          "¿El vínculo es solo uso puntual o agrupación con reglas?",
        ]}
        expectedKeywords={["agregación", "composición", "ciclo de vida", "asociación"]}
        successMessage="Correcto. Usa ciclo de vida y propiedad como criterio principal, no solo la sintaxis de colecciones."
      />
      <PracticeExercise
        prompt="Implementa Cita con Doctor, Paciente y DateTime. Cambia Doctor.Atender(Paciente) por Doctor.Atender(Cita) imprimiendo fecha y nombres de ambos participantes."
        hints={[
          "Cita recibe doctor, paciente y fecha en el constructor",
          "Atender(Cita cita) accede a cita.Doctor, cita.Paciente, cita.Fecha",
          "Valida null en el constructor de Cita",
        ]}
        expectedKeywords={["Cita", "DateTime", "Atender"]}
        successMessage="Correcto. Has formalizado una asociación temporal con una clase de enlace."
      />
      <PracticeExercise
        prompt="En Biblioteca, quita un libro con Quitar(string titulo) y demuestra en comentarios o Main que el objeto Libro sigue usable si otra variable lo referencia."
        hints={[
          "Crea el Libro antes de agregarlo",
          "Guarda referencia en variable local",
          "Después de Quitar, imprime libro.Titulo desde la variable local",
        ]}
        expectedKeywords={["Quitar", "referencia", "sigue"]}
        successMessage="Correcto. Quitar de una agregación no destruye la parte en memoria."
      />
    </section>
  );
}
