import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function CasoAgenteDeProgramacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Caso 1: un equipo evalúa un agente de programación</h2>
      <p className="my-4">
        Una empresa de software de Pereira, con ocho desarrolladores, mantiene un sistema de facturación para tiendas.
        Varios integrantes usan asistentes de IA por su cuenta y la gerencia quiere decidir si adopta un agente de
        programación para todo el equipo. El caso recorre el método completo.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">1. El problema en una frase</h3>
      <p className="my-4">
        «Las tareas de mantenimiento pequeñas (corregir errores reportados, actualizar dependencias, escribir pruebas)
        ocupan el 40 % del tiempo del equipo y retrasan las funciones nuevas.»
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">2. Identificación (clase 1)</h3>
      <p className="my-4">
        Los agentes de programación cumplen los cinco atributos: hacen el trabajo de forma distinta, crecen muy rápido,
        tienen nombre y comunidad, prometen alto impacto y tienen mucha incertidumbre (precios, calidad, seguridad).
        Están entre el pico de expectativas y la pendiente de la comprensión, y los usa ya la mayoría temprana de los
        equipos de desarrollo. Anillo inicial: evaluar.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">3. Comprensión técnica (clase 2)</h3>
      <p className="my-4">
        El equipo distingue tres decisiones separadas: qué modelo, qué harness y con qué permisos. Identifica que el código
        del cliente se enviará al proveedor del modelo, que el agente puede ejecutar comandos en los equipos y que
        necesitará archivos de instrucciones y skills para respetar las convenciones del proyecto.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">4. Matriz y criterios eliminatorios</h3>
      <CompareTable
        headers={["Criterio", "Peso", "Seguir sin agente", "Agente A (en la nube)", "Agente B (con modelo propio)"]}
        rows={[
          ["Necesidad real (ahorro en mantenimiento)", "30 %", "1", "4", "3"],
          ["Seguridad y privacidad del código", "25 %", "5", "3", "5"],
          ["Costo total", "20 %", "5", "3", "2"],
          ["Facilidad de adopción para el equipo", "15 %", "5", "4", "2"],
          ["Dependencia del proveedor", "10 %", "5", "2", "4"],
          ["Total ponderado", "100 %", "3.80", "3.35", "3.25"],
        ]}
      />
      <p className="my-4">
        Hay dos criterios eliminatorios. El primero: el contrato con los clientes prohíbe que su código se use para
        entrenar modelos. El agente B lo cumple porque el modelo corre en servidores propios; el agente A lo cumple según
        las condiciones de su plan empresarial, que se verifican por escrito. El segundo: la alternativa debe atacar el
        problema planteado. «Seguir sin agente» no lo hace, así que queda como línea base y no como solución; su puntaje
        alto advierte que cualquier agente tendrá que demostrar en la práctica que su beneficio compensa el costo y el
        riesgo. La diferencia mínima entre A y B indica que hace falta evidencia práctica antes de elegir.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">5. Prueba de concepto y piloto</h3>
      <CompareTable
        headers={["Etapa", "Qué se hace", "Criterio de éxito definido antes"]}
        rows={[
          ["Prueba de concepto (3 días)", "Dos personas usan cada agente en diez errores reales ya resueltos, en una copia del repositorio.", "Al menos seis de diez correcciones correctas tras revisión humana."],
          ["Piloto (4 semanas)", "Tres personas usan el agente ganador en tareas de mantenimiento, con hooks que bloquean archivos de configuración y secretos.", "Tiempo de las tareas de mantenimiento 25 % menor, sin aumento de errores reportados después de publicar."],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">6. Decisión, riesgos y salida</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>Resultado del piloto:</strong> tiempo de mantenimiento 30 % menor; errores después de publicar sin cambio. Anillo: adoptar, por fases.</li>
        <li><strong>Riesgos:</strong> código incorrecto aceptado sin revisar (reducir: toda propuesta pasa por revisión de otra persona); fuga de secretos (reducir: hooks y variables de entorno); subida de precios (aceptar y vigilar).</li>
        <li><strong>Plan de salida:</strong> las instrucciones y skills se escriben en formatos abiertos (AGENTS.md, Agent Skills) para poder cambiar de harness sin reescribirlas.</li>
        <li><strong>Personas:</strong> capacitación de dos horas, una persona de referencia y reglas claras de uso.</li>
        <li><strong>Registro:</strong> un ADR con todo lo anterior y revisión en seis meses.</li>
      </ul>
      <Callout title="Lo que muestra el caso" variant="callout-tip">
        <p className="mb-0">
          La decisión no fue «la IA es buena» o «la IA es peligrosa». Fue una decisión acotada (este agente, para estas
          tareas, con estos permisos y estas métricas), con evidencia y con una salida prevista. Ese es el nivel de
          precisión que se busca.
        </p>
      </Callout>
    </section>
  );
}
