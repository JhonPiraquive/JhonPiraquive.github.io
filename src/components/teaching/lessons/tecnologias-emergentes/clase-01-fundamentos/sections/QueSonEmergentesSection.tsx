import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueSonEmergentesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es una tecnología emergente</h2>
      <p className="my-4">
        Una tecnología emergente es una tecnología que está naciendo o creciendo, que todavía no se usa en todas partes,
        pero que ya demostró que puede cambiar la manera en que las personas trabajan. El teléfono celular de hace veinte
        años sirve de ejemplo: existía, pero casi nadie imaginaba que iba a reemplazar la cámara, el mapa y la billetera.
      </p>
      <p className="my-4">
        El término no depende de la edad. La inteligencia artificial se estudia desde mediados del siglo XX y hoy sigue
        considerándose emergente, porque solo ahora alcanzó la capacidad de cómputo y los datos necesarios para
        usarse de forma masiva. Una tecnología es emergente mientras su impacto completo todavía no se ha materializado.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Características</h3>
      <CompareTable
        headers={["Característica", "Qué significa", "Ejemplo"]}
        rows={[
          ["Novedad relativa", "Es reciente o acaba de encontrar un uso práctico.", "Los asistentes de inteligencia artificial que conversan en lenguaje natural."],
          ["Crecimiento rápido", "Aumenta la inversión, la investigación y el número de usuarios.", "Los sensores conectados a internet en fábricas y hogares."],
          ["Impacto potencial", "Puede transformar una industria o crear una nueva.", "El blockchain aplicado a registros que no deben alterarse."],
          ["Incertidumbre", "Sus reglas, costos y riesgos todavía cambian.", "Las experiencias de realidad aumentada, cuyos dispositivos evolucionan cada año."],
          ["Adopción parcial", "Solo algunas organizaciones la usan en producción.", "Los robots colaborativos en líneas de ensamblaje."],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Panorama por áreas</h3>
      <MermaidDiagram
        title="Áreas de tecnologías emergentes"
        description="Mapa mental con inteligencia artificial, internet de las cosas, blockchain, realidad aumentada y virtual, robótica y domótica, y tecnologías web."
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
      <CompareTable
        headers={["Área", "Qué hace", "Dónde se aplica"]}
        rows={[
          ["Inteligencia artificial", "Sistemas que aprenden de datos para clasificar, predecir o generar contenido.", "Atención al cliente, diagnóstico médico, análisis de documentos."],
          ["Internet de las cosas (IoT)", "Objetos con sensores que envían datos por internet.", "Agricultura de precisión, control de inventarios, edificios inteligentes."],
          ["Blockchain", "Registro compartido en el que los datos no se pueden modificar sin dejar rastro.", "Trazabilidad de productos, certificados digitales."],
          ["Realidad aumentada y virtual", "Superponen información digital al mundo real o crean entornos simulados.", "Capacitación técnica, comercio electrónico, arquitectura."],
          ["Robótica y domótica", "Máquinas y sistemas que automatizan tareas físicas.", "Manufactura, logística, hogares conectados."],
          ["Tecnologías web", "Capacidades nuevas del navegador: apps instalables, código de alto rendimiento y experiencias inmersivas.", "PWA, WebAssembly, WebXR."],
        ]}
      />

      <Callout title="Dónde entra el desarrollo de software" variant="callout-info">
        <p className="mb-0">
          Detrás de cada tecnología emergente hay software: la aplicación que muestra los datos de los sensores, el panel
          donde se administra el sistema, la página que se conecta con un modelo de inteligencia artificial. Quien sabe
          construir interfaces web y conectarlas con datos tiene un lugar en casi todas ellas. Por esa razón el módulo
          utiliza el desarrollo web como terreno de práctica.
        </p>
      </Callout>
    </section>
  );
}
