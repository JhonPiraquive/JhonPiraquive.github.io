import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce la abstracción como programación contra contratos: interfaces y clases abstractas."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar abstracción como ocultamiento de detalle y programación contra contratos en C#."
          }
        </li>
        <li>
          {
            "Implementar una interfaz con al menos dos implementaciones y un cliente que dependa solo del contrato (Caja + IPago)."
          }
        </li>
        <li>
          {
            "Diseñar una clase abstracta con flujo común y método abstract obligatorio en derivadas (Notificacion / EnviarCore)."
          }
        </li>
        <li>
          {
            "Comparar criterios de elección entre clase abstracta e interfaz según estado compartido, multi-rol y extensión."
          }
        </li>
        <li>
          {"Detectar abstracción prematura e interfaces sobredimensionadas en un diseño dado."}
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección asociacion-agregacion-composicion: composición e inyección de dependencias (Alarma + INotificador en herencia)."
          }
        </li>
        <li>{"Lección herencia: virtual/override, relación “es un”."}</li>
        <li>{"Lección encapsulamiento: constructores con validación, campos readonly."}</li>
      </ul>
      <Callout title="Abstraer con variación real">
        {
          "Introduce abstracciones cuando hay variaciones reales de implementación y el cliente debe permanecer estable. Interfaces o abstractas “por si acaso” añaden complejidad sin beneficio."
        }
      </Callout>
    </section>
  );
}
