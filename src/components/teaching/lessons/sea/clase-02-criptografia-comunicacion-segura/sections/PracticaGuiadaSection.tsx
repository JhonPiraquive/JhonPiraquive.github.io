import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada ejercicio corresponde a una página de la clase. Se responde con palabras propias y las pistas se piden solo si hacen falta."}</p>
      <PracticeExercise
        title="Base64: codificación, no protección"
        prompt="Un desarrollador guarda una contraseña en Base64 «para protegerla». ¿Por qué no es una protección?"
        hints={["Pensar si hace falta una clave para revertir el resultado.", "Base64 es un formato de transporte."]}
        expectedKeywords={["codific", "reversible", "sin clave", "decodific"]}
      />
      <PracticeExercise
        title="Contraseñas: la técnica adecuada"
        prompt="Para almacenar las contraseñas de los usuarios, ¿qué técnica corresponde: cifrado reversible o hash lento con sal? Justificar."
        hints={["Una contraseña nunca debería poder recuperarse.", "La sal evita que contraseñas iguales produzcan el mismo resultado."]}
        expectedKeywords={["hash", "sal", "lento", "bcrypt", "argon", "scrypt"]}
      />
      <PracticeExercise
        title="HTTPS: lo que no resuelve"
        prompt="Un sitio usa HTTPS y aun así es vulnerable a SQL Injection. ¿Por qué?"
        hints={["HTTPS protege el trayecto entre navegador y servidor.", "La consulta mal construida está dentro de la aplicación."]}
        expectedKeywords={["transporte", "canal", "trayecto", "no protege", "aplicación", "consulta"]}
      />
      <PracticeExercise
        title="SQL Injection: mitigación principal"
        prompt="¿Qué técnica separa los datos de la consulta SQL y evita la inyección?"
        hints={["Los valores viajan aparte de la instrucción.", "Se conocen como prepared statements."]}
        expectedKeywords={["parametriz", "prepared", "preparad"]}
      />
    </section>
  );
}
