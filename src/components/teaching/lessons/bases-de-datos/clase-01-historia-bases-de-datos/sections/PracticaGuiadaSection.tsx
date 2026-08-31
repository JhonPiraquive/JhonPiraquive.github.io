import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {
          "Cinco ejercicios de comprensión del relato: orden, causa→efecto y mitos. No piden fichas de anti-patrones."
        }
      </p>

      <PracticeExercise
        prompt="Ordena cronológicamente: (a) NoSQL web-scale, (b) archivos planos, (c) imperio relacional + ER, (d) Codd 1970, (e) NewSQL/cloud/vectores, (f) IMS/CODASYL, (g) System R / Oracle SQL. Para cada una, una frase con el problema que resolvió."
        hints={[
          "Empieza por el problema raíz: duplicidad sin SGBD",
          "Luego navegación por punteros, después el paper de Codd",
          "SQL comercial precede al imperio de los 80–90; NoSQL es 2000s; convergencia es hoy",
        ]}
        expectedKeywords={[
          "archivos",
          "IMS",
          "CODASYL",
          "Codd",
          "System R",
          "SQL",
          "ER",
          "NoSQL",
          "NewSQL",
          "cloud",
        ]}
        successMessage="Orden esperado: (b) → (f) → (d) → (g) → (c) → (a) → (e). Cada etapa responde a un dolor concreto del relato."
        rows={6}
      />

      <PracticeExercise
        prompt="En 4–6 líneas, explica causa→efecto: ¿por qué el modelo navegacional empujó a Codd a proponer independencia de datos?"
        hints={[
          "El programador debía conocer rutas de punteros",
          "Cambiar enlaces obligaba a reescribir código",
          "Codd propone preguntar QUÉ, no CÓMO navegar",
        ]}
        expectedKeywords={["punteros", "rutas", "independencia", "Codd", "reescrib", "qué"]}
        successMessage="La rigidez de las rutas navegacionales motiva la independencia: declarar qué se quiere sin acoplarse al almacenamiento."
        rows={5}
      />

      <PracticeExercise
        prompt="¿Por qué una ferretería con Excel compartido “cuenta la misma historia” que los años 50? Menciona duplicidad e inconsistencia con un ejemplo (precios, stock o teléfono)."
        hints={[
          "Varias hojas = varias copias del mismo hecho",
          "Actualizar una copia no actualiza las demás",
          "Sin motor de concurrencia hay choques de edición",
        ]}
        expectedKeywords={["duplicidad", "inconsistencia", "Excel", "copia", "actualizar"]}
        successMessage="Correcto: sin SGBD, cada hoja es un archivo plano moderno; el mismo dato diverge entre departamentos."
        rows={5}
      />

      <PracticeExercise
        prompt='Corrige el mito: “Codd inventó SQL”. ¿Qué inventó cada uno (modelo vs lenguaje/producto)?'
        hints={[
          "Codd 1970: modelo relacional e independencia de datos",
          "SQL nace en System R (SEQUEL) e INGRES; Oracle lo comercializa",
          "No confundas paper con producto",
        ]}
        expectedKeywords={["Codd", "modelo", "SQL", "System R", "SEQUEL", "Oracle"]}
        successMessage="Codd → modelo; SQL → ecosistema System R / productos comerciales. Son hitos distintos del relato."
        rows={5}
      />

      <PracticeExercise
        prompt="Ordena el arco de una consulta SQL moderna: (a) plan del optimizador, (b) texto SQL, (c) filas, (d) parseo — y di en qué etapa del relato nace esta idea."
        hints={[
          "Primero el texto que escribe el usuario",
          "Luego parseo, luego plan, luego resultado",
          "La idea cristaliza en System R / SQL comercial (etapa 4)",
        ]}
        expectedKeywords={["SQL", "parseo", "optimizador", "System R", "etapa"]}
        successMessage="Orden: (b) → (d) → (a) → (c). La idea nace en la etapa de prototipos y SQL comercial (System R)."
        rows={4}
      />
    </section>
  );
}
