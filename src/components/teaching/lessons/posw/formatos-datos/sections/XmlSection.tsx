import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function XmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"XML: eXtensible Markup Language"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lenguaje de marcado W3C (1996)."}</li>
        <li>
          <strong>{"Un elemento raíz"}</strong>
          {", jerarquía en árbol, "}
          <strong>{"atributos"}</strong>
          {" en etiquetas."}
        </li>
        <li>{"Verbose pero validable (DTD, XSD); namespaces."}</li>
        <li>{"Dominó el intercambio antes de JSON; sigue en SOAP, Maven, Spring, facturación."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "XML almacena y transporta datos legibles por humanos y máquinas. Todo es texto; la estructura es estrictamente jerárquica. Un documento bien formado tiene exactamente un elemento raíz."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura de un documento"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Declaración: <?xml version=\"1.0\" encoding=\"UTF-8\"?>"}</li>
        <li>{"Elemento raíz único (p. ej. <pedido>)"}</li>
        <li>{"Elementos hijos anidados"}</li>
        <li>{"Atributos en la etiqueta de apertura (moneda=\"COP\")"}</li>
      </ol>
      <CodeFiddle
        language="xml"
        title="Pedido en XML"
        code={`<?xml version="1.0" encoding="UTF-8"?>
<pedido id="1042">
  <cliente>
    <nombre>Ana García</nombre>
    <email>ana@ejemplo.com</email>
  </cliente>
  <items>
    <item>
      <producto>Laptop Pro 15</producto>
      <cantidad>1</cantidad>
      <precio moneda="COP">4500000</precio>
    </item>
    <item>
      <producto>Mouse inalámbrico</producto>
      <cantidad>2</cantidad>
      <precio moneda="COP">85000</precio>
    </item>
  </items>
  <total moneda="COP">4670000</total>
</pedido>`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Árbol jerárquico del pedido"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  P[pedido id=1042] --> C[cliente]
  P --> I[items]
  P --> T[total]
  C --> CN[nombre]
  C --> CE[email]
  I --> I1[item]
  I --> I2[item]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Parsear XML en el navegador"}</h3>
      <CodeFiddle
        language="javascript"
        title="Parsear XML en el navegador"
        code={`const xml = \`<?xml version="1.0"?><pedido id="1042"><total>4670000</total></pedido>\`;
const doc = new DOMParser().parseFromString(xml, "application/xml");
console.log(doc.documentElement.getAttribute("id")); // "1042"
console.log(doc.querySelector("total").textContent); // "4670000"`}
      />
      <Callout title="Error frecuente">
        {
          "Olvidar el elemento raíz único: documentos con múltiples raíces son inválidos. No escapar <, & o comillas en contenido puede romper el documento."
        }
      </Callout>
      <PracticeExercise
        prompt="Parsea un XML mínimo con DOMParser y lee un atributo del elemento raíz. ¿Qué método usas para obtener el valor del atributo id?"
        hints={["DOMParser con application/xml", "getAttribute en documentElement"]}
        expectedKeywords={["DOMParser", "getAttribute", "documentElement"]}
        successMessage="Correcto. DOMParser construye el árbol; getAttribute lee atributos de un elemento."
      />
    </section>
  );
}
