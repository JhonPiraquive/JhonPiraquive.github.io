import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ReactDockerSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"React en Docker: build multi-etapa con Nginx"}
      </h2>
      <MermaidDiagram
        chart={`flowchart LR
  SRC[Código fuente] --> B[Etapa build<br/>node:20-alpine]
  B --> DIST[dist/ estáticos]
  DIST --> N[Etapa runtime<br/>nginx:alpine]
  N --> RUN[Contenedor :80]
  RUN --> HOST[localhost:3000]`}
      />
      <CodeFiddle
        language="dockerfile"
        title="Dockerfile multi-etapa React + Nginx"
        code={`# Etapa 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
      />
      <CodeFiddle
        language="bash"
        title="Crear proyecto y construir imagen"
        code={`npm create vite@latest hola-react -- --template react
cd hola-react
docker build -t hola-react:1.0 .
docker run -d -p 3000:80 --name hola-react hola-react:1.0
# Abrir http://localhost:3000`}
      />
      <CodeFiddle
        language="yaml"
        title="Docker Compose para desarrollo con hot reload"
        code={`version: '3.8'
services:
  frontend:
    image: node:20-alpine
    working_dir: /app
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "5173:5173"
    command: sh -c "npm install && npm run dev -- --host"`}
      />
      <p className="my-4">{"Ejecutar: "}<code>{"docker compose up"}</code></p>
      <CompareTable title="Multi-stage Dockerfile React" headers={["Paso", "Qué ocurre"]} rows={[
          {
            title: "1. FROM node:20-alpine AS build",
            content: "Etapa temporal con Node para compilar.",
          },
          {
            title: "2. npm ci && npm run build",
            content: "Instala dependencias y genera dist/ con assets estáticos.",
          },
          {
            title: "3. FROM nginx:alpine",
            content: "Imagen final ligera sin Node.",
          },
          {
            title: "4. COPY --from=build",
            content: "Solo copia dist/ a /usr/share/nginx/html.",
          },
          {
            title: "5. docker run -p 3000:80",
            content: "El contenedor sirve la app en localhost:3000.",
          },
        ].map((s) => [s.title, s.content])} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"No usar .dockerignore: copia node_modules gigantes."}</li>
        <li>{"Un solo stage: incluir Node en imagen final cuando solo hace falta Nginx."}</li>
        <li>{"Persistir datos de BD en contenedor sin volumen: se pierden al docker rm."}</li>
      </ul>
    </section>
  );
}
