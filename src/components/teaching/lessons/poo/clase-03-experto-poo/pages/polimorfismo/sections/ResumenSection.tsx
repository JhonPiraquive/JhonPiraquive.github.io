export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Polimorfismo:"}</strong>
          {" misma llamada, comportamiento según tipo real del objeto en runtime."}
        </li>
        <li>
          <strong>{"Con interfaz:"}</strong>
          {" IPasarelaPago + Checkout; inyección y bucles sin switch."}
        </li>
        <li>
          <strong>{"Con abstracta:"}</strong>
          {" Impuesto + override; List<Impuesto> homogénea."}
        </li>
        <li>
          <strong>{"Cliente estable:"}</strong>
          {" nuevas variantes sin editar Checkout ni Factura."}
        </li>
        <li>
          <strong>{"Evitar:"}</strong>
          {" new sin polimorfismo, if por tipo, listas de tipo concreto."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" override-y-sobrecarga — matiza redefinición vs sobrecarga."}
        </li>
      </ul>
    </section>
  );
}
