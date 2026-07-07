import { Callout } from "@/components/teaching/Callout";

export function PrerrequisitosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Prerrequisitos"}</h2>
      <p className="my-4">
        {
          "Antes de la Clase 1 conviene tener familiaridad básica con el uso de un computador (encender, instalar programas, navegar archivos) y haber visto conceptos introductorios de redes si cursas en paralelo el track POSW."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Uso básico de Windows o Linux (escritorio, carpetas, navegador)."}</li>
        <li>{"Concepto de archivo, carpeta y unidad de almacenamiento."}</li>
        <li>{"Opcional: lección posw/modelo-cliente-servidor para contextualizar el rol del SO en red."}</li>
      </ul>
      <Callout title="Material de apoyo">
        {
          "No se requiere experiencia previa en ensamblaje de PCs ni administración de servidores. El curso parte desde la arquitectura del hardware visible."
        }
      </Callout>
    </section>
  );
}
