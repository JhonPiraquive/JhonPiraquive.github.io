export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has visto cómo casi toda la web moderna sigue el modelo cliente-servidor: el cliente inicia, el servidor responde."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"El cliente solicita; el servidor procesa y responde. No confundas cliente con «solo navegador»."}</li>
        <li>{"Abrir una URL implica DNS → TCP → TLS → HTTP antes del renderizado."}</li>
        <li>{"La arquitectura 3 capas protege la BD detrás de una API."}</li>
        <li>{"Microservicios no son obligatorios; P2P, híbrido y serverless aplican según el caso."}</li>
        <li>{"Una página puede generar decenas de requests HTTP adicionales."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"herramientas-desarrollo"}</code>
        {" — XAMPP y Docker para levantar entornos locales reproducibles."}
      </p>
    </section>
  );
}
