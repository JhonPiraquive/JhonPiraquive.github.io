export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"S (SRP):"}</strong>
          {" un motivo de cambio por clase; separar crear, notificar, persistir."}
        </li>
        <li>
          <strong>{"O (OCP):"}</strong>
          {" extender con nuevas clases (IEnvio); eliminar switch en cliente."}
        </li>
        <li>
          <strong>{"L (LSP):"}</strong>
          {" derivada sustituible; evitar Pinguino.Volar() que lanza."}
        </li>
        <li>
          <strong>{"I (ISP):"}</strong>
          {" IImpresora + IEscaner en lugar de interfaz comodín."}
        </li>
        <li>
          <strong>{"D (DIP):"}</strong>
          {" ServicioUsuarios → IRepositorioUsuarios; concreto en Main."}
        </li>
        <li>
          <strong>{"Principios interconectados:"}</strong>
          {" polimorfismo habilita OCP y DIP; LSP protege polimorfismo real."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" modularidad-cohesion-acoplamiento — modularidad con checklist práctico."}
        </li>
      </ul>
    </section>
  );
}
