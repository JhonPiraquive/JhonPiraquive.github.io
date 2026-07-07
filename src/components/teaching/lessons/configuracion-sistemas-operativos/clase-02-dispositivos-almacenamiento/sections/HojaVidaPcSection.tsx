import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function HojaVidaPcSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Hoja de vida del PC"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La hoja de vida (o ficha técnica) del computador es un documento estructurado que registra identidad del equipo, componentes de hardware, software instalado, historial de mantenimiento y responsable. Es el «expediente clínico» del PC en inventario institucional."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin hoja de vida no hay trazabilidad: garantías vencidas sin aviso, licencias duplicadas, piezas incompatibles al reparar. En una cooperativa de Pereira con 40 puestos, el inventario evitó comprar RAM DDR3 para slots DDR4 y aceleró tickets de soporte."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona: datos mínimos"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Bloque"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Campos ejemplo"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Identificación"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Activo fijo #, serial fabricante, etiqueta de activo, ubicación física"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Hardware"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Marca/modelo, CPU, RAM, discos, GPU, monitor, periféricos"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Software"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"SO + versión, Office, antivirus, apps críticas, tipo de licencia"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Mantenimiento"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Fecha compra, garantía, upgrades, limpieza, incidencias"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Responsable"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Usuario asignado, área, contacto soporte TI"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <StepReveal
        title="Crear hoja de vida en 5 pasos"
        steps={[
          {
            title: "1. Identificar",
            content: "Fotografiar etiqueta de servicio y pegar código de barras de activo fijo.",
          },
          {
            title: "2. Auditar hardware",
            content: "CPU-Z, msinfo32 o lshw para CPU, RAM, discos y placa base.",
          },
          {
            title: "3. Inventariar software",
            content: "Lista de programas instalados + claves de licencia en bóveda segura.",
          },
          {
            title: "4. Registrar red",
            content: "Hostname, MAC, IP fija/DHCP, dominio o grupo de trabajo.",
          },
          {
            title: "5. Actualizar",
            content: "Tras cada cambio de disco, RAM o reinstalación de SO, nueva versión fechada.",
          },
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: plantilla JSON de inventario"}</h3>
      <CodeFiddle
        language="json"
        title="Fragmento hoja de vida"
        code={`{
  "activo_id": "TI-BOG-0042",
  "serial": "8CG1234ABC",
  "hardware": {
    "cpu": "Intel Core i5-12400",
    "ram_gb": 16,
    "discos": [
      { "tipo": "NVMe SSD", "capacidad_gb": 512, "modelo": "WD Blue SN570" }
    ],
    "monitor": "24\\" 1920x1080 IPS"
  },
  "software": {
    "so": "Windows 11 Pro 23H2",
    "office": "Microsoft 365 Apps — licencia E3 institucional"
  },
  "ultima_actualizacion": "2026-03-15"
}`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: recolección en Linux"}</h3>
      <CodeFiddle
        language="bash"
        title="Resumen hardware"
        code={`sudo dmidecode -t system | grep -E "Manufacturer|Product|Serial"
lsblk -o NAME,SIZE,TYPE,MODEL
free -h`}
      />

      <Callout title="Buenas prácticas">
        {
          "Centraliza hojas de vida en hoja de cálculo, CMDB o GLPI; nunca solo en la cabeza del técnico que renunció. Incluye foto del equipo y ubicación en plano de oficina si hay muchos puestos iguales."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Inventario solo con «PC Dell» sin serial:"}</strong>
          {" imposible reclamar garantía → serial y factura escaneada."}
        </li>
        <li>
          <strong>{"No actualizar tras upgrade de disco:"}</strong>
          {" soporte asume HDD lento → registrar SSD y fecha de clonación."}
        </li>
        <li>
          <strong>{"Guardar licencias en Post-it en el monitor:"}</strong>
          {" robo o foto accidental → bóveda de contraseñas corporativa."}
        </li>
        <li>
          <strong>{"Mezclar PC personal y corporativo sin distinguir:"}</strong>
          {" auditoría fallida → campo «propiedad» y política BYOD clara."}
        </li>
      </ul>
    </section>
  );
}
