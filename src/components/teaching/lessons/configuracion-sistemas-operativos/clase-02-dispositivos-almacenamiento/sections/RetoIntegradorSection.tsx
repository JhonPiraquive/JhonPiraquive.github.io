import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: inventario del laboratorio TI Valledupar"}
      </h2>
      <p className="my-4 font-semibold">{"«Documenta y propón mejoras para 10 PCs de laboratorio»"}</p>
      <p className="my-4">
        {
          "Contexto: instituto técnico con 10 torres de 2019 (HDD 1 TB, 8 GB RAM, monitor 19″ 1280×1024). Usan Windows sin licencia clara, Office pirata y antivirus vencido. Presupuesto 2026: moderado."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Entregables"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Plantilla de hoja de vida (campos hardware + software) para un PC modelo."}</li>
        <li>{"Propuesta disco: ¿SSD boot + HDD datos o solo SSD? Justifica."}</li>
        <li>{"Lista de periféricos a reemplazar (teclado, mouse, monitor) con criterio."}</li>
        <li>{"Plan de licencias legal: SO, ofimática y antivirus."}</li>
        <li>{"Un comando o herramienta para auditar hardware (Windows o Linux)."}</li>
        <li>{"Riesgo si no se actualiza inventario tras el upgrade."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: hoja de vida completa, elección de almacenamiento coherente, periféricos acordes al uso, licencias sin piratería y trazabilidad documentada."
        }
      </p>
      <div className="my-8">
        <PracticeExercise
          prompt="Redacta en 6–10 líneas tu propuesta para el laboratorio: tipo de disco, resolución de monitor objetivo, dos programas con tipo de licencia y un campo clave de la hoja de vida."
          hints={["SSD 256 GB + HDD opcional", "1080p 24″", "Linux o M365", "serial/activo"]}
          expectedKeywords={["SSD", "licencia", "hoja", "monitor", "1080"]}
          successMessage="Revisa: almacenamiento acorde, pantalla legible, software licenciado y expediente del PC actualizable."
          rows={6}
        />
      </div>
    </section>
  );
}
