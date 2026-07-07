export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir Base64 como codificación, no como seguridad."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Describir 3 casos válidos de uso (transporte, compatibilidad, blobs)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Detectar 3 errores comunes (usar Base64 como “cifrado”)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar la diferencia entre codificación, cifrado y hash con 1 ejemplo cada uno."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Proponer una regla para manejo de secretos: “si está en Base64, no está protegido”."}</li>
      </ul>
    </section>
  );
}
