export function CierreHubSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resultados del curso"}</h2>
      <p className="my-4">{"Al completar las tres clases podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Especificar y documentar hardware según uso (oficina, estación de trabajo, servidor)."}</li>
        <li>{"Elegir almacenamiento y periféricos acordes al presupuesto y la carga de trabajo."}</li>
        <li>{"Instalar un sistema operativo y ejecutar tareas básicas desde la línea de comandos."}</li>
        <li>{"Gestionar usuarios, respaldos y mantenimiento preventivo del equipo."}</li>
      </ul>
    </section>
  );
}
