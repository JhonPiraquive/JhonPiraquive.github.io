import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SslTlsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SSL vs TLS: evolución y versiones"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"SSL"}</strong>
          {" (Netscape, 1995–1996): "}
          <strong>{"obsoleto"}</strong>
          {" por vulnerabilidades (POODLE, etc.)."}
        </li>
        <li>{"TLS = sucesor estandarizado por IETF."}</li>
        <li>
          {"En 2025: solo "}
          <strong>{"TLS 1.2 y TLS 1.3"}</strong>
          {" son aceptables."}
        </li>
        <li>{"SSL 3.0, TLS 1.0 y TLS 1.1 obsoletos desde 2020."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — SslTls"
        chart={`mindmap
  root((SSL y TLS))
    SSL obsoleto
      Vulnerabilidades conocidas
    TLS sucesor IETF
      TLS 1.2 aceptable
      TLS 1.3 recomendado
    Versiones antiguas retiradas`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Línea de tiempo"}</h3>
      <MermaidDiagram
        title="Evolución SSL/TLS"
        description="Cronología de versiones SSL y TLS"
        chart={`timeline
  title Evolucion SSL TLS
  1995 : SSL 2.0
  1996 : SSL 3.0
  1999 : TLS 1.0
  2006 : TLS 1.1
  2008 : TLS 1.2
  2018 : TLS 1.3
  2020 : Deprecan TLS 1.0 y 1.1
  2025 : Solo TLS 1.2 y 1.3
`}
      />
      <CompareTable
        headers={["Versión", "Año", "Estado en 2025"]}
        rows={[
          ["SSL 2.0", "1995", "Obsoleto — no usar"],
          ["SSL 3.0", "1996", "Obsoleto — POODLE y otras vulnerabilidades"],
          ["TLS 1.0", "1999", "Obsoleto desde 2020"],
          ["TLS 1.1", "2006", "Obsoleto desde 2020"],
          ["TLS 1.2", "2008", "Aceptable"],
          [
            "TLS 1.3",
            "2018",
            "Recomendado — handshake más rápido, PFS obligatorio",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Mejoras de TLS 1.3"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Handshake más rápido (1-RTT en muchos casos)."}</li>
        <li>{"Elimina cifrados débiles."}</li>
        <li>
          <strong>{"Perfect Forward Secrecy"}</strong>
          {" obligatorio."}
        </li>
        <li>{"Hashes SHA-256/384."}</li>
      </ul>
      <Callout title="Error frecuente: decir SSL cuando usas TLS">
        {
          'La terminología SSL está desactualizada. Configura servidores solo con TLS 1.2+. Documentación que dice "usamos SSL 3.0 para compatibilidad" es un hallazgo de seguridad crítico.'
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <CodeChallenge
        title="Completa puertos y protocolos"
        template="HTTPS usa puerto {{blank1}} y cifra con {{blank2}}; HTTP usa puerto {{blank3}} sin cifrado."
        blanks={[
          { id: "blank1", answer: "443", placeholder: "puerto HTTPS" },
          { id: "blank2", answer: "TLS", placeholder: "protocolo de cifrado" },
          { id: "blank3", answer: "80", placeholder: "puerto HTTP" },
        ]}
      />
    </section>
  );
}
