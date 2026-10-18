import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Base64 es una codificación reversible sin clave: transporta datos, no los protege."}</li>
        <li>{"El cifrado oculta con una clave, el hash genera una huella de un solo sentido y las contraseñas se guardan con hash lento y sal."}</li>
        <li>{"HTTPS protege el trayecto contra interceptación y suplantación, pero no corrige fallos de la aplicación ni contraseñas débiles."}</li>
        <li>{"La inyección SQL se mitiga con consultas parametrizadas; la validación de entrada es una defensa complementaria."}</li>
      </ol>
      <p className="my-4">{"La clase 3 lleva estas técnicas a decisiones de diseño: sesiones, programación segura, normas ISO y priorización de riesgos."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/sea/clase-03-defensa-aplicaciones-riesgo" className="clay-button">
          {"Continuar a la clase 3: defensa y gestión del riesgo"}
        </Link>
      </p>
    </section>
  );
}
