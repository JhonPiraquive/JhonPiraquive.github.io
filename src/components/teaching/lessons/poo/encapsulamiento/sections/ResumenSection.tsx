export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Encapsulamiento controla el acceso al estado interno: ocultas implementación, expones interfaz pública segura."
          }
        </li>
        <li>
          {
            "{ get; private set; } permite lectura pública y escritura solo desde la clase — patrón base en dominio C#."
          }
        </li>
        <li>
          {
            "Métodos de dominio (Depositar, Retirar) expresan intención y centralizan validación."
          }
        </li>
        <li>
          {
            "Invariantes (Saldo >= 0, Fin > Inicio) se validan en constructor y en todo método que muta estado."
          }
        </li>
        <li>
          {
            "DTO vs dominio: DTO transporta datos; dominio protege reglas — no mezcles responsabilidades."
          }
        </li>
        <li>
          {
            "Mal diseño: setters públicos, validación dispersa en capas, colecciones mutables expuestas (public List<T> { get; set; })."
          }
        </li>
        <li>
          {
            "Preview lección herencia: protected permite acceso a clases derivadas — diseña la API pensando en extensión."
          }
        </li>
      </ul>
    </section>
  );
}
