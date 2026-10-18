import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">
        {"Cada ejercicio ofrece pistas y una validación que indica si la respuesta va por buen camino. Se recomienda intentarlos antes de volver al contenido."}
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Configurar un dominio"}</h3>
        <PracticeExercise
          prompt="Escribe el registro CNAME para que blog.ejemplo.co apunte a sites.github.io. y un TXT de verificación google-site-verification=abc123."
          hints={["CNAME termina en punto", "TXT entre comillas", "Host blog en la zona ejemplo.co"]}
          expectedKeywords={["CNAME", "TXT", "blog.ejemplo.co"]}
          successMessage="Correcto. CNAME blog.ejemplo.co. IN CNAME sites.github.io. y TXT con el valor de verificación."
        />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Herramientas DNS"}</h3>
      <PracticeExercise
        prompt="¿Por qué `dig @ns1.proveedor.com` puede devolver una IP distinta a `dig www.ejemplo.co` sin @? Menciona caché y TTL."
        hints={["Uno es autoritativo, otro recursivo", "El recursivo cachea respuestas"]}
        expectedKeywords={["caché", "TTL", "recursivo", "autoritativo"]}
        successMessage="Correcto. El recursivo puede devolver una respuesta cacheada hasta que expire el TTL; el autoritativo muestra el valor actual de la zona."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"DNS"}</h3>
      <PracticeExercise
        prompt="Ordenar los pasos del flujo DNS: (a) consulta TLD .co, (b) navegador abre TCP a la IP, (c) resolver pregunta a raíz, (d) usuario escribe URL, (e) respuesta A devuelta, (f) consulta NS de empresa.co."
        hints={["Empieza por el usuario", "Termina con TCP", "Raíz antes que TLD"]}
        expectedKeywords={["d", "c", "a", "f", "e", "b"]}
        successMessage="Correcto: d → c → a → f → e → b. Delegación jerárquica antes de la conexión TCP."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Dominio y subdominio"}</h3>
        <PracticeExercise
          prompt="¿Por qué una startup en Colombia podría elegir .co en lugar de .com? Menciona al menos dos razones."
          hints={["Confianza local", "Disponibilidad de nombre", "SEO regional", "NIC Colombia"]}
          expectedKeywords={["confianza", "local", "disponibilidad"]}
          successMessage="Bien. El ccTLD .co refuerza presencia local, puede mejorar disponibilidad de nombre y SEO regional."
        />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"IPv4 e IP privada"}</h3>
      <PracticeExercise
        prompt="Un compañero dice: «Mi IP es 192.168.0.15, así que ya puedo poner esa IP en el registro A del dominio». ¿Qué le explicas sobre IP privada vs pública?"
        hints={["RFC 1918", "NAT", "IP pública del servidor o balanceador"]}
        expectedKeywords={["privada", "pública", "Internet", "NAT"]}
        successMessage="Correcto. 192.168.x.x es de red local; el registro A público necesita la IP enrutable desde Internet."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Navegadores web"}</h3>
      <PracticeExercise
        prompt="Enumera al menos cuatro factores que pueden ralentizar la carga de un sitio en el navegador (motor, extensiones, caché, red, tamaño de assets). ¿Cómo los aislarías uno a uno?"
        hints={[
          "Ventana privada sin extensiones",
          "Pestaña Red en DevTools",
          "Recarga forzada Ctrl+Shift+R",
          "Probar otro navegador",
        ]}
        expectedKeywords={["caché", "extensiones", "red", "DevTools"]}
        successMessage="Correcto. Aislar variables (sin extensiones, sin caché, otro navegador) evita culpar al servidor sin evidencia."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Publicación de sitios"}</h3>
      <PracticeExercise
        prompt="El sitio responde 403 Forbidden pero DNS resuelve bien. ¿Qué dos cosas conviene revisar primero en el servidor web?"
        hints={["Piensa en la carpeta root", "¿Existe index.html?"]}
        expectedKeywords={["root", "index.html", "403", "permisos"]}
        successMessage="Correcto. Revisa que root apunte a la carpeta correcta con index.html y que los permisos permitan lectura."
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Tipos de registros DNS"}</h3>
        <PracticeExercise
          prompt="Una startup en Medellín publica su API en api.startup.co con IP 190.85.10.20, su blog en blog.startup.co vía GitHub Pages (CNAME a startup.github.io) y correo con Google. ¿Qué registros hacen falta como mínimo? Escribir tipo, nombre y valor para A, CNAME y MX."
          hints={[
            "api necesita A con la IPv4",
            "blog es CNAME, no A",
            "MX apunta a los servidores de Google con prioridad",
          ]}
          expectedKeywords={["A", "api", "CNAME", "blog", "MX"]}
          successMessage="Correcto. A para api.startup.co, CNAME blog → startup.github.io., MX hacia aspmx.l.google.com. (o similar). La siguiente página explica cómo publicarlos en el panel DNS."
        />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Repaso de la clase"}</h3>
      <div className="my-8">
        <PracticeExercise
          prompt="IPv4 tiene ___ bits, divididos en ___ octetos de ___ bits. Completar los valores y explicar por qué el primer octeto de 192.168.1.1 empieza con 11000000 en binario."
          hints={["4 × 8 = ?", "Cada octeto va de 0 a 255", "192 en binario usa los 8 bits del primer octeto"]}
          expectedKeywords={["32", "4", "8"]}
          successMessage="Correcto: 32 bits, 4 octetos de 8 bits. 192 decimal = 11000000 en binario de 8 posiciones."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué pasaría si se configuran dos registros MX con la misma prioridad en proveedores distintos sin migrar buzones?"
          hints={["Entrega de correo", "Proveedores distintos", "Sin sincronización"]}
          expectedKeywords={["reparto", "pérdida", "duplicado", "proveedores"]}
          successMessage="Correcto. El correo se reparte aleatoriamente entre proveedores; mensajes pueden perderse o quedar en buzones no sincronizados."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué una tienda pequeña en Medellín podría empezar en hosting compartido y cuándo migraría a VPS? Menciona costo, tráfico y control."
          hints={["Compartido es económico para poco tráfico", "VPS cuando hace falta root, cron o stack custom"]}
          expectedKeywords={["compartido", "costo", "VPS", "tráfico", "control"]}
          successMessage="Correcto. Compartido cubre MVPs y bajo tráfico; VPS cuando el control, el stack o el tráfico superan los límites del plan compartido."
        />
      </div>
    </section>
  );
}
