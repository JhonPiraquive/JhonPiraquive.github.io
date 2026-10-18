import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <PracticeExercise
        title="Reto integrador de la clase"
        prompt="Un empleado recibe un correo urgente del supuesto gerente que pide las credenciales del panel de administración. Indicar qué principios de CIA y autenticidad están en riesgo y cuál es la primera acción correcta."
        hints={["Pensar en quién dice ser el remitente y en quién debería poder ver las credenciales.", "La primera acción no es responder ni abrir el enlace."]}
        expectedKeywords={["autenticidad", "confidencialidad", "reportar", "verificar"]}
        rows={5}
      />
    </section>
  );
}
