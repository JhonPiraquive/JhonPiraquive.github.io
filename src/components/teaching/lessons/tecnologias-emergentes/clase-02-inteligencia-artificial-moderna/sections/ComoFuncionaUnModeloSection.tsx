import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComoFuncionaUnModeloSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cómo funciona un modelo de lenguaje</h2>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Tokens: las piezas del texto</h3>
      <p className="my-4">
        Un modelo no lee letras ni palabras completas, sino <strong>tokens</strong>: fragmentos de texto que pueden ser una
        palabra corta, parte de una palabra larga o un signo de puntuación. «Manizales», por ejemplo, puede dividirse en
        dos o tres tokens. Como referencia aproximada, un texto en español usa algo más de un token por palabra.
      </p>
      <p className="my-4">
        Los tokens importan por dos razones prácticas: los servicios de IA cobran por token (los que se envían y los que se
        reciben) y cada modelo tiene un límite de tokens que puede considerar a la vez.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Predecir el siguiente token</h3>
      <p className="my-4">
        La tarea básica de un modelo de lenguaje es sorprendentemente sencilla de describir: dado un texto, calcula qué
        token es más probable que siga. Elige uno, lo agrega al texto y repite. Una respuesta larga es el resultado de
        repetir esa predicción cientos o miles de veces. Es como el autocompletado del teclado del celular, pero entrenado
        con una cantidad gigantesca de texto y con capacidad de seguir instrucciones complejas.
      </p>
      <MermaidDiagram
        title="Generación token por token"
        description="Ciclo: el texto entra al modelo, el modelo calcula probabilidades, se elige un token, se agrega al texto y el ciclo se repite hasta terminar."
        chart={`flowchart LR
  A["Texto actual"] --> B["Modelo calcula<br/>probabilidades"]
  B --> C["Se elige un token"]
  C --> D["Se agrega al texto"]
  D --> E{"¿Terminó?"}
  E -- No --> A
  E -- Sí --> F["Respuesta completa"]`}
      />
      <p className="my-4">
        El siguiente código simula esa idea con un «modelo» diminuto que solo conoce algunas palabras. Puede pegarse en la
        consola del navegador. La <strong>temperatura</strong> controla qué tan arriesgada es la elección: con temperatura
        cero siempre se elige la opción más probable; con una temperatura mayor aparecen opciones menos probables y el
        resultado varía entre ejecuciones.
      </p>
      <CodeFiddle
        language="javascript"
        title="Simulación de generación con temperatura"
        code={`// Probabilidades inventadas: qué palabra sigue a cada palabra
const modelo = {
  "el":       { "café": 0.6, "cacao": 0.3, "dato": 0.1 },
  "café":     { "de": 0.7, "es": 0.3 },
  "cacao":    { "de": 0.8, "es": 0.2 },
  "dato":     { "es": 1.0 },
  "de":       { "Colombia": 0.5, "origen": 0.3, "exportación": 0.2 },
  "es":       { "suave": 0.5, "fuerte": 0.3, "valioso": 0.2 },
};

function elegir(opciones, temperatura) {
  const entradas = Object.entries(opciones);
  if (temperatura === 0) {
    return entradas.sort((a, b) => b[1] - a[1])[0][0]; // la más probable
  }
  // Ajustar probabilidades con la temperatura y sortear
  const pesos = entradas.map(([palabra, p]) => [palabra, Math.pow(p, 1 / temperatura)]);
  const total = pesos.reduce((suma, [, peso]) => suma + peso, 0);
  let azar = Math.random() * total;
  for (const [palabra, peso] of pesos) {
    azar -= peso;
    if (azar <= 0) return palabra;
  }
  return pesos.at(-1)[0];
}

function generar(inicio, temperatura, maxTokens = 4) {
  const texto = [inicio];
  while (texto.length <= maxTokens && modelo[texto.at(-1)]) {
    texto.push(elegir(modelo[texto.at(-1)], temperatura));
  }
  return texto.join(" ");
}

console.log("Temperatura 0:  ", generar("el", 0));
console.log("Temperatura 1.5:", generar("el", 1.5));
console.log("Temperatura 1.5:", generar("el", 1.5));`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Entrenamiento e inferencia</h3>
      <CompareTable
        headers={["Fase", "Qué ocurre", "Quién la hace", "Analogía"]}
        rows={[
          [
            "Preentrenamiento",
            "El modelo lee enormes cantidades de texto y ajusta sus parámetros para predecir mejor el siguiente token.",
            "Laboratorios con miles de procesadores durante semanas o meses.",
            "Leer una biblioteca entera.",
          ],
          [
            "Ajuste y alineación",
            "Se entrena con ejemplos de buenas respuestas y con valoraciones humanas para que siga instrucciones y evite respuestas dañinas.",
            "Los mismos laboratorios.",
            "Hacer prácticas supervisadas después de leer.",
          ],
          [
            "Inferencia",
            "El modelo ya entrenado recibe un texto y genera una respuesta. Sus parámetros no cambian.",
            "Cada vez que alguien usa el modelo.",
            "Responder un examen con lo que ya se sabe.",
          ],
        ]}
      />
      <Callout title="Una consecuencia importante" variant="callout-warning">
        <p className="mb-0">
          Durante la inferencia el modelo no aprende. Si en una conversación se le corrige un dato, lo tiene en cuenta
          mientras ese texto esté en la conversación, pero el modelo en sí no cambia. Además, su conocimiento llega hasta
          una <strong>fecha de corte</strong>: lo que ocurrió después del entrenamiento no lo sabe, salvo que se le entregue
          esa información en el mensaje o mediante una herramienta de búsqueda.
        </p>
      </Callout>
    </section>
  );
}
