import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function FlujoTlsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Flujo del handshake TLS 1.3"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Pasos principales"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"ClientHello:"}</strong>
          {" cliente envía versiones TLS soportadas, cipher suites y key_share (Diffie-Hellman)."}
        </li>
        <li>
          <strong>{"ServerHello + Certificate:"}</strong>
          {" servidor elige parámetros y envía certificado digital."}
        </li>
        <li>
          <strong>{"CertificateVerify + Finished (servidor):"}</strong>
          {" prueba posesión de clave privada; mensaje Finished."}
        </li>
        <li>
          <strong>{"Finished (cliente):"}</strong>
          {" cliente confirma con su Finished."}
        </li>
        <li>
          <strong>{"Canal cifrado:"}</strong>
          {" peticiones HTTP viajan cifradas."}
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama de secuencia"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente
  participant S as Servidor
  C->>S: ClientHello (TLS, ciphers, key_share)
  S->>C: ServerHello + Certificate
  S->>C: CertificateVerify + Finished
  C->>S: Finished
  Note over C,S: Canal cifrado establecido
  C->>S: GET /api/datos (cifrado)
  S->>C: HTTP 200 OK (cifrado)`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Handshake TLS 1.3 paso a paso"}</h3>
      <StepReveal
        title="Handshake TLS 1.3 paso a paso"
        steps={[
          {
            title: "1. ClientHello",
            content:
              "El cliente anuncia versiones TLS, cipher suites y parámetros de intercambio de claves (key_share).",
          },
          {
            title: "2. ServerHello + Certificate",
            content:
              "El servidor responde con su elección de parámetros y presenta el certificado digital firmado por una CA.",
          },
          {
            title: "3. CertificateVerify + Finished (servidor)",
            content:
              "El servidor demuestra que posee la clave privada del certificado y envía su mensaje Finished.",
          },
          {
            title: "4. Finished (cliente)",
            content: "El cliente envía su Finished; ambas partes confirman que el handshake fue íntegro.",
          },
          {
            title: "5. Canal cifrado activo",
            content:
              "Las peticiones HTTP (GET, POST, etc.) viajan cifradas. Un interceptor solo ve tráfico opaco.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Orden del handshake"}</h3>
      <p className="my-4">
        {
          "Orden correcto: (b) ClientHello → (d) ServerHello + Certificate → (e) Finished servidor → (a) Finished cliente → (c) canal cifrado activo."
        }
      </p>
    </section>
  );
}
