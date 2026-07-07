import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ConsolaLinuxSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Consola Linux: comandos esenciales"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La consola (terminal) en Linux es una interfaz de texto donde el shell (bash por defecto) interpreta comandos. Es la herramienta principal del administrador de sistemas para automatizar, diagnosticar y configurar servidores sin interfaz gráfica."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comandos básicos"}</h3>
      <CompareTable
        headers={["Comando", "Función", "Ejemplo"]}
        rows={[
          ["ls", "Listar archivos y carpetas", "ls -la"],
          ["cd", "Cambiar directorio", "cd /var/log"],
          ["mkdir", "Crear directorio", "mkdir proyectos"],
          ["nano", "Editor de texto en terminal", "nano notas.txt"],
          ["rm", "Eliminar archivo", "rm archivo.txt"],
          ["rmdir", "Eliminar directorio vacío", "rmdir carpeta_vacia"],
          ["sudo", "Ejecutar como superusuario", "sudo apt update"],
          ["su", "Cambiar a otro usuario (root)", "su -"],
          ["exit", "Cerrar sesión o salir del shell", "exit"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Sesión de ejemplo"}</h3>
      <CodeFiddle
        language="bash"
        title="Navegación y archivos en Linux"
        code={`# Ver dónde estoy
pwd

# Listar con detalles y archivos ocultos
ls -la

# Crear carpeta y entrar
mkdir informe-2026
cd informe-2026

# Crear y editar archivo
nano resumen.txt

# Volver al directorio padre
cd ..

# Eliminar archivo (¡irreversible!)
rm informe-2026/resumen.txt

# Eliminar carpeta vacía
rmdir informe-2026

# Comando que requiere privilegios
sudo systemctl restart nginx

# Cambiar a root (usar con cuidado)
su -

# Salir de la sesión actual
exit`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En un VPS en São Paulo o un laboratorio Ubuntu, la consola es más rápida que la GUI para revisar logs, permisos y espacio en disco. Los scripts de respaldo y despliegue también se ejecutan aquí."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Ejecutar rm -rf / o rm -rf * sin confirmar la ruta actual (catástrofe)."}</li>
        <li>{"Usar sudo para todo, incluso editar archivos de usuario propio."}</li>
        <li>{"Trabajar siempre como root en lugar de usuario + sudo puntual."}</li>
        <li>{"Copiar comandos de foros con pipes a curl|bash sin leer el script."}</li>
        <li>{"Dejar sesiones SSH abiertas en PC compartido sin bloquear pantalla."}</li>
      </ul>
    </section>
  );
}
