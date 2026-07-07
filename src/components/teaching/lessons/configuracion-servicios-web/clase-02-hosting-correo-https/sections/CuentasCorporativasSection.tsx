import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { Callout } from "@/components/teaching/Callout";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CuentasCorporativasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cuentas de correo corporativo por rol"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Las cuentas corporativas son buzones bajo el dominio de la empresa (gerencia@innovatech.co, ventas@innovatech.co) con propósitos definidos por área. Se crean en el panel del proveedor de correo (Google Workspace, Zoho, servidor propio) y dependen del registro MX y del registro A de `mail.empresa.co`."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Separar buzones por función mejora la organización, la seguridad (permisos distintos) y la confianza del cliente: un correo desde ventas@ transmite más profesionalismo que uno desde gmail.com."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Roles típicos en una PyME"}</h3>
      <CompareTable
        headers={["Buzón", "Propósito", "Quién lo usa", "Ejemplo de uso"]}
        rows={[
          [
            "gerencia@",
            "Decisiones estratégicas, contacto con socios e inversores",
            "Director general, gerencia",
            "Contratos, acuerdos comerciales de alto nivel",
          ],
          [
            "ventas@",
            "Consultas comerciales, cotizaciones, seguimiento a clientes",
            "Equipo comercial",
            "Responder formulario «Contáctenos» del sitio web",
          ],
          [
            "soporte@",
            "Incidencias técnicas, tickets de ayuda post-venta",
            "Equipo de soporte / mesa de ayuda",
            "Cliente reporta caída del portal o error en facturación",
          ],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — flujo SMTP/MX"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant R as Remitente (ventas@)
  participant MX as Servidor MX (mail.empresa.co)
  participant D as Destinatario (soporte@)

  R->>MX: SMTP envío (puerto 587/465)
  MX->>MX: Autenticación + SPF/DKIM
  MX->>D: Entrega en buzón local o relay
  D->>D: IMAP/POP3 o webmail — lectura`}
      />
      <p className="my-4">
        {
          "El registro MX indica qué servidor recibe correo para `@innovatech.co`. Ese servidor debe tener registro A en `mail.innovatech.co`. El envío entre buzones del mismo dominio suele ser local (sin salir a Internet), pero sigue pasando por el servidor de correo configurado en MX."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"SPF y DKIM (introducción)"}</h3>
      <p className="my-4">
        {
          "SPF (registro TXT) lista qué servidores pueden enviar correo en nombre del dominio. DKIM firma criptográficamente cada mensaje para que receptores (Gmail, Outlook) verifiquen que no fue alterado. Sin SPF/DKIM, correo legítimo puede ir a spam."
        }
      </p>
      <Callout title="Prueba entre buzones">
        {
          "Verifica el flujo completo enviando de ventas@ a soporte@ y comprobando recepción en webmail o cliente IMAP. Documenta captura o cabeceras como evidencia de entrega."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: un buzón por función; contraseñas fuertes; alias info@ → ventas@ si hace falta un contacto genérico."}</li>
        <li>{"Mal uso: un solo buzón compartido sin control; usar dominios reservados (.local) que algunos servidores rechazan; MX sin registro A en mail."}</li>
      </ul>

      <PracticeExercise
        prompt="¿Por qué ventas@ y soporte@ deben ser buzones distintos aunque los gestione la misma persona al inicio?"
        hints={["Piensa en escalabilidad y organización", "¿Qué pasa cuando crece el equipo?"]}
        expectedKeywords={["rol", "organización", "escalabilidad", "permisos"]}
        successMessage="Correcto. Separar por rol facilita delegar, filtrar spam por área y escalar sin mezclar consultas comerciales con tickets técnicos."
      />
    </section>
  );
}
