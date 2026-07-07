import type { ComponentType } from "react";

export type LessonMeta = {
  track: string;
  slug: string;
  title: string;
  order: number;
  prev?: string | null;
  next?: string | null;
  seoTitle?: string;
  seoDescription?: string;
  /** When false, hidden from track index listing (internal class pages). */
  showInTrackIndex?: boolean;
  classTitle?: string;
  pageNumber?: number;
  totalPages?: number;
};

export type LessonEntry = {
  component: () => Promise<{ default: ComponentType<{ locale: string }> }>;
  meta: () => Promise<LessonMeta>;
};

const REGISTRY: Record<string, LessonEntry> = {
  "pbpew/01-intro-js-y-dom": {
    component: () => import("@/components/teaching/lessons/pbpew/01-intro-js-y-dom/IntroJsYDomLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/01-intro-js-y-dom/lesson-meta").then((m) => m.meta),
  },
  "poo/fundamentos": {
    component: () => import("@/components/teaching/lessons/poo/fundamentos/FundamentosLesson"),
    meta: () => import("@/components/teaching/lessons/poo/fundamentos/lesson-meta").then((m) => m.meta),
  },
  "posw/servicios-web": {
    component: () => import("@/components/teaching/lessons/posw/servicios-web/ServiciosWebLesson"),
    meta: () => import("@/components/teaching/lessons/posw/servicios-web/lesson-meta").then((m) => m.meta),
  },
  "sea/historia-redes-y-seguridad": {
    component: () => import("@/components/teaching/lessons/sea/historia-redes-y-seguridad/HistoriaRedesYSeguridadLesson"),
    meta: () => import("@/components/teaching/lessons/sea/historia-redes-y-seguridad/lesson-meta").then((m) => m.meta),
  },
  "pbpew/02-js-en-html": {
    component: () => import("@/components/teaching/lessons/pbpew/02-js-en-html/JsEnHtmlLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/02-js-en-html/lesson-meta").then((m) => m.meta),
  },
  "poo/encapsulamiento": {
    component: () => import("@/components/teaching/lessons/poo/encapsulamiento/EncapsulamientoLesson"),
    meta: () => import("@/components/teaching/lessons/poo/encapsulamiento/lesson-meta").then((m) => m.meta),
  },
  "posw/formatos-datos": {
    component: () => import("@/components/teaching/lessons/posw/formatos-datos/FormatosDatosLesson"),
    meta: () => import("@/components/teaching/lessons/posw/formatos-datos/lesson-meta").then((m) => m.meta),
  },
  "sea/hackers-canales-y-proteccion": {
    component: () => import("@/components/teaching/lessons/sea/hackers-canales-y-proteccion/HackersCanalesYProteccionLesson"),
    meta: () => import("@/components/teaching/lessons/sea/hackers-canales-y-proteccion/lesson-meta").then((m) => m.meta),
  },
  "pbpew/03-variables-y-tipos": {
    component: () => import("@/components/teaching/lessons/pbpew/03-variables-y-tipos/VariablesYTiposLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/03-variables-y-tipos/lesson-meta").then((m) => m.meta),
  },
  "poo/herencia": {
    component: () => import("@/components/teaching/lessons/poo/herencia/HerenciaLesson"),
    meta: () => import("@/components/teaching/lessons/poo/herencia/lesson-meta").then((m) => m.meta),
  },
  "posw/protocolos-seguridad": {
    component: () => import("@/components/teaching/lessons/posw/protocolos-seguridad/ProtocolosSeguridadLesson"),
    meta: () => import("@/components/teaching/lessons/posw/protocolos-seguridad/lesson-meta").then((m) => m.meta),
  },
  "sea/iso-y-normas-27001-27002": {
    component: () => import("@/components/teaching/lessons/sea/iso-y-normas-27001-27002/IsoYNormasLesson"),
    meta: () => import("@/components/teaching/lessons/sea/iso-y-normas-27001-27002/lesson-meta").then((m) => m.meta),
  },
  "pbpew/04-operadores-y-decisiones": {
    component: () => import("@/components/teaching/lessons/pbpew/04-operadores-y-decisiones/OperadoresYDecisionesLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/04-operadores-y-decisiones/lesson-meta").then((m) => m.meta),
  },
  "poo/asociacion-agregacion-composicion": {
    component: () => import("@/components/teaching/lessons/poo/asociacion-agregacion-composicion/AsociacionAgregacionComposicionLesson"),
    meta: () => import("@/components/teaching/lessons/poo/asociacion-agregacion-composicion/lesson-meta").then((m) => m.meta),
  },
  "posw/http-metodos-status": {
    component: () => import("@/components/teaching/lessons/posw/http-metodos-status/HttpMetodosStatusLesson"),
    meta: () => import("@/components/teaching/lessons/posw/http-metodos-status/lesson-meta").then((m) => m.meta),
  },
  "sea/principios-cia-y-autenticidad": {
    component: () => import("@/components/teaching/lessons/sea/principios-cia-y-autenticidad/PrincipiosCiaYAutenticidadLesson"),
    meta: () => import("@/components/teaching/lessons/sea/principios-cia-y-autenticidad/lesson-meta").then((m) => m.meta),
  },
  "pbpew/05-bucles-y-errores": {
    component: () => import("@/components/teaching/lessons/pbpew/05-bucles-y-errores/BuclesYErroresLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/05-bucles-y-errores/lesson-meta").then((m) => m.meta),
  },
  "poo/abstraccion-clases-abstractas-interfaces": {
    component: () => import("@/components/teaching/lessons/poo/abstraccion-clases-abstractas-interfaces/AbstraccionClasesAbstractasInterfacesLesson"),
    meta: () => import("@/components/teaching/lessons/poo/abstraccion-clases-abstractas-interfaces/lesson-meta").then((m) => m.meta),
  },
  "posw/http-headers": {
    component: () => import("@/components/teaching/lessons/posw/http-headers/HttpHeadersLesson"),
    meta: () => import("@/components/teaching/lessons/posw/http-headers/lesson-meta").then((m) => m.meta),
  },
  "sea/ingenieria-social-y-phishing": {
    component: () => import("@/components/teaching/lessons/sea/ingenieria-social-y-phishing/IngenieriaSocialYPhishingLesson"),
    meta: () => import("@/components/teaching/lessons/sea/ingenieria-social-y-phishing/lesson-meta").then((m) => m.meta),
  },
  "pbpew/06-funciones-y-callbacks": {
    component: () => import("@/components/teaching/lessons/pbpew/06-funciones-y-callbacks/FuncionesYCallbacksLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/06-funciones-y-callbacks/lesson-meta").then((m) => m.meta),
  },
  "poo/polimorfismo": {
    component: () => import("@/components/teaching/lessons/poo/polimorfismo/PolimorfismoLesson"),
    meta: () => import("@/components/teaching/lessons/poo/polimorfismo/lesson-meta").then((m) => m.meta),
  },
  "posw/tipos-servicios-web": {
    component: () => import("@/components/teaching/lessons/posw/tipos-servicios-web/TiposServiciosWebLesson"),
    meta: () => import("@/components/teaching/lessons/posw/tipos-servicios-web/lesson-meta").then((m) => m.meta),
  },
  "sea/https-y-mitm": {
    component: () => import("@/components/teaching/lessons/sea/https-y-mitm/HttpsYMitmLesson"),
    meta: () => import("@/components/teaching/lessons/sea/https-y-mitm/lesson-meta").then((m) => m.meta),
  },
  "pbpew/07-arrays-json-objetos": {
    component: () => import("@/components/teaching/lessons/pbpew/07-arrays-json-objetos/ArraysJsonObjetosLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/07-arrays-json-objetos/lesson-meta").then((m) => m.meta),
  },
  "poo/override-y-sobrecarga": {
    component: () => import("@/components/teaching/lessons/poo/override-y-sobrecarga/OverrideYSobrecargaLesson"),
    meta: () => import("@/components/teaching/lessons/poo/override-y-sobrecarga/lesson-meta").then((m) => m.meta),
  },
  "posw/apis": {
    component: () => import("@/components/teaching/lessons/posw/apis/ApisLesson"),
    meta: () => import("@/components/teaching/lessons/posw/apis/lesson-meta").then((m) => m.meta),
  },
  "sea/ataques-web-sqli-y-mitigacion": {
    component: () => import("@/components/teaching/lessons/sea/ataques-web-sqli-y-mitigacion/AtaquesWebSqliYMitigacionLesson"),
    meta: () => import("@/components/teaching/lessons/sea/ataques-web-sqli-y-mitigacion/lesson-meta").then((m) => m.meta),
  },
  "pbpew/08-this-scope-clases": {
    component: () => import("@/components/teaching/lessons/pbpew/08-this-scope-clases/ThisScopeClasesLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/08-this-scope-clases/lesson-meta").then((m) => m.meta),
  },
  "poo/diagramas-de-clases": {
    component: () => import("@/components/teaching/lessons/poo/diagramas-de-clases/DiagramasDeClasesLesson"),
    meta: () => import("@/components/teaching/lessons/poo/diagramas-de-clases/lesson-meta").then((m) => m.meta),
  },
  "posw/tokens": {
    component: () => import("@/components/teaching/lessons/posw/tokens/TokensLesson"),
    meta: () => import("@/components/teaching/lessons/posw/tokens/lesson-meta").then((m) => m.meta),
  },
  "sea/base64-y-diferencias-con-cifrado": {
    component: () => import("@/components/teaching/lessons/sea/base64-y-diferencias-con-cifrado/Base64YDiferenciasConCifradoLesson"),
    meta: () => import("@/components/teaching/lessons/sea/base64-y-diferencias-con-cifrado/lesson-meta").then((m) => m.meta),
  },
  "pbpew/09-estructuras-de-datos": {
    component: () => import("@/components/teaching/lessons/pbpew/09-estructuras-de-datos/EstructurasDeDatosLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/09-estructuras-de-datos/lesson-meta").then((m) => m.meta),
  },
  "poo/solid-principios": {
    component: () => import("@/components/teaching/lessons/poo/solid-principios/SolidPrincipiosLesson"),
    meta: () => import("@/components/teaching/lessons/poo/solid-principios/lesson-meta").then((m) => m.meta),
  },
  "posw/frontend": {
    component: () => import("@/components/teaching/lessons/posw/frontend/FrontendLesson"),
    meta: () => import("@/components/teaching/lessons/posw/frontend/lesson-meta").then((m) => m.meta),
  },
  "sea/criptografia-hash-sha256-y-buenas-practicas": {
    component: () => import("@/components/teaching/lessons/sea/criptografia-hash-sha256-y-buenas-practicas/CriptografiaHashSha256YBuenasPracticasLesson"),
    meta: () => import("@/components/teaching/lessons/sea/criptografia-hash-sha256-y-buenas-practicas/lesson-meta").then((m) => m.meta),
  },
  "pbpew/10-dom-y-eventos": {
    component: () => import("@/components/teaching/lessons/pbpew/10-dom-y-eventos/DomYEventosLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/10-dom-y-eventos/lesson-meta").then((m) => m.meta),
  },
  "poo/modularidad-cohesion-acoplamiento": {
    component: () => import("@/components/teaching/lessons/poo/modularidad-cohesion-acoplamiento/ModularidadCohesionAcoplamientoLesson"),
    meta: () => import("@/components/teaching/lessons/poo/modularidad-cohesion-acoplamiento/lesson-meta").then((m) => m.meta),
  },
  "posw/backend": {
    component: () => import("@/components/teaching/lessons/posw/backend/BackendLesson"),
    meta: () => import("@/components/teaching/lessons/posw/backend/lesson-meta").then((m) => m.meta),
  },
  "sea/proteccion-datos-cookies-y-jwt": {
    component: () => import("@/components/teaching/lessons/sea/proteccion-datos-cookies-y-jwt/ProteccionDatosCookiesYJwtLesson"),
    meta: () => import("@/components/teaching/lessons/sea/proteccion-datos-cookies-y-jwt/lesson-meta").then((m) => m.meta),
  },
  "pbpew/11-asincronia": {
    component: () => import("@/components/teaching/lessons/pbpew/11-asincronia/AsincroniaLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/11-asincronia/lesson-meta").then((m) => m.meta),
  },
  "posw/cache": {
    component: () => import("@/components/teaching/lessons/posw/cache/CacheLesson"),
    meta: () => import("@/components/teaching/lessons/posw/cache/lesson-meta").then((m) => m.meta),
  },
  "sea/programacion-segura-excepciones-logs-y-config-json": {
    component: () => import("@/components/teaching/lessons/sea/programacion-segura-excepciones-logs-y-config-json/ProgramacionSeguraExcepcionesLogsYConfigJsonLesson"),
    meta: () => import("@/components/teaching/lessons/sea/programacion-segura-excepciones-logs-y-config-json/lesson-meta").then((m) => m.meta),
  },
  "pbpew/12-ajax-fetch": {
    component: () => import("@/components/teaching/lessons/pbpew/12-ajax-fetch/AjaxFetchLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/12-ajax-fetch/lesson-meta").then((m) => m.meta),
  },
  "posw/rest-principios": {
    component: () => import("@/components/teaching/lessons/posw/rest-principios/RestPrincipiosLesson"),
    meta: () => import("@/components/teaching/lessons/posw/rest-principios/lesson-meta").then((m) => m.meta),
  },
  "sea/matriz-de-riesgos": {
    component: () => import("@/components/teaching/lessons/sea/matriz-de-riesgos/MatrizDeRiesgosLesson"),
    meta: () => import("@/components/teaching/lessons/sea/matriz-de-riesgos/lesson-meta").then((m) => m.meta),
  },
  "posw/typescript": {
    component: () => import("@/components/teaching/lessons/posw/typescript/TypescriptLesson"),
    meta: () => import("@/components/teaching/lessons/posw/typescript/lesson-meta").then((m) => m.meta),
  },
  "posw/angular": {
    component: () => import("@/components/teaching/lessons/posw/angular/AngularLesson"),
    meta: () => import("@/components/teaching/lessons/posw/angular/lesson-meta").then((m) => m.meta),
  },
  "posw/react": {
    component: () => import("@/components/teaching/lessons/posw/react/ReactLesson"),
    meta: () => import("@/components/teaching/lessons/posw/react/lesson-meta").then((m) => m.meta),
  },
  "posw/modelo-cliente-servidor": {
    component: () => import("@/components/teaching/lessons/posw/modelo-cliente-servidor/ModeloClienteServidorLesson"),
    meta: () => import("@/components/teaching/lessons/posw/modelo-cliente-servidor/lesson-meta").then((m) => m.meta),
  },
  "posw/herramientas-desarrollo": {
    component: () => import("@/components/teaching/lessons/posw/herramientas-desarrollo/HerramientasDesarrolloLesson"),
    meta: () => import("@/components/teaching/lessons/posw/herramientas-desarrollo/lesson-meta").then((m) => m.meta),
  },
  "posw/bases-de-datos": {
    component: () => import("@/components/teaching/lessons/posw/bases-de-datos/BasesDeDatosLesson"),
    meta: () => import("@/components/teaching/lessons/posw/bases-de-datos/lesson-meta").then((m) => m.meta),
  },
  "posw/principios-solid": {
    component: () => import("@/components/teaching/lessons/posw/principios-solid/PrincipiosSolidLesson"),
    meta: () => import("@/components/teaching/lessons/posw/principios-solid/lesson-meta").then((m) => m.meta),
  },
  "posw/naming-conventions": {
    component: () => import("@/components/teaching/lessons/posw/naming-conventions/NamingConventionsLesson"),
    meta: () => import("@/components/teaching/lessons/posw/naming-conventions/lesson-meta").then((m) => m.meta),
  },
  "posw/ia-en-desarrollo-web": {
    component: () => import("@/components/teaching/lessons/posw/ia-en-desarrollo-web/IaEnDesarrolloWebLesson"),
    meta: () => import("@/components/teaching/lessons/posw/ia-en-desarrollo-web/lesson-meta").then((m) => m.meta),
  },
  "posw/arquitectura-api": {
    component: () => import("@/components/teaching/lessons/posw/arquitectura-api/ArquitecturaApiLesson"),
    meta: () => import("@/components/teaching/lessons/posw/arquitectura-api/lesson-meta").then((m) => m.meta),
  },
  "configuracion-servicios-web/index": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/index/ConfiguracionServiciosWebLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/index/lesson-meta").then((m) => m.meta),
  },
  "configuracion-servicios-web/clase-01-fundamentos-web": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/Clase01FundamentosWebHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-01-fundamentos-web/navegadores-web": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/navegadores-web/NavegadoresWebPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/navegadores-web/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-01-fundamentos-web/direcciones-ip": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/direcciones-ip/DireccionesIpPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/direcciones-ip/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-01-fundamentos-web/dns-y-dominios": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/dns-y-dominios/DnsYDominiosPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/dns-y-dominios/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-01-fundamentos-web/configuracion-dns": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/configuracion-dns/ConfiguracionDnsPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/configuracion-dns/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-01-fundamentos-web/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/Clase02HostingCorreoHttpsHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/hosting-y-publicacion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/hosting-y-publicacion/HostingYPublicacionPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/hosting-y-publicacion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/https-y-tls": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/https-y-tls/HttpsYTlsPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/https-y-tls/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/correo-corporativo": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/correo-corporativo/CorreoCorporativoPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/correo-corporativo/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/Clase03AdministracionRemotaHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/computacion-en-nube": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/computacion-en-nube/ComputacionEnNubePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/computacion-en-nube/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/transferencia-archivos": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/transferencia-archivos/TransferenciaArchivosPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/transferencia-archivos/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/ssh-y-admin-remota": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/ssh-y-admin-remota/SshYAdminRemotaPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/ssh-y-admin-remota/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-remota/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/Clase04VirtualizacionDiagnosticoHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/contenedores-docker": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/contenedores-docker/ContenedoresDockerPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/contenedores-docker/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/virtualizacion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/virtualizacion/VirtualizacionPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/virtualizacion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/diagnostico-troubleshooting": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/diagnostico-troubleshooting/DiagnosticoTroubleshootingPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/diagnostico-troubleshooting/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/flujo-integrado": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/flujo-integrado/FlujoIntegradoPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/flujo-integrado/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-04-virtualizacion-diagnostico/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "pbpew/proyectos/ajedrez": {
    component: () => import("@/components/teaching/lessons/pbpew/proyectos/ajedrez/AjedrezLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/proyectos/ajedrez/lesson-meta").then((m) => m.meta),
  },
  "pbpew/proyectos/calculadora": {
    component: () => import("@/components/teaching/lessons/pbpew/proyectos/calculadora/CalculadoraLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/proyectos/calculadora/lesson-meta").then((m) => m.meta),
  },
  "pbpew/proyectos/piedra-papel-tijera": {
    component: () => import("@/components/teaching/lessons/pbpew/proyectos/piedra-papel-tijera/PiedraPapelTijeraLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/proyectos/piedra-papel-tijera/lesson-meta").then((m) => m.meta),
  },
  "pbpew/proyectos/todo-list": {
    component: () => import("@/components/teaching/lessons/pbpew/proyectos/todo-list/TodoListLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/proyectos/todo-list/lesson-meta").then((m) => m.meta),
  },
};

export function getLessonKey(track: string, slug: string): string {
  return `${track}/${slug}`;
}

export function getLessonEntry(track: string, slug: string): LessonEntry | null {
  return REGISTRY[getLessonKey(track, slug)] ?? null;
}

export async function getAllLessonMetas(): Promise<LessonMeta[]> {
  const metas = await Promise.all(Object.values(REGISTRY).map((entry) => entry.meta()));
  return metas.sort((a, b) => a.order - b.order);
}
