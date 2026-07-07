import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function DockerComandosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comandos Docker: pull, run, build y logs"}
      </h2>
      <CodeFiddle
        language="bash"
        title="Comandos Docker esenciales"
        code={`docker pull nginx:alpine
docker run -d -p 8080:80 --name mi-nginx nginx:alpine
docker ps
docker logs mi-nginx
docker exec -it mi-nginx sh
docker stop mi-nginx && docker rm mi-nginx
docker build -t mi-app:1.0 .
docker images`}
      />
      <CodeChallenge
        title="Completa el mapeo de puertos"
        template={"docker run -d -p {{blank1}}:80 --name web nginx:alpine"}
        blanks={[{ id: "blank1", answer: "8080", placeholder: "puerto host" }]}
      />
      <p className="my-4">
        {
          "Formato -p HOST:CONTENEDOR. Con -p 8080:80 accedes en http://localhost:8080, no en :80."
        }
      </p>
      <PracticeExercise
        prompt="¿Por qué Docker tiene mayor reproducibilidad que XAMPP si ambos corren en tu laptop?"
        hints={["Imagen fija", "Versiones declaradas", "Mismo Dockerfile en todo el equipo"]}
        expectedKeywords={["imagen", "reproducible", "versión", "contenedor"]}
        successMessage="Correcto. Docker fija versiones en la imagen; XAMPP depende de lo instalado en cada máquina."
      />
    </section>
  );
}
