import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"La seguridad nació al abrir las redes: cada etapa multiplicó usuarios, datos y superficie de ataque, por eso es un proceso continuo."}</li>
        <li>{"Un hacker es quien explora sistemas; el vector es el camino de ataque y la vulnerabilidad es la debilidad que ese camino aprovecha."}</li>
        <li>{"CIA + autenticidad permite nombrar qué se rompió en un incidente: quién ve, qué cambia, qué está disponible y quién lo envía."}</li>
        <li>{"La ingeniería social ataca a la persona; la defensa combina verificación por canal oficial, reporte y autenticación multifactor."}</li>
      </ol>
      <p className="my-4">{"La clase 2 pasa de las amenazas a las técnicas de protección: codificación, cifrado, hash, HTTPS y defensa contra la inyección SQL."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/sea/clase-02-criptografia-comunicacion-segura" className="clay-button">
          {"Continuar a la clase 2: criptografía y comunicación segura"}
        </Link>
      </p>
    </section>
  );
}
