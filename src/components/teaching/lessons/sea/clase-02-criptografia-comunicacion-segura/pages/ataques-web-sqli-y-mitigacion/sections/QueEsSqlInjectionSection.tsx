export function QueEsSqlInjectionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es SQL Injection"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "SQL Injection ocurre cuando la aplicación construye consultas SQL concatenando texto fijo con entrada del usuario sin validación ni parametrización. El atacante inyecta fragmentos SQL que cambian la lógica de la consulta."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Permite leer datos ajenos, modificar registros, borrar tablas o, en casos graves, ejecutar comandos en el servidor. Sigue en el OWASP Top 10 décadas después porque el patrón vulnerable es común en código legacy."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">
        {
          "Ejemplo: buscar usuario por nombre. Si el código hace SELECT * FROM users WHERE name = '\" + input + \"' y el atacante envía ' OR '1'='1, la condición siempre es verdadera y devuelve todos los registros. La mitigación clave: consultas parametrizadas (prepared statements)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Concatenar SQL en PHP legacy:"}</strong>
          {" Panel admin de PYME expuesto; atacante extrajo 40.000 registros con ' UNION SELECT. Corrección: PDO con parámetros bind."}
        </li>
        <li>
          <strong>{"ORM no exime de todo:"}</strong>
          {" Desarrollador usó query raw con interpolación «porque ORM era lento». Corrección: ORM seguro o queries parametrizadas siempre."}
        </li>
        <li>
          <strong>{"Errores SQL al usuario:"}</strong>
          {" Mensaje «syntax error near 'OR'» reveló estructura de BD al atacante. Corrección: mensaje genérico al cliente, detalle solo en log interno."}
        </li>
        <li>
          <strong>{"WAF como única defensa:"}</strong>
          {" WAF bloqueó payloads obvios pero bypass con encoding permitió explotación. Corrección: código seguro primero, WAF como capa adicional."}
        </li>
      </ul>
    </section>
  );
}
