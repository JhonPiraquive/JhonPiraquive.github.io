import { ChessBoardDemo } from "@/components/teaching/ChessBoardDemo";

export function DemoTableroSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Demo: tablero interactivo"}</h2>
      <p className="my-4">
        {
          "Antes del detalle teórico, el tablero simplificado permite seleccionar una pieza propia (resaltado), hacer un segundo clic para mover con reglas mínimas de rey o peón, alternar turno y usar la barra de acciones."
        }
      </p>
      <ChessBoardDemo
        title="Tablero de ajedrez — demo"
        rules="minimal"
        pieces={["K", "P"]}
        showToolbar
        toolbarActions={["nueva", "deshacer", "guardar", "cargar"]}
        highlightSelection
        promotePawnToQueen
      />
    </section>
  );
}
