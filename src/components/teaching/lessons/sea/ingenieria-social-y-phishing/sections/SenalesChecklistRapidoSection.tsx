export function SenalesChecklistRapidoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Señales (checklist rápido)"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Urgencia (“último aviso”, “tu cuenta será cerrada”)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Autoridad (“soporte”, “banco”, “jefe”)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Enlace raro o acortado sin contexto."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Errores leves de escritura o tono inusual."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Solicitud de secretos (códigos, contraseñas, tokens)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Incentivo demasiado bueno (premio, reembolso)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Adjuntos inesperados."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Presión para saltarte el proceso (“no digas nada”, “hazlo ya”)."}</li>
      </ul>
    </section>
  );
}
