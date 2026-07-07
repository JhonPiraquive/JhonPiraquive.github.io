import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: especificar PC para estudio contable en Medellín"}
      </h2>
      <p className="my-4 font-semibold">{"«Diseña la ficha técnica de un equipo de oficina»"}</p>
      <p className="my-4">
        {
          "Una firma contable de 12 empleados necesita 4 PCs nuevos: Excel pesado, navegador con muchas pestañas, impresora de red y respaldo en NAS. Presupuesto moderado; el gabinete va bajo el escritorio en oficina sin aire acondicionado dedicado."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Elige tipo de chasis y justifica flujo de aire y espacio."}</li>
        <li>{"Especifica CPU (núcleos/hilos), RAM (cantidad y DDR), sin sobredimensionar."}</li>
        <li>{"Indica tipo de refrigeración acorde al TDP y ambiente."}</li>
        <li>{"Explica por qué 16 GB RAM dual-channel es preferible a 8 GB single-channel."}</li>
        <li>{"Menciona qué consultarías en BIOS/UEFI antes del primer arranque del SO."}</li>
        <li>{"Convierte 32 GB a bytes aproximados (potencias de 2) para la hoja de vida."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Criterio de éxito:"}</strong>
        {
          " chasis adecuado al entorno, CPU/RAM coherentes con carga, refrigeración por aire mantenible, distinción RAM vs disco, referencia a orden de arranque y versión BIOS, cálculo binario correcto."
        }
      </p>
      <PracticeExercise
        prompt="Completa el reto: chasis, CPU, RAM, refrigeración, BIOS y conversión de 32 GB para la firma contable de Medellín."
        hints={[
          "Mid o Mini Tower con buen flujo",
          "Ryzen 5 / Core i5, 6+ núcleos",
          "16 GB DDR4/DDR5 dual-channel",
          "Cooler de torre o stock según TDP",
          "Secure Boot, orden de arranque",
          "32 × 1024³ bytes",
        ]}
        expectedKeywords={["RAM", "chasis", "núcleos", "BIOS", "refrigeración"]}
        successMessage="Excelente. Has integrado arquitectura, memoria y criterios de despliegue en un caso real de oficina."
        rows={8}
      />
    </section>
  );
}
