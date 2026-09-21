export function BcnfMencionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"BCNF — mención"}
      </h2>
      <p className="my-4">
        {
          "BCNF refuerza 3FN: para toda DF no trivial A → B, A debe ser superclave. En esta clase basta reconocer el síntoma (“hay una DF cuyo lado izquierdo no es clave”) — no se exige descomposición formal completa."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué mirar al final del procedimiento"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Tras 3FN: ¿queda alguna DF cuyo determinante no sea clave?"}</li>
        <li>
          {
            "Si sí → documenta y escala (docente/diseñador). En un CRUD de matrículas simple, 3FN bien hecha suele bastar."
          }
        </li>
        <li>
          {
            "Ejemplo típico de laboratorio: solapamiento de claves candidatas en horarios/aulas (solo bosquejo)."
          }
        </li>
      </ol>
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {"¿BCNF es un motor NoSQL? (No; es una forma normal más estricta que 3FN.)"}
      </p>
    </section>
  );
}
