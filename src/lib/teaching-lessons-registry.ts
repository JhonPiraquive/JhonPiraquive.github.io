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
  "configuracion-sistemas-operativos/index": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/index/ConfiguracionSistemasOperativosLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/index/lesson-meta").then((m) => m.meta),
  },
  "configuracion-sistemas-operativos/clase-01-arquitectura-computador": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/Clase01ArquitecturaComputadorHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-01-arquitectura-computador/chasis-y-carcasas": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/chasis-y-carcasas/ChasisYCarcasasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/chasis-y-carcasas/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-01-arquitectura-computador/cpu-y-microprocesador": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/cpu-y-microprocesador/CpuYMicroprocesadorPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/cpu-y-microprocesador/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-01-arquitectura-computador/memoria-cache-binario": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/memoria-cache-binario/MemoriaCacheBinarioPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/memoria-cache-binario/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-01-arquitectura-computador/memoria-ram-rom": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/memoria-ram-rom/MemoriaRamRomPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/memoria-ram-rom/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-01-arquitectura-computador/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-01-arquitectura-computador/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/Clase02DispositivosAlmacenamientoHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/discos-almacenamiento": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/discos-almacenamiento/DiscosAlmacenamientoPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/discos-almacenamiento/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/perifericos-monitor": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/perifericos-monitor/PerifericosMonitorPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/perifericos-monitor/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/hoja-vida-licencias": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/hoja-vida-licencias/HojaVidaLicenciasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/hoja-vida-licencias/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-02-dispositivos-almacenamiento/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-03-sistemas-operativos": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/Clase03SistemasOperativosHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-03-sistemas-operativos/tipos-sistemas-operativos": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/tipos-sistemas-operativos/TiposSistemasOperativosPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/tipos-sistemas-operativos/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-03-sistemas-operativos/instalacion-configuracion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/instalacion-configuracion/InstalacionConfiguracionPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/instalacion-configuracion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-03-sistemas-operativos/consola-comandos": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/consola-comandos/ConsolaComandosPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/consola-comandos/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-03-sistemas-operativos/usuarios-permisos-rutas": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/usuarios-permisos-rutas/UsuariosPermisosRutasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/usuarios-permisos-rutas/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-03-sistemas-operativos/respaldo-informacion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/respaldo-informacion/RespaldoInformacionPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/respaldo-informacion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-sistemas-operativos/clase-03-sistemas-operativos/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-sistemas-operativos/clase-03-sistemas-operativos/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "poo/index": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/index/PooLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/index/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-01-fundamentos-poo": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/Clase01FundamentosPooHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-01-fundamentos-poo/objetivos": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/objetivos/ObjetivosPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/objetivos/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-01-fundamentos-poo/fundamentos": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/fundamentos/FundamentosPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/fundamentos/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-01-fundamentos-poo/encapsulamiento": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/encapsulamiento/EncapsulamientoPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/encapsulamiento/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-01-fundamentos-poo/diagrama-clase-simple": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/diagrama-clase-simple/DiagramaClaseSimplePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/diagrama-clase-simple/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-01-fundamentos-poo/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-01-fundamentos-poo/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-02-relaciones-reutilizacion": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/Clase02RelacionesReutilizacionHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-02-relaciones-reutilizacion/objetivos": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/objetivos/ObjetivosPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/objetivos/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-02-relaciones-reutilizacion/herencia": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/herencia/HerenciaPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/herencia/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-02-relaciones-reutilizacion/override-y-sobrecarga": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/override-y-sobrecarga/OverrideYSobrecargaPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/override-y-sobrecarga/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-02-relaciones-reutilizacion/asociacion-agregacion-composicion": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/asociacion-agregacion-composicion/AsociacionAgregacionComposicionPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/asociacion-agregacion-composicion/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-02-relaciones-reutilizacion/diagramas-relaciones": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/diagramas-relaciones/DiagramasRelacionesPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/diagramas-relaciones/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-02-relaciones-reutilizacion/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-02-relaciones-reutilizacion/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-03-experto-poo": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/Clase03ExpertoPooHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-03-experto-poo/objetivos": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/objetivos/ObjetivosPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/objetivos/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-03-experto-poo/abstraccion-clases-abstractas-interfaces": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/abstraccion-clases-abstractas-interfaces/AbstraccionClasesAbstractasInterfacesPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/abstraccion-clases-abstractas-interfaces/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-03-experto-poo/polimorfismo": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/polimorfismo/PolimorfismoPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/polimorfismo/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-03-experto-poo/solid-principios": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/solid-principios/SolidPrincipiosPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/solid-principios/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-03-experto-poo/modularidad-cohesion-acoplamiento": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/modularidad-cohesion-acoplamiento/ModularidadCohesionAcoplamientoPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/modularidad-cohesion-acoplamiento/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/clase-03-experto-poo/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/clase-03-experto-poo/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/fundamentos": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/fundamentos/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/fundamentos/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/encapsulamiento": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/encapsulamiento/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/encapsulamiento/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/herencia": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/herencia/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/herencia/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/asociacion-agregacion-composicion": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/asociacion-agregacion-composicion/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/asociacion-agregacion-composicion/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/abstraccion-clases-abstractas-interfaces": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/abstraccion-clases-abstractas-interfaces/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/abstraccion-clases-abstractas-interfaces/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/polimorfismo": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/polimorfismo/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/polimorfismo/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/override-y-sobrecarga": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/override-y-sobrecarga/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/override-y-sobrecarga/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/diagramas-de-clases": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/diagramas-de-clases/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/diagramas-de-clases/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/solid-principios": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/solid-principios/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/solid-principios/lesson-meta"
      ).then((m) => m.meta),
  },
  "poo/modularidad-cohesion-acoplamiento": {
    component: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/modularidad-cohesion-acoplamiento/AliasTopicLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/poo/_aliases/modularidad-cohesion-acoplamiento/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/index": {
    component: () => import("@/components/teaching/lessons/bases-de-datos/index/BasesDeDatosLesson"),
    meta: () => import("@/components/teaching/lessons/bases-de-datos/index/lesson-meta").then((m) => m.meta),
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
  "bases-de-datos/clase-01-fundamentos-bd": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/Clase01FundamentosBdHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/historia-como-motivacion": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/historia-como-motivacion/HistoriaComoMotivacionPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/historia-como-motivacion/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/que-es-y-tipos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/que-es-y-tipos/QueEsYTiposPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/que-es-y-tipos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/motores-y-gestores": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/motores-y-gestores/MotoresYGestoresPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/motores-y-gestores/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/estructura-tablas-campos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/estructura-tablas-campos/EstructuraTablasCamposPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/estructura-tablas-campos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/Clase02DisenoModelosErHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/modelos-conceptual-logico-fisico": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/modelos-conceptual-logico-fisico/ModelosConceptualLogicoFisicoPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/modelos-conceptual-logico-fisico/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/diagramas-er": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/diagramas-er/DiagramasErPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/diagramas-er/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/familias-relacional-nosql-grafos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/familias-relacional-nosql-grafos/FamiliasRelacionalNosqlGrafosPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/familias-relacional-nosql-grafos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/transformacion-tipos-llaves": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/transformacion-tipos-llaves/TransformacionTiposLlavesPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/transformacion-tipos-llaves/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-diseno-modelos-er/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/Clase03SqlDdlDmlHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/ddl-estructura": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/ddl-estructura/DdlEstructuraPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/ddl-estructura/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/ddl-restricciones": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/ddl-restricciones/DdlRestriccionesPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/ddl-restricciones/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/dml-insert-select": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/dml-insert-select/DmlInsertSelectPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/dml-insert-select/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/dml-filtros-orden": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/dml-filtros-orden/DmlFiltrosOrdenPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/dml-filtros-orden/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/agregados-group-having": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/agregados-group-having/AgregadosGroupHavingPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/agregados-group-having/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/update-delete": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/update-delete/UpdateDeletePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/update-delete/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/relacional-fk-joins": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/relacional-fk-joins/RelacionalFkJoinsPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/relacional-fk-joins/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-sql-ddl-dml/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/Clase04ExpertoBdHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/redundancia-y-dependencia-funcional": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/redundancia-y-dependencia-funcional/RedundanciaYDependenciaFuncionalPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/redundancia-y-dependencia-funcional/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/formas-normales-1-2-3": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/formas-normales-1-2-3/FormasNormales123PageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/formas-normales-1-2-3/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/desnormalizacion-y-bi": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/desnormalizacion-y-bi/DesnormalizacionYBiPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/desnormalizacion-y-bi/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/mapa-sql-familias": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/mapa-sql-familias/MapaSqlFamiliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/mapa-sql-familias/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/dcl-grant-revoke": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/dcl-grant-revoke/DclGrantRevokePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/dcl-grant-revoke/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/tcl-transacciones-acid": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/tcl-transacciones-acid/TclTransaccionesAcidPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/tcl-transacciones-acid/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/vistas": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/vistas/VistasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/vistas/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/funciones-procedimientos-triggers": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/funciones-procedimientos-triggers/FuncionesProcedimientosTriggersPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/funciones-procedimientos-triggers/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-04-experto-bd/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-historia-bases-de-datos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-fundamentos-motores-estructura": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-modelos-datos-er": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-05-normalizacion-esquemas": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-06-dcl-tcl-objetos-bd": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-historia-bases-de-datos/linea-de-tiempo-y-archivos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/linea-de-tiempo-y-archivos/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/linea-de-tiempo-y-archivos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-historia-bases-de-datos/navegacion-y-codd": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/navegacion-y-codd/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/navegacion-y-codd/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-historia-bases-de-datos/sql-comercial-e-imperio": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/sql-comercial-e-imperio/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/sql-comercial-e-imperio/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-historia-bases-de-datos/nosql-convergencia-y-sintesis": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/nosql-convergencia-y-sintesis/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/nosql-convergencia-y-sintesis/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-historia-bases-de-datos/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-01-historia-bases-de-datos/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-fundamentos-motores-estructura/que-es-y-tipos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/que-es-y-tipos/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/que-es-y-tipos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-fundamentos-motores-estructura/motores-y-gestores": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/motores-y-gestores/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/motores-y-gestores/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-fundamentos-motores-estructura/estructura-tablas-campos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/estructura-tablas-campos/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/estructura-tablas-campos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-fundamentos-motores-estructura/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-fundamentos-motores-estructura/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-modelos-datos-er/modelos-conceptual-logico-fisico": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/modelos-conceptual-logico-fisico/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/modelos-conceptual-logico-fisico/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-modelos-datos-er/diagramas-er": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/diagramas-er/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/diagramas-er/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-modelos-datos-er/familias-relacional-nosql-grafos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/familias-relacional-nosql-grafos/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/familias-relacional-nosql-grafos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-modelos-datos-er/transformacion-tipos-llaves": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/transformacion-tipos-llaves/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/transformacion-tipos-llaves/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-modelos-datos-er/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-modelos-datos-er/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/ddl-estructura": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/ddl-estructura/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/ddl-estructura/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/ddl-restricciones": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/ddl-restricciones/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/ddl-restricciones/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/dml-insert-select": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/dml-insert-select/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/dml-insert-select/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/dml-filtros-orden": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/dml-filtros-orden/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/dml-filtros-orden/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/agregados-group-having": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/agregados-group-having/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/agregados-group-having/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/update-delete": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/update-delete/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/update-delete/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/relacional-fk-joins": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/relacional-fk-joins/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/relacional-fk-joins/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-ddl-dml-relacional/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-ddl-dml-relacional/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-05-normalizacion-esquemas/formas-normales-1-2-3": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/formas-normales-1-2-3/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/formas-normales-1-2-3/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-05-normalizacion-esquemas/desnormalizacion": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/desnormalizacion/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/desnormalizacion/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/estrella-y-copo-de-nieve/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-05-normalizacion-esquemas/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-05-normalizacion-esquemas/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/dcl-grant-revoke/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/tcl-transacciones-acid/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-06-dcl-tcl-objetos-bd/vistas": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/vistas/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/vistas/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/funciones-procedimientos-triggers/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-06-dcl-tcl-objetos-bd/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-06-dcl-tcl-objetos-bd/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
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
