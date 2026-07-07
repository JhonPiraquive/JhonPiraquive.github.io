export function QueEsBase64Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es Base64"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Base64 es una codificación (no cifrado): transforma bytes binarios en caracteres ASCII imprimibles (A–Z, a–z, 0–9, +, /) para transportar datos en canales que solo aceptan texto (JSON, email, URLs)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Se usa en adjuntos MIME, tokens JWT (parte payload), imágenes embebidas en HTML y APIs. Confundirlo con «protección» es un error grave: cualquiera con el string Base64 puede decodificarlo en segundos."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "Agrupa bytes en bloques de 3 → 4 caracteres Base64. Es reversible sin clave: echo 'aG9sYQ==' | base64 -d devuelve «hola». Para confidencialidad necesitas cifrado (AES, etc.), no Base64."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"«Ofuscar» contraseñas con Base64:"}</strong>
          {" API guardó password como Base64; atacante decodificó en minutos. Corrección: hash con bcrypt/Argon2, nunca codificación reversible."}
        </li>
        <li>
          <strong>{"JWT «secreto» en payload Base64:"}</strong>
          {" Desarrollador creyó que payload cifrado; cualquiera leyó roles y user_id. Corrección: JWT payload es legible; firmar y no poner secretos."}
        </li>
        <li>
          <strong>{"Datos sensibles en query string Base64:"}</strong>
          {" URL con ?data=eyJ... exponía documento en logs de proxy. Corrección: POST cifrado o token opaco de un solo uso."}
        </li>
        <li>
          <strong>{"Confiar en «encoding» en tránsito sin TLS:"}</strong>
          {" Base64 no reemplaza HTTPS; datos viajan legibles tras decodificar. Corrección: TLS para confidencialidad en tránsito."}
        </li>
      </ul>
    </section>
  );
}
