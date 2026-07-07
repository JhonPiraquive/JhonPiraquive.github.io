import { Callout } from "@/components/teaching/Callout";

export function DiscoOpticoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Unidad de disco óptico"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La unidad óptica lee y escribe datos en medios físicos (CD, DVD, Blu-ray) mediante un láser que detecta variaciones en la superficie del disco. Puede ser interna (bahía 5,25″) o externa por USB."
        }
      </p>

      <figure className="my-6">
        <img
          src="/teaching/configuracion-sistemas-operativos/optical-drive.jpg"
          alt="Unidad de disco óptico para CD, DVD y Blu-ray"
          className="mx-auto max-w-md rounded-[var(--clay-radius)]"
        />
      </figure>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Aunque la distribución de software y música migró a descargas, el soporte TI aún encuentra instaladores en DVD, archivos notariales en CD-R y equipos legacy en sector público colombiano que solo arrancan desde óptico. Saber identificarla evita comprar adaptadores innecesarios o perder medios de recuperación de fábrica."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El motor hace girar el disco a velocidad constante (CAV o CLV según zona)."}</li>
        <li>{"El láser emite un haz sobre la pista; los «pits» y «lands» cambian la reflexión."}</li>
        <li>{"El fotodetector convierte la señal en bits; el controlador corrige errores (ECC)."}</li>
        <li>{"En escritura (unidades RW), el láser de mayor potencia funde capa orgánica o cambia fase cristalina."}</li>
      </ol>

      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Formato"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Capacidad aprox."}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Uso actual"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"CD-ROM / CD-R"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"~700 MB"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Legacy, drivers antiguos"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"DVD±R"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"4,7 GB (capa simple)"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Recovery OEM, instaladores"}</td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Blu-ray"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"25–50 GB"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Video HD, archivo histórico"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout title="Tendencia 2020+">
        {
          "La mayoría de portátiles y torres nuevas omiten bahía óptica. La alternativa habitual es USB bootable o ISO montada en red (PXE). Conserva una unidad externa USB en el banco de herramientas del técnico."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Depender del único DVD de recuperación sin imagen digital:"}</strong>
          {" disco rayado = PC irrecuperable → crear ISO y guardar en NAS."}
        </li>
        <li>
          <strong>{"Grabar CD-R a máxima velocidad con datos críticos:"}</strong>
          {" más errores de lectura → reducir velocidad de escritura."}
        </li>
        <li>
          <strong>{"Asumir que todo PC moderno trae lector:"}</strong>
          {" retraso en instalación → USB de 32 GB en kit de soporte."}
        </li>
        <li>
          <strong>{"Exponer medios ópticos al sol o humedad en archivo:"}</strong>
          {" capa degradada → almacenar en estuche vertical, ambiente seco."}
        </li>
      </ul>
    </section>
  );
}
