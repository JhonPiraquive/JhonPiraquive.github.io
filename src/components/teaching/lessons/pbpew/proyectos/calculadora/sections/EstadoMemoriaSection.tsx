import { ClayCard } from "@/components/clay";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EstadoMemoriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Estado en memoria y pantalla"}</h2>
      <p className="my-4">{"Además del texto visible, el programa guarda en memoria:"}</p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-2 text-left font-semibold">
              {"Variable"}
            </th>
            <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-2 text-left font-semibold">
              {"Rol"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b px-4 py-2 font-mono">{"operandoActual"}</td>
            <td className="border-b px-4 py-2">
              {"Cadena o número en edición (lo que muestra la pantalla salvo error)"}
            </td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2 font-mono">{"operandoAnterior"}</td>
            <td className="border-b px-4 py-2">{"Primer operando guardado al pulsar un operador"}</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2 font-mono">{"operadorPendiente"}</td>
            <td className="border-b px-4 py-2">{"`+`, `-`, `*`, `/` pendiente de aplicar"}</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2 font-mono">{"esperandoNuevoOperando"}</td>
            <td className="border-b px-4 py-2">
              {"Tras operador o `=`, el siguiente dígito reemplaza la pantalla en lugar de concatenar"}
            </td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        {
          "Actualiza la pantalla con `display.textContent = valor`. Es seguro para números y mensajes de error; no interpreta HTML."
        }
      </p>
      <CompareTable
        headers={["Capa", "Responsabilidad"]}
        rows={[
          ["HTML", "Estructura, etiquetas de botones, atributos data-*"],
          ["CSS", "Rejilla, tamaño táctil (~44px mín.), contraste"],
          ["JavaScript", "Estado, listeners, cálculo, errores"],
          ["DOM (#display)", "Vista del estado — no base de datos"],
        ]}
      />
      <MermaidDiagram
        chart={`stateDiagram-v2
  [*] --> Inicio: cargar página
  Inicio --> Editando: dígito / punto
  Editando --> Editando: más dígitos
  Editando --> OperadorPendiente: + − × ÷
  OperadorPendiente --> Editando: dígito (nuevo operando)
  OperadorPendiente --> Resultado: =
  Editando --> Resultado: = (si hay operador)
  Resultado --> Editando: dígito (nuevo cálculo)
  OperadorPendiente --> Error: división por 0
  Editando --> Error: división por 0 en =
  Error --> Inicio: C
  Resultado --> OperadorPendiente: operador tras resultado
  Inicio --> Inicio: C`}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Sin eval()"}</strong>
        <p>
          {
            "No uses eval(expresion) ni Function() para evaluar. Construye la lógica con if/switch y operadores aritméticos: evitas riesgos de seguridad y refuerzas el control de flujo de la lección 04."
          }
        </p>
      </ClayCard>
    </section>
  );
}
