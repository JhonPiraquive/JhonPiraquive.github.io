import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ProyectoCapstoneSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Proyecto capstone: integrar todo el track"}
      </h2>
      <p className="my-4">
        {
          "Este proyecto combina representación de datos (matriz 2D), renderizado DOM, eventos de clic, validación con condicionales, funciones reutilizables, estado mutable controlado, estructuras auxiliares (pila para deshacer, localStorage para guardar) y —opcionalmente— clases para modelar piezas."
        }
      </p>
      <p className="my-4 font-semibold">{"La progresión recomendada:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Tablero estático"}</li>
        <li>{"Clic y selección"}</li>
        <li>{"Movimiento con reglas mínimas"}</li>
        <li>{"Turnos y varias piezas"}</li>
        <li>{"Deshacer/guardar"}</li>
        <li>{"Jaque/mate con chess.js o lógica propia reducida"}</li>
      </ol>
      <MermaidDiagram
        chart={`flowchart TB
  subgraph vista [Vista]
    GRID[CSS Grid 8x8]
    SYM[Unicode piezas]
    EVT[Delegacion click]
  end
  subgraph control [Controlador]
    SEL[seleccion dos clics]
    UND[Deshacer pila]
    IO[Guardar Cargar]
  end
  subgraph modelo [Modelo]
    MAT[tablero fila col]
    VAL[movimientoLegal]
    TUR[turno w b]
  end
  EVT --> SEL
  SEL --> VAL
  VAL --> MAT
  SEL --> GRID
  UND --> MAT
  IO --> MAT`}
      />
      <Callout title="Convención PBPEW">
        {
          "Usa siempre tablero[fila][col] con fila y col entre 0 y 7. Elige si fila 0 es la fila superior del array (piezas negras) o la inferior, documenta la convención y no inviertas fila/columna en validación y render."
        }
      </Callout>
    </section>
  );
}
