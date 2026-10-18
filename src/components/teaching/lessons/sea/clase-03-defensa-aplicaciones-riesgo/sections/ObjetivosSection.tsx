import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase cierra el recorrido con las decisiones de diseño y gestión: cómo se protege una sesión, cómo se programa para fallar sin exponer datos, qué piden las normas ISO/IEC 27001 y 27002 y cómo se priorizan los controles con una matriz de riesgos."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Describir las banderas de una cookie de sesión (Secure, HttpOnly, SameSite) y cuándo conviene usar tokens JWT."}</li>
        <li>{"Aplicar reglas de programación segura: excepciones por capas, mensajes de error y registros sin datos sensibles, configuración sin secretos embebidos."}</li>
        <li>{"Diferenciar ISO/IEC 27001 (sistema de gestión) de 27002 (catálogo de controles)."}</li>
        <li>{"Construir una matriz de riesgos y priorizar mitigaciones por impacto y probabilidad."}</li>
        <li>{"Justificar una decisión de riesgo: aceptar, mitigar, transferir o evitar."}</li>
      </ul>
      <Callout title="Cumplir no es lo mismo que estar seguro">
        {"Las normas ordenan el trabajo y la matriz de riesgos prioriza, pero la reducción real del riesgo depende de aplicar controles verificables."}
      </Callout>
    </section>
  );
}
