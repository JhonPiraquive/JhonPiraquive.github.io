export function CifradoVsCodificacionVsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cifrado vs codificación vs hash (recordatorio)"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es cada uno"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li><strong>{"Cifrado:"}</strong>{" reversible con clave; protege confidencialidad (AES, RSA)."}</li>
        <li><strong>{"Codificación:"}</strong>{" reversible sin clave; solo cambia representación (Base64, URL encode)."}</li>
        <li><strong>{"Hash:"}</strong>{" irreversible; detecta cambios y verifica contraseñas (SHA-256, bcrypt)."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Elegir mal el mecanismo es una de las fallas más comunes: «ofuscar» con Base64, guardar contraseñas con MD5 sin salt, o usar hash donde se necesita recuperar el dato original."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo decidir"}</h3>
      <p className="my-4">
        {
          "¿Necesitas recuperar el contenido? → cifrado. ¿Solo transportar en texto? → codificación. ¿Verificar integridad o almacenar contraseña? → hash con algoritmo diseñado para passwords (bcrypt, Argon2), no SHA-256 plano."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"MD5/SHA-1 para contraseñas:"}</strong>
          {" Millones de hashes crackeados con rainbow tables en horas. Corrección: bcrypt/Argon2 con salt único por usuario."}
        </li>
        <li>
          <strong>{"SHA-256 sin salt en passwords:"}</strong>
          {" Mismo password = mismo hash; atacante identifica duplicados. Corrección: función de derivación de clave (KDF)."}
        </li>
        <li>
          <strong>{"Clave de cifrado en el código fuente:"}</strong>
          {" AES key en GitHub público; datos cifrados expuestos. Corrección: gestor de secretos (Vault, env vars rotadas)."}
        </li>
        <li>
          <strong>{"Hash como «firma» sin HMAC:"}</strong>
          {" Atacante recalculó hash de payload alterado. Corrección: HMAC-SHA256 con clave secreta para integridad autenticada."}
        </li>
      </ul>
    </section>
  );
}
