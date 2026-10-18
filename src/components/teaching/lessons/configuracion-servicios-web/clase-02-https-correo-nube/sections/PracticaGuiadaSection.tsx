import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {"Cada ejercicio ofrece pistas y una validación que indica si la respuesta va por buen camino. Se recomienda intentarlos antes de volver al contenido."}
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Cuentas corporativas"}</h3>
      <PracticeExercise
        prompt="¿Por qué ventas@ y soporte@ deben ser buzones distintos aunque los gestione la misma persona al inicio?"
        hints={["Piensa en escalabilidad y organización", "¿Qué pasa cuando crece el equipo?"]}
        expectedKeywords={["rol", "organización", "escalabilidad", "permisos"]}
        successMessage="Correcto. Separar por rol facilita delegar, filtrar spam por área y escalar sin mezclar consultas comerciales con tickets técnicos."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Transferencia de archivos"}</h3>
      <PracticeExercise
        prompt="Subiste informe.pdf (2 048 576 bytes). En el servidor ls -l muestra 2 045 000 bytes. ¿Qué indica y qué conviene hacer antes de dar por válida la transferencia?"
        hints={["Integridad", "Re-transferir"]}
        expectedKeywords={["reintent", "checksum", "truncad", "bytes"]}
        successMessage="Tamaños distintos indican transferencia incompleta o corrupta; re-subir, verificar espacio en disco remoto y comparar sha256sum tras nueva transferencia."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Repaso de la clase"}</h3>
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
          prompt="¿Qué pasaría si se dejan registros MX del hosting viejo y del proveedor nuevo (Zoho/Google) al mismo tiempo?"
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
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué SFTP es preferible a FTP plano cuando se sube código desde una red Wi‑Fi pública en un café de Lima?"
          hints={[
            "Piensa en qué viaja cifrado y qué en texto claro",
            "Considera quién comparte la red contigo",
          ]}
          expectedKeywords={["cifrado", "texto claro", "credenciales", "interceptar", "SSH"]}
          successMessage="Correcto. SFTP cifra credenciales y datos vía SSH; FTP plano expone usuario y contraseña en la red."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Tu startup tiene 3 desarrolladores y un MVP en Node.js sin requisitos de SO custom. ¿Recomendarías IaaS o PaaS? Justifica con un criterio de tiempo y operación."
          hints={[
            "¿Quién parchea Linux y configura Nginx?",
            "¿Cuánto tarda un git push vs provisionar una VM?",
          ]}
          expectedKeywords={[
            "PaaS",
            "Railway",
            "Render",
            "Heroku",
            "git push",
            "sin administrar servidor",
          ]}
          successMessage="Correcto. PaaS acelera deploy sin parchear Linux; git push vs provisionar VM."
        />
      </div>
    </section>
  );
}
