import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: agencia creativosvalle.co en Cali"}
      </h2>
      <p className="my-4 font-semibold">{"«Pon en línea la presencia web de una agencia en Cali»"}</p>
      <p className="my-4">
        {
          "La agencia creativosvalle.co acaba de registrar el dominio en NIC Colombia. Necesitan: sitio en www, API en api, correo @creativosvalle.co con Google Workspace y entorno staging para el equipo."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Dibuja la estructura de dominio (TLD, SLD, subdominios necesarios)."}</li>
        <li>{"Indica qué nameservers delegarías (ej. Cloudflare) y por qué."}</li>
        <li>{"Escribe los registros A, CNAME (si aplica), MX y TXT (SPF) mínimos."}</li>
        <li>{"Explica el flujo DNS cuando un cliente en México abre https://api.creativosvalle.co."}</li>
        <li>
          {
            "El practicante ve 192.168.1.20 en ipconfig y propone usarla en el registro A. Corrige el error y di qué IP necesita realmente."
          }
        </li>
        <li>{"Lista dos comprobaciones con DevTools o dig antes de dar por cerrada la migración."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Criterio de éxito:"}</strong>
        {
          " jerarquía DNS clara, registros válidos sin CNAME en apex conflictivo, distinción IP privada/pública, flujo raíz→TLD→NS→A documentado, mención de propagación y TTL."
        }
      </p>
      <PracticeExercise
        prompt="Completa el reto de creativosvalle.co: estructura de dominio, NS delegados, registros A/CNAME/MX/TXT mínimos, flujo DNS para api.creativosvalle.co y corrección del error 192.168.1.20."
        hints={[
          "TLD .co, SLD creativosvalle",
          "Subdominios www, api, staging",
          "NS en Cloudflare para CDN y DDoS",
          "IP pública del servidor, no RFC 1918",
          "Verificar con dig y DevTools → Red",
        ]}
        expectedKeywords={["A", "MX", "NS", "pública", "DNS"]}
        successMessage="Excelente. Has integrado dominio, IP, DNS y diagnóstico con navegador en un caso real de despliegue."
        rows={8}
      />
    </section>
  );
}
