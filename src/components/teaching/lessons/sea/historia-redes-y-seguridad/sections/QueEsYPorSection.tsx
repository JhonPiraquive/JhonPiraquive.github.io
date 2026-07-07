export function QueEsYPorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es y por qué importa"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La seguridad informática nació cuando los sistemas dejaron de estar aislados. Al conectar redes, cualquier error se volvió reproducible a escala: un fallo en un servidor puede afectar miles de usuarios en minutos."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En aplicaciones web, un fallo pequeño puede convertirse en fuga masiva de datos, fraude o interrupción del servicio. Entender la evolución te ayuda a no repetir errores: la mayoría de incidentes actuales son «viejos problemas» en «nuevos contextos» (nube, APIs, móvil)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (visión histórica)"}</h3>
      <p className="my-4">
        {
          "De sistemas aislados → redes locales → Internet abierto → servicios en la nube. Cada etapa multiplicó usuarios, datos y superficie de ataque. La respuesta evolucionó de firewalls perimetrales a seguridad por capas, por diseño y continua."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"«Ya tenemos antivirus»:"}</strong>
          {" PYME en Medellín confió solo en endpoint; un atacante entró por credenciales de admin en panel web expuesto. Consecuencia: robo de base de clientes. Corrección: seguridad por capas, no un solo control."}
        </li>
        <li>
          <strong>{"Sin logs de auditoría:"}</strong>
          {" Tienda online detectó fraude 3 semanas después sin saber cuándo ni cómo entraron. Corrección: registrar accesos administrativos y exportaciones masivas desde el día uno."}
        </li>
        <li>
          <strong>{"Seguridad como proyecto único:"}</strong>
          {" Startup hizo pentest una vez y no actualizó dependencias; 8 meses después explotaron CVE conocido. Corrección: proceso continuo (parches, revisiones, monitoreo)."}
        </li>
        <li>
          <strong>{"Copiar configuración de producción a dev:"}</strong>
          {" Desarrollador usó backup real con datos de clientes en laptop robada. Corrección: datos anonimizados en ambientes no productivos."}
        </li>
      </ul>
    </section>
  );
}
