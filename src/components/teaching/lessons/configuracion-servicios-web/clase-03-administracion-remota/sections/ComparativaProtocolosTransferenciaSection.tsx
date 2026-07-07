import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComparativaProtocolosTransferenciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"FTP, FTPS y SFTP: comparativa y casos de uso"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "FTP (File Transfer Protocol) transfiere archivos en canal de control (21) y datos separado, sin cifrado nativo. FTPS añade TLS al mismo modelo FTP (explícito o implícito). SFTP (SSH File Transfer Protocol) no es FTP: opera sobre canal SSH cifrado (puerto 22) con autenticación y transferencia en una sola conexión segura."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Elegir protocolo equivocado expone credenciales (FTP plano) o complica firewalls (FTPS pasivo con muchos puertos). En auditorías corporativas se exige SFTP o FTPS; conocer ventajas y limitaciones permite negociar con proveedores de hosting y migrar legado sin interrumpir operación."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tabla comparativa"}</h3>
      <CompareTable
        headers={["Aspecto", "FTP", "FTPS", "SFTP"]}
        rows={[
          ["Cifrado", "No (texto plano)", "Sí (TLS sobre FTP)", "Sí (dentro de SSH)"],
          ["Puerto típico", "21", "21 (explícito) o 990 (implícito)", "22"],
          ["Canal de datos", "Separado (activo/pasivo)", "Separado, cifrado con TLS", "Multiplexado en SSH"],
          ["Firewall / NAT", "Modo pasivo + rango puertos", "Igual + negociación TLS", "Un solo puerto 22"],
          ["Autenticación", "USER/PASS", "USER/PASS + certificado servidor", "Usuario SSH + clave/contraseña"],
          ["Soporte hosting", "Legado, ampliado", "Medio", "Estándar actual recomendado"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y limitaciones"}</h3>
      <p className="my-4">
        <strong>{"FTP:"}</strong>
        {
          " ventaja — compatibilidad máxima con paneles antiguos; limitación — credenciales y datos interceptables; solo aceptable en redes aisladas o laboratorio."
        }
      </p>
      <p className="my-4">
        <strong>{"FTPS:"}</strong>
        {
          " ventaja — cifra sesión manteniendo clientes FTP; limitación — certificados, modos explícito/implícito confunden; doble canal complica firewalls."
        }
      </p>
      <p className="my-4">
        <strong>{"SFTP:"}</strong>
        {
          " ventaja — un puerto, cifrado fuerte, integración con claves SSH; limitación — no es FTP (algunos legacy no lo soportan); requiere sshd configurado."
        }
      </p>

      <MermaidDiagram
        chart={`flowchart LR
  subgraph legado [Legado]
    FTP[FTP puerto 21]
  end
  subgraph cifrado [Cifrado]
    FTPS[FTPS TLS]
    SFTP[SFTP sobre SSH 22]
  end
  FTP -->|Migrar| FTPS
  FTP -->|Recomendado| SFTP
  FTPS -->|Alternativa| SFTP`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Casos de uso empresariales"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Banca y salud (LATAM):"}</strong>
          {" intercambio de extractos y resultados — SFTP con clave + IP allowlist; FTP plano prohibido."}
        </li>
        <li>
          <strong>{"Agencias web / hosting compartido:"}</strong>
          {" subida de WordPress por SFTP o FTPS; FTP plano en retirada progresiva."}
        </li>
        <li>
          <strong>{"Logística y EDI:"}</strong>
          {" partners legacy aún en FTP; migración a FTPS con certificado corporativo."}
        </li>
        <li>
          <strong>{"Backup off-site:"}</strong>
          {" rsync sobre SSH o SFTP automatizado (cron + lftp); checksums en destino."}
        </li>
      </ul>

      <Callout title="Decisión rápida">
        {
          "¿Red pública o datos sensibles? → SFTP. ¿Partner exige FTP y acepta TLS? → FTPS. ¿Solo laboratorio aislado? → FTP plano aceptable con advertencia documentada."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Una fintech en Santiago exige SFTP puerto 22 con clave Ed25519 para reportes regulatorios. Un proveedor de hosting en Miami aún ofrece FTP:21; el equipo migra a SFTP en FileZilla cambiando protocolo a «SFTP» y reutilizando la misma IP con puerto 22."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" SFTP/FTPS en producción; documentar protocolo en ficha de conexión; deshabilitar FTP plano externo."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" asumir que «FTP seguro» existe sin TLS; mezclar SFTP con puerto 21; credenciales compartidas entre protocolos."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Elegir FTP por «más rápido»:"}</strong>
          {" FTP sin cifrado en enlace internacional; datos de clientes expuestos. Corrección: SFTP o FTPS con certificado válido."}
        </li>
        <li>
          <strong>{"SCP para árboles grandes diarios:"}</strong>
          {" Transferencia de 50 GB sin reanudación falló a 90 %. Corrección: rsync -avz --partial para jobs grandes."}
        </li>
      </ul>

    </section>
  );
}
