export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "El backend ejecuta en el servidor: lógica de negocio, persistencia, auth, integraciones y APIs."
          }
        </li>
        <li>
          {"Seis responsabilidades: persistencia, auth, lógica, APIs, background, integraciones externas."}
        </li>
        <li>
          {"Arquitectura en capas: rutas → controladores → servicios → modelos → DB/caché/externos."}
        </li>
        <li>
          {
            "Frameworks: Express/NestJS (Node), FastAPI/Django (Python), Spring Boot (Java), Laravel (PHP), ASP.NET Core (C#)."
          }
        </li>
        <li>{"Elegir stack: experiencia del equipo primero; luego tipo de proyecto y criterios de rendimiento."}</li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"cache"}</code>
          {" — cómo acelerar el backend con caché en servidor, CDN y navegador."}
        </li>
      </ul>
    </section>
  );
}
