import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="¿Qué ventaja tiene extraer lógica repetida a una función frente a copiar el mismo bloque en tres sitios del código?"
        hints={["Piensa en correcciones futuras", "Un nombre documenta la intención"]}
        expectedKeywords={["reutiliz", "corregir", "nombre", "legib"]}
        successMessage="Correcto. Reutilización, un solo lugar para corregir y un nombre que documenta la intención."
      />
      <PracticeExercise
        prompt="Ordena el flujo de const r = sumar(2, 3);: (a) se devuelve 5 al llamador, (b) se asigna 5 a r, (c) se invoca sumar con argumentos 2 y 3, (d) dentro de sumar, a vale 2 y b vale 3, (e) se evalúa a + b. Indica el orden correcto."
        hints={["Primero invocación, luego cuerpo, luego return, luego asignación"]}
        expectedKeywords={["c", "d", "e", "a", "b"]}
        successMessage="Correcto. Orden: (c) invocación → (d) parámetros → (e) evalúa → (a) return → (b) asigna a r."
      />
      <PracticeExercise
        prompt="Predice el resultado de function calcularTotal(precio, cantidad) { precio * cantidad; } seguido de console.log(calcularTotal(10, 3));. ¿Por qué?"
        hints={["Falta return", "Sin return la función devuelve undefined"]}
        expectedKeywords={["undefined", "return"]}
        successMessage="Correcto. Imprime undefined porque no hay return; el cálculo ocurre pero no se envía al llamador."
      />
    </section>
  );
}
