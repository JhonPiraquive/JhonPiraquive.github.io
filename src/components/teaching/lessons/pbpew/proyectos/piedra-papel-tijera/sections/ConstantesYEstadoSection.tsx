import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ConstantesYEstadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Constantes y estado inicial</h2>
      <p className="my-4">
        Declara opciones y emojis como <strong>solo lectura</strong> (<code>const</code>). El marcador vive
        en el scope del script y persiste entre rondas hasta reinicio manual o recarga.
      </p>
      <CodeFiddle
        language="javascript"
        code={`const OPCIONES = ["piedra", "papel", "tijera"];

const EMOJI = {
  piedra: "✊",
  papel: "✋",
  tijera: "✌️",
};

let marcador = { victorias: 0, empates: 0, derrotas: 0 };`}
      />
      <CodeChallenge
        title="Estado inicial del marcador"
        template={`const OPCIONES = ["piedra", "papel", "tijera"];

let marcador = {
  victorias: {{blank1}},
  empates: {{blank2}},
  derrotas: {{blank3}}
};`}
        blanks={[
          { id: "blank1", answer: "0", placeholder: "contador inicial" },
          { id: "blank2", answer: "0", placeholder: "contador inicial" },
          { id: "blank3", answer: "0", placeholder: "contador inicial" },
        ]}
      />
    </section>
  );
}
