import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Propiedades: confidencialidad vs integridad"}</h3>
      <MermaidDiagram chart={`flowchart TD
  cif[Cifrado] --> conf[&quot;Objetivo: confidencialidad&quot;]
  hash[Hash_(SHA-256)] --> integ[&quot;Objetivo: integridad&quot;]
  auth[Autenticidad] --> firmas[&quot;Objetivo: origen/identidad&quot;]

  conf --> ej1[&quot;Ej: datos_en_reposo/en_transito&quot;]
  integ --> ej2[&quot;Ej: verificar_descargas/payloads&quot;]
  firmas --> ej3[&quot;Ej: firma_digital/claims_firmadas&quot;]`} />
    </section>
  );
}
