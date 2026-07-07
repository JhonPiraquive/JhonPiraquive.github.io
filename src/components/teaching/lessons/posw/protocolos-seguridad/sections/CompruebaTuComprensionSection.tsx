import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena el handshake TLS 1.3: (a) Finished cliente, (b) ClientHello, (c) canal cifrado activo, (d) ServerHello + Certificate, (e) Finished servidor. Indica el orden correcto."
          hints={["Empieza con ClientHello", "Canal cifrado es el último estado"]}
          expectedKeywords={["b", "d", "e", "a", "c"]}
          successMessage="Correcto. Orden: (b) ClientHello → (d) ServerHello+Certificate → (e) Finished servidor → (a) Finished cliente → (c) canal cifrado."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué SSL 3.0 y TLS 1.0 no deben usarse en 2025 aunque todavía funcionen?"
          hints={["Vulnerabilidades conocidas", "POODLE, obsolescencia desde 2020"]}
          expectedKeywords={["obsoleto", "vulnerabilidad", "POODLE", "TLS 1.2"]}
          successMessage="Correcto. Versiones antiguas tienen vulnerabilidades conocidas y están oficialmente obsoletas; usa TLS 1.2 o 1.3."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuándo es aceptable HTTP sin TLS y cuándo es obligatorio HTTPS?"
          hints={["localhost vs internet", "staging público vs desarrollo local"]}
          expectedKeywords={["localhost", "producción", "staging", "HTTPS"]}
          successMessage="Correcto. HTTP solo en localhost o redes aisladas; HTTPS obligatorio en producción y cualquier entorno accesible desde internet."
        />
      </div>
    </section>
  );
}
