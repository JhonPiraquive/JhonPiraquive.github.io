export function ProgramacionSeguraReglasPracticasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Programación segura (reglas prácticas)"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Programar seguro es diseñar código predecible ante entradas maliciosas, fallos de red, errores de BD y abuso. No es paranoia: es asumir que todo input es hostil y todo fallo es posible."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "La mayoría de vulnerabilidades no son exploits sofisticados: son validación omitida, secretos en repos, errores verbosos y configuración por defecto. Reglas prácticas reducen incidentes sin frameworks complejos."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Reglas clave"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Validar entradas por tipo, longitud y formato en servidor (nunca solo en cliente)."}</li>
        <li>{"Autorizar en cada acción, no solo en pantallas visibles."}</li>
        <li>{"No confiar en el cliente para decisiones críticas (precios, roles, descuentos)."}</li>
        <li>{"Manejar excepciones: mensaje genérico al usuario, detalle en log con request_id."}</li>
        <li>{"Secretos fuera del repositorio; configuración por ambiente (dev/test/prod)."}</li>
        <li>{"Rate limiting en login, reset password y APIs sensibles."}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"API key en Git:"}</strong>
          {" Bot escaneó commits; clave de AWS usada para minar cripto. Corrección: secret scanning + rotación inmediata."}
        </li>
        <li>
          <strong>{"Stack trace al usuario:"}</strong>
          {" Error PHP reveló rutas y versión de BD; facilitó SQLi dirigido. Corrección: display_errors=Off en prod."}
        </li>
        <li>
          <strong>{"config.json en repo con prod:"}</strong>
          {" Credenciales de BD productiva en rama main. Corrección: variables de entorno + .gitignore."}
        </li>
        <li>
          <strong>{"Log con contraseñas en texto plano:"}</strong>
          {" login_failed guardó password; backup de logs filtró credenciales. Corrección: nunca registrar secretos."}
        </li>
      </ul>
    </section>
  );
}
