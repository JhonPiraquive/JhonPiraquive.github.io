import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: inventario del laboratorio TI Valledupar"}
      </h2>
      <p className="my-4 font-semibold">{"«Documentación y mejoras para 10 PCs de laboratorio»"}</p>
      <p className="my-4">
        {
          "Contexto: instituto técnico con 10 torres de varios años de uso (HDD 1 TB, 8 GB RAM, monitor 19″ 1280×1024). Usan Windows sin licencia clara, Office pirata y antivirus vencido. Presupuesto moderado."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Elementos del caso"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Plantilla de hoja de vida (campos hardware + software) para un PC modelo."}</li>
        <li>{"Propuesta de disco: ¿SSD de arranque más HDD de datos, o solo SSD? Con justificación."}</li>
        <li>{"Lista de periféricos a reemplazar (teclado, mouse, monitor), con criterio."}</li>
        <li>{"Plan de licencias legal: SO, ofimática y antivirus."}</li>
        <li>{"Un comando o herramienta para auditar hardware (Windows o Linux)."}</li>
        <li>{"Riesgo de no actualizar el inventario tras la mejora."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Una buena respuesta incluye: hoja de vida completa, elección de almacenamiento coherente, periféricos acordes al uso, licencias sin piratería y trazabilidad documentada."
        }
      </p>
      <div className="my-8">
        <PracticeExercise
          prompt="Redactar en 6–10 líneas la propuesta para el laboratorio: tipo de disco, resolución de monitor objetivo, dos programas con tipo de licencia y un campo clave de la hoja de vida."
          hints={["SSD 256 GB + HDD opcional", "1080p 24″", "Linux o M365", "serial/activo"]}
          expectedKeywords={["SSD", "licencia", "hoja", "monitor", "1080"]}
          successMessage="Verificar que la propuesta tenga: almacenamiento acorde, pantalla legible, software licenciado y expediente del PC actualizable."
          rows={6}
        />
      </div>
    </section>
  );
}
