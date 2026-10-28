import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Nivel del módulo en esta clase: <strong>de 0 a 35</strong>. La clase parte de la pregunta más básica (qué hace
        que una tecnología sea «emergente») y termina con la capacidad de analizar cualquier tecnología con una ficha y
        ubicarla en su ciclo de vida.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Definir qué es una tecnología emergente y distinguirla de una tecnología simplemente nueva o de una moda.</li>
        <li>Explicar cómo evoluciona una tecnología con la curva S, el ciclo de sobreexpectación, la difusión de innovaciones y los niveles de madurez.</li>
        <li>Reconocer las señales que anuncian una tecnología emergente y las fuentes donde se vigilan.</li>
        <li>Describir las principales tecnologías emergentes actuales y algunas candidatas para los próximos años.</li>
        <li>Analizar una tecnología con una ficha de identificación que combine evidencia y criterio.</li>
      </ul>
      <Callout title="Apoyo técnico para la actividad 1" variant="callout-info">
        <p className="mb-0">
          La actividad del clon de productos se construye con React. Todo lo técnico que necesita está en la{" "}
          <Link href="/teaching/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes">
            guía de apoyo React, parte 1
          </Link>
          . React es, además, un buen ejemplo para aplicar lo que enseña esta clase: fue una tecnología emergente que
          maduró hasta volverse estándar.
        </p>
      </Callout>
    </section>
  );
}
