import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function VigilanciaPersonalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Mantenerse al día sin agobiarse</h2>
      <p className="my-4">
        Es imposible seguir todas las novedades. Intentarlo produce cansancio y conocimiento superficial. La alternativa
        es una <strong>vigilancia personal</strong> pequeña y constante, igual a la vigilancia tecnológica de la clase 1
        pero a escala de una persona.
      </p>
      <CompareTable
        title="Una rutina posible"
        headers={["Frecuencia", "Actividad", "Tiempo"]}
        rows={[
          ["Semanal", "Leer los blogs oficiales de las herramientas que se usan (publican poco y todo es relevante) y un boletín de noticias de calidad.", "30 minutos"],
          ["Mensual", "Revisar dependencias de los proyectos (npm outdated, npm audit) y los avisos de seguridad.", "30 minutos"],
          ["Trimestral", "Elegir una tecnología emergente, llenar su ficha de identificación y hacer un proyecto pequeño con ella.", "Un fin de semana"],
          ["Anual", "Leer un informe de tendencias (radar tecnológico, encuesta de desarrolladores) y ajustar el radar personal.", "Una tarde"],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El radar personal</h3>
      <p className="my-4">
        Una idea práctica es llevar un radar propio con los mismos cuatro anillos: qué se domina y se usa (adoptar), qué
        se está practicando (probar), qué se quiere investigar (evaluar) y qué se decidió no aprender por ahora (resistir).
        Revisarlo cada pocos meses muestra el avance y evita perseguir cada novedad.
      </p>
      <Callout title="Ideas para un portafolio" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Un panel administrativo con CRUD y una ficha de identificación y un ADR que expliquen las tecnologías elegidas.</li>
          <li>Una prueba de concepto documentada con una tecnología emergente (IA en el navegador, WebGPU, un servidor MCP propio).</li>
          <li>Un servidor MCP pequeño que exponga una API pública como herramienta para un agente.</li>
        </ul>
      </Callout>
    </section>
  );
}
