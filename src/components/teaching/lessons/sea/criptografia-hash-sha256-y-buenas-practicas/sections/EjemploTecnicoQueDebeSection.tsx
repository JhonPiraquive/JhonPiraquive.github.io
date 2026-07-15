import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueDebeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ejemplo técnico: integridad con SHA-256"}
      </h2>
      <p className="my-4">
        {
          "SHA-256 genera una huella: un cambio mínimo produce un hash distinto. Sirve para verificar descargas o detectar alteración de un payload. No es cifrado: no se «descifra» un hash para recuperar el mensaje."
        }
      </p>
      <CodeFiddle
        language="bash"
        title="Huella SHA-256 y efecto avalancha"
        code={`# Calcular SHA-256 (ejemplo conceptual)
printf "hola\\n" > mensaje.txt
sha256sum mensaje.txt

# Cambio mínimo → hash diferente
printf "hola!\\n" > mensaje.txt
sha256sum mensaje.txt`}
      />
      <CodeFiddle
        language="json"
        title="Manifest de integridad"
        code={`{
  "manifest": [
    { "file": "app.tar.gz", "sha256": "EXPECTED_SHA256_HEX_HERE" }
  ]
}`}
      />
    </section>
  );
}
