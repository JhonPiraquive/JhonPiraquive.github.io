import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>

      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué una tienda pequeña en Medellín podría empezar en hosting compartido y cuándo migraría a VPS? Menciona costo, tráfico y control."
          hints={["Compartido es económico para poco tráfico", "VPS cuando necesitas root, cron o stack custom"]}
          expectedKeywords={["compartido", "costo", "VPS", "tráfico", "control"]}
          successMessage="Correcto. Compartido cubre MVPs y bajo tráfico; VPS cuando el control, el stack o el tráfico superan los límites del plan compartido."
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="Tras migrar hosting, el sitio muestra «No seguro». Lista al menos tres causas posibles relacionadas con TLS/HTTPS."
          hints={["Certificado", "Redirect", "Mixed content"]}
          expectedKeywords={["certificado", "vencido", "redirect", "mixed", "autofirmado"]}
          successMessage="Correcto. Causas típicas: cert no instalado o vencido, sin redirect 80→443, mixed content, cert autofirmado o cadena incompleta."
        />
      </div>

      <div className="my-8">
        <CodeChallenge
          title="Registros DNS de correo"
          template="El registro DNS que indica el servidor de correo entrante es {{blank1}}; el que autoriza servidores de envío es {{blank2}} (tipo TXT)."
          blanks={[
            { id: "blank1", answer: "MX", placeholder: "tipo de registro entrante" },
            { id: "blank2", answer: "SPF", placeholder: "framework de envío" },
          ]}
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué pasaría si dejas registros MX del hosting viejo y del proveedor nuevo (Zoho/Google) al mismo tiempo?"
          hints={["Prioridad MX", "Reparto impredecible del correo entrante"]}
          expectedKeywords={["reparte", "pierde", "duplicado", "prioridad"]}
          successMessage="Correcto. El correo entrante se distribuye según prioridad MX de forma impredecible; parte se pierde o llega al buzón viejo."
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="Ordena la configuración de correo corporativo con Google Workspace: (a) crear buzones (b) TXT verificación (c) contratar plan (d) registros MX (e) SPF y DKIM. Indica el orden correcto."
          hints={["Primero contratar y verificar dominio", "MX antes o junto con buzones, SPF/DKIM al final"]}
          expectedKeywords={["c", "b", "d", "e", "a"]}
          successMessage="Correcto. Orden típico: (c) contratar → (b) TXT verificación → (d) MX → (e) SPF/DKIM → (a) crear buzones."
        />
      </div>

      <div className="my-8">
        <CodeChallenge
          title="Comando certbot"
          template="sudo certbot --nginx -d {{blank1}} -d www.{{blank2}}"
          blanks={[
            { id: "blank1", answer: "ejemplo.com", placeholder: "dominio apex" },
            { id: "blank2", answer: "ejemplo.com", placeholder: "mismo dominio para www" },
          ]}
        />
      </div>

      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué decimos «certificado SSL» pero debemos configurar TLS 1.2+?"
          hints={["SSL está obsoleto", "TLS es el sucesor estándar"]}
          expectedKeywords={["SSL", "obsoleto", "TLS", "IETF"]}
          successMessage="Correcto. «SSL» es lenguaje coloquial heredado; técnicamente HTTPS usa TLS 1.2/1.3. SSL 2.0/3.0 está prohibido por vulnerabilidades."
        />
      </div>
    </section>
  );
}
