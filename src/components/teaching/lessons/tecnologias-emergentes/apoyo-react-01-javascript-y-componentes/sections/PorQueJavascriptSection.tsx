import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function PorQueJavascriptSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Por qué la web y JavaScript como terreno de práctica</h2>
      <p className="my-4">
        Para aprender sobre tecnologías emergentes hace falta una tecnología concreta con la cual practicar. La web, con
        JavaScript y React, cumple tres condiciones: es accesible (solo requiere un navegador y un editor), es
        transversal (casi toda tecnología emergente termina exponiendo una interfaz web) y evoluciona rápido, lo que
        obliga a aplicar los criterios de evaluación en situaciones reales.
      </p>

      <CompareTable
        title="Razones para usar JavaScript"
        headers={["Razón", "Explicación"]}
        rows={[
          ["Está en todas partes", "Es el único lenguaje que el navegador entiende de forma nativa, de modo que está presente en todas las páginas web."],
          ["Un solo lenguaje, muchos destinos", "Con el mismo lenguaje se programa la parte visual (frontend), el servidor (Node.js), aplicaciones móviles y de escritorio."],
          ["Comunidad amplia", "Casi cualquier duda ya fue respondida por alguien, lo que reduce el costo de aprender."],
          ["Se adapta a lo nuevo", "Hoy ejecuta código de alto rendimiento (WebAssembly), aplicaciones instalables (PWA) y experiencias de realidad aumentada en el navegador (WebXR)."],
        ]}
      />

      <Callout title="Qué se aprende en realidad" variant="callout-info">
        <p className="mb-0">
          Las librerías concretas cambiarán con los años. Lo que permanece es la capacidad de aprender una herramienta
          nueva, evaluarla con criterios y conectarla con datos reales. Esa es la competencia que el módulo busca
          desarrollar a través de React.
        </p>
      </Callout>
    </section>
  );
}
