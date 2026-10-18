import { CodeFiddle } from "@/components/teaching/CodeFiddle";

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
      <p className="my-4">
        {
          "Formato -p HOST:CONTENEDOR. Con -p 8080:80 accedes en http://localhost:8080, no en :80."
        }
      </p>
    </section>
  );
}
