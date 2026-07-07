import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ComparativaXmlJsonSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comparativa XML vs JSON"}
      </h2>
      <CompareTable
        headers={["Característica", "XML", "JSON"]}
        rows={[
          ["Origen", "W3C 1996", "Douglas Crockford ~2001"],
          ["Tipos", "Todo es texto", "string, number, boolean, null, array, object"],
          ["Atributos", "Sí (en etiquetas)", "No; metadatos como campos"],
          ["Comentarios", "Sí <!-- -->", "No en spec estándar"],
          ["Validación", "DTD, XML Schema (XSD)", "JSON Schema (opcional)"],
          ["Parsing en JS", "DOMParser", "JSON.parse() nativo"],
          [
            "Tamaño típico",
            "Más verboso (~520 bytes pedido ejemplo)",
            "Más compacto (~320 bytes, ~38% menos)",
          ],
          ["Uso principal", "SOAP, legado, facturación, configs", "APIs REST, package.json, MongoDB"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"¿Por qué JSON es más compacto?"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Etiquetas de cierre repetidas en XML (</producto>, </item>)."}</li>
        <li>{"Atributos vs objetos anidados (moneda=\"COP\" vs \"moneda\": \"COP\")."}</li>
        <li>{"En móvil o alta frecuencia, menos bytes = menos latencia y costo."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Decisión de formato"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  START[Nueva integración] --> Q{¿Estándar legado SOAP/XML o regulación?}
  Q -->|Sí| XML[Usar XML]
  Q -->|No| Q2{¿API REST moderna?}
  Q2 -->|Sí| JSON[Usar JSON por defecto]
  Q2 -->|No| EVAL[Evaluar contrato del partner]`}
      />
      <StepReveal
        title="Regla práctica: cuándo cada formato"
        steps={[
          {
            title: "1. API REST nueva",
            content:
              "JSON por defecto: compacto, nativo en ecosistemas web y fácil de parsear con JSON.parse().",
          },
          {
            title: "2. Integración SOAP o bancaria legada",
            content:
              "XML obligatorio: el contrato WSDL y los envelopes SOAP exigen XML bien formado.",
          },
          {
            title: "3. Regulación o estándar de dominio",
            content: "Facturación electrónica (DIAN), RSS/Atom u OOXML: el estándar define XML.",
          },
          {
            title: "4. Configuraciones empresariales",
            content: "Maven pom.xml, Spring XML legacy: ecosistemas que aún usan XML por convención.",
          },
        ]}
      />
    </section>
  );
}
