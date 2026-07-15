import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SoapSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SOAP"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Protocolo"}</strong>
          {" de mensajería (no solo estilo)."}
        </li>
        <li>
          {"Formato estricto "}
          <strong>{"XML"}</strong>
          {": envelope, header, body."}
        </li>
        <li>
          {"Contrato en "}
          <strong>{"WSDL"}</strong>
          {"; transporte HTTP, SMTP o TCP."}
        </li>
        <li>
          <strong>{"WS-Security"}</strong>
          {" para firma/cifrado a nivel mensaje."}
        </li>
        <li>{"Dominante en banca, gobierno, SAP, HL7."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Soap"
        chart={`mindmap
  root((SOAP))
    Protocolo de mensajería
    Envelope XML
    Contrato WSDL
    Extensiones WS
    Banca y sistemas enterprise`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es SOAP"}</h3>
      <p className="my-4">
        <strong>{"SOAP (Simple Object Access Protocol)"}</strong>
        {
          " define un formato rígido de mensajes XML. El contrato se publica en WSDL; los clientes generan stubs a partir de él. Es verboso pero ofrece seguridad y trazabilidad exigidas en entornos regulados."
        }
      </p>
      <CodeFiddle
        language="xml"
        title="Mensaje SOAP (XML)"
        code={`<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:usr="http://api.ejemplo.com/usuarios">
  <soapenv:Header/>
  <soapenv:Body>
    <usr:ObtenerUsuario>
      <usr:id>42</usr:id>
    </usr:ObtenerUsuario>
  </soapenv:Body>
</soapenv:Envelope>`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuándo usar SOAP"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Integración con "}
          <strong>{"sistemas legacy"}</strong>
          {" que exigen XML y WSDL fijo."}
        </li>
        <li>
          {"Requisitos de "}
          <strong>{"WS-Security"}</strong>
          {" (firma digital, cifrado de mensaje)."}
        </li>
        <li>
          {"Sectores regulados: banca interbancaria, gobierno, salud (HL7)."}
        </li>
      </ul>
      <Callout title="Caso real: banco colombiano">
        {
          "Conexión a cámara de compensación vía SOAP/XML + WS-Security (contrato WSDL, auditoría). App móvil de saldo usa REST+JSON con API gateway interno. No forzar SOAP al frontend ni REST al switch bancario."
        }
      </Callout>
    </section>
  );
}
