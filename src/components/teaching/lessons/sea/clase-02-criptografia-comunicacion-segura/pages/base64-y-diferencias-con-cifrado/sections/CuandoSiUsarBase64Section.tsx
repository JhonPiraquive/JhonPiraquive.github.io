export function CuandoSiUsarBase64Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cuándo sí usar Base64"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Enviar datos binarios en JSON o texto (ej. pequeños adjuntos)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Evitar problemas de compatibilidad con caracteres."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Representar tokens o blobs de forma transportable (sin prometer seguridad)."}</li>
      </ul>
    </section>
  );
}
