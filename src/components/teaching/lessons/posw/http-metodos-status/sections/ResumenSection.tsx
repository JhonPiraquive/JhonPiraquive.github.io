export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Los métodos HTTP expresan intención sobre un recurso (RFC 9110): GET lee, POST crea, PUT reemplaza, PATCH actualiza parcialmente, DELETE elimina."
          }
        </li>
        <li>
          {
            "Safe = no modifica estado (GET, HEAD, OPTIONS). Idempotente = repetir no cambia el efecto final (GET, PUT, DELETE; POST y PATCH en general no)."
          }
        </li>
        <li>
          {
            "CRUD se mapea a verbos y URIs: POST colección, GET recurso, PUT/PATCH actualización, DELETE eliminación."
          }
        </li>
        <li>
          {
            "Códigos de estado agrupan resultado en familias 1xx–5xx; 4xx = error del cliente, 5xx = error del servidor."
          }
        </li>
        <li>
          {
            "401 = falta autenticación; 403 = sin permiso. 201 + Location para creación; 204 para DELETE sin cuerpo."
          }
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"http-headers"}</code>
          {" — metadatos, CORS y seguridad en mensajes HTTP."}
        </li>
      </ul>
    </section>
  );
}
