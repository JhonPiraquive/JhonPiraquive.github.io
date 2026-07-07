export function CierreHubSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resultados del curso"}</h2>
      <p className="my-4">{"Al completar las cuatro clases podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Configurar DNS y dominios (.co, .com) para un proyecto real."}</li>
        <li>{"Desplegar un sitio con HTTPS y correo corporativo."}</li>
        <li>{"Administrar servidores por SSH/SFTP de forma segura."}</li>
        <li>{"Crear entornos Docker o VM para pruebas y diagnosticar fallos típicos."}</li>
      </ul>
    </section>
  );
}
