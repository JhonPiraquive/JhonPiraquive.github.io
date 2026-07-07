import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Un colega dice que su IP es 192.168.0.15 y que «ya está en Internet». ¿Es correcto? Explica la diferencia entre IP privada y pública."
          hints={["RFC 1918", "Router NAT", "ipconfig vs ifconfig.me"]}
          expectedKeywords={["privada", "pública", "NAT", "router"]}
          successMessage="Correcto. 192.168.x.x es privada en la LAN; la IP pública la asigna el ISP al router."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="El correo @tuempresa.com no llega tras migrar a Google Workspace. ¿Qué registros DNS revisarías primero?"
          hints={["MX", "SPF", "TXT de verificación"]}
          expectedKeywords={["MX", "SPF", "TXT"]}
          successMessage="Bien. MX dirige el correo; TXT verifica dominio y SPF reduce spam."
        />
      </div>
    </section>
  );
}
