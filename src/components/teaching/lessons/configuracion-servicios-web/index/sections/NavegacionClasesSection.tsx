export function NavegacionClasesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Empezar el curso"}</h2>
      <p className="my-4">
        {
          "Cada clase tiene un índice con páginas temáticas (~15–20 min cada una). Usa la navegación anterior/siguiente o el índice dentro de cada clase."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Clase 1:"}</strong>
          {" 5 páginas — navegadores, IP, DNS, configuración y práctica."}
        </li>
        <li>
          <strong>{"Clase 2:"}</strong>
          {" 4 páginas — hosting, HTTPS/TLS, correo corporativo y práctica."}
        </li>
        <li>
          <strong>{"Clase 3:"}</strong>
          {" 4 páginas — nube, transferencia de archivos, SSH y práctica."}
        </li>
        <li>
          <strong>{"Clase 4:"}</strong>
          {" 5 páginas — Docker, virtualización, diagnóstico, flujo integrado y práctica."}
        </li>
      </ul>
      <p className="my-4 font-semibold">
        {"Siguiente paso: Clase 1 — Fundamentos web (índice de la clase)."}
      </p>
    </section>
  );
}
