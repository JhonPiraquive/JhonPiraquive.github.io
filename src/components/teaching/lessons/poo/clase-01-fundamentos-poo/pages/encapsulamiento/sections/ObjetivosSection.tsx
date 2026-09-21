export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar el encapsulamiento como control de acceso al estado interno y distinguir estado interno de interfaz pública en objetos de dominio."
          }
        </li>
        <li>
          {
            "Aplicar modificadores de acceso en C# (public, private, protected, internal) y el patrón { get; private set; } para proteger propiedades."
          }
        </li>
        <li>
          {
            "Implementar métodos de dominio (Depositar, Retirar, CancelarReserva) que validan antes de mutar el estado."
          }
        </li>
        <li>
          {
            "Definir invariantes (Saldo >= 0, Fin > Inicio, Cantidad >= 0) y validarlas en constructor y métodos mutadores."
          }
        </li>
        <li>
          {
            "Contrastar DTO vs objeto de dominio y reconocer señales de buen y mal encapsulamiento en código C#."
          }
        </li>
        <li>
          {
            "Refactorizar código con setters públicos hacia un diseño que centralice reglas en el objeto."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección fundamentos: clase, objeto, constructor, campos y estado interno."
          }
        </li>
        <li>
          {
            "Conocimiento básico de C#: tipos (decimal, int, DateTime), throw, excepciones (ArgumentException, InvalidOperationException)."
          }
        </li>
        <li>{"Capacidad para compilar y ejecutar un Main con instancias de clases propias."}</li>
      </ul>
    </section>
  );
}
