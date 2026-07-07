export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre del track de Programación Orientada a Objetos (POO)"}</h2>
      <p className="my-4">
        {
          "Has completado el track de Programación Orientada a Objetos en C#. Esta lección integra todo lo aprendido en criterios prácticos de diseño mantenible."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Modularidad"}</strong>
          {" — límites, API, dependencias controladas."}
        </li>
        <li>
          <strong>{"Alta cohesión"}</strong>
          {" — un objetivo por clase; evitar Utilidades cajón de sastre."}
        </li>
        <li>
          <strong>{"Bajo acoplamiento"}</strong>
          {" — contratos e inyección; concretos en Main."}
        </li>
        <li>
          <strong>{"Checklist"}</strong>
          {" — SRP, OCP, LSP, ISP, DIP + cohesión + acoplamiento antes de merge."}
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Recorrido del track:"}</p>
      <p className="my-4">
        {
          "Fundamentos → encapsulamiento → herencia → relaciones → abstracción → polimorfismo → override/overload → diagramas → SOLID → modularidad, cohesión y acoplamiento."
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {
          " aplica el checklist en tus proyectos. Revisa diagramas, separa módulos y sustituye Utilidades y switch por contratos polimórficos."
        }
      </p>
    </section>
  );
}
