export function QueNoSolucionaHttpsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué no soluciona HTTPS"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"No arregla vulnerabilidades del servidor (SQLi, XSS, lógica)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"No evita que uses contraseñas débiles o repetidas."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"No evita que un atacante entre con credenciales reales robadas."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"No impide que tu app registre secretos en logs."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"No sustituye autorización: HTTPS no decide permisos."}</li>
      </ul>
    </section>
  );
}
