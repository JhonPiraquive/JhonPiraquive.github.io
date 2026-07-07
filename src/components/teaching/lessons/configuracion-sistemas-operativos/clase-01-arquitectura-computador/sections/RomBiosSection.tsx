import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function RomBiosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"ROM, BIOS, EEPROM y memoria flash"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La ROM (Read-Only Memory) almacena firmware de forma no volátil: persiste sin alimentación. La BIOS (Basic Input/Output System) o su sucesora UEFI inicializa hardware en el arranque, ejecuta POST y carga el gestor de arranque. EEPROM y flash permiten actualizar ese firmware sin cambiar chip."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin firmware válido, el PC no arranca aunque CPU y RAM sean correctos. Actualizar BIOS puede añadir soporte para CPUs nuevos; un flash fallido puede «brickear» la placa hasta recuperación con programador externo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Al presionar power, la CPU ejecuta código en flash SPI de la placa."}</li>
        <li>{"POST verifica RAM, CPU, GPU y dispositivos críticos."}</li>
        <li>{"UEFI/BIOS enumera dispositivos de arranque (disco, USB, red)."}</li>
        <li>{"Carga el bootloader del SO desde el dispositivo seleccionado."}</li>
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">{"Ver versión de firmware en Linux:"}</p>
      <CodeFiddle
        language="bash"
        title="Versión BIOS/UEFI en Linux"
        code={`sudo dmidecode -t bios | grep -E 'Vendor|Version|Release'`}
      />
      <p className="my-4">{"En Windows (PowerShell):"}</p>
      <CodeFiddle
        language="powershell"
        title="Versión BIOS en Windows"
        code={`Get-CimInstance Win32_BIOS |
  Select-Object Manufacturer, SMBIOSBIOSVersion, ReleaseDate`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Flashear BIOS durante tormenta eléctrica sin UPS: corte de luz = placa inutilizable."}</li>
        <li>{"Actualizar BIOS «porque sí» sin leer changelog: riesgo innecesario si no se necesita el parche."}</li>
        <li>{"Desactivar Secure Boot sin entender implicaciones: facilita bootkits en equipos corporativos."}</li>
        <li>{"Confundir reset de CMOS con reinstalar Windows: el primero borra configuración UEFI, no el disco."}</li>
        <li>{"Dejar contraseña de BIOS olvidada en equipo de laboratorio: bloquea cambio de orden de arranque."}</li>
      </ul>
    </section>
  );
}
