import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">
        {
          "En las clases anteriores configuraste dominio, HTTPS y acceso SSH a un VPS. Ahora el desafío es reproducir entornos sin instalar manualmente Node, PostgreSQL o Nginx en cada servidor, y diagnosticar fallos que cruzan capas (DNS, TLS, correo, SSH, contenedores)."
        }
      </p>
      <p className="my-4">
        {
          "Esta lección cierra el curso integrando lo aprendido: un operador que ve «sitio caído» debe saber si el fallo está en propagación DNS, certificado vencido o contenedor que no escucha el puerto — no reiniciar todo al azar."
        }
      </p>
      <p className="my-4 font-medium">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Definir"}</strong>
          {" qué es un contenedor, cómo se diferencia de una máquina virtual y cuándo conviene cada enfoque."}
        </li>
        <li>
          <strong>{"Describir"}</strong>
          {" Docker (imagen, contenedor, Dockerfile, Docker Compose) y ejecutar un stack de staging con `docker compose up`."}
        </li>
        <li>
          <strong>{"Crear"}</strong>
          {" una VM de laboratorio con snapshots (VirtualBox/Hyper-V) para practicar SSH y hosting sin riesgo en el host."}
        </li>
        <li>
          <strong>{"Diagnosticar"}</strong>
          {" fallos por capa (DNS, TLS, MX, SSH, contenedores, caché) y aplicar metodología sistemática en servicios web Linux (systemctl, nginx -t, logs)."}
        </li>
        <li>
          <strong>{"Ejecutar"}</strong>
          {" despliegue básico Docker: pull de imagen, run, docker ps, docker exec, uname y cat /etc/os-release con documentación de evidencias."}
        </li>
        <li>
          <strong>{"Validar"}</strong>
          {" un servicio FTP con checklist sistemático (vsftpd, cliente, transferencia, integridad, directorios)."}
        </li>
        <li>
          <strong>{"Validar"}</strong>
          {" correcciones con curl local y acceso externo, y redactar un informe técnico con problema, metodología, comandos, solución y lecciones aprendidas."}
        </li>
        <li>
          <strong>{"Completar"}</strong>
          {
            " el reto integrador: subdominio staging → DNS → VPS con Nginx HTTPS → deploy SSH → `docker compose` con app de prueba."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Prerrequisitos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Clase 1 — Fundamentos web:"}</strong>
          {" dominios, DNS, IP, navegadores y caché."}
        </li>
        <li>
          <strong>{"Clase 2 — Hosting, correo y HTTPS:"}</strong>
          {" tipos de hosting, registros MX/SPF, certificados TLS y `certbot`."}
        </li>
        <li>
          <strong>{"Clase 3 — Administración remota:"}</strong>
          {" SSH con claves, SFTP/FileZilla, firewall básico (`ufw`) y despliegue por terminal."}
        </li>
        <li>{"Equipo con virtualización habilitada en BIOS (recomendado para laboratorio de VMs y Docker Desktop en Windows)."}</li>
      </ul>
      <Callout title="Regla de oro del curso">
        {
          "No cambies nameservers y MX el mismo día sin backup de registros. Exporta la zona DNS antes de migrar correo o hosting."
        }
      </Callout>
    </section>
  );
}
