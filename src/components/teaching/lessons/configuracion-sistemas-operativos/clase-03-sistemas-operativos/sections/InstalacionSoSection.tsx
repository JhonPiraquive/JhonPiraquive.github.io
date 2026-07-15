import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function InstalacionSoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Instalación y configuración del sistema operativo"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Instalar un SO implica preparar el hardware, crear o seleccionar particiones, copiar archivos del sistema, configurar el arranque e instalar drivers para que todos los dispositivos funcionen correctamente."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Requisitos previos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"CPU y arquitectura compatibles (x86_64, ARM)."}</li>
        <li>{"RAM mínima y recomendada (ej. 4 GB mín / 8 GB recomendado para escritorio)."}</li>
        <li>{"Espacio en disco según edición (20–64 GB típico en escritorio)."}</li>
        <li>{"Medio de instalación: USB booteable, ISO verificada con checksum."}</li>
        <li>{"Respaldo de datos del disco antes de particionar."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona el flujo"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Verificar requisitos y descargar imagen oficial del SO."}</li>
        <li>{"Crear USB booteable (Rufus, Ventoy, dd)."}</li>
        <li>{"Entrar a BIOS/UEFI y configurar orden de arranque o boot one-time."}</li>
        <li>{"Iniciar instalador: idioma, teclado, licencia."}</li>
        <li>{"Particionar disco (ver página BIOS y particiones)."}</li>
        <li>{"Copiar archivos y configurar usuario inicial."}</li>
        <li>{"Instalar drivers faltantes (GPU, Wi‑Fi, chipset)."}</li>
        <li>{"Aplicar actualizaciones del sistema y activar respaldo."}</li>
      </ol>
      <MermaidDiagram
        title="Flujo de instalación del SO"
        description="Pasos desde requisitos hasta actualizaciones y respaldo"
        chart={`flowchart TD
  A[Verificar requisitos e ISO] --> B[Crear USB booteable]
  B --> C[Configurar BIOS o UEFI]
  C --> D[Idioma teclado licencia]
  D --> E[Particionar disco]
  E --> F[Copiar sistema y usuario]
  F --> G[Instalar drivers]
  G --> H[Actualizar y respaldar]
`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Drivers"}</h3>
      <p className="my-4">
        {
          "Los drivers son el puente entre el kernel y el hardware. Tras instalar Linux, a veces faltan firmware Wi‑Fi o GPU; en Windows, Windows Update o el sitio del fabricante (Dell, Lenovo, HP) completan el equipo."
        }
      </p>
      <Callout title="Señal de buen uso">
        {"Instalación desde imagen oficial, partición separada para /home o datos, drivers verificados y primer respaldo programado el mismo día."}
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Instalar desde ISO pirata o mirrors no verificados (malware preinstalado)."}</li>
        <li>{"Formatear el único disco sin respaldo de fotos y documentos del cliente."}</li>
        <li>{"Omitir actualizaciones críticas «hasta que termine el proyecto»."}</li>
        <li>{"Usar partición única gigante sin separar sistema y datos (reinstalar implica perder todo)."}</li>
        <li>{"Instalar drivers de sitios de terceros con bundlers de publicidad en lugar del fabricante."}</li>
      </ul>
    </section>
  );
}
