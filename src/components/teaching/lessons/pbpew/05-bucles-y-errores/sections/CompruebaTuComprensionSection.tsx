import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">
        {"Antes del cierre, verifica que puedes aplicar bucles, control de flujo y manejo de errores."}
      </p>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuántas veces se ejecuta el cuerpo de este while? Explica: let x = 5; while (x < 5) { console.log(x); x++; }"
          hints={["¿Cuándo se evalúa la condición?", "Compara con do...while"]}
          expectedKeywords={["cero", "0", "falsa", "inicio"]}
          successMessage="Correcto. Cero veces: x < 5 es falsa desde el inicio (x es 5). A diferencia de do...while, while no garantiza ninguna ejecución."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Predice la salida antes de ejecutar: for (let i = 0; i < 3; i++) { if (i === 1) break; console.log(i); }"
          hints={["break sale del bucle en i === 1", "¿Se alcanza console.log cuando i es 1?"]}
          expectedKeywords={["0", "break", "uno"]}
          successMessage="Correcto. Solo imprime 0. En i === 1, break sale antes del console.log; nunca se imprime 1 ni 2."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena el flujo try/catch: (a) se ejecuta catch si hay error, (b) se ejecuta el bloque try, (c) se ejecuta finally si existe, (d) si no hay error, catch se omite. ¿Orden lógico de ejecución?"
          hints={["try siempre entra primero", "finally siempre al final del bloque"]}
          expectedKeywords={["try", "catch", "finally", "b"]}
          successMessage="Correcto. Orden: (b) try → (a) catch solo si hay error, o (d) se omite catch → (c) finally siempre."
        />
      </div>
    </section>
  );
}
