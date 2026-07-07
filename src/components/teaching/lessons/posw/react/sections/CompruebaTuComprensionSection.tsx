import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué `setCuenta(cuenta + 1)` puede fallar si hay múltiples actualizaciones rápidas? ¿Qué forma es más segura?"
          hints={["Estado asíncrono", "Forma funcional", "c => c + 1"]}
          expectedKeywords={["funcional", "setter", "asíncrono"]}
          successMessage="Correcto. La forma funcional setCuenta(c => c + 1) usa el valor más reciente del estado."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un useEffect hace fetch pero no tiene array de dependencias ni cleanup. ¿Qué bugs pueden aparecer?"
          hints={["Bucle infinito", "Race condition", "Warning al desmontar"]}
          expectedKeywords={["infinito", "desmontar", "dependencias"]}
          successMessage="Correcto. Sin deps puede buclear; sin cleanup actualiza estado tras desmontar o aplica datos obsoletos."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué usar p.id como key en lugar del índice del array en una lista de productos editable?"
          hints={["Reconciliación", "Reordenar o borrar", "Virtual DOM"]}
          expectedKeywords={["key", "id", "reconciliación", "índice"]}
          successMessage="Correcto. El índice cambia al reordenar; React reutiliza nodos incorrectamente."
        />
      </div>
    </section>
  );
}
