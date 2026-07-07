import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: stack mínimo en producción"}
      </h2>
      <p className="my-4">
        {
          "Diseña la configuración completa para una startup que lanza `tienda.ejemplo.com` con correo `ventas@tienda.ejemplo.com` y panel admin en `admin.tienda.ejemplo.com`."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Lista registros DNS necesarios (A, CNAME, MX, TXT/SPF)."}</li>
        <li>{"Indica tipo de hosting y por qué (compartido vs VPS vs cloud)."}</li>
        <li>{"Describe pasos para HTTPS con Let's Encrypt."}</li>
        <li>{"Explica cómo accederías por SSH para desplegar una actualización."}</li>
        <li>{"Propón contenedor Docker o VM para entorno de pruebas previo a producción."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: DNS coherente, un solo proveedor MX, HTTPS forzado, acceso remoto seguro y entorno de prueba aislado."
        }
      </p>
      <PracticeExercise
        prompt="Documenta tu solución: registros DNS, hosting elegido, comando certbot, comando SSH y decisión contenedor vs VM."
        hints={[
          "A @ y www, CNAME admin, MX a Google",
          "VPS pequeño o PaaS",
          "certbot --nginx",
          "ssh deploy@IP",
          "Docker para staging",
        ]}
        expectedKeywords={["DNS", "HTTPS", "SSH", "MX"]}
        successMessage="Excelente. Has integrado dominio, hosting, correo, TLS y administración remota."
        rows={8}
      />
    </section>
  );
}
