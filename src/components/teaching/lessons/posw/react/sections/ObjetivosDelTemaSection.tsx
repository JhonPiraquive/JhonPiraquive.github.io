import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre qué es React, reglas de JSX, componentes funcionales, props y estado con hooks, y efectos secundarios con useEffect para consumir APIs REST."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir React como librería de UI basada en componentes, Virtual DOM y flujo unidireccional de datos."
          }
        </li>
        <li>
          {
            "Escribir JSX siguiendo sus reglas (className, un elemento raíz, expresiones {}, componentes con mayúscula)."
          }
        </li>
        <li>
          {
            "Construir componentes funcionales con props tipadas y composición padre-hijo (incluyendo key en listas)."
          }
        </li>
        <li>{"Gestionar estado local con useState (valores simples y objetos en formularios)."}</li>
        <li>
          {
            "Aplicar useEffect para efectos secundarios (fetch a API REST, limpieza al desmontar) y nombrar hooks principales."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección typescript: interfaces, tipos y props tipadas."}</li>
        <li>{"Lección angular: componentes, bindings y consumo de APIs REST (para comparar enfoques)."}</li>
        <li>{"Familiaridad con HTML, CSS y conceptos de SPA."}</li>
      </ul>
      <Callout title="React es librería, no framework">
        {
          "React cubre la capa de UI. Routing, estado global y data fetching suelen añadirse con librerías del ecosistema (React Router, TanStack Query, etc.)."
        }
      </Callout>
    </section>
  );
}
