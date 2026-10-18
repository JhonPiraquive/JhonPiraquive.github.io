export function TiposDeHackerPorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Tipos de hacker por “hats”"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"White hat (ético)"}</h3>
      <p className="my-4">{"Trabaja con permiso para encontrar fallos y ayudar a corregirlos. Su éxito se mide en reducción de riesgo, no en “causar daño”."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Black hat (criminal)"}</h3>
      <p className="my-4">{"Busca beneficio propio sin permiso: robo de datos, fraude, extorsión o interrupción. Su éxito se mide por impacto y ganancia."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Grey hat (zona gris)"}</h3>
      <p className="my-4">{"Puede investigar sin permiso o revelar fallos de forma discutible. A veces ayuda, a veces causa daño. La lección: en seguridad, “intención buena” no reemplaza “permiso y proceso”."}</p>
    </section>
  );
}
