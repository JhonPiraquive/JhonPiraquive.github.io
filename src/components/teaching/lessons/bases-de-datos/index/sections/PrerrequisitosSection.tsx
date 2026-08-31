import { CompareTable } from "@/components/teaching/CompareTable";

export function PrerrequisitosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Prerrequisitos sugeridos"}</h2>
      <p className="my-4">{"Antes de avanzar, confirma que cumples lo mínimo sugerido:"}</p>
      <CompareTable
        headers={["Nivel", "Qué necesitas"]}
        rows={[
          [
            "Obligatorio",
            "Uso básico de PC: carpetas, instaladores con asistente, crear y guardar archivos",
          ],
          [
            "Opcional",
            "Nociones de programación (variables, condiciones, leer código simple)",
          ],
        ]}
      />
      <p className="my-4">
        {"Si solo tienes el nivel obligatorio, puedes completar este hub y la Clase 01 sin problema."}
      </p>
    </section>
  );
}
