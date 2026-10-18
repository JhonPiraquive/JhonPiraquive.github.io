import { CompareTable } from "@/components/teaching/CompareTable";

export function ComparativaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"XAMPP vs Docker: reproducibilidad y producción"}
      </h2>
      <CompareTable
        headers={["Aspecto", "XAMPP", "Docker"]}
        rows={[
          ["Instalación", "Un instalador gráfico", "Requiere Docker Engine y terminal"],
          ["Reproducibilidad", "Depende del SO y versiones locales", "Imagen idéntica en dev, CI y prod"],
          ["Producción", "No recomendado", "Estándar en deploy moderno"],
          ["Curva de aprendizaje", "Baja para PHP local", "Mayor al inicio"],
          ["Caso ideal", "Proyecto PHP académico individual", "Equipo que necesita entorno idéntico"],
        ]}
      />
    </section>
  );
}
