import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueObservariasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué se observa)"}</h2>
      <p className="my-4">{"En un incidente así se observan accesos administrativos en horarios inusuales, exportaciones masivas, cambios rápidos de permisos y picos de consultas. La lección: si no se registran eventos críticos ni se limita el impacto, el equipo se entera tarde y con poca evidencia."}</p>
      <CodeFiddle language="bash" code={`# Buscar accesos a rutas administrativas y picos por IP (ejemplo conceptual).
# Las rutas y archivos se ajustan según el servidor (nginx/apache/app).
grep -E "/admin|/login" /var/log/nginx/access.log | tail -n 50
awk '{print \$1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -n 10`} />
      <CodeFiddle language="http" code={`# Patrón de requests repetitivas a un endpoint sensible (ejemplo conceptual)
GET /admin/export?format=csv HTTP/1.1
Host: ejemplo.com
User-Agent: Mozilla/5.0

GET /admin/export?format=csv HTTP/1.1
Host: ejemplo.com
User-Agent: Mozilla/5.0`} />
    </section>
  );
}
