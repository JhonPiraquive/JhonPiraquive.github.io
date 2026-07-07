import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PanelesAdministracionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Paneles web de administración (DNS, hosting, correo)"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Los paneles web de administración son interfaces gráficas que permiten gestionar servicios de Internet sin editar archivos de configuración manualmente en la mayoría de tareas cotidianas: zonas DNS, sitios web, buzones de correo, certificados TLS y usuarios."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un administrador junior en una agencia digital puede publicar un sitio, crear tres buzones corporativos y verificar registros MX en una tarde usando paneles — sin dominar BIND o Postfix en profundidad. En producción, paneles como cPanel, Cloudflare, Plesk o soluciones self-hosted (Technitium, Nginx UI, Mailu) aceleran operaciones y reducen errores de sintaxis."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Modelo operacional"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  ADM[Administrador] --> PDNS[Panel DNS]
  ADM --> PHOST[Panel hosting]
  ADM --> PCOR[Panel correo]
  PDNS --> ZONA[Zona primaria / registros]
  PHOST --> WEB[Sitios / Nginx / Apache]
  PCOR --> BUZ[Buzones / MX / SPF]
  ZONA --> RES[Resolución global]
  WEB --> USR[Usuarios web]
  BUZ --> EMAIL[Clientes correo]`}
      />
      <p className="my-4">
        {
          "El orden operativo recomendado: (1) DNS — publicar registros A, MX, CNAME, TXT; (2) resolución en clientes si aplica; (3) hosting — crear sitio y subir HTML; (4) correo — crear buzones y copiar TXT SPF/DKIM al DNS. Saltar pasos produce síntomas como DNS_PROBE o correo que rebota."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Paneles por servicio"}</h3>
      <CompareTable
        headers={["Servicio", "Panel típico", "Tareas principales", "Alternativa CLI"]}
        rows={[
          [
            "DNS",
            "Cloudflare, Route53, Technitium",
            "Crear zona primaria, A/CNAME/MX/TXT, NS",
            "BIND zone files, `dig`",
          ],
          [
            "Hosting web",
            "cPanel, Plesk, Nginx UI",
            "Virtual host, root, SSL, terminal/SFTP",
            "SSH + Nginx/Apache configs",
          ],
          [
            "Correo",
            "Google Admin, Zoho, Mailu, cPanel Email",
            "Buzones, alias, SPF/DKIM, webmail",
            "Postfix/Dovecot manual",
          ],
        ]}
      />

      <StepReveal
        title="Flujo en paneles — empresa ficticia"
        steps={[
          {
            title: "Panel DNS",
            content:
              "Crear zona innovatech.co. Registros: A www → IP hosting, A mail → IP correo, MX @ → mail.innovatech.co, CNAME portal → www.",
          },
          {
            title: "Panel hosting",
            content:
              "Nuevo sitio www.innovatech.co, root /var/www/www.innovatech.co, subir index.html con misión y contacto.",
          },
          {
            title: "Panel correo",
            content:
              "Crear gerencia@, ventas@, soporte@. Copiar registro TXT SPF/DKIM al panel DNS.",
          },
          {
            title: "Verificación integrada",
            content: "dig MX, curl al sitio, envío ventas@ → soporte@, documentar resultados.",
          },
        ]}
      />

      <Callout title="Seguridad en paneles">
        {
          "Usa contraseñas fuertes y 2FA cuando el panel lo permita. No compartas credenciales de admin en chats de clase; cada operador debe tener su usuario con permisos mínimos necesarios."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: documentar cada cambio en panel; exportar zona DNS; probar tras cada modificación."}</li>
        <li>{"Mal uso: editar DNS y hosting simultáneamente sin saber cuál capa falla; dejar paneles expuestos en Internet sin firewall."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"URL /cpanel publicada en Google:"}</strong>
          {" Panel indexado; bots intentaron login masivo. Corrección: restringir por IP, 2FA, URL no adivinable."}
        </li>
        <li>
          <strong>{"WHM root compartido con freelancers:"}</strong>
          {" Freelancer terminado conservó acceso 3 meses. Corrección: offboarding checklist, tokens temporales."}
        </li>
      </ul>


      <PracticeExercise
        prompt="¿En qué orden configurarías DNS, hosting y correo para una empresa nueva? Justifica brevemente."
        hints={["¿Qué necesita el MX?", "¿Qué necesita el sitio web?"]}
        expectedKeywords={["DNS", "MX", "hosting", "correo", "A"]}
        successMessage="Correcto. DNS primero (A para web, A+MX para correo), luego hosting con HTML, luego buzones y TXT SPF/DKIM."
      />
    </section>
  );
}
