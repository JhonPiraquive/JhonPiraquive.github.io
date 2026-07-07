import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Modularidad, cohesión y acoplamiento son los tres pilares que integran todo el track de Programación Orientada a Objetos (POO): fundamentos, relaciones, abstracción, polimorfismo, SOLID y modelado visual en criterios de diseño mantenible."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir modularidad, cohesión y acoplamiento y su relación con SOLID y POO."
          }
        </li>
        <li>
          {
            "Identificar baja cohesión (Utilidades mezclada) y alto acoplamiento (new de concretos en dominio)."
          }
        </li>
        <li>
          {
            "Proponer división en módulos/clases con nombres de dominio y 2–3 interfaces de frontera."
          }
        </li>
        <li>
          {
            "Implementar intercambio de implementación (Memoria/Sql, Pdf/Html) sin modificar servicio de aplicación."
          }
        </li>
        <li>
          {
            "Aplicar el checklist práctico (SRP, OCP, DIP, ISP, cohesión, acoplamiento) a un mini-sistema mezclado."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección solid-principios: SRP, OCP, LSP, ISP, DIP como base del checklist."}</li>
        <li>{"Lección diagramas-de-clases: diagramar dependencias entre módulos."}</li>
        <li>{"Lección abstraccion-clases-abstractas-interfaces: contratos e inyección."}</li>
        <li>{"Lección polimorfismo: variantes intercambiables bajo un contrato."}</li>
      </ul>
      <Callout title="Objetivo de diseño">
        {
          "Alta cohesión dentro del módulo + bajo acoplamiento entre módulos. SOLID y POO son medios para llegar ahí."
        }
      </Callout>
      <CompareTable
        headers={["Concepto", "Pregunta clave", "Ideal"]}
        rows={[
          ["Modularidad", "¿Tiene límites y API claros?", "Módulos con propósito y fronteras"],
          ["Cohesión", "¿Las partes trabajan al mismo objetivo?", "Alta — una idea por clase"],
          ["Acoplamiento", "¿Cuánto depende A de B?", "Bajo — contratos, no concretos"],
        ]}
      />
    </section>
  );
}
