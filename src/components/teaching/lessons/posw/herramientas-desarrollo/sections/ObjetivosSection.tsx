import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección cubre dos formas de montar un entorno de desarrollo web local: XAMPP para stacks PHP clásicos y Docker para entornos reproducibles y portables."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Describir XAMPP (Apache, MariaDB, PHP, phpMyAdmin) y levantar un entorno local con htdocs como document root."
          }
        </li>
        <li>
          {
            "Explicar conceptos Docker: imagen, contenedor, Dockerfile, Compose y registro (Docker Hub)."
          }
        </li>
        <li>
          {
            "Ejecutar comandos esenciales de Docker (pull, run, ps, logs, build) y mapear puertos host→contenedor."
          }
        </li>
        <li>
          {
            "Comparar XAMPP vs Docker en reproducibilidad, portabilidad y aptitud para producción."
          }
        </li>
        <li>
          {
            "Empaquetar una app React + Vite en imagen multi-etapa (build Node + serve Nginx) y opcionalmente usar Compose para desarrollo."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección modelo-cliente-servidor: roles cliente/servidor, HTTP y capas de una app web."
          }
        </li>
        <li>{"Familiaridad con terminal y comandos básicos (cd, ls, curl)."}</li>
        <li>{"Conocimiento básico de React y npm (lección react)."}</li>
      </ul>
      <Callout title="XAMPP es para desarrollo local">
        {
          "XAMPP acelera el aprendizaje en PHP local. Docker prioriza que dev, CI y producción corran el mismo entorno. Ninguno reemplaza hardening y escalado industrial por sí solo."
        }
      </Callout>
    </section>
  );
}
