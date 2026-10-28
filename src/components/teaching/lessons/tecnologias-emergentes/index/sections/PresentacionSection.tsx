import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function PresentacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Presentación</h2>
      <p className="my-4">
        Casi toda organización busca hacer más con menos: atender a más clientes, cometer menos errores y decidir con
        datos. La tecnología es el camino para lograrlo, y recorrer ese camino se conoce como transformación digital.
      </p>
      <p className="my-4">
        Una tecnología emergente es aquella que todavía está creciendo, pero que ya muestra que puede cambiar la manera
        de trabajar, estudiar o comunicarse. La inteligencia artificial, el internet de las cosas, la robótica, la
        computación espacial y las nuevas formas de energía son ejemplos actuales. Adoptarlas a tiempo puede dar una
        ventaja; adoptarlas mal cuesta dinero, tiempo y confianza, porque lo nuevo puede cambiar de reglas, carecer de
        documentación o desaparecer.
      </p>
      <p className="my-4">
        Por eso el módulo no se centra en aprender una tecnología concreta, sino en tres capacidades que sirven para
        cualquiera: <strong>identificar</strong> una tecnología emergente y entender en qué etapa está,{" "}
        <strong>comprender</strong> a fondo la más influyente del momento (la inteligencia artificial moderna, con sus
        modelos, agentes y herramientas) y <strong>decidir</strong> con método si conviene adoptarla y cómo hacerlo.
      </p>
      <p className="my-4">
        El recorrido sigue una escala de 0 a 100 repartida en tres clases. En el 0 no se sabe qué hace emergente a una
        tecnología; en el 100 se puede analizar cualquiera, explicar cómo funciona un agente de IA y defender una decisión
        de adopción con evidencia, riesgos y un plan.
      </p>
      <Callout title="La práctica: guía de apoyo React" variant="callout-info">
        <p className="mb-0">
          Las actividades del módulo se desarrollan con React, una librería de JavaScript para construir interfaces web
          que fue emergente y hoy es estándar. Todo lo técnico para resolverlas está en la{" "}
          <Link href="/teaching/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes">guía de apoyo React</Link>
          , organizada en tres partes que acompañan a cada actividad.
        </p>
      </Callout>
    </section>
  );
}
