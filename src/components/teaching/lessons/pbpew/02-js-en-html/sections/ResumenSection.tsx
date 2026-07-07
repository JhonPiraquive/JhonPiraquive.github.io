export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "El navegador ejecuta JS solo si está incluido con <script> (inline o src). Prefiere JS externo + defer o script al final del body en proyectos reales."
          }
        </li>
        <li>
          {
            "La ubicación del script determina si el DOM ya existe: <head> sin defer que usa getElementById suele fallar; defer y final del body evitan ese riesgo."
          }
        </li>
        <li>
          {
            "async no garantiza orden ni espera al DOM; úsalo para scripts independientes (analytics), no para lógica que manipula nodos del body."
          }
        </li>
        <li>
          {
            "La consola es tu aliada: log, warn, error, table. Network diagnostica 404 en rutas incorrectas."
          }
        </li>
        <li>
          {
            "Los comentarios (//, /* */) ayudan a futuros lectores; documenta el propósito, no lo obvio."
          }
        </li>
        <li>
          {
            "La lección siguiente (03-variables-y-tipos) introduce variables y tipos primitivos."
          }
        </li>
      </ul>
    </section>
  );
}
