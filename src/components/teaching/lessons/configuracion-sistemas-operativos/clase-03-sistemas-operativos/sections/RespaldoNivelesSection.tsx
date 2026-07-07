import { CompareTable } from "@/components/teaching/CompareTable";
import { StepReveal } from "@/components/teaching/StepReveal";

export function RespaldoNivelesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Estrategia de respaldo: niveles 1 a 4"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El respaldo copia datos para recuperarlos ante fallo de disco, ransomware o desastre. Una estrategia madura combina varios niveles: local rápido, red, nube y copia en otra región geográfica."
        }
      </p>

      <CompareTable
        headers={["Nivel", "Nombre", "Medio", "RPO típico", "Uso"]}
        rows={[
          ["1", "Espejo local", "Disco externo USB / segunda partición", "Horas", "Recuperación rápida en el mismo sitio"],
          ["2", "NAS / red local", "NAS Synology/QNAP, servidor archivo", "Horas–1 día", "Varios equipos de la oficina"],
          ["3", "Nube", "Backblaze, AWS S3, Google Drive empresarial", "1 día", "Off-site sin datacenter propio"],
          ["4", "Geo-redundante", "Réplica en otra ciudad/región", "1 día+", "Incendio, robo, desastre regional"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona la regla 3-2-1"}</h3>
      <StepReveal
        steps={[
          {
            title: "3 copias",
            content: "Datos de producción + al menos dos respaldos independientes.",
          },
          {
            title: "2 medios distintos",
            content: "Ej. SSD interno + NAS + nube (no dos USB en el mismo escritorio).",
          },
          {
            title: "1 copia fuera del sitio",
            content: "Nivel 3 o 4 para sobrevivir robo o incendio en la oficina.",
          },
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Una PYME en Cali que solo tiene USB en el mismo PC que el ransomware cifró no tiene recuperación. Los cuatro niveles escalan costo y protección según criticidad."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"USB de respaldo siempre conectado al PC (ransomware cifra ambos)."}</li>
        <li>{"Nunca probar restauración: el backup «existe» pero está corrupto."}</li>
        <li>{"Sincronizar carpeta a la nube sin versionado y sobrescribir el único archivo bueno."}</li>
        <li>{"Confiar solo en nivel 1 sin copia off-site."}</li>
        <li>{"Almacenar credenciales de nube en texto plano en el mismo equipo respaldado."}</li>
      </ul>
    </section>
  );
}
