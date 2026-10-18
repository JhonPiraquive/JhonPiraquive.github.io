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
    </section>
  );
}
