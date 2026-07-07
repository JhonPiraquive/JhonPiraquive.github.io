import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { Callout } from "@/components/teaching/Callout";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function FlujoIntegradoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cómo interactúan dominio, DNS, hosting y correo"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La presencia digital de una empresa no es un solo servicio: el dominio identifica la marca, DNS traduce nombres a IPs, el hosting sirve la web y el correo entrega mensajes @empresa. Cada capa depende de la anterior y comparte el mismo espacio de nombres DNS."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Diagnosticar «el sitio no carga» requiere saber si el fallo está en DNS (nombre no resuelve), hosting (403/500) o correo (MX incorrecto). Entender la interacción evita cambios aleatorios en tres paneles distintos."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama — flujo del usuario"}</h3>
      <MermaidDiagram
        chart={`flowchart TB
  U[Usuario escribe www.innovatech.co]
  U --> R[Resolver DNS del PC]
  R --> Z[Zona DNS — registro A www]
  Z --> IPWEB[IP servidor web]
  IPWEB --> NGINX[Nginx / hosting]
  NGINX --> HTML[index.html empresa]

  UC[Usuario envía a ventas@innovatech.co]
  UC --> MX[Registro MX → mail.innovatech.co]
  MX --> AMAIL[Registro A mail]
  AMAIL --> SMTP[Servidor correo]
  SMTP --> BUZ[Buzón ventas@]`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Análisis por capa"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"Dominio:"}</strong>
          {" nombre registrado (innovatech.co), FQDNs www, mail, portal — identidad y delegación NS."}
        </li>
        <li>
          <strong>{"DNS:"}</strong>
          {" tabla de registros que conecta cada FQDN con IP o alias; MX dirige correo; TXT valida envío."}
        </li>
        <li>
          <strong>{"Hosting:"}</strong>
          {" servidor web en la IP del registro A de www; sirve HTML al resolver peticiones HTTP."}
        </li>
        <li>
          <strong>{"Correo:"}</strong>
          {" servidor en IP del registro A de mail; MX indica dónde entregar mensajes @innovatech.co."}
        </li>
        <li>
          <strong>{"Internet:"}</strong>
          {" routers enrutan por IP pública; resolvers globales cachean DNS; TLS protege HTTP y SMTP/IMAP."}
        </li>
      </ol>

      <Callout title="Misma IP vs IPs distintas">
        {
          "Web y correo pueden estar en la misma IP (hosting compartido con correo incluido) o en IPs distintas (VPS web + Google Workspace). Lo importante es que cada registro A/MX apunte al servicio correcto."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: diagrama de arquitectura con FQDN, IP y puerto de cada servicio."}</li>
        <li>{"Mal uso: cambiar MX al migrar web sin planificar buzones; olvidar TXT SPF tras mover correo."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Desplegar contenedor sin DNS previo:"}</strong>
          {" URL apuntaba a IP anterior; rollback confuso. Corrección: orden DNS → TLS → app → smoke test."}
        </li>
        <li>
          <strong>{"Correo migrado después del corte web:"}</strong>
          {" Clientes recibieron bounce mientras web ya funcionaba. Corrección: plan integrado con dependencias MX/web."}
        </li>
      </ul>


      <PracticeExercise
        prompt="Un cliente abre www.empresa.co y ve el sitio, pero ventas@empresa.co rebota. ¿Qué capa investigarías primero y qué registro DNS revisarías?"
        hints={["El sitio web funciona", "Piensa en MX y mail"]}
        expectedKeywords={["MX", "correo", "mail", "DNS"]}
        successMessage="Correcto. La web usa registro A; el correo depende de MX y A de mail — revisa esa capa DNS/correo, no el hosting web."
      />
    </section>
  );
}
