import { ClassPagesNavSection } from "@/components/teaching/ClassPagesNavSection";
import { ALL_CLASSES } from "../../class-navigation";

export function NavegacionClasesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Clases del curso"}</h2>
      {ALL_CLASSES.map((clase) => (
        <div key={clase.classSlug} className="my-6">
          <h3 className="mb-2 text-xl font-semibold">{clase.classTitle}</h3>
          <ClassPagesNavSection track="configuracion-sistemas-operativos" classSlug={clase.classSlug} pages={clase.pages} />
        </div>
      ))}
    </section>
  );
}
