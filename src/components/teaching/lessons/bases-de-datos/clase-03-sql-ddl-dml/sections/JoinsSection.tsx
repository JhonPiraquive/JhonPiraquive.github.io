import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const JOINS_CHART = `flowchart LR
  subgraph INNER[INNER JOIN]
    I[Solo coincidencias]
  end
  subgraph LEFTJ[LEFT JOIN]
    L[Toda tabla1 + matches]
    L2[Sin match: NULL a la derecha]
  end
  subgraph RIGHTJ[RIGHT JOIN]
    R[Toda tabla2 + matches]
    R2[Sin match: NULL a la izquierda]
  end`;

const SQL = `SELECT p.Nombre_Programa, i.Nombre_Estudiante
FROM Programas p
INNER JOIN Inscripciones i ON i.programa_id = p.id;

SELECT p.Nombre_Programa, i.Nombre_Estudiante
FROM Programas p
LEFT JOIN Inscripciones i ON i.programa_id = p.id;

-- Programas sin inscritos:
-- SELECT p.Nombre_Programa
-- FROM Programas p
-- LEFT JOIN Inscripciones i ON i.programa_id = p.id
-- WHERE i.id IS NULL;

SELECT p.Nombre_Programa, i.Nombre_Estudiante
FROM Programas p
RIGHT JOIN Inscripciones i ON i.programa_id = p.id;`;

export function JoinsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"INNER, LEFT y RIGHT JOIN"}
      </h2>
      <p className="my-4">
        {
          "Vimos FK en el ER; ahora las consultas. Elige el JOIN según la pregunta de negocio."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"JOIN"}</th>
            <th className="py-2 text-left font-semibold">{"Idea"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"INNER"}</td>
            <td className="py-2">{"Solo coincidencias"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"LEFT"}</td>
            <td className="py-2">{"Toda la izquierda + matches; NULL a la derecha si no hay"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"RIGHT"}</td>
            <td className="py-2">{"Toda la derecha + matches; NULL a la izquierda si no hay"}</td>
          </tr>
        </tbody>
      </table>
      <MermaidDiagram
        title="JOINs — visión de conjuntos"
        description="INNER solo coincidencias; LEFT toda tabla1; RIGHT toda tabla2"
        chart={JOINS_CHART}
      />
      <CompareTable
        headers={["JOIN", "Qué conserva", "NULL", "Pregunta de negocio"]}
        rows={[
          ["INNER JOIN", "Solo filas con valor común", "No incluye no-matches", "Programas que YA tienen inscritos"],
          ["LEFT JOIN", "Toda la tabla izquierda", "NULL a la derecha", "Todos los programas, con o sin inscritos"],
          ["RIGHT JOIN", "Toda la tabla derecha", "NULL a la izquierda", "Todas las inscripciones"],
        ]}
      />
      <CodeFiddle language="sql" title="INNER / LEFT / RIGHT JOIN" code={SQL} />
      <Callout title="INNER no es el JOIN por defecto del negocio" variant="callout-info">
        {
          "Caso El Tornillo: reportar “todos se venden” con INNER oculta productos sin ventas. Corrección: LEFT + WHERE v.id IS NULL."
        }
      </Callout>
    </section>
  );
}
