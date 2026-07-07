export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio del encapsulamiento en C#. Este principio conecta la noción de clase y estado de la lección fundamentos con el diseño de dominio que usarás en herencia y el resto del track POO."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Encapsular no es esconder todo: es controlar el acceso y exponer operaciones seguras del dominio."
          }
        </li>
        <li>
          {
            "{ get; private set; } + métodos de dominio protegen invariantes mejor que setters públicos."
          }
        </li>
        <li>
          {
            "Invariantes se validan en constructor y en cada mutación — no solo en comentarios ni en la UI."
          }
        </li>
        <li>
          {
            "DTO vs dominio: transporte de datos vs objeto con reglas; no apliques el mismo nivel de rigor a ambos."
          }
        </li>
        <li>
          {
            "Reducir acoplamiento: los clientes dependen del contrato público, no de campos internos."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" lección "}
        <code>{"herencia"}</code>
        {" — protected, extensión de clases base y diseño de APIs heredables."}
      </p>
    </section>
  );
}
