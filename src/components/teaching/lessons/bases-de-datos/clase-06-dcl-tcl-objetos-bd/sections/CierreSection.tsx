import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"DCL = quién puede; TCL = todo-o-nada; vistas = proyección/simplificación."}</li>
        <li>{"Mínimo privilegio y transacciones cortas cierran el módulo operativo."}</li>
        <li>{"UDF = valor; PROCEDURE = proceso (CALL); trigger = automático ante evento."}</li>
        <li>{"Decide app vs BD: integridad y atomicidad corta en el motor; UX externa en la app."}</li>
        <li>
          {
            "Fin de las 6 clases de contenido: vuelve al index del track para el mapa completo."
          }
        </li>
      </ol>
      <p className="my-4">
        {
          "Pregunta operativa: ¿etiqueté la familia? ¿mínimo privilegio? ¿WHERE / TX donde importa? ¿esta regla va en app o en el motor?"
        }
      </p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/bases-de-datos" className="clay-button">
          {"Repasa el mapa del módulo Bases de Datos"}
        </Link>
      </p>
    </section>
  );
}
