export function ModeloLogicoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Modelo lógico"}
      </h2>
      <p className="my-4">
        {
          "Atributos, claves y cardinalidad, aún sin motor concreto. Quién lo usa: diseñador. Ejemplo: tablas lógicas Programas / Estudiantes / Inscripciones con PK/FK y 1:N claras."
        }
      </p>
      <p className="my-4">
        {
          "Aquí decides dónde va cada FK y si un N:M necesita tabla puente. Todavía no eliges VARCHAR(200) ni el motor."
        }
      </p>
    </section>
  );
}
