export function ComoProtegermeEquipoAplicacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cómo protegerme (equipo / aplicación)"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Mínimo privilegio: cada rol con permisos estrictos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Validación y sanitización en servidor (no solo en cliente)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Manejo seguro de sesión: cookies seguras, expiración, rotación."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Logs útiles sin filtrar secretos; alertas para eventos críticos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Gestión de secretos: fuera del repositorio, rotación y acceso controlado."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Pruebas de seguridad en el ciclo: revisión, escaneo y corrección."}</li>
      </ul>
    </section>
  );
}
