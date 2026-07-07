import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { StepReveal } from "@/components/teaching/StepReveal";

export function DiscosAlmacenamientoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Discos y dispositivos de almacenamiento"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un dispositivo de almacenamiento persiste datos de forma no volátil: sistema operativo, aplicaciones, documentos y respaldos. En un PC de escritorio o portátil suele conectarse por SATA o NVMe; en servidores empresariales también por SAS o SAN."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "La elección del disco define velocidad de arranque, tiempo de apertura de archivos, capacidad de respaldo y costo por GB. En una PYME de Cali que edita video, un SSD NVMe reduce horas de espera; en un archivo municipal con terabytes de PDF, un HDD sigue siendo económico para almacenamiento masivo."
        }
      </p>

      <h4 className="mt-4 mb-2 text-lg font-semibold">{"HDD (disco duro mecánico)"}</h4>
      <figure className="my-6">
        <img
          src="/teaching/configuracion-sistemas-operativos/hdd.jpg"
          alt="Disco duro mecánico HDD con platillos magnéticos"
          className="mx-auto max-w-md rounded-[var(--clay-radius)]"
        />
      </figure>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (HDD)"}</h3>
      <p className="my-4">
        {
          "Platillos magnéticos giran a miles de RPM; un brazo con cabezales lee y escribe sectores. La latencia mecánica (buscar pista + esperar sector) limita el IOPS frente a medios sólidos."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Ventaja: mucho espacio por poco dinero (1–20 TB comunes)."}</li>
        <li>{"Desventaja: más lento, sensible a golpes si está en uso, mayor consumo y ruido."}</li>
        <li>{"Uso típico: NAS casero, respaldos fríos, servidores de archivos."}</li>
      </ul>

      <h4 className="mt-4 mb-2 text-lg font-semibold">{"SSD (unidad de estado sólido)"}</h4>
      <figure className="my-6">
        <img
          src="/teaching/configuracion-sistemas-operativos/ssd.jpg"
          alt="SSD de estado sólido con chips NAND flash"
          className="mx-auto max-w-md rounded-[var(--clay-radius)]"
        />
      </figure>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (SSD)"}</h3>
      <p className="my-4">
        {
          "Memoria flash NAND guarda cargas eléctricas en celdas; no hay partes móviles. El controlador gestiona wear leveling, TRIM y caché SLC para equilibrar velocidad y vida útil."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"SATA SSD: hasta ~550 MB/s; mismo conector que HDD."}</li>
        <li>{"NVMe (M.2 PCIe): miles de MB/s; ideal para SO y aplicaciones."}</li>
        <li>{"Uso típico: portátiles, PCs de oficina, boot drive en servidores."}</li>
      </ul>

      <h4 className="mt-4 mb-2 text-lg font-semibold">{"SAS (Serial Attached SCSI)"}</h4>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (SAS)"}</h3>
      <p className="my-4">
        {
          "Interfaz serie derivada de SCSI para entornos empresariales: discos SAS o SSD SAS en bahías hot-swap, controladoras RAID, doble canal y mayor fiabilidad (MTBF). No suele verse en PCs de consumo; sí en servidores Dell/HP de una universidad o datacenter regional."
        }
      </p>

      <CompareTable
        title="Comparativa HDD vs SSD vs SAS"
        headers={["Criterio", "HDD", "SSD (SATA/NVMe)", "SAS (empresarial)"]}
        rows={[
          ["Principio", "Platillos magnéticos", "Flash NAND", "Flash o platos + interfaz SAS"],
          ["Velocidad típica", "100–200 MB/s", "550 MB/s – 7 GB/s (NVMe)", "Similar SSD SAS, IOPS altos"],
          ["Costo por TB", "Bajo", "Medio–alto", "Alto"],
          ["Durabilidad ante golpes", "Baja en uso", "Alta", "Alta (diseño rack)"],
          ["Entorno", "Escritorio, NAS", "PC, portátil", "Servidor, SAN"],
          ["Ruido / consumo", "Mayor", "Menor", "Variable (enterprise)"],
        ]}
      />

      <StepReveal
        title="Flujo de lectura en almacenamiento"
        steps={[
          {
            title: "1. Petición del SO",
            content: "El sistema operativo pide un bloque de datos (archivo, página de swap, registro de BD).",
          },
          {
            title: "2. Controlador",
            content: "SATA/NVMe/SAS traduce la petición LBA al medio físico (sector flash o pista magnética).",
          },
          {
            title: "3. Lectura",
            content: "HDD: latencia de seek + rotación. SSD: acceso casi instantáneo por dirección lógica.",
          },
          {
            title: "4. Caché y buffer",
            content: "RAM del controlador o caché del SO acelera lecturas repetidas.",
          },
          {
            title: "5. Entrega a la app",
            content: "Los bytes llegan al proceso que los solicitó (navegador, editor, base de datos).",
          },
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo técnico: consultar discos en Windows"}</h3>
      <CodeFiddle
        language="powershell"
        title="Inventario básico de discos"
        code={`Get-PhysicalDisk | Select FriendlyName, MediaType, Size, HealthStatus
# MediaType: HDD | SSD | Unspecified`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo técnico: SMART en Linux"}</h3>
      <CodeFiddle
        language="bash"
        title="Estado de salud del disco"
        code={`sudo apt install smartmontools
sudo smartctl -a /dev/sda | grep -E "Model|Rotation|Temperature|Reallocated"`}
      />

      <Callout title="Caso real: laboratorio SENA Bucaramanga">
        {
          "Reemplazaron 20 HDD de 500 GB por SSD SATA de 256 GB en PCs de diseño: arranque de Windows pasó de 3 minutos a 35 segundos. Los HDD viejos se reasignaron a un NAS solo para respaldos nocturnos — uso coherente con cada tecnología."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Instalar el SO en HDD de 5400 RPM en estación de diseño:"}</strong>
          {" lentitud constante → SSD NVMe o al menos SATA SSD para sistema y caché."}
        </li>
        <li>
          <strong>{"Mover un portátil con HDD mientras copia archivos grandes:"}</strong>
          {" riesgo de bad sectors → esperar fin de escritura o usar SSD."}
        </li>
        <li>
          <strong>{"Ignorar SMART con sectores reasignados en aumento:"}</strong>
          {" fallo inminente sin respaldo → clonar y reemplazar antes de la pérdida total."}
        </li>
        <li>
          <strong>{"Mezclar SAS y SATA en la misma bahía sin verificar backplane:"}</strong>
          {" incompatibilidad o velocidad negociada al mínimo → consultar HCL del servidor."}
        </li>
        <li>
          <strong>{"Llenar un SSD al 95 % de capacidad:"}</strong>
          {" degradación de rendimiento y wear → mantener ≥15 % libre o ampliar disco."}
        </li>
      </ul>
    </section>
  );
}
