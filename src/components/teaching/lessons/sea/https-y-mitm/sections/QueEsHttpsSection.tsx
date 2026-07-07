export function QueEsHttpsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es HTTPS"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "HTTPS es HTTP sobre una conexión cifrada y autenticada mediante TLS (Transport Layer Security). El candado del navegador indica que el tráfico viaja cifrado y que el certificado fue emitido para ese dominio."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Protege confidencialidad e integridad en tránsito: contraseñas, tokens, datos personales no viajan en texto plano. Los navegadores marcan HTTP como «No seguro» y SEO penaliza sitios sin HTTPS."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (handshake simplificado)"}</h3>
      <p className="my-4">
        {
          "Cliente y servidor negocian versión TLS, intercambian claves y el servidor presenta certificado. El cliente valida cadena de confianza (CA). Tras el handshake, todo el HTTP viaja cifrado. HTTPS no protege datos ya comprometidos en el servidor ni vulnerabilidades de la aplicación."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Certificado expirado ignorado:"}</strong>
          {" E-commerce perdió ventas 2 días; clientes no confiaban en aviso del navegador. Corrección: monitoreo de expiración + renovación automática (Let's Encrypt)."}
        </li>
        <li>
          <strong>{"TLS 1.0/1.1 en producción:"}</strong>
          {" Auditoría PCI falló; hosting no había deshabilitado protocolos obsoletos. Corrección: TLS 1.2+ únicamente."}
        </li>
        <li>
          <strong>{"HTTPS solo en login:"}</strong>
          {" Sesión cookie viajaba en HTTP tras autenticarse; MITM robó cookie en WiFi público. Corrección: HTTPS en todo el sitio + HSTS."}
        </li>
        <li>
          <strong>{"Certificado autofirmado en producción pública:"}</strong>
          {" Usuarios aceptaron excepción manual; entrenamiento para ignorar advertencias. Corrección: CA reconocida o Let's Encrypt."}
        </li>
      </ul>
    </section>
  );
}
