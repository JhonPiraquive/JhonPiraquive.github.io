import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

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
      <StepReveal
        title="Multi-stage Dockerfile React"
        steps={[
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
        ]}
      />
      <CodeChallenge
        title="Ordena el build React en Docker"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}
5. {{blank5}}`}
        blanks={[
          { id: "blank1", answer: "FROM node:20-alpine AS build", placeholder: "paso a" },
          { id: "blank2", answer: "COPY package*.json", placeholder: "paso b" },
          { id: "blank3", answer: "npm run build", placeholder: "paso c" },
          { id: "blank4", answer: "copiar dist/ a imagen Nginx", placeholder: "paso d" },
          { id: "blank5", answer: "docker build -t app .", placeholder: "paso e" },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"No usar .dockerignore: copia node_modules gigantes."}</li>
        <li>{"Un solo stage: incluir Node en imagen final cuando solo necesitas Nginx."}</li>
        <li>{"Persistir datos de BD en contenedor sin volumen: se pierden al docker rm."}</li>
      </ul>
    </section>
  );
}
