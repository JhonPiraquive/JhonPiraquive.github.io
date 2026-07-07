import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Predice y luego ejecuta en consola: const a = { n: 1 }; const b = a; b.n = 2; console.log(a.n); — ¿qué imprime y por qué?"
        hints={["Objetos se asignan por referencia", "a y b apuntan al mismo objeto en memoria"]}
        expectedKeywords={["2", "referencia", "mismo"]}
        successMessage="Correcto. Imprime 2 porque a y b comparten la misma referencia; mutar vía b afecta a a."
      />
      <PracticeExercise
        prompt="Declara let intentos = 0, incrementa dos veces y muestra el resultado con console.log. Luego declara const MAX_INTENTOS = 3 e intenta reasignarla; anota el nombre del error que obtienes."
        hints={["intentos = intentos + 1", "Reasignar const lanza TypeError"]}
        expectedKeywords={["2", "TypeError", "const"]}
        successMessage="Correcto. intentos llega a 2; reasignar MAX_INTENTOS produce TypeError: Assignment to constant variable."
      />
      <PracticeExercise
        prompt="Ordena mentalmente la fase de hoisting con let: (a) motor entra en TDZ para x, (b) se ejecuta let x = 10, (c) lectura de x antes de su línea lanza ReferenceError, (d) tras la línea de declaración, x es legible. ¿Cuál ocurre primero y cuál último?"
        hints={["Hoisting ocurre antes de ejecutar línea a línea", "TDZ existe desde hoisting hasta la declaración"]}
        expectedKeywords={["TDZ", "ReferenceError", "declaración"]}
        successMessage="Correcto. Orden: (a) TDZ al hoisting → (c) error si lees antes → (b) declaración inicializa → (d) x usable."
      />
    </section>
  );
}
