import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "SOLID son cinco principios de diseño orientado a objetos de Robert C. Martin (\"Uncle Bob\"). Reducen acoplamiento, aumentan cohesión y facilitan tests y mantenimiento en APIs y backends."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar el acrónimo SOLID y nombrar cada principio con su regla en una frase."}</li>
        <li>{"Detectar violaciones de SRP cuando una clase mezcla negocio, persistencia y notificaciones."}</li>
        <li>{"Aplicar OCP mediante interfaces o estrategias para extender sin modificar código existente."}</li>
        <li>
          {
            "Reconocer violaciones de LSP, ISP y DIP (subtipos que rompen contratos, interfaces gordas, new de concreciones en servicios)."
          }
        </li>
        <li>{"Decidir cuándo aplicar SOLID en capas de API/backend sin caer en sobre-ingeniería dogmática."}</li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección bases-de-datos: repositorios y capa de datos separada del cliente."}</li>
        <li>{"Familiaridad con clases, interfaces y herencia en TypeScript o C#."}</li>
        <li>{"Noción de capas en backend: controlador → servicio → persistencia."}</li>
      </ul>
      <Callout title="Cuándo no aplicar SOLID al extremo">
        {
          "Un CRUD de tres campos que no cambiará en años no necesita 15 interfaces. Aplica SOLID donde hay cambio frecuente, equipos grandes o tests unitarios críticos. El criterio es costo de mantenimiento, no pureza teórica."
        }
      </Callout>
    </section>
  );
}
