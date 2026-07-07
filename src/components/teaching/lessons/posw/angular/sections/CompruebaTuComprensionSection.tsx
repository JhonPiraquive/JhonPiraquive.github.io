import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué no debes mutar un @Input() en el componente hijo? ¿Cómo comunicas un cambio al padre?"
          hints={["Solo lectura", "@Output EventEmitter", "Flujo unidireccional"]}
          expectedKeywords={["Input", "Output", "emit", "padre"]}
          successMessage="Correcto. Los inputs son de solo lectura; emites eventos con @Output al padre."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un componente suscribe getProductos() en ngOnInit pero nunca hace unsubscribe. ¿Qué problema causa y cómo lo solucionas?"
          hints={["Memory leak", "ngOnDestroy", "async pipe", "takeUntilDestroyed"]}
          expectedKeywords={["memory", "ngOnDestroy", "unsubscribe", "async"]}
          successMessage="Correcto. Suscripciones sin limpiar acumulan memoria; usa ngOnDestroy o async pipe."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué sintaxis usarías para: mostrar precio formateado en COP, cargar lista con *ngFor y manejar click en botón agregar?"
          hints={["currency pipe", "*ngFor", "(click)"]}
          expectedKeywords={["currency", "ngFor", "click"]}
          successMessage="Correcto. currency:'COP' para precio, *ngFor para lista, (click) para evento."
        />
      </div>
    </section>
  );
}
