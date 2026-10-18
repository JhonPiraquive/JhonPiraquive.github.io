export function PresentacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Presentación</h2>
      <p className="my-4">
        El módulo ofrece un mapa práctico para entender las amenazas reales a las aplicaciones web, aplicar controles que
        sí reducen el riesgo y comunicar las decisiones con lenguaje de negocio. La meta no es «hacer magia», sino
        construir hábitos: pensar como atacante, diseñar como ingeniero y justificar como profesional.
      </p>
      <p className="my-4">
        El recorrido sigue una escala de 0 a 100. En el 0 se sabe poco de seguridad más allá de usar contraseñas; en el
        100 se evalúa una aplicación, se eligen controles y se defiende la decisión con una matriz de riesgos. Se
        organiza en tres clases: fundamentos y amenazas humanas, criptografía y comunicación segura, y defensa en
        aplicaciones con gestión del riesgo.
      </p>
    </section>
  );
}
