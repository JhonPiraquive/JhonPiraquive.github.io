export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"El cliente solicita; el servidor procesa y responde. No confundas cliente con «solo navegador»."}</li>
        <li>{"Abrir una URL implica DNS → TCP → TLS → HTTP antes del renderizado."}</li>
        <li>{"La arquitectura 3 capas protege la BD detrás de una API."}</li>
        <li>{"P2P, híbrido y serverless son variantes con trade-offs distintos."}</li>
        <li>{"Una página puede generar decenas de requests HTTP adicionales."}</li>
        <li>{"Microservicios escalan por servicio pero añaden complejidad operacional."}</li>
        <li>{"Comparar 2-Tier vs 3-Tier: seguridad, escalabilidad y exposición de BD."}</li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"herramientas-desarrollo"}</code>
          {" — XAMPP y Docker para entornos locales reproducibles."}
        </li>
      </ul>
    </section>
  );
}
