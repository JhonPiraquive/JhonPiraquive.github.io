import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function RutasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Rutas absolutas y relativas"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una ruta indica la ubicación de un archivo o carpeta en el sistema de archivos. Puede ser absoluta (desde la raíz) o relativa (desde el directorio actual)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Linux"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Absoluta: empieza en / — ej. /home/juan/documentos/informe.pdf"}</li>
        <li>{"Relativa: desde pwd — ej. documentos/informe.pdf o ./informe.pdf"}</li>
        <li>{".. sube un nivel; . es el directorio actual"}</li>
      </ul>
      <CodeFiddle
        language="bash"
        title="Rutas en Linux"
        code={`pwd
# /home/juan

cd documentos
# Ruta relativa

cd /var/log
# Ruta absoluta

ls ../juan/documentos
# Relativa con ..`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Windows"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Absoluta: letra de unidad — ej. C:\\Users\\Juan\\Documents\\informe.docx"}</li>
        <li>{"Relativa: ej. Documents\\informe.docx desde C:\\Users\\Juan"}</li>
        <li>{"UNC de red: \\\\servidor\\recurso\\carpeta"}</li>
      </ul>
      <CodeFiddle
        language="batch"
        title="Rutas en Windows"
        code={`cd C:\\Users\\Juan
dir Documents\\informe.docx

cd ..
cd ..\\Public`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Scripts de respaldo, instaladores y permisos usan rutas. Confundir relativa con absoluta provoca copias al lugar equivocado o fallos «archivo no encontrado» en cron o Task Scheduler."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Hardcodear C:\\Users\\Admin en scripts que se despliegan en equipos con otro usuario."}</li>
        <li>{"Usar rutas con espacios sin comillas: cd Mi Documentos falla."}</li>
        <li>{"Asumir que / en Windows funciona igual que en Linux (solo PowerShell y algunos tools)."}</li>
        <li>{"Mapear unidad Z: y olvidar que el script no corre si el usuario no inició sesión."}</li>
        <li>{"Ejecutar rm o del con ruta relativa sin pwd previo tras un cd erróneo."}</li>
      </ul>
    </section>
  );
}
