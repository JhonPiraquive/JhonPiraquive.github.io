import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: stack local con Docker Compose"}
      </h2>
      <p className="my-4 font-semibold">{"Entorno full-stack local con Docker Compose"}</p>
      <p className="my-4">
        {
          "Necesitas: frontend React (Vite), API PHP o Node, MariaDB, phpMyAdmin opcional."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Escribe un docker-compose.yml con al menos 2 servicios (app + BD) y volúmenes para persistir datos."
          }
        </li>
        <li>{"Mapea puertos para acceder al frontend y a la BD desde el host."}</li>
        <li>
          {
            "Explica por qué no copiarías node_modules al contexto de build (.dockerignore)."
          }
        </li>
        <li>
          {
            "Compara: ¿levantarías este mismo stack con XAMPP o Docker en un equipo de 5 devs? Justifica reproducibilidad."
          }
        </li>
        <li>{"Indica el comando para ver logs del servicio que falla al arrancar."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: compose válido, puertos documentados, volumen para BD, justificación XAMPP vs Docker alineada al tamaño del equipo."
        }
      </p>
      <PracticeExercise
        prompt="Completa el reto: enumera servicios del compose, puertos mapeados, contenido de .dockerignore y comando para ver logs."
        hints={[
          "frontend + mariadb mínimo",
          "volumen para /var/lib/mysql",
          "node_modules y dist en .dockerignore",
          "docker compose logs -f servicio",
        ]}
        expectedKeywords={["compose", "volumen", "dockerignore", "logs"]}
        successMessage="Excelente. Has diseñado un entorno reproducible con Docker Compose."
        rows={6}
      />
    </section>
  );
}
