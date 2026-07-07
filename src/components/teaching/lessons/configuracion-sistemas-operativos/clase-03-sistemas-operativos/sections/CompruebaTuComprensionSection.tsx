import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué hace el planificador de procesos del SO y qué señal indica que está saturado?"
          hints={["Quantum de CPU", "Cola de procesos", "100 % CPU sostenido"]}
          expectedKeywords={["CPU", "proceso", "prioridad", "cola", "satur"]}
          successMessage="Correcto: asigna tiempo de CPU entre procesos; saturación se ve en CPU al 100 %, swap o un proceso dominante."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Diferencia ruta absoluta y relativa en Linux con un ejemplo cada una desde /home/tec."
          hints={["Empieza en /", "pwd actual", ".."]}
          expectedKeywords={["/", "home", "relativa", "absoluta"]}
          successMessage="Bien: absoluta /home/tec/docs/informe.pdf; relativa docs/informe.pdf desde /home/tec."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué permiso octal 644 concede al propietario, grupo y otros?"
          hints={["6 = 4+2", "4 = solo lectura"]}
          expectedKeywords={["lectura", "escritura", "644", "rw"]}
          successMessage="Correcto: propietario rw- (6), grupo y otros r-- (4)."
        />
      </div>
    </section>
  );
}
