export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de XML y JSON como formatos de intercambio. Elegir el formato correcto no es moda: depende del contrato, el ecosistema y la regulación."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"XML"}</strong>
          {" = árbol, un raíz, atributos, XSD; legado y estándares empresariales."}
        </li>
        <li>
          <strong>{"JSON"}</strong>
          {" = compacto, tipos nativos, JSON.parse(); predeterminado en REST."}
        </li>
        <li>
          <strong>{"No forzar JSON"}</strong>
          {" donde el partner o la ley exigen XML."}
        </li>
        <li>
          <strong>{"Tamaño importa"}</strong>
          {" en móvil y alta frecuencia (~30–40% menos bytes en JSON)."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"protocolos-seguridad"}</code>
        {" — HTTP, HTTPS, SSL/TLS y el handshake."}
      </p>
    </section>
  );
}
