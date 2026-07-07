export function NavegacionClasesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Empezar el curso"}</h2>
      <p className="my-4">
        {
          "Usa la navegación prev/siguiente de cada lección o el índice del track. El orden recomendado es Clase 1 → Clase 4."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Clase 1:"}</strong>
          {" Navegadores, direcciones IP, dominios y DNS."}
        </li>
        <li>
          <strong>{"Clase 2:"}</strong>
          {" Hosting, correo corporativo (MX, SPF, DKIM) y HTTPS."}
        </li>
        <li>
          <strong>{"Clase 3:"}</strong>
          {" Computación en la nube, SSH, SFTP y paneles remotos."}
        </li>
        <li>
          <strong>{"Clase 4:"}</strong>
          {" Contenedores Docker, VMs, resolución local, flujo integrado y checklist de pruebas."}
        </li>
      </ul>
      <p className="my-4 font-semibold">
        {"Siguiente paso: Clase 1 — Fundamentos web."}
      </p>
    </section>
  );
}
