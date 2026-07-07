export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Diferenciar cifrado, descifrado, hash y firma (conceptualmente)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar por qué “encriptación” se usa comúnmente, pero el concepto correcto es “cifrado”."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Seleccionar técnica adecuada para 4 casos: contraseña, mensaje, integridad, autenticidad."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Describir qué es SHA‑256 y para qué sirve (y para qué no)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Reconocer 4 malas prácticas: claves en código, algoritmos caseros, hashes rápidos para contraseñas, reutilización de secretos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar qué propiedad aporta una función hash: integridad/huella."}</li>
      </ul>
    </section>
  );
}
