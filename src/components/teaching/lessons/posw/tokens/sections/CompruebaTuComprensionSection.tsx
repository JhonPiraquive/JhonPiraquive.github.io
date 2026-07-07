import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Decodifica mentalmente un JWT sin la secret key: ¿qué verías en header y payload? ¿Por qué no debes guardar la contraseña del usuario ahí?"
          hints={["Base64URL no es cifrado", "jwt.io decodifica sin secret", "Solo claims no sensibles"]}
          expectedKeywords={["Base64", "decodificar", "no cifrado", "contraseña"]}
          successMessage="Correcto. Header y payload son legibles sin la secret; la firma solo prueba integridad. Nunca PII ni contraseñas en claims."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué el refresh token no debe guardarse en localStorage accesible desde JavaScript?"
          hints={["XSS roba tokens del DOM/storage", "HttpOnly cookie", "Duración larga del refresh"]}
          expectedKeywords={["XSS", "localStorage", "HttpOnly", "refresh"]}
          successMessage="Correcto. localStorage es accesible por scripts maliciosos (XSS). Refresh token debe ir en cookie HttpOnly o almacenamiento seguro del SO."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un partner server-to-server consume tu API con cuota mensual. ¿JWT, OAuth, API Key o sesión? ¿Dónde envías la credencial?"
          hints={["Identifica la app, no el usuario", "Header, no query string"]}
          expectedKeywords={["API Key", "X-API-Key", "header"]}
          successMessage="Correcto. API Key en header X-API-Key identifica la aplicación partner; combinar con rate limiting por key."
        />
      </div>
    </section>
  );
}
