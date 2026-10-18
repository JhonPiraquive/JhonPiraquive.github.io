import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Propiedades: confidencialidad vs integridad"}</h3>
      <MermaidDiagram chart={`flowchart TD
  cif[Cifrado] --> conf["Objetivo: confidencialidad"]
  hash[Hash_(SHA-256)] --> integ["Objetivo: integridad"]
  auth[Autenticidad] --> firmas["Objetivo: origen/identidad"]

  conf --> ej1["Ej: datos_en_reposo/en_transito"]
  integ --> ej2["Ej: verificar_descargas/payloads"]
  firmas --> ej3["Ej: firma_digital/claims_firmadas"]`} />
    </section>
  );
}
