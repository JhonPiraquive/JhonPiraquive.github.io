import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: especificar PC para estudio contable en Medellín"}
      </h2>
      <p className="my-4 font-semibold">{"«Ficha técnica de un equipo de oficina»"}</p>
      <p className="my-4">
        {
          "Una firma contable de 12 empleados necesita 4 PCs nuevos: Excel pesado, navegador con muchas pestañas, impresora de red y respaldo en NAS. Presupuesto moderado; el gabinete va bajo el escritorio en oficina sin aire acondicionado dedicado."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Tipo de chasis, con justificación del flujo de aire y el espacio."}</li>
        <li>{"CPU (núcleos e hilos) y RAM (cantidad y tipo DDR), sin sobredimensionar."}</li>
        <li>{"Tipo de refrigeración acorde al TDP y al ambiente."}</li>
        <li>{"Por qué 16 GB de RAM en dual-channel son preferibles a 8 GB en single-channel."}</li>
        <li>{"Qué se consulta en BIOS/UEFI antes del primer arranque del SO."}</li>
        <li>{"Conversión de 32 GB a bytes aproximados (potencias de 2) para la hoja de vida."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Una buena respuesta incluye:"}</strong>
        {
          " chasis adecuado al entorno, CPU/RAM coherentes con carga, refrigeración por aire mantenible, distinción RAM vs disco, referencia a orden de arranque y versión BIOS, cálculo binario correcto."
        }
      </p>
      <PracticeExercise
        prompt="Resolver el reto: chasis, CPU, RAM, refrigeración, BIOS y conversión de 32 GB para la firma contable de Medellín."
        hints={[
          "Mid o Mini Tower con buen flujo",
          "Ryzen 5 / Core i5, 6+ núcleos",
          "16 GB DDR4/DDR5 dual-channel",
          "Cooler de torre o stock según TDP",
          "Secure Boot, orden de arranque",
          "32 × 1024³ bytes",
        ]}
        expectedKeywords={["RAM", "chasis", "núcleos", "BIOS", "refrigeración"]}
        successMessage="Excelente: la respuesta integra arquitectura, memoria y criterios de despliegue en un caso real de oficina."
        rows={8}
      />
    </section>
  );
}
