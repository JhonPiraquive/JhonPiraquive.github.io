import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase construye del lado del cliente y cierra con calidad: frameworks de frontend con TypeScript, React y Angular, el entorno de desarrollo, los principios SOLID, las convenciones de nombres y el uso de la IA con verificación."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir frontend (client-side) como la capa que el usuario ve e interactúa en el navegador, ejecutada en su dispositivo y separada del backend."}</li>
        <li>{"Definir TypeScript como superset tipado de JavaScript que compila a JS y explicar el flujo tsc → JavaScript."}</li>
        <li>{"Definir React como librería de UI basada en componentes, Virtual DOM y flujo unidireccional de datos."}</li>
        <li>{"Describir Angular como framework opinionado de Google basado en TypeScript: componentes, módulos, servicios e inyección de dependencias."}</li>
        <li>{"Describir XAMPP (Apache, MariaDB, PHP, phpMyAdmin) y levantar un entorno local con htdocs como document root."}</li>
        <li>{"Explicar el acrónimo SOLID y nombrar cada principio con su regla en una frase."}</li>
        <li>{"Explicar por qué el naming impacta legibilidad, mantenimiento y onboarding en equipos web."}</li>
        <li>{"Enumerar usos productivos de IA en desarrollo web (boilerplate, debug, refactor, tests, documentación)."}</li>
      </ul>
      <Callout title="Código que otros puedan mantener">
        {"La herramienta cambia; los principios, los nombres claros y la verificación de lo que produce la IA se mantienen."}
      </Callout>
    </section>
  );
}
