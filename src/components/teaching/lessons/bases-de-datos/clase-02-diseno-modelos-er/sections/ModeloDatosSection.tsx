export function ModeloDatosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Modelo de datos"}
      </h2>
      <p className="my-4">
        {
          "Representación estructurada del negocio: entidades, atributos y relaciones, con reglas de identificación. No es el motor ni el Excel: es el plano."
        }
      </p>
      <p className="my-4 font-semibold">{"Pasos de diseño"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Recoger requisitos con el cliente."}</li>
        <li>{"Identificar entidades."}</li>
        <li>{"Listar atributos."}</li>
        <li>{"Definir relaciones y cardinalidad."}</li>
        <li>{"Refinar con el negocio."}</li>
        <li>{"Bajar a lógico y luego a físico."}</li>
      </ol>
      <p className="my-4">
        {
          "Ejemplo academia: “un estudiante se inscribe en uno o más programas” ya es modelo — aún sin VARCHAR ni AUTO_INCREMENT."
        }
      </p>
    </section>
  );
}
