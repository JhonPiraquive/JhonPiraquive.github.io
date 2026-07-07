import { Callout } from "@/components/teaching/Callout";

export function RiesgosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Riesgos de IA: alucinaciones y privacidad"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa de riesgos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Alucinaciones: APIs inventadas, paquetes inexistentes, docs ficticias."
          }
        </li>
        <li>
          {
            "Código sin comprensión: copiar-pegar acumula deuda técnica imposible de depurar."
          }
        </li>
        <li>
          {
            "Privacidad: no enviar secrets, PII ni código propietario sin acuerdo (GDPR, Habeas Data)."
          }
        </li>
        <li>
          {
            "Dependencia excesiva: perder capacidad de razonar sin IA debilita entrevistas e incidentes."
          }
        </li>
      </ul>
      <Callout title="Caso real: express-rate-limiter-pro no existe">
        {
          "Un dev pidió middleware de rate limiting; la IA importó un paquete inexistente. CI pasó lint local sin npm install limpio; producción falló en deploy. Decisión: verificar en npm, npm ci en pipeline, rechazar PR sin package-lock actualizado."
        }
      </Callout>
      <Callout title="Caso real: core de pagos pegado en IA pública">
        {
          "Un consultor pegó fragmentos del core de pagos para refactorizar. Auditoría detectó fuga de lógica propietaria. Decisión: política de datos, IA enterprise con DPA, anonimizar snippets, agentes locales sin telemetría sensible."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Aceptar código sin leer línea por línea."}</li>
        <li>{"Prompt vago sin stack ni restricciones."}</li>
        <li>{"Pegar API keys y .env en el chat."}</li>
        <li>{"Saltar tests porque \"la IA ya lo probó\"."}</li>
        <li>{"Omitir code review humano en PRs 100% generados por IA."}</li>
      </ul>
      <Callout title="Amplificador de productividad, no de responsabilidad">
        {
          "La IA acelera boilerplate y explicaciones, pero tú firmas el merge. Si no puedes explicar el código línea por línea, es deuda técnica. El flujo humano — entender, testear, revisar — no es opcional."
        }
      </Callout>
    </section>
  );
}
