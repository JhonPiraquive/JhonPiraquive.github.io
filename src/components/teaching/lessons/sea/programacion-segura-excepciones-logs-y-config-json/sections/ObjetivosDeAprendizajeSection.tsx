export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Aplicar 6 reglas de programación segura en endpoints y lógica de negocio."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Diseñar manejo de excepciones por capas (presentación vs dominio vs infraestructura)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Redactar mensajes de error seguros: usuario vs log interno."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir qué registrar en logs (y qué nunca) con 8 ejemplos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Proponer una estructura JSON de configuración sin secretos embebidos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar por qué “más logs” no siempre es mejor sin disciplina."}</li>
      </ul>
    </section>
  );
}
