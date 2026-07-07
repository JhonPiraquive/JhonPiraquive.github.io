import Link from "next/link";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre del curso"}</h2>
      <p className="my-4">
        {"Has completado el curso "}
        <strong>{"Configuración de Servicios Web"}</strong>
        {". Integraste:"}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Fundamentos (clase 1):"}</strong>
          {" dominio, DNS, IP y navegadores."}
        </li>
        <li>
          <strong>{"Hosting y seguridad (clase 2):"}</strong>
          {" HTTPS, correo y certificados."}
        </li>
        <li>
          <strong>{"Administración remota (clase 3):"}</strong>
          {" SSH, SFTP y despliegue por terminal."}
        </li>
        <li>
          <strong>{"Virtualización y diagnóstico (clase 4):"}</strong>
          {" contenedores Docker, VMs de laboratorio y troubleshooting por capas."}
        </li>
      </ul>
      <p className="my-4">
        {
          "La competencia del curso — instalar y configurar artefactos de software relacionados con protocolos y servicios de Internet — se cumple cuando puedes levantar un staging reproducible, protegerlo con HTTPS y diagnosticar fallos sin reiniciar servicios al azar."
        }
      </p>
      <p className="my-4">
        {"Para profundizar en Docker avanzado (Dockerfile multi-etapa, empaquetado React), consulta la lección "}
        <Link href="/teaching/posw/herramientas-desarrollo" className="text-[var(--color-secondary)] hover:underline">
          {"herramientas de desarrollo del track Programación Orientada a Sitios Web (POSW)"}
        </Link>
        {"."}
      </p>
    </section>
  );
}
