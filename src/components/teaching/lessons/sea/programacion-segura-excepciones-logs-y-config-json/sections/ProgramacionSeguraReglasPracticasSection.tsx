export function ProgramacionSeguraReglasPracticasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Programación segura (reglas prácticas)"}</h2>
      <p className="my-4">{"Programar seguro es reducir sorpresa. Tu código debe ser predecible ante entradas malas, fallos de red, errores de base de datos y abuso. No es paranoia: es diseño para el mundo real."}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Validar entradas por tipo/longitud/formato en servidor."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Aplicar autorización en cada acción, no solo en “pantallas”."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"No confiar en el cliente para decisiones críticas."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Usar dependencias actualizadas y evitar “copiar y pegar” código de origen dudoso."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Tratar errores como eventos esperables: manejar y registrar."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Limitar intentos y velocidad en acciones sensibles (rate limiting)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Separar ambientes (dev/test/prod) y no mezclar configuraciones."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Revisar secretos: nunca en repositorio, nunca en logs."}</li>
      </ul>
    </section>
  );
}
