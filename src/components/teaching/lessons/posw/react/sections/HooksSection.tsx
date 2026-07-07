import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CompareTable } from "@/components/teaching/CompareTable";

export function HooksSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Hooks principales"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Hooks: funciones que conectan componentes funcionales con capacidades de React."}</li>
        <li>{"useState: estado local."}</li>
        <li>{"useEffect: efectos secundarios tras render."}</li>
        <li>{"useContext: consumir contexto sin props drilling."}</li>
        <li>{"useRef: referencia mutable que no causa re-render."}</li>
        <li>{"useMemo / useCallback: optimización de cálculos y funciones."}</li>
      </ul>
      <CompareTable
        headers={["Hook", "Propósito", "Cuándo usar"]}
        rows={[
          ["useState", "Estado local", "Contador, formularios, flags de UI"],
          ["useEffect", "Efectos secundarios", "Fetch API, suscripciones, timers"],
          ["useContext", "Contexto compartido", "Tema, usuario autenticado, idioma"],
          ["useReducer", "Estado complejo", "Múltiples sub-valores con acciones"],
          ["useRef", "Referencia DOM o valor mutable", "Focus en input, guardar valor sin re-render"],
          ["useMemo", "Memoizar cálculo costoso", "Filtrar lista grande sin recalcular cada render"],
        ]}
      />
      <Callout title="Solo en el nivel superior">
        {
          "No llames hooks dentro de condicionales, bucles o funciones anidadas. Siempre en el cuerpo del componente funcional, en el mismo orden en cada render."
        }
      </Callout>
      <CodeChallenge
        title="Completa la actualización del contador"
        template="setCuenta(c => {{blank1}})"
        blanks={[{ id: "blank1", answer: "c + 1", placeholder: "nuevo valor" }]}
      />
    </section>
  );
}
