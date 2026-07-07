import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <PracticeExercise
        prompt="Escribe un `Dockerfile` mínimo que copie `index.html` a una imagen `nginx:alpine` y exponga el puerto 80. Indica las instrucciones clave (`FROM`, `COPY`, `EXPOSE`)."
        hints={["La imagen base es nginx:alpine", "COPY index.html a /usr/share/nginx/html/", "EXPOSE 80"]}
        expectedKeywords={["FROM", "nginx", "COPY", "EXPOSE", "80"]}
        successMessage="Ejemplo válido: FROM nginx:alpine, COPY index.html /usr/share/nginx/html/, EXPOSE 80."
      />
    </section>
  );
}
