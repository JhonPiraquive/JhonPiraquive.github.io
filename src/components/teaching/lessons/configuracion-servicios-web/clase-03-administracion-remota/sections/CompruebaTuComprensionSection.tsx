import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comprueba tu comprensión"}
      </h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué SFTP es preferible a FTP plano cuando subes código desde una red Wi‑Fi pública en un café de Lima?"
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
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena el flujo SSH con clave pública: (a) cliente inicia TCP a puerto 22, (b) servidor verifica clave en authorized_keys, (c) usuario genera par con ssh-keygen, (d) shell remoto disponible, (e) copiar .pub al servidor. Escribe la secuencia correcta."
          hints={[
            "Primero generas las claves en el cliente",
            "La clave pública debe estar en el servidor antes de conectar",
          ]}
          expectedKeywords={["c", "e", "a", "b", "d"]}
          successMessage="Correcto. Secuencia: c → e → a → b → d."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Escribe el comando scp para subir index.html a /var/www/html/ en user@192.0.2.50 usando la clave ~/.ssh/deploy_key."
          hints={["scp usa la misma flag -i que ssh para la clave privada"]}
          expectedKeywords={[
            "scp",
            "-i",
            "deploy_key",
            "index.html",
            "192.0.2.50",
            "/var/www/html",
          ]}
          successMessage="Correcto. scp -i ~/.ssh/deploy_key index.html user@192.0.2.50:/var/www/html/"
        />
      </div>
      <QuizSection slug="clase-03-administracion-remota" track="configuracion-servicios-web" />
    </section>
  );
}
