import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <p className="mb-2 text-sm font-medium text-[var(--color-neutral-mid)]">{"Clase 2 · 2 horas"}</p>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Diferenciar HDD, SSD y SAS: principio de funcionamiento, velocidad, durabilidad y casos de uso en escritorio, portátil y servidor."
          }
        </li>
        <li>
          {
            "Describir el disco óptico (CD/DVD/Blu-ray), sus limitaciones actuales y cuándo sigue siendo relevante en soporte TI."
          }
        </li>
        <li>
          {
            "Clasificar periféricos de entrada y salida (teclado, mouse, micrófono, cámara, monitor, altavoces/auriculares) y elegirlos según el trabajo."
          }
        </li>
        <li>
          {
            "Explicar resolución de pantalla, relación píxeles/tamaño físico y criterios ergonómicos para oficina o laboratorio."
          }
        </li>
        <li>
          {
            "Elaborar una hoja de vida del PC con datos de hardware y software para inventario, garantía y soporte."
          }
        </li>
        <li>
          {
            "Distinguir tipos de licencia de software (libre, propietario, dominio público, freeware, shareware, comercial) en contexto legal colombiano."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Prerrequisitos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Haber completado Clase 1: Arquitectura del computador (CPU, RAM, ROM, buses y chasis) para ubicar dónde se conectan discos y periféricos."
          }
        </li>
        <li>
          {
            "Conocer unidades de almacenamiento básicas (byte, KB, MB, GB, TB) y la diferencia entre memoria volátil y no volátil."
          }
        </li>
        <li>{"No se requiere experiencia previa administrando servidores SAS ni RAID empresarial."}</li>
      </ul>
      <p className="my-4">
        {
          "Esta lección conecta la «caja» del computador (clase anterior) con los dispositivos que el usuario ve y toca: dónde se guardan los datos, cómo interactúa con el equipo y cómo documentar y licenciar el software instalado — habilidades clave en PYMEs, colegios y laboratorios SENA en Colombia."
        }
      </p>
      <Callout title="Del componente al inventario">
        {
          "Un técnico que no documenta discos, periféricos y licencias repite diagnósticos desde cero. Esta clase entrena el inventario que evita sorpresas en garantía, auditoría y renovación de equipos."
        }
      </Callout>
    </section>
  );
}
