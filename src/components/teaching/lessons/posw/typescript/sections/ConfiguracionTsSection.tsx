import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ConfiguracionTsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Configuración tsconfig.json"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"target: versión de JS de salida (ES2020, ESNext)."}</li>
        <li>{"module / moduleResolution: sistema de módulos y resolución."}</li>
        <li>{"strict: true: activa null checks, no implicit any, etc."}</li>
        <li>{"outDir / rootDir: carpetas de salida y fuente."}</li>
        <li>{"esModuleInterop: compatibilidad con imports CommonJS."}</li>
      </ul>
      <CodeFiddle
        language="javascript"
        title="tsconfig.json recomendado para proyecto web"
        code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`}
      />
      <CompareTable
        headers={["Opción", "Qué hace", "Por qué importa"]}
        rows={[
          ["strict", "Activa verificaciones estrictas", "Evita null/undefined silenciosos y any implícito"],
          ["noImplicitAny", "Prohíbe any implícito", "Fuerza anotar tipos en parámetros sin tipo"],
          ["strictNullChecks", "null/undefined son tipos distintos", "Previene accesos a propiedades de null"],
          ["outDir", "Carpeta de JS compilado", "Separa fuente .ts de artefactos .js"],
          ["esModuleInterop", "Imports default desde CommonJS", "Compatibilidad con librerías npm legacy"],
        ]}
      />
      <CodeFiddle
        language="bash"
        title="Inicializar proyecto"
        code={`tsc --init
# Edita compilerOptions.strict = true antes de escribir código`}
      />
    </section>
  );
}
