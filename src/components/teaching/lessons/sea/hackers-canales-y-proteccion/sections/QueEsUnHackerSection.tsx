export function QueEsUnHackerSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es un hacker"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un hacker es alguien que entiende sistemas a profundidad, prueba límites y encuentra formas no obvias de lograr un objetivo. La palabra describe habilidad técnica; la ética y la legalidad dependen del consentimiento y el propósito."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Distinguir hacker ético de criminal te ayuda a contratar bien (pentesters, bug bounty) y a entender vectores reales. Muchos ataques exitosos no requieren «genio»: requieren paciencia, información pública y errores humanos."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (motivaciones)"}</h3>
      <p className="my-4">
        {
          "Hat blanco (con permiso), gris (zona legal ambigua) y negro (ilegal). El canal importa: email, redes sociales, foros, malware, compra de credenciales filtradas. El factor humano suele ser el eslabón más débil."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Etiquetar todo «hacker» como criminal:"}</strong>
          {" Empresa rechazó reporte responsable de vulnerabilidad y el investigador publicó el fallo. Corrección: canal seguro de divulgación (security@)."}
        </li>
        <li>
          <strong>{"Contraseña compartida por WhatsApp:"}</strong>
          {" Equipo de 5 personas usaba la misma clave de cPanel; ex empleado accedió meses después. Corrección: usuarios individuales + MFA + rotación al offboarding."}
        </li>
        <li>
          <strong>{"Ignorar el factor humano:"}</strong>
          {" Inversión solo en firewall; atacante entró por phishing al contador. Corrección: capacitación + MFA + políticas de verificación."}
        </li>
        <li>
          <strong>{"Publicar stack técnico en LinkedIn:"}</strong>
          {" CTO detalló versiones de software; atacante explotó CVE específico. Corrección: minimizar información operativa pública."}
        </li>
      </ul>
    </section>
  );
}
