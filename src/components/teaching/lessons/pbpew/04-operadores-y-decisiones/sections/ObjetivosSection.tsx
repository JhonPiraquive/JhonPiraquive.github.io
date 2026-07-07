import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección presenta los operadores que transforman o comparan valores y las estructuras de decisión que ejecutan código solo cuando se cumplen condiciones. El dominio técnico sigue el brief del topic-expert; los objetivos medibles se listan abajo."
        }
      </p>
      <p className="my-4">
        {
          "Un operador es un símbolo o palabra que actúa sobre uno o dos operandos (valores o variables) y produce un resultado. En esta lección cubrimos operadores aritméticos, de comparación y lógicos, además de `if` / `else if` / `else` y `switch`."
        }
      </p>
      <Callout title="Regla del curso">
        {
          "En PBPEW y en código nuevo de producción, usa siempre === y !== en comparaciones. Reserva == solo si dominas la coerción y documentas el motivo. En formularios y APIs los datos suelen llegar como string — la igualdad suelta oculta errores difíciles de depurar."
        }
      </Callout>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Aplicar"}</strong>
          {" operadores aritméticos (`+`, `-`, `*`, `/`, `%`, `**`) y "}
          <strong>{"explicar"}</strong>
          {" precedencia y el efecto de `+` con strings (coerción)."}
        </li>
        <li>
          <strong>{"Comparar"}</strong>
          {" valores con `===` y `!==`, "}
          <strong>{"reconocer"}</strong>
          {" cuándo `==` aplica coerción y "}
          <strong>{"justificar"}</strong>
          {" por qué se evita en código nuevo del curso."}
        </li>
        <li>
          <strong>{"Identificar"}</strong>
          {" valores truthy y falsy y "}
          <strong>{"usar"}</strong>
          {" operadores lógicos (`&&`, `||`, `!`) con cortocircuito en expresiones condicionales."}
        </li>
        <li>
          <strong>{"Escribir"}</strong>
          {" cadenas `if` / `else if` / `else` con validación previa (`Number.isNaN`) para clasificar rangos numéricos."}
        </li>
        <li>
          <strong>{"Implementar"}</strong>
          {" `switch` con `break`, "}
          <strong>{"distinguir"}</strong>
          {" fall-through intencional de accidental y "}
          <strong>{"elegir"}</strong>
          {" entre `if` y `switch` según el criterio del problema."}
        </li>
      </ul>
    </section>
  );
}
