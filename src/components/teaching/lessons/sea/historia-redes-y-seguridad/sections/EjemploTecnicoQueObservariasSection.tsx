import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueObservariasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué observarías)"}</h2>
      <p className="my-4">{"En un incidente así, verías accesos administrativos en horarios inusuales, exportaciones masivas, cambios rápidos de permisos y picos de consultas. La lección: si no registras eventos críticos y no limitas impacto, te enteras tarde y con poca evidencia."}</p>
      <CodeFiddle language="bash" code={`# Buscar accesos a rutas administrativas y picos por IP (ejemplo conceptual).
# Ajusta rutas/archivos según tu servidor (nginx/apache/app).
grep -E &quot;/admin|/login&quot; /var/log/nginx/access.log | tail -n 50
awk &#x27;{print \$1}&#x27; /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -n 10`} />
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
