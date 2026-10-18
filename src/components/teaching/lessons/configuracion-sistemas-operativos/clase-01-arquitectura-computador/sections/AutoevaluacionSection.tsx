export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar el ciclo fetch, decode y execute y la diferencia entre núcleos e hilos."}</li>
        <li>{"Distinguir RAM, ROM, caché y cuál es volátil."}</li>
        <li>{"Convertir un número pequeño a binario y leer un código ASCII."}</li>
        <li>{"Explicar por qué el bus condiciona la velocidad de un SSD."}</li>
        <li>{"Describir qué hace la BIOS o UEFI al encender el equipo."}</li>
        <li>{"Elegir chasis y refrigeración para un caso de oficina."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://wiki.archlinux.org/title/Category:Hardware" target="_blank" rel="noreferrer">ArchWiki: hardware</a>{": referencia técnica detallada de componentes."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Glossary/Character_encoding" target="_blank" rel="noreferrer">MDN: codificación de caracteres</a>{": ASCII, UTF-8 y su relación con los bytes."}
        </li>
      </ul>
    </section>
  );
}
