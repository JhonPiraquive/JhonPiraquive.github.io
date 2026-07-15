import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function BiosParticionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"BIOS/UEFI y particiones de disco"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es BIOS/UEFI"}</h3>
      <p className="my-4">
        {
          "BIOS (legado) y UEFI (moderno) son firmware que inicializan el hardware al encender el PC y cargan el gestor de arranque. UEFI soporta discos GPT mayores a 2 TB y arranque seguro (Secure Boot)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Particiones"}</h3>
      <p className="my-4">
        {
          "Una partición es una división lógica del disco con su propio sistema de archivos. Esquemas comunes:"
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Esquema"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Tabla"}</th>
            <th className="py-2 text-left font-semibold">{"Notas"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"UEFI moderno"}</td>
            <td className="py-2 pr-4">{"GPT"}</td>
            <td className="py-2">{"Partición EFI (~512 MB), sistema, swap opcional, /home o datos"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Legacy BIOS"}</td>
            <td className="py-2 pr-4">{"MBR"}</td>
            <td className="py-2">{"Máx. 4 particiones primarias; límite 2 TB por disco"}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo Linux (GPT)"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"/boot/efi — FAT32, 512 MB–1 GB"}</li>
        <li>{"/ — ext4, 30–50 GB (sistema y programas)"}</li>
        <li>{"/home — ext4, resto del disco (datos de usuario)"}</li>
        <li>{"swap — opcional si RAM ≥ 16 GB en SSD rápido"}</li>
      </ul>
      <MermaidDiagram
        title="Distribución de un disco GPT para Linux"
        chart={`flowchart LR
  D[Disco con tabla GPT] --> E[Partición EFI<br/>FAT32]
  D --> R[Partición raíz<br/>ext4]
  D --> H[Partición home<br/>ext4]
  D --> S[Partición swap<br/>opcional]`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona Secure Boot"}</h3>
      <p className="my-4">
        {
          "Secure Boot solo permite arrancar firmas de confianza. Algunas distros Linux requieren desactivarlo o registrar claves; en entornos corporativos se documenta la política antes de instalar."
        }
      </p>
      <Callout title="Señal de mal uso">
        {"Doble arranque Windows + Linux sin espacio libre previo: el instalador puede sobrescribir la partición de recuperación de Windows."}
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Convertir MBR a GPT en disco con datos sin respaldo (riesgo de pérdida total)."}</li>
        <li>{"Crear partición EFI demasiado pequeña (< 100 MB) y fallar actualizaciones del firmware."}</li>
        <li>{"Desactivar Secure Boot permanentemente «porque Linux no arranca» sin investigar shim firmado."}</li>
        <li>{"Usar toda la unidad como una sola partición C: en Windows de producción sin volumen de datos D:."}</li>
        <li>{"Particionar con herramientas gráficas sin leer qué partición es de recuperación OEM."}</li>
      </ul>
    </section>
  );
}
