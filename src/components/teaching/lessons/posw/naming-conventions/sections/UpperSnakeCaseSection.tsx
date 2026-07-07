import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const UPPER_TS = `const MAX_INTENTOS_LOGIN = 5;
const URL_BASE_API = "https://api.ejemplo.com/v1";
const TIEMPO_EXPIRACION_TOKEN = 3600;`;

const UPPER_ENV = `# .env
DATABASE_URL=postgresql://user:pass@localhost:5432/mi_db
JWT_SECRET_KEY=cambiar_en_produccion
MAX_POOL_SIZE=10
NODE_ENV=production`;

export function UpperSnakeCaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"UPPER_SNAKE_CASE: constantes y variables de entorno"}
      </h2>
      <p className="my-4">
        {"Mayúsculas con guión bajo. Constantes globales inmutables y variables de entorno."}
      </p>
      <CodeFiddle language="typescript" title="Constantes globales" code={UPPER_TS} />
      <CodeFiddle language="bash" title=".env" code={UPPER_ENV} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"maxIntentos = 5 en camelCase que se reasigna por error; usar MAX_INTENTOS."}</li>
      </ul>
    </section>
  );
}
