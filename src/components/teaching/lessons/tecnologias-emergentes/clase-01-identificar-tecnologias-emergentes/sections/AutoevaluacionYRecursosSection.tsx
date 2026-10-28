export function AutoevaluacionYRecursosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación y recursos</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Autoevaluación de la clase</h3>
      <p className="my-4">Antes de pasar a la clase 2, el estudiante debería poder cumplir cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Definir qué es una tecnología emergente y explicar por qué emergente no significa reciente.</li>
        <li>Nombrar los cinco atributos y dar un ejemplo de cada uno.</li>
        <li>Distinguir una tecnología emergente de una tendencia y de una moda.</li>
        <li>Explicar qué mide la curva S, el ciclo de sobreexpectación, la difusión de innovaciones y la escala TRL.</li>
        <li>Nombrar cuatro señales y dos fuentes de vigilancia confiables.</li>
        <li>Describir los anillos de un radar tecnológico.</li>
        <li>Mencionar tres tecnologías emergentes actuales y dos candidatas para el futuro, con su horizonte.</li>
        <li>Llenar una ficha de identificación con evidencia y fuentes.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Fuentes de vigilancia</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://www.gartner.com/en/research/methodologies/gartner-hype-cycle" target="_blank" rel="noreferrer">Gartner: Hype Cycle</a>: explicación oficial del ciclo de sobreexpectación.
        </li>
        <li>
          <a href="https://www.weforum.org/publications/" target="_blank" rel="noreferrer">Foro Económico Mundial: publicaciones</a>: incluye el informe anual de las diez tecnologías emergentes.
        </li>
        <li>
          <a href="https://www.thoughtworks.com/radar" target="_blank" rel="noreferrer">Thoughtworks Technology Radar</a>: radar tecnológico con explicación de cada tecnología.
        </li>
        <li>
          <a href="https://www.technologyreview.com/" target="_blank" rel="noreferrer">MIT Technology Review</a>: periodismo especializado, con su lista anual de tecnologías que pueden marcar la diferencia.
        </li>
        <li>
          <a href="https://survey.stackoverflow.co/" target="_blank" rel="noreferrer">Encuesta de desarrolladores de Stack Overflow</a>: qué usan y qué quieren aprender los desarrolladores.
        </li>
        <li>
          <a href="https://web.dev/baseline" target="_blank" rel="noreferrer">web.dev: Baseline</a>: cuándo una novedad de la web ya funciona en todos los navegadores.
        </li>
        <li>
          <a href="https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/" target="_blank" rel="noreferrer">NASA: niveles de madurez tecnológica</a>: descripción oficial de la escala TRL.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para profundizar</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Rotolo, Hicks y Martin, «What is an emerging technology?», revista <em>Research Policy</em>: el artículo que propone los cinco atributos.</li>
        <li>Everett Rogers, <em>Diffusion of Innovations</em>: el libro clásico sobre cómo se extienden las innovaciones.</li>
        <li>Geoffrey Moore, <em>Crossing the Chasm</em>: el abismo entre los primeros usuarios y la mayoría.</li>
      </ul>
    </section>
  );
}
