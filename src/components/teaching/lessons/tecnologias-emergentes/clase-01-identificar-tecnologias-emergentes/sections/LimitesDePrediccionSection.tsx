import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function LimitesDePrediccionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Los límites de predecir el futuro</h2>
      <p className="my-4">
        La historia de la tecnología está llena de predicciones equivocadas en las dos direcciones: tecnologías que se
        anunciaron como revolucionarias y no despegaron, y otras que se subestimaron y terminaron cambiándolo todo.
      </p>
      <CompareTable
        headers={["Caso", "Qué se esperaba", "Qué pasó", "Lección"]}
        rows={[
          [
            "Gafas inteligentes de consumo",
            "Que todo el mundo llevaría información frente a los ojos.",
            "La primera generación fracasó por precio, privacidad y poca utilidad; años después regresan con otro enfoque.",
            "Una buena idea puede llegar antes de tiempo.",
          ],
          [
            "El metaverso",
            "Que el trabajo y la vida social se mudarían a mundos virtuales.",
            "La adopción fue mucho menor de lo anunciado; la inversión se redirigió hacia la IA.",
            "El pico de expectativas no garantiza la adopción.",
          ],
          [
            "Internet",
            "Muchos la consideraban una herramienta para académicos y militares.",
            "Transformó el comercio, la educación y la comunicación.",
            "El impacto real puede ser mucho mayor que el previsto.",
          ],
          [
            "La cámara digital",
            "Una empresa líder de fotografía en rollo la inventó y la dejó de lado para proteger su negocio.",
            "La cámara digital reemplazó al rollo y la empresa perdió su liderazgo.",
            "Ignorar una emergente por comodidad puede salir muy caro.",
          ],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué hacer ante la incertidumbre</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Pensar en escenarios</strong> y no en una sola predicción: qué pasa si la tecnología despega, si tarda o si fracasa.</li>
        <li><strong>Vigilar señales concretas</strong>, como las de la tabla de candidatas, en lugar de opiniones.</li>
        <li><strong>Hacer apuestas pequeñas y reversibles</strong>: aprender lo básico o hacer un piloto cuesta poco y deja preparado.</li>
        <li><strong>Revisar periódicamente</strong> las conclusiones: lo que era horizonte 3 puede pasar a horizonte 2.</li>
      </ul>
      <Callout title="El puente hacia la clase 3" variant="callout-tip">
        <p className="mb-0">
          Identificar una tecnología emergente es el primer paso. El segundo es decidir qué hacer con ella: ignorarla,
          vigilarla, probarla o adoptarla. Esa decisión, y la forma de llevarla a cabo, es el tema de la clase 3. Antes, la
          clase 2 estudia a fondo la emergente más importante del momento: la inteligencia artificial.
        </p>
      </Callout>
    </section>
  );
}
