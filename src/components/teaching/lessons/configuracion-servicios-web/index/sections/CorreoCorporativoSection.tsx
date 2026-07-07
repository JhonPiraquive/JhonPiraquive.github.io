import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function CorreoCorporativoSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"1.3.5"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Creación de cuentas de correo electrónico corporativo"}
      </h2>
      <h3 className="mt-4 mb-2 text-xl font-semibold">{"¿Qué es un email profesional o corporativo?"}</h3>
      <p className="my-4">
        {
          "Un email profesional o corporativo usa el dominio de la empresa (`contacto@miempresa.com`) en lugar de proveedores genéricos (`@gmail.com`). Transmite confianza, refuerza la marca y permite políticas centralizadas de seguridad y retención."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"¿Cómo obtener un email profesional?"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Google Workspace, Microsoft 365, Zoho Mail o correo del propio hosting."}</li>
        <li>{"Requisito: dominio propio y acceso a la zona DNS."}</li>
      </ul>
      <StepReveal
        title="Configuración de cuenta corporativa"
        steps={[
          {
            title: "Elegir proveedor",
            content: "Google Workspace, Microsoft 365, Zoho o panel del hosting (cPanel → Email Accounts).",
          },
          {
            title: "Verificar dominio",
            content: "Añadir registro TXT que el proveedor indica para demostrar propiedad.",
          },
          {
            title: "Configurar registros MX",
            content: "Apuntar MX a los servidores del proveedor con la prioridad indicada.",
          },
          {
            title: "SPF y DKIM",
            content: "Registros TXT para evitar que tu correo caiga en spam y prevenir suplantación.",
          },
          {
            title: "Crear buzones",
            content: "contacto@, ventas@, soporte@ según roles del equipo.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Configuración de una cuenta corporativa en un proveedor de correo público"}
      </h3>
      <p className="my-4">
        {
          "Si el buzón está en Google Workspace o Microsoft 365 pero el usuario prefiere Gmail web o Outlook como cliente, configura IMAP (entrada) y SMTP (salida) con los parámetros que el proveedor indica. En Gmail: Configuración → Cuentas → «Importar correo» o añadir cuenta externa con IMAP."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"IMAP: puerto 993 (SSL) — sincroniza bandeja, carpetas y lectura."}</li>
        <li>{"SMTP saliente: puerto 587 (STARTTLS) o 465 (SSL) — requiere autenticación."}</li>
        <li>{"Usa contraseña de aplicación si el proveedor exige verificación en dos pasos."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Configuración de correo saliente (SMTP)"}</h3>
      <CodeFiddle
        language="text"
        title="Parámetros SMTP típicos"
        code={`Servidor: smtp.gmail.com (o el de tu proveedor)
Puerto: 587 (STARTTLS) o 465 (SSL)
Usuario: contacto@miempresa.com
Contraseña: contraseña de aplicación (no la personal)
Autenticación: obligatoria`}
      />
      <p className="my-4">
        {
          "En clientes de correo (Outlook, Thunderbird) o apps web, configura IMAP para recibir y SMTP para enviar. Usa contraseñas de aplicación si el proveedor exige 2FA."
        }
      </p>
      <Callout title="Error frecuente">
        {
          "Mezclar registros MX de dos proveedores hace que parte del correo se pierda. Deja un solo conjunto de MX activo y espera propagación DNS."
        }
      </Callout>
    </section>
  );
}
