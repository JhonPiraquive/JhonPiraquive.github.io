export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {"Has comparado XAMPP y Docker como herramientas para desarrollo web local."}
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"XAMPP instala Apache + MariaDB + PHP + phpMyAdmin; el código va en htdocs/."}</li>
        <li>{"Docker empaqueta app y dependencias en imágenes; los contenedores son instancias en ejecución."}</li>
        <li>{"-p host:contenedor mapea puertos; navegas al puerto del host."}</li>
        <li>{"Multi-stage build separa compilación (Node) de runtime (Nginx) para imágenes más pequeñas."}</li>
        <li>{"Docker gana en reproducibilidad para equipos; XAMPP gana en simplicidad inicial para PHP solo."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"bases-de-datos"}</code>
        {" — SQL, integridad referencial y cuándo elegir NoSQL."}
      </p>
    </section>
  );
}
