export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"XML:"}</strong>
          {
            " marcado jerárquico W3C, un raíz, atributos, validable con XSD; verboso pero indispensable en SOAP, legado y regulación."
          }
        </li>
        <li>
          <strong>{"JSON:"}</strong>
          {" compacto, tipos nativos, sin comentarios estándar; predeterminado en REST moderno."}
        </li>
        <li>
          <strong>{"Metadatos:"}</strong>
          {' atributos XML → campos anidados en JSON ("moneda": "COP").'}
        </li>
        <li>
          <strong>{"Parsing JS:"}</strong>
          {" DOMParser para XML; JSON.parse() para JSON."}
        </li>
        <li>
          <strong>{"Regla práctica:"}</strong>
          {" JSON por defecto; XML cuando el contrato, partner o regulación lo exijan."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" protocolos-seguridad — HTTP, HTTPS y TLS."}
        </li>
      </ul>
    </section>
  );
}
