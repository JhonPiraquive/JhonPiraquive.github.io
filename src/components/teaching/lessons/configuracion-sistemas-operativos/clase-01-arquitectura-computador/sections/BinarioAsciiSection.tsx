import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function BinarioAsciiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Bits, bytes, binario y ASCII"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un bit (binary digit) es la unidad mínima de información: 0 o 1. Ocho bits forman un byte. El binario es la base numérica que usa el hardware; ASCII asigna valores numéricos a caracteres latinos básicos (A = 65, a = 97)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Entender bits y bytes explica capacidades de RAM (8 GB = 8 × 2³⁰ bytes), velocidades de red (Mbps vs MB/s) y por qué un «gigabyte» de disco a veces se muestra distinto en el SO (decimal vs binario)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">{"Conversiones básicas:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"1 byte = 8 bits"}</li>
        <li>{"1 KB ≈ 1024 bytes (2¹⁰) en informática; 1 MB ≈ 1024 KB"}</li>
        <li>{"Decimal 13 = binario 1101 (8+4+1)"}</li>
        <li>{"Carácter «A» en ASCII = decimal 65 = binario 01000001"}</li>
      </ul>

      <CodeFiddle
        language="bash"
        title="Binario y ASCII en Linux"
        code={`# Decimal a binario con bc
echo "obase=2; 13" | bc
# → 1101

# Código ASCII de un carácter
printf '%d\\n' "'A"
# → 65

# Carácter desde código
printf '\\x41\\n'
# → A`}
      />

      <CodeFiddle
        language="powershell"
        title="Binario y ASCII en Windows"
        code={`# Decimal a binario
[Convert]::ToString(13, 2)
# → 1101

# ASCII de 'A'
[int][char]'A'
# → 65

# Carácter desde código
[char]65
# → A`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo"}</h3>
      <p className="my-4">
        {
          "La palabra «Hi» ocupa 2 bytes en ASCII: H=72, i=105. En UTF-8, caracteres acentuados o emojis usan más bytes — importante al calcular tamaño de archivos de texto."
        }
      </p>

      <PracticeExercise
        prompt="Convierte el decimal 25 a binario y escribe el código ASCII decimal de la letra «J»."
        hints={["16+8+1 = 25", "J está después de A (65)", "A=65, B=66, …"]}
        expectedKeywords={["11001", "74"]}
        successMessage="Correcto: 25 = 11001; J = ASCII 74."
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Confundir Mb (megabit) con MB (megabyte) al contratar Internet: 100 Mbps ≠ 100 MB/s."}</li>
        <li>{"Asumir ASCII para textos en español con tildes: necesitan UTF-8."}</li>
        <li>{"Redondear 1 TB = 1000 GB en informática: el SO suele mostrar tebibytes (1024³)."}</li>
        <li>{"Almacenar contraseñas en texto plano «porque son solo ASCII»: problema de seguridad, no de codificación."}</li>
      </ul>
    </section>
  );
}
