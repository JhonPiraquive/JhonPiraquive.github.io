import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function IntroSolidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SOLID: cinco principios de diseño orientado a objetos"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"El acrónimo S-O-L-I-D"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"S — Single Responsibility: una clase, una razón para cambiar."}</li>
        <li>{"O — Open/Closed: abierto a extensión, cerrado a modificación."}</li>
        <li>{"L — Liskov Substitution: un subtipo sustituye al padre sin romper el programa."}</li>
        <li>{"I — Interface Segregation: interfaces pequeñas y específicas."}</li>
        <li>{"D — Dependency Inversion: capas altas dependen de abstracciones."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Relación entre principios"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  SRP[SRP: una responsabilidad] --> OCP[OCP: extender sin editar]
  OCP --> LSP[LSP: subtipos sustituibles]
  LSP --> ISP[ISP: interfaces pequeñas]
  ISP --> DIP[DIP: depender de abstracciones]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de violación comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clase que cambia por múltiples motivos (validación + SQL + SMTP)."}</li>
        <li>{"Cadena de if (tipo === …) que crece cada trimestre."}</li>
        <li>{"Subclase que lanza error en métodos heredados."}</li>
        <li>{"new MySQLRepository() dentro del servicio."}</li>
      </ul>
    </section>
  );
}
