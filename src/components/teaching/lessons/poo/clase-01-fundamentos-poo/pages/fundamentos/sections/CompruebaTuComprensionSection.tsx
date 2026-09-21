import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Crea var cuenta = new CuentaBancaria(50); y llama cuenta.Retirar(80);. Mejora el mensaje de error para incluir saldo actual y monto solicitado."
        hints={["Usa string interpolation en InvalidOperationException", "Incluye Saldo y monto en el mensaje"]}
        expectedKeywords={["Fondos", "Saldo", "monto"]}
        successMessage="Correcto. Un mensaje claro ayuda a depurar y refuerza que el objeto protege sus invariantes."
      />
      <PracticeExercise
        prompt="Ordena el ciclo de vida: (a) constructor valida e inicializa, (b) objeto listo en memoria, (c) new Pedido(id), (d) métodos como Pagar() modifican estado con reglas. Indica el orden correcto."
        hints={["Primero new", "Luego constructor", "Después el objeto está listo", "Por último métodos"]}
        expectedKeywords={["c", "a", "b", "d"]}
        successMessage="Correcto. Orden: (c) new Pedido(id) → (a) constructor valida → (b) objeto listo → (d) métodos con reglas."
      />
      <PracticeExercise
        prompt="V/F con justificación: Dos instancias de la misma clase comparten el mismo estado automáticamente."
        hints={["Cada new crea un objeto independiente", "p1 y p2 pueden tener Precio distinto"]}
        expectedKeywords={["falso", "independiente", "new"]}
        successMessage="Correcto. Es falso: cada new crea un objeto con su propio estado en memoria."
      />
    </section>
  );
}
