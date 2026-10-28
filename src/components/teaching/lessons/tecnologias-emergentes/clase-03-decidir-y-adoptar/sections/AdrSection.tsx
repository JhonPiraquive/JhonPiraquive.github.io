import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function AdrSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">El registro de decisión (ADR)</h2>
      <p className="my-4">
        Seis meses después de adoptar una tecnología, alguien preguntará: «¿por qué se eligió esto?». Si la respuesta solo
        está en la memoria de una persona, se pierde. Un <strong>ADR</strong> (por <em>Architecture Decision Record</em>,
        registro de decisión de arquitectura) es un documento corto que guarda una decisión importante, su contexto, las
        alternativas consideradas y sus consecuencias.
      </p>
      <p className="my-4">
        Los ADR se guardan junto al código, por ejemplo en una carpeta <code>docs/decisiones</code>, numerados en orden. No
        se borran: si una decisión cambia, se escribe un ADR nuevo que reemplaza al anterior y se marca el viejo como
        «reemplazado». Así queda la historia completa, como las actas de una junta.
      </p>
      <CodeFiddle
        language="markdown"
        title="docs/decisiones/004-libreria-de-componentes.md"
        code={`# 4. Usar Material UI como librería de componentes del panel administrativo

Estado: Aceptada
Fecha: <fecha de la decisión>

## Contexto
El panel administrativo de la biblioteca necesita tablas, formularios y diálogos
accesibles. El equipo tiene dos personas con experiencia en React y seis semanas
de plazo. Escribir los componentes desde cero tomaría la mitad del plazo.

## Alternativas consideradas
1. Componentes propios con CSS: control total, pero lento y con riesgo de problemas de accesibilidad.
2. Material UI: madura, muy documentada, con componentes administrativos listos.
3. Una librería de componentes sin estilos: flexible, pero exige diseñar todo el aspecto.

## Decisión
Se adopta Material UI (puntaje 4.2 frente a 3.1 y 3.4 en la matriz ponderada).

## Consecuencias
- Positivas: tablas y formularios accesibles desde el primer día; tema claro y oscuro.
- Negativas: el aspecto visual se parece a otros sitios; el paquete aumenta el peso inicial.
- Riesgos y mitigación: cambios de versión mayores; se fijan las versiones y se revisan las guías de migración.
- Cómo se revertiría: los componentes se envuelven en componentes propios para poder cambiar la librería por partes.`}
      />
      <Callout title="Un ADR no necesita ser largo" variant="callout-tip">
        <p className="mb-0">
          Una página es suficiente. Lo importante es que responda tres preguntas: qué se decidió, por qué y qué se sabía en
          ese momento. Esa última parte permite juzgar la decisión con justicia más adelante, cuando la situación sea otra.
        </p>
      </Callout>
    </section>
  );
}
