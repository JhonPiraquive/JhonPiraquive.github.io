import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ParaQueSeUsaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ámbitos de uso de JavaScript"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Desarrollo web (front-end)"}</h3>
      <p className="my-4">
        {
          "JS manipula el DOM, valida datos, comunica con APIs y construye experiencias interactivas. Muchos sitios combinan HTML (estructura), CSS (presentación) y JavaScript (comportamiento)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Aplicaciones en servidor (Node.js)"}</h3>
      <p className="my-4">
        {
          "Node.js es un entorno que ejecuta JavaScript fuera del navegador. Sirve para APIs REST, herramientas de línea de comandos, automatización y servidores en tiempo real."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Aplicaciones móviles"}</h3>
      <p className="my-4">
        {
          "En ecosistemas como React Native sueles escribir en TypeScript o usar sintaxis JSX. Un transpilador (Babel, tsc) convierte ese código a JavaScript estándar. El framework ejecuta la lógica y, mediante su puente nativo, traduce la interfaz a componentes que en Android interactúan con Kotlin/Java y en iOS con Swift/Objective-C."
        }
      </p>
      <p className="my-4">
        {
          "JavaScript vs TypeScript: TypeScript añade tipos estáticos sobre JS; los navegadores no ejecutan TS directamente — debe transpilarse a JavaScript antes de ejecutarse."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart LR
  subgraph dev [Código que escribes]
    TS[TypeScript / JSX]
  end
  subgraph build [Herramientas]
    TR[Transpilador Babel / tsc]
  end
  subgraph runtime [Ejecución]
    JS[Código JavaScript]
    BR[Navegador o Node.js]
  end
  TS --> TR --> JS --> BR`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Videojuegos y experiencias interactivas"}</h3>
      <p className="my-4">
        {
          "Existen motores y bibliotecas (Phaser, Three.js, WebGL) que usan JavaScript para juegos en navegador o empaquetados como aplicación."
        }
      </p>
      <PracticeExercise
        prompt="Enumera tres ámbitos donde se usa JavaScript hoy. Incluye al menos: navegador, servidor y uno más (móvil, herramientas, juegos, etc.)."
        hints={[
          "Piensa en Node.js para servidor",
          "React Native es un ejemplo móvil",
          "Phaser o Three.js son ejemplos de juegos",
        ]}
        expectedKeywords={["navegador", "servidor", "node"]}
        successMessage="Correcto. Has identificado los principales ecosistemas donde JavaScript opera hoy."
      />
    </section>
  );
}
