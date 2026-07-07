import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function PermisosRwxSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Permisos rwx y chmod"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "En Linux cada archivo tiene permisos para el propietario (user), el grupo (group) y otros (others): lectura (r), escritura (w) y ejecución (x). chmod cambia esos bits; ls -l los muestra."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Interpretación"}</h3>
      <p className="my-4 font-mono text-sm">{"-rw-r--r-- 1 ana desarrollo 4096 mar  1 10:00 informe.pdf"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"ana: propietario con rw- (lee y escribe, no ejecuta)"}</li>
        <li>{"grupo desarrollo: r-- (solo lectura)"}</li>
        <li>{"otros: r-- (solo lectura)"}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"chmod simbólico y octal"}</h3>
      <CodeFiddle
        language="bash"
        title="Ejemplos chmod"
        code={`# Solo propietario puede escribir
chmod u+w script.sh
chmod go-w script.sh

# Lectura para todos, escritura solo propietario
chmod 644 informe.pdf

# Ejecutable para propietario y grupo
chmod 750 deploy.sh

# ¡Peligroso! Todos leen/escriben/ejecutan
chmod 777 carpeta_compartida

ls -l`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Valores octales"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Octal"}</th>
            <th className="py-2 text-left font-semibold">{"Permisos"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"4"}</td>
            <td className="py-2">{"r (lectura)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"2"}</td>
            <td className="py-2">{"w (escritura)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"1"}</td>
            <td className="py-2">{"x (ejecución)"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"755"}</td>
            <td className="py-2">{"rwxr-xr-x (típico en scripts públicos)"}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"chmod 777 en /var/www para «arreglar» error 403 (expone escritura a cualquiera)."}</li>
        <li>{"Ejecutar servicios web como root en lugar de usuario www-data."}</li>
        <li>{"Olvidar que archivos con w para otros permiten defacement del sitio."}</li>
        <li>{"Copiar permisos de un servidor sin revisar propietario (chown pendiente)."}</li>
        <li>{"Dar x a un .txt pensando que es «abrir con doble clic» en servidor."}</li>
      </ul>
    </section>
  );
}
