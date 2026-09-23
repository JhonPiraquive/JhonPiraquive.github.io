export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Ya distingues cuándo Tienda Andes especializa productos con herencia y cuándo conecta servicios con composición. Esa decisión aparece en cada módulo del track de POO."
        }
      </p>
      <p className="my-4 font-semibold">{"Llévate esto:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Herencia = «es un» + virtual/override + base(...)."}</li>
        <li>{"Composición = «tiene un» o «usa un»; intercambias implementaciones con interfaces."}</li>
        <li>{"Pregunta clave: ¿puedo usar la derivada donde uso la base sin romper reglas del negocio?"}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"override-y-sobrecarga"}</code>
        {" — redefinir en la jerarquía vs varias firmas del mismo nombre."}
      </p>
    </section>
  );
}
