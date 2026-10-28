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
  "pbpew/index": {
    component: () => import("@/components/teaching/lessons/pbpew/index/PbpewLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/index/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/Clase01FundamentosLenguajeHubLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje/intro-js-y-dom": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/intro-js-y-dom/IntroJsYDomPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/intro-js-y-dom/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje/js-en-html": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/js-en-html/JsEnHtmlPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/js-en-html/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje/variables-y-tipos": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/variables-y-tipos/VariablesYTiposPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/variables-y-tipos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje/operadores-y-decisiones": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/operadores-y-decisiones/OperadoresYDecisionesPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/operadores-y-decisiones/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje/bucles-y-errores": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/bucles-y-errores/BuclesYErroresPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/bucles-y-errores/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje/funciones-y-callbacks": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/funciones-y-callbacks/FuncionesYCallbacksPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/funciones-y-callbacks/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-01-fundamentos-lenguaje/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-01-fundamentos-lenguaje/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-02-datos-objetos-pagina-viva": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/Clase02DatosObjetosPaginaVivaHubLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-02-datos-objetos-pagina-viva/arrays-json-objetos": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/arrays-json-objetos/ArraysJsonObjetosPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/arrays-json-objetos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-02-datos-objetos-pagina-viva/this-scope-clases": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/this-scope-clases/ThisScopeClasesPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/this-scope-clases/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-02-datos-objetos-pagina-viva/estructuras-de-datos": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/estructuras-de-datos/EstructurasDeDatosPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/estructuras-de-datos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-02-datos-objetos-pagina-viva/dom-y-eventos": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/dom-y-eventos/DomYEventosPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/dom-y-eventos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-02-datos-objetos-pagina-viva/proyecto-piedra-papel-tijera": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/proyecto-piedra-papel-tijera/PiedraPapelTijeraPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/proyecto-piedra-papel-tijera/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-02-datos-objetos-pagina-viva/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-02-datos-objetos-pagina-viva/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-03-asincronia-datos-remotos-proyectos": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/Clase03AsincroniaDatosRemotosProyectosHubLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-03-asincronia-datos-remotos-proyectos/asincronia": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/asincronia/AsincroniaPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/asincronia/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-03-asincronia-datos-remotos-proyectos/ajax-fetch": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/ajax-fetch/AjaxFetchPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/ajax-fetch/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-03-asincronia-datos-remotos-proyectos/proyecto-calculadora": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/proyecto-calculadora/CalculadoraPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/proyecto-calculadora/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-03-asincronia-datos-remotos-proyectos/proyecto-lista-de-tareas": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/proyecto-lista-de-tareas/TodoListPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/proyecto-lista-de-tareas/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-03-asincronia-datos-remotos-proyectos/proyecto-ajedrez": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/proyecto-ajedrez/AjedrezPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/proyecto-ajedrez/lesson-meta").then((m) => m.meta),
  },
  "pbpew/clase-03-asincronia-datos-remotos-proyectos/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/clase-03-asincronia-datos-remotos-proyectos/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "pbpew/01-intro-js-y-dom": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/01-intro-js-y-dom/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/01-intro-js-y-dom/lesson-meta").then((m) => m.meta),
  },
  "pbpew/02-js-en-html": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/02-js-en-html/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/02-js-en-html/lesson-meta").then((m) => m.meta),
  },
  "pbpew/03-variables-y-tipos": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/03-variables-y-tipos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/03-variables-y-tipos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/04-operadores-y-decisiones": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/04-operadores-y-decisiones/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/04-operadores-y-decisiones/lesson-meta").then((m) => m.meta),
  },
  "pbpew/05-bucles-y-errores": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/05-bucles-y-errores/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/05-bucles-y-errores/lesson-meta").then((m) => m.meta),
  },
  "pbpew/06-funciones-y-callbacks": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/06-funciones-y-callbacks/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/06-funciones-y-callbacks/lesson-meta").then((m) => m.meta),
  },
  "pbpew/07-arrays-json-objetos": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/07-arrays-json-objetos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/07-arrays-json-objetos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/08-this-scope-clases": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/08-this-scope-clases/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/08-this-scope-clases/lesson-meta").then((m) => m.meta),
  },
  "pbpew/09-estructuras-de-datos": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/09-estructuras-de-datos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/09-estructuras-de-datos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/10-dom-y-eventos": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/10-dom-y-eventos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/10-dom-y-eventos/lesson-meta").then((m) => m.meta),
  },
  "pbpew/proyectos/piedra-papel-tijera": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/piedra-papel-tijera/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/piedra-papel-tijera/lesson-meta").then((m) => m.meta),
  },
  "pbpew/11-asincronia": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/11-asincronia/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/11-asincronia/lesson-meta").then((m) => m.meta),
  },
  "pbpew/12-ajax-fetch": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/12-ajax-fetch/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/12-ajax-fetch/lesson-meta").then((m) => m.meta),
  },
  "pbpew/proyectos/calculadora": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/calculadora/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/calculadora/lesson-meta").then((m) => m.meta),
  },
  "pbpew/proyectos/todo-list": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/todo-list/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/todo-list/lesson-meta").then((m) => m.meta),
  },
  "pbpew/proyectos/ajedrez": {
    component: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/ajedrez/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/pbpew/_aliases/proyectos/ajedrez/lesson-meta").then((m) => m.meta),
  },
  "posw/index": {
    component: () => import("@/components/teaching/lessons/posw/index/PoswLesson"),
    meta: () => import("@/components/teaching/lessons/posw/index/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/Clase01ServiciosWebHttpDatosHubLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/modelo-cliente-servidor": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/modelo-cliente-servidor/ModeloClienteServidorPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/modelo-cliente-servidor/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/servicios-web": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/servicios-web/ServiciosWebPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/servicios-web/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/tipos-servicios-web": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/tipos-servicios-web/TiposServiciosWebPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/tipos-servicios-web/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/apis": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/apis/ApisPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/apis/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/http-metodos-status": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/http-metodos-status/HttpMetodosStatusPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/http-metodos-status/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/http-headers": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/http-headers/HttpHeadersPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/http-headers/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/formatos-datos": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/formatos-datos/FormatosDatosPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/formatos-datos/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-01-servicios-web-http-datos/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-01-servicios-web-http-datos/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/Clase02ArquitecturaDatosSeguridadHubLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/rest-principios": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/rest-principios/RestPrincipiosPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/rest-principios/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/arquitectura-api": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/arquitectura-api/ArquitecturaApiPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/arquitectura-api/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/backend": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/backend/BackendPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/backend/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/bases-de-datos": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/bases-de-datos/BasesDeDatosPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/bases-de-datos/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/cache": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/cache/CachePageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/cache/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/protocolos-seguridad": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/protocolos-seguridad/ProtocolosSeguridadPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/protocolos-seguridad/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/tokens": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/tokens/TokensPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/tokens/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-02-arquitectura-datos-seguridad/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-02-arquitectura-datos-seguridad/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/Clase03FrontendCalidadHerramientasHubLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/frontend": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/frontend/FrontendPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/frontend/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/typescript": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/typescript/TypescriptPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/typescript/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/react": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/react/ReactPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/react/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/angular": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/angular/AngularPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/angular/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/herramientas-desarrollo": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/herramientas-desarrollo/HerramientasDesarrolloPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/herramientas-desarrollo/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/principios-solid": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/principios-solid/PrincipiosSolidPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/principios-solid/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/naming-conventions": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/naming-conventions/NamingConventionsPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/naming-conventions/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/ia-en-desarrollo-web": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/ia-en-desarrollo-web/IaEnDesarrolloWebPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/ia-en-desarrollo-web/lesson-meta").then((m) => m.meta),
  },
  "posw/clase-03-frontend-calidad-herramientas/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/clase-03-frontend-calidad-herramientas/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "posw/modelo-cliente-servidor": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/modelo-cliente-servidor/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/modelo-cliente-servidor/lesson-meta").then((m) => m.meta),
  },
  "posw/servicios-web": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/servicios-web/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/servicios-web/lesson-meta").then((m) => m.meta),
  },
  "posw/tipos-servicios-web": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/tipos-servicios-web/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/tipos-servicios-web/lesson-meta").then((m) => m.meta),
  },
  "posw/apis": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/apis/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/apis/lesson-meta").then((m) => m.meta),
  },
  "posw/http-metodos-status": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/http-metodos-status/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/http-metodos-status/lesson-meta").then((m) => m.meta),
  },
  "posw/http-headers": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/http-headers/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/http-headers/lesson-meta").then((m) => m.meta),
  },
  "posw/formatos-datos": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/formatos-datos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/formatos-datos/lesson-meta").then((m) => m.meta),
  },
  "posw/rest-principios": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/rest-principios/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/rest-principios/lesson-meta").then((m) => m.meta),
  },
  "posw/arquitectura-api": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/arquitectura-api/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/arquitectura-api/lesson-meta").then((m) => m.meta),
  },
  "posw/backend": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/backend/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/backend/lesson-meta").then((m) => m.meta),
  },
  "posw/bases-de-datos": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/bases-de-datos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/bases-de-datos/lesson-meta").then((m) => m.meta),
  },
  "posw/cache": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/cache/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/cache/lesson-meta").then((m) => m.meta),
  },
  "posw/protocolos-seguridad": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/protocolos-seguridad/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/protocolos-seguridad/lesson-meta").then((m) => m.meta),
  },
  "posw/tokens": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/tokens/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/tokens/lesson-meta").then((m) => m.meta),
  },
  "posw/frontend": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/frontend/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/frontend/lesson-meta").then((m) => m.meta),
  },
  "posw/typescript": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/typescript/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/typescript/lesson-meta").then((m) => m.meta),
  },
  "posw/react": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/react/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/react/lesson-meta").then((m) => m.meta),
  },
  "posw/angular": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/angular/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/angular/lesson-meta").then((m) => m.meta),
  },
  "posw/herramientas-desarrollo": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/herramientas-desarrollo/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/herramientas-desarrollo/lesson-meta").then((m) => m.meta),
  },
  "posw/principios-solid": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/principios-solid/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/principios-solid/lesson-meta").then((m) => m.meta),
  },
  "posw/naming-conventions": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/naming-conventions/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/naming-conventions/lesson-meta").then((m) => m.meta),
  },
  "posw/ia-en-desarrollo-web": {
    component: () => import("@/components/teaching/lessons/posw/_aliases/ia-en-desarrollo-web/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/posw/_aliases/ia-en-desarrollo-web/lesson-meta").then((m) => m.meta),
  },
  "sea/index": {
    component: () => import("@/components/teaching/lessons/sea/index/SeaLesson"),
    meta: () => import("@/components/teaching/lessons/sea/index/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-01-fundamentos-seguridad": {
    component: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/Clase01FundamentosSeguridadHubLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-01-fundamentos-seguridad/historia-redes-y-seguridad": {
    component: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/historia-redes-y-seguridad/HistoriaRedesYSeguridadPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/historia-redes-y-seguridad/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-01-fundamentos-seguridad/hackers-canales-y-proteccion": {
    component: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/hackers-canales-y-proteccion/HackersCanalesYProteccionPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/hackers-canales-y-proteccion/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-01-fundamentos-seguridad/principios-cia-y-autenticidad": {
    component: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/principios-cia-y-autenticidad/PrincipiosCiaYAutenticidadPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/principios-cia-y-autenticidad/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-01-fundamentos-seguridad/ingenieria-social-y-phishing": {
    component: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/ingenieria-social-y-phishing/IngenieriaSocialYPhishingPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/ingenieria-social-y-phishing/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-01-fundamentos-seguridad/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-01-fundamentos-seguridad/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-02-criptografia-comunicacion-segura": {
    component: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/Clase02CriptografiaComunicacionSeguraHubLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-02-criptografia-comunicacion-segura/base64-y-diferencias-con-cifrado": {
    component: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/base64-y-diferencias-con-cifrado/Base64YDiferenciasConCifradoPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/base64-y-diferencias-con-cifrado/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-02-criptografia-comunicacion-segura/criptografia-hash-sha256-y-buenas-practicas": {
    component: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/criptografia-hash-sha256-y-buenas-practicas/CriptografiaHashSha256YBuenasPracticasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/criptografia-hash-sha256-y-buenas-practicas/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-02-criptografia-comunicacion-segura/https-y-mitm": {
    component: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/https-y-mitm/HttpsYMitmPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/https-y-mitm/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-02-criptografia-comunicacion-segura/ataques-web-sqli-y-mitigacion": {
    component: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/ataques-web-sqli-y-mitigacion/AtaquesWebSqliYMitigacionPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/ataques-web-sqli-y-mitigacion/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-02-criptografia-comunicacion-segura/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-02-criptografia-comunicacion-segura/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-03-defensa-aplicaciones-riesgo": {
    component: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/Clase03DefensaAplicacionesRiesgoHubLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-03-defensa-aplicaciones-riesgo/proteccion-datos-cookies-y-jwt": {
    component: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/proteccion-datos-cookies-y-jwt/ProteccionDatosCookiesYJwtPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/proteccion-datos-cookies-y-jwt/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-03-defensa-aplicaciones-riesgo/programacion-segura-excepciones-logs-y-config-json": {
    component: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/programacion-segura-excepciones-logs-y-config-json/ProgramacionSeguraExcepcionesLogsYConfigJsonPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/programacion-segura-excepciones-logs-y-config-json/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-03-defensa-aplicaciones-riesgo/iso-y-normas-27001-27002": {
    component: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/iso-y-normas-27001-27002/IsoYNormasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/iso-y-normas-27001-27002/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-03-defensa-aplicaciones-riesgo/matriz-de-riesgos": {
    component: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/matriz-de-riesgos/MatrizDeRiesgosPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/matriz-de-riesgos/lesson-meta").then((m) => m.meta),
  },
  "sea/clase-03-defensa-aplicaciones-riesgo/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/clase-03-defensa-aplicaciones-riesgo/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "sea/historia-redes-y-seguridad": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/historia-redes-y-seguridad/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/historia-redes-y-seguridad/lesson-meta").then((m) => m.meta),
  },
  "sea/hackers-canales-y-proteccion": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/hackers-canales-y-proteccion/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/hackers-canales-y-proteccion/lesson-meta").then((m) => m.meta),
  },
  "sea/principios-cia-y-autenticidad": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/principios-cia-y-autenticidad/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/principios-cia-y-autenticidad/lesson-meta").then((m) => m.meta),
  },
  "sea/ingenieria-social-y-phishing": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/ingenieria-social-y-phishing/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/ingenieria-social-y-phishing/lesson-meta").then((m) => m.meta),
  },
  "sea/base64-y-diferencias-con-cifrado": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/base64-y-diferencias-con-cifrado/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/base64-y-diferencias-con-cifrado/lesson-meta").then((m) => m.meta),
  },
  "sea/criptografia-hash-sha256-y-buenas-practicas": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/criptografia-hash-sha256-y-buenas-practicas/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/criptografia-hash-sha256-y-buenas-practicas/lesson-meta").then((m) => m.meta),
  },
  "sea/https-y-mitm": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/https-y-mitm/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/https-y-mitm/lesson-meta").then((m) => m.meta),
  },
  "sea/ataques-web-sqli-y-mitigacion": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/ataques-web-sqli-y-mitigacion/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/ataques-web-sqli-y-mitigacion/lesson-meta").then((m) => m.meta),
  },
  "sea/proteccion-datos-cookies-y-jwt": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/proteccion-datos-cookies-y-jwt/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/proteccion-datos-cookies-y-jwt/lesson-meta").then((m) => m.meta),
  },
  "sea/programacion-segura-excepciones-logs-y-config-json": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/programacion-segura-excepciones-logs-y-config-json/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/programacion-segura-excepciones-logs-y-config-json/lesson-meta").then((m) => m.meta),
  },
  "sea/iso-y-normas-27001-27002": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/iso-y-normas-27001-27002/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/iso-y-normas-27001-27002/lesson-meta").then((m) => m.meta),
  },
  "sea/matriz-de-riesgos": {
    component: () => import("@/components/teaching/lessons/sea/_aliases/matriz-de-riesgos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/sea/_aliases/matriz-de-riesgos/lesson-meta").then((m) => m.meta),
  },
  "configuracion-servicios-web/index": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/index/ConfiguracionServiciosWebLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/index/lesson-meta").then((m) => m.meta),
  },
  "configuracion-servicios-web/clase-02-https-correo-nube": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/Clase02HttpsCorreoNubeHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/Clase03AdministracionContenedoresDiagnosticoHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-01-fundamentos-web/hosting-y-publicacion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/hosting-y-publicacion/HostingYPublicacionPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/pages/hosting-y-publicacion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-https-correo-nube/computacion-en-nube": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/computacion-en-nube/ComputacionEnNubePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/computacion-en-nube/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-https-correo-nube/correo-corporativo": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/correo-corporativo/CorreoCorporativoPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/correo-corporativo/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-https-correo-nube/https-y-tls": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/https-y-tls/HttpsYTlsPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/https-y-tls/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-https-correo-nube/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-https-correo-nube/transferencia-archivos": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/transferencia-archivos/TransferenciaArchivosPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-02-https-correo-nube/pages/transferencia-archivos/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/contenedores-docker": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/contenedores-docker/ContenedoresDockerPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/contenedores-docker/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/diagnostico-troubleshooting": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/diagnostico-troubleshooting/DiagnosticoTroubleshootingPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/diagnostico-troubleshooting/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/flujo-integrado": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/flujo-integrado/FlujoIntegradoPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/flujo-integrado/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/ssh-y-admin-remota": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/ssh-y-admin-remota/SshYAdminRemotaPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/ssh-y-admin-remota/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/virtualizacion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/virtualizacion/VirtualizacionPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/pages/virtualizacion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/AliasHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/AliasHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/AliasHubLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/hosting-y-publicacion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/hosting-y-publicacion/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/hosting-y-publicacion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/https-y-tls": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/https-y-tls/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/https-y-tls/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/correo-corporativo": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/correo-corporativo/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/correo-corporativo/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-02-hosting-correo-https/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/practica-y-cierre/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-02-hosting-correo-https/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/computacion-en-nube": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/computacion-en-nube/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/computacion-en-nube/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/transferencia-archivos": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/transferencia-archivos/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/transferencia-archivos/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/ssh-y-admin-remota": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/ssh-y-admin-remota/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/ssh-y-admin-remota/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-03-administracion-remota/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/practica-y-cierre/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-03-administracion-remota/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/contenedores-docker": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/contenedores-docker/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/contenedores-docker/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/virtualizacion": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/virtualizacion/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/virtualizacion/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/diagnostico-troubleshooting": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/diagnostico-troubleshooting/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/diagnostico-troubleshooting/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/flujo-integrado": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/flujo-integrado/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/flujo-integrado/lesson-meta").then(
        (m) => m.meta,
      ),
  },
  "configuracion-servicios-web/clase-04-virtualizacion-diagnostico/practica-y-cierre": {
    component: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/practica-y-cierre/AliasPageLesson"),
    meta: () =>
      import("@/components/teaching/lessons/configuracion-servicios-web/_aliases/clase-04-virtualizacion-diagnostico/practica-y-cierre/lesson-meta").then(
        (m) => m.meta,
      ),
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
  "bases-de-datos/clase-02-del-diseno-al-esquema": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/Clase02DelDisenoAlEsquemaHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/Clase03ConsultasYAdministracionHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/diagramas-er": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/diagramas-er/DiagramasErPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/diagramas-er/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/familias-relacional-nosql-grafos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/familias-relacional-nosql-grafos/FamiliasRelacionalNosqlGrafosPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/familias-relacional-nosql-grafos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-01-fundamentos-bd/modelos-conceptual-logico-fisico": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/modelos-conceptual-logico-fisico/ModelosConceptualLogicoFisicoPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-01-fundamentos-bd/pages/modelos-conceptual-logico-fisico/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/ddl-estructura": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/ddl-estructura/DdlEstructuraPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/ddl-estructura/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/ddl-restricciones": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/ddl-restricciones/DdlRestriccionesPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/ddl-restricciones/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/desnormalizacion-y-bi": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/desnormalizacion-y-bi/DesnormalizacionYBiPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/desnormalizacion-y-bi/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/dml-insert-select": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/dml-insert-select/DmlInsertSelectPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/dml-insert-select/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/formas-normales-1-2-3": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/formas-normales-1-2-3/FormasNormales123PageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/formas-normales-1-2-3/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/redundancia-y-dependencia-funcional": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/redundancia-y-dependencia-funcional/RedundanciaYDependenciaFuncionalPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/redundancia-y-dependencia-funcional/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-del-diseno-al-esquema/transformacion-tipos-llaves": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/transformacion-tipos-llaves/TransformacionTiposLlavesPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-02-del-diseno-al-esquema/pages/transformacion-tipos-llaves/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/agregados-group-having": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/agregados-group-having/AgregadosGroupHavingPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/agregados-group-having/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/dcl-grant-revoke": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/dcl-grant-revoke/DclGrantRevokePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/dcl-grant-revoke/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/dml-filtros-orden": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/dml-filtros-orden/DmlFiltrosOrdenPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/dml-filtros-orden/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/funciones-procedimientos-triggers": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/funciones-procedimientos-triggers/FuncionesProcedimientosTriggersPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/funciones-procedimientos-triggers/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/mapa-sql-familias": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/mapa-sql-familias/MapaSqlFamiliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/mapa-sql-familias/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/practica-y-cierre/PracticaYCierrePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/relacional-fk-joins": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/relacional-fk-joins/RelacionalFkJoinsPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/relacional-fk-joins/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/tcl-transacciones-acid": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/tcl-transacciones-acid/TclTransaccionesAcidPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/tcl-transacciones-acid/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/update-delete": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/update-delete/UpdateDeletePageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/update-delete/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-consultas-y-administracion/vistas": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/vistas/VistasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/clase-03-consultas-y-administracion/pages/vistas/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/AliasHubLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/modelos-conceptual-logico-fisico": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/modelos-conceptual-logico-fisico/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/modelos-conceptual-logico-fisico/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/diagramas-er": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/diagramas-er/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/diagramas-er/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/familias-relacional-nosql-grafos": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/familias-relacional-nosql-grafos/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/familias-relacional-nosql-grafos/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/transformacion-tipos-llaves": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/transformacion-tipos-llaves/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/transformacion-tipos-llaves/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-02-diseno-modelos-er/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-02-diseno-modelos-er/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/ddl-estructura": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/ddl-estructura/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/ddl-estructura/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/ddl-restricciones": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/ddl-restricciones/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/ddl-restricciones/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/dml-insert-select": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/dml-insert-select/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/dml-insert-select/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/dml-filtros-orden": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/dml-filtros-orden/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/dml-filtros-orden/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/agregados-group-having": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/agregados-group-having/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/agregados-group-having/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/update-delete": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/update-delete/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/update-delete/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/relacional-fk-joins": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/relacional-fk-joins/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/relacional-fk-joins/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-03-sql-ddl-dml/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-03-sql-ddl-dml/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/redundancia-y-dependencia-funcional": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/redundancia-y-dependencia-funcional/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/redundancia-y-dependencia-funcional/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/formas-normales-1-2-3": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/formas-normales-1-2-3/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/formas-normales-1-2-3/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/desnormalizacion-y-bi": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/desnormalizacion-y-bi/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/desnormalizacion-y-bi/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/mapa-sql-familias": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/mapa-sql-familias/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/mapa-sql-familias/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/dcl-grant-revoke": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/dcl-grant-revoke/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/dcl-grant-revoke/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/tcl-transacciones-acid": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/tcl-transacciones-acid/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/tcl-transacciones-acid/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/vistas": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/vistas/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/vistas/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/funciones-procedimientos-triggers": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/funciones-procedimientos-triggers/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/funciones-procedimientos-triggers/lesson-meta"
      ).then((m) => m.meta),
  },
  "bases-de-datos/clase-04-experto-bd/practica-y-cierre": {
    component: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/practica-y-cierre/AliasPageLesson"
      ),
    meta: () =>
      import(
        "@/components/teaching/lessons/bases-de-datos/_aliases/clase-04-experto-bd/practica-y-cierre/lesson-meta"
      ).then((m) => m.meta),
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
  "analisis-diseno-sistemas/index": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/index/AnalisisDisenoSistemasLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/index/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-01-sistemas-informacion": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/Clase01SistemasInformacionHubLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-01-sistemas-informacion/que-es-un-sistema": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/que-es-un-sistema/QueEsUnSistemaPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/que-es-un-sistema/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-01-sistemas-informacion/tipos-y-uso": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/tipos-y-uso/TiposYUsoPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/tipos-y-uso/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-01-sistemas-informacion/roles-y-calidad": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/roles-y-calidad/RolesYCalidadPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/roles-y-calidad/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-01-sistemas-informacion/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-01-sistemas-informacion/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-02-analisis-y-modelado": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/Clase02AnalisisYModeladoHubLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-02-analisis-y-modelado/uml-y-vocabulario": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/uml-y-vocabulario/UmlYVocabularioPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/uml-y-vocabulario/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-02-analisis-y-modelado/ciclo-de-vida": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/ciclo-de-vida/CicloDeVidaPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/ciclo-de-vida/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-02-analisis-y-modelado/modelos-y-objetos": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/modelos-y-objetos/ModelosYObjetosPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/modelos-y-objetos/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-02-analisis-y-modelado/levantamiento-de-requerimientos": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/levantamiento-de-requerimientos/LevantamientoDeRequerimientosPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/levantamiento-de-requerimientos/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-02-analisis-y-modelado/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-02-analisis-y-modelado/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-03-diseno-y-scrum": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/Clase03DisenoYScrumHubLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-03-diseno-y-scrum/caso-logistica": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/caso-logistica/CasoLogisticaPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/caso-logistica/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-03-diseno-y-scrum/casos-de-uso": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/casos-de-uso/CasosDeUsoPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/casos-de-uso/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-03-diseno-y-scrum/requerimientos-y-prototipos": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/requerimientos-y-prototipos/RequerimientosYPrototiposPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/requerimientos-y-prototipos/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-03-diseno-y-scrum/scrum": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/scrum/ScrumPageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/scrum/lesson-meta").then((m) => m.meta),
  },
  "analisis-diseno-sistemas/clase-03-diseno-y-scrum/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/analisis-diseno-sistemas/clase-03-diseno-y-scrum/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/index": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/index/TecnologiasEmergentesLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/index/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/Clase01IdentificarHubLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/que-es-una-tecnologia-emergente": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/que-es-una-tecnologia-emergente/QueEsUnaTecnologiaEmergentePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/que-es-una-tecnologia-emergente/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/como-evoluciona": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/como-evoluciona/ComoEvolucionaPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/como-evoluciona/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/como-identificarlas": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/como-identificarlas/ComoIdentificarlasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/como-identificarlas/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/panorama-actual": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/panorama-actual/PanoramaActualPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/panorama-actual/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/tecnologias-del-futuro": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/tecnologias-del-futuro/TecnologiasDelFuturoPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/tecnologias-del-futuro/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-01-identificar-tecnologias-emergentes/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-inteligencia-artificial-moderna": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/Clase02InteligenciaArtificialHubLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/modelos-de-lenguaje": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/modelos-de-lenguaje/ModelosDeLenguajePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/modelos-de-lenguaje/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/prompts-contexto-y-sesiones": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/prompts-contexto-y-sesiones/PromptsContextoYSesionesPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/prompts-contexto-y-sesiones/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/herramientas-y-agentes": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/herramientas-y-agentes/HerramientasYAgentesPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/herramientas-y-agentes/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/extender-un-agente": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/extender-un-agente/ExtenderUnAgentePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/extender-un-agente/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/riesgos-y-uso-responsable": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/riesgos-y-uso-responsable/RiesgosYUsoResponsablePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/riesgos-y-uso-responsable/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-02-inteligencia-artificial-moderna/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-decidir-y-adoptar": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/Clase03DecidirYAdoptarHubLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-decidir-y-adoptar/criterios-de-decision": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/criterios-de-decision/CriteriosDeDecisionPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/criterios-de-decision/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-decidir-y-adoptar/de-la-idea-a-la-adopcion": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/de-la-idea-a-la-adopcion/DeLaIdeaALaAdopcionPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/de-la-idea-a-la-adopcion/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-decidir-y-adoptar/registrar-y-gestionar-la-decision": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/registrar-y-gestionar-la-decision/RegistrarYGestionarLaDecisionPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/registrar-y-gestionar-la-decision/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-decidir-y-adoptar/casos-de-decision": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/casos-de-decision/CasosDeDecisionPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/casos-de-decision/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-decidir-y-adoptar/aprender-y-mantenerse-al-dia": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/aprender-y-mantenerse-al-dia/AprenderYMantenerseAlDiaPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/aprender-y-mantenerse-al-dia/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-decidir-y-adoptar/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/clase-03-decidir-y-adoptar/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-01-javascript-y-componentes": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/ApoyoReact01HubLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/entorno-y-librerias": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/entorno-y-librerias/EntornoYLibreriasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/entorno-y-librerias/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/variables-y-funciones": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/variables-y-funciones/VariablesYFuncionesPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/variables-y-funciones/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/objetos-arrays-y-modulos": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/objetos-arrays-y-modulos/ObjetosArraysYModulosPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/objetos-arrays-y-modulos/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/primer-componente-react": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/primer-componente-react/PrimerComponenteReactPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/primer-componente-react/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-01-javascript-y-componentes/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-02-interfaces-mui-router": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/ApoyoReact02HubLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/estado-y-eventos": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/estado-y-eventos/EstadoYEventosPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/estado-y-eventos/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/efectos-y-hooks-propios": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/efectos-y-hooks-propios/EfectosYHooksPropiosPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/efectos-y-hooks-propios/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/material-ui": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/material-ui/MaterialUiPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/material-ui/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/ux-ui-administrativo": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/ux-ui-administrativo/UxUiAdministrativoPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/ux-ui-administrativo/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/react-router": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/react-router/ReactRouterPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/react-router/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-02-interfaces-mui-router/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-03-datos-y-crud": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/ApoyoReact03HubLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-03-datos-y-crud/http-y-apis": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/http-y-apis/HttpYApisPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/http-y-apis/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-03-datos-y-crud/async-await-y-fetch": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/async-await-y-fetch/AsyncAwaitYFetchPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/async-await-y-fetch/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-03-datos-y-crud/crud-con-react": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/crud-con-react/CrudConReactPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/crud-con-react/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-03-datos-y-crud/formularios-y-validacion": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/formularios-y-validacion/FormulariosYValidacionPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/formularios-y-validacion/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-03-datos-y-crud/rendimiento-y-despliegue": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/rendimiento-y-despliegue/RendimientoYDesplieguePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/rendimiento-y-despliegue/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/apoyo-react-03-datos-y-crud/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/practica-y-cierre/PracticaYCierrePageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/apoyo-react-03-datos-y-crud/pages/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-fundamentos": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-fundamentos/tecnologias-emergentes-y-javascript": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/tecnologias-emergentes-y-javascript/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/tecnologias-emergentes-y-javascript/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-fundamentos/entorno-y-librerias": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/entorno-y-librerias/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/entorno-y-librerias/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-fundamentos/variables-y-funciones": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/variables-y-funciones/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/variables-y-funciones/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-fundamentos/objetos-arrays-y-modulos": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/objetos-arrays-y-modulos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/objetos-arrays-y-modulos/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-fundamentos/primer-componente-react": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/primer-componente-react/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/primer-componente-react/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-01-fundamentos/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/practica-y-cierre/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-01-fundamentos/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-interfaces-con-react-y-mui": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-interfaces-con-react-y-mui/estado-y-eventos": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/estado-y-eventos/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/estado-y-eventos/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-interfaces-con-react-y-mui/efectos-y-hooks-propios": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/efectos-y-hooks-propios/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/efectos-y-hooks-propios/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-interfaces-con-react-y-mui/material-ui": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/material-ui/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/material-ui/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-interfaces-con-react-y-mui/ux-ui-administrativo": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/ux-ui-administrativo/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/ux-ui-administrativo/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-interfaces-con-react-y-mui/react-router": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/react-router/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/react-router/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-02-interfaces-con-react-y-mui/practica-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/practica-y-cierre/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-02-interfaces-con-react-y-mui/practica-y-cierre/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-datos-reales-y-crud": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-datos-reales-y-crud/http-y-apis": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/http-y-apis/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/http-y-apis/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-datos-reales-y-crud/async-await-y-fetch": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/async-await-y-fetch/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/async-await-y-fetch/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-datos-reales-y-crud/crud-con-react": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/crud-con-react/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/crud-con-react/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-datos-reales-y-crud/formularios-y-validacion": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/formularios-y-validacion/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/formularios-y-validacion/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-datos-reales-y-crud/rendimiento-y-despliegue": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/rendimiento-y-despliegue/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/rendimiento-y-despliegue/lesson-meta").then((m) => m.meta),
  },
  "tecnologias-emergentes/clase-03-datos-reales-y-crud/horizonte-y-cierre": {
    component: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/horizonte-y-cierre/AliasPageLesson"),
    meta: () => import("@/components/teaching/lessons/tecnologias-emergentes/_aliases/clase-03-datos-reales-y-crud/horizonte-y-cierre/lesson-meta").then((m) => m.meta),
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
