export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de override y sobrecarga en C#. Son el complemento técnico del polimorfismo: override lo materializa en jerarquías; overload mejora APIs sin herencia."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Override"}</strong>
          {" = misma firma, herencia, runtime, override."}
        </li>
        <li>
          <strong>{"Overload"}</strong>
          {" = firmas distintas, misma clase, compile time."}
        </li>
        <li>
          <strong>{"new"}</strong>
          {" no sustituye a override en diseño polimórfico."}
        </li>
        <li>
          <strong>{"Elegir bien:"}</strong>
          {" herencia para especialización; overload para ergonomía."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"diagramas-de-clases"}</code>
        {" — modelar jerarquías y relaciones visualmente antes de codificar."}
      </p>
    </section>
  );
}
