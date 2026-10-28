import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function PruebaDeConceptoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">La prueba de concepto</h2>
      <p className="my-4">
        Una <strong>prueba de concepto</strong> (en inglés, <em>proof of concept</em> o PoC) es un experimento pequeño y
        rápido para comprobar si una tecnología puede resolver el problema. No busca construir el producto, sino responder
        una pregunta. Por eso su código se descarta casi siempre.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Reglas de una buena prueba</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Una pregunta concreta:</strong> «¿Puede esta librería mostrar mil filas sin que la tabla se trabe?», no «¿sirve esta librería?».</li>
        <li><strong>Tiempo limitado:</strong> se fija de antemano (por ejemplo, dos días). Si no se logra en ese tiempo, eso también es una respuesta.</li>
        <li><strong>Criterio de éxito escrito antes:</strong> qué resultado se considera «funciona».</li>
        <li><strong>El caso más difícil primero:</strong> probar la parte que más dudas genera, no la más fácil.</li>
        <li><strong>Resultado documentado:</strong> qué se probó, qué salió y qué se recomienda.</li>
      </ul>
      <CodeFiddle
        language="markdown"
        title="Plantilla de prueba de concepto"
        code={`# Prueba de concepto: <tecnología> para <problema>

## Pregunta
¿Puede <tecnología> lograr <resultado concreto> en <condición difícil>?

## Límite de tiempo
<por ejemplo, 2 días>

## Criterio de éxito (definido antes de empezar)
- <métrica 1, por ejemplo: carga la lista de 1000 registros en menos de 1 segundo>
- <métrica 2>

## Qué se hizo
-

## Resultado
- ¿Se cumplió el criterio? Sí / No / Parcialmente
- Evidencia (capturas, mediciones):

## Recomendación
Seguir a piloto / Probar otra alternativa / Descartar`}
      />
      <Callout title="El error más común" variant="callout-warning">
        <p className="mb-0">
          Definir el criterio de éxito después de ver el resultado. Cuando eso ocurre, casi cualquier prueba parece
          exitosa, porque sin darse cuenta se ajusta la meta a lo que se obtuvo. Escribirlo antes protege contra el
          entusiasmo propio.
        </p>
      </Callout>
    </section>
  );
}
