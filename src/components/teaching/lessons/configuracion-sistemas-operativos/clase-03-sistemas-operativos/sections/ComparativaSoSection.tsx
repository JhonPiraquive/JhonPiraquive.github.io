import { CompareTable } from "@/components/teaching/CompareTable";

export function ComparativaSoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tabla comparativa: Windows, macOS, Linux, Android e iOS"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Cada familia de SO responde a un ecosistema distinto: licenciamiento, hardware soportado, consola de administración y mercado objetivo. Conocer las diferencias ayuda al técnico a elegir herramienta y documentar entornos heterogéneos."
        }
      </p>

      <CompareTable
        headers={["SO / familia", "Kernel / base", "Consola típica", "Licencia", "Fortaleza", "Debilidad"]}
        rows={[
          [
            "Windows",
            "NT",
            "CMD, PowerShell",
            "Propietaria (OEM/retail)",
            "Compatibilidad software ofimática y AD",
            "Menos flexible en servidores sin licencia",
          ],
          [
            "macOS",
            "XNU (BSD + Mach)",
            "Terminal (zsh/bash)",
            "Propietaria (solo Apple)",
            "Integración hardware-software, multimedia",
            "Hardware cerrado, costo",
          ],
          [
            "Linux (distros)",
            "Linux",
            "bash, sh",
            "Mayoría libre (GPL)",
            "Servidores, contenedores, personalización",
            "Fragmentación de distros, curva de aprendizaje",
          ],
          [
            "Android",
            "Linux",
            "ADB (desarrollo), sin consola usuario",
            "AOSP + capas OEM",
            "Ecosistema móvil masivo",
            "Actualizaciones dependen del fabricante",
          ],
          [
            "iOS / iPadOS",
            "XNU",
            "Sin consola usuario (solo dev)",
            "Propietaria Apple",
            "Seguridad por sandbox, MDM empresarial",
            "Cerrado, sin sideload sin perfil",
          ],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Distribuciones Linux frecuentes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Ubuntu / Debian: popular en servidores cloud y laboratorios educativos."}</li>
        <li>{"Fedora / RHEL / CentOS Stream: entornos empresariales y soporte comercial."}</li>
        <li>{"Arch / Manjaro: usuarios avanzados que quieren rolling release."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En LATAM muchas PYMEs mezclan Windows en contabilidad, Linux en el servidor web y Android en campo. El técnico debe saber dónde está cada consola y qué política de actualización aplica."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Comprar licencias Windows OEM y reinstalarlas en otro equipo físico (viola EULA)."}</li>
        <li>{"Instalar macOS en hardware no Apple en producción (inestable y sin soporte)."}</li>
        <li>{"Elegir una distro Linux «bleeding edge» para servidor de facturación sin plan de actualización."}</li>
        <li>{"Rootear Android de empleados con datos corporativos sin segregación de perfil de trabajo."}</li>
        <li>{"Asumir que iOS y macOS se administran igual (MDM y políticas difieren)."}</li>
      </ul>
    </section>
  );
}
