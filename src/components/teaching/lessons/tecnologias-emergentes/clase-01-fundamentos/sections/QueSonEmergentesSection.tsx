import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueSonEmergentesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es una tecnología emergente</h2>
      <p className="my-4">
        Una tecnología emergente es una tecnología que está naciendo o creciendo, que todavía no se usa en todas
        partes, pero que ya demostró que puede cambiar la manera en que trabajamos. Piensa en el celular hace
        veinte años: existía, pero casi nadie imaginaba que iba a reemplazar la cámara, el mapa y la billetera.
      </p>
      <p className="my-4">
        Tiene dos caras. Por un lado promete mucho: más rapidez, menos costo, cosas que antes eran imposibles. Por el
        otro es incierta: puede cambiar de reglas, puede no tener buena documentación y puede que dentro de tres años
        nadie la use. Aprender a vivir entre esas dos caras es la habilidad real de este módulo.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un mapa de las más conocidas</h3>
      <MermaidDiagram
        title="Algunas tecnologías emergentes y para qué sirven"
        description="Mapa mental con inteligencia artificial, internet de las cosas, blockchain, realidad aumentada y virtual, robótica, domótica y tecnologías web."
        chart={`mindmap
  root((Tecnologías emergentes))
    Inteligencia artificial
      Asistentes y chatbots
      Análisis de datos
    Internet de las cosas
      Sensores
      Casa y fábrica conectadas
    Blockchain
      Registros que no se alteran
    Realidad aumentada y virtual
      Capacitación
      Comercio
    Robótica y domótica
      Automatizar tareas físicas
    Tecnologías web
      PWA
      WebAssembly
      WebXR`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El ciclo que casi todas siguen</h3>
      <p className="my-4">
        Casi ninguna tecnología nueva pasa directo de la idea al éxito. Normalmente sigue un camino parecido: llega con
        mucho entusiasmo, después viene la desilusión cuando se descubre que no resuelve todo, y al final las que valen
        la pena maduran y se vuelven normales. Conocer este camino te ayuda a no emocionarte de más ni a descartar algo
        demasiado pronto.
      </p>
      <MermaidDiagram
        title="Ciclo de vida típico de una tecnología nueva"
        description="Flujo en cinco etapas: idea, entusiasmo, desilusión, aprendizaje y madurez."
        chart={`flowchart LR
  A["Idea o invento"] --> B["Entusiasmo: todos hablan de ella"]
  B --> C["Desilusión: no resuelve todo"]
  C --> D["Aprendizaje: se entiende dónde sí sirve"]
  D --> E["Madurez: se vuelve herramienta normal"]`}
      />

      <Callout title="Dónde entra el desarrollo de software" variant="callout-info">
        <p className="mb-0">
          Detrás de cada tecnología emergente hay software: la aplicación que muestra los datos de los sensores, el
          panel donde se administra el sistema, la página que conecta con una inteligencia artificial. Quien sabe
          construir interfaces web y conectarlas con datos tiene un lugar en casi todas ellas. Por eso este módulo se
          enfoca en eso.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Por qué JavaScript</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Es el único lenguaje que el navegador entiende de forma nativa, así que está en todas las páginas web.</li>
        <li>Con el mismo lenguaje puedes hacer la parte visual (frontend), el servidor (Node.js), aplicaciones móviles y de escritorio.</li>
        <li>Tiene una comunidad enorme: casi cualquier duda que tengas ya fue respondida por alguien.</li>
        <li>Se adapta a lo nuevo: hoy corre código de alto rendimiento (WebAssembly), apps instalables (PWA) y experiencias de realidad aumentada en el navegador (WebXR).</li>
      </ul>
    </section>
  );
}
