/// <reference types='codeceptjs' />
type CandidatConnecte = typeof import('./actors/CandidatConnecté.js');
type CandidatNonConnecte = typeof import('./actors/CandidatNonConnecté.js');
type steps_file = typeof import('./steps_file.js');
type accueilPage = typeof import('./pages/Accueil.js');
type listeOffresPage = typeof import('./pages/ListeOffres.js');
type popinCookiesPage = typeof import('./pages/PopinCookies.js');
type espaceCandidatPage = typeof import('./pages/EspaceCandidat.js');
type connexionPage = typeof import('./pages/Connexion.js');
type JSONResponseData = import('./jsonresponsedata_helper.js');
type MockRequestHelper = import('@codeceptjs/mock-request');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, Je: Je, CandidatConnecte: CandidatConnecte, CandidatNonConnecte: CandidatNonConnecte, accueilPage: accueilPage, listeOffresPage: listeOffresPage, popinCookiesPage: popinCookiesPage, espaceCandidatPage: espaceCandidatPage, connexionPage: connexionPage }
  interface Methods extends REST, JSONResponse, Playwright, JSONResponseData, MockRequestHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  interface Je extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {
  "amOutsideAngularApp": "suisALExtérieurDeLApplicationAngular",
  "amInsideAngularApp": "suisALIntérieurDeLApplicationAngular",
  "waitForElement": "attendsLElément",
  "waitForClickable": "attendsDeCliquer",
  "waitForVisible": "attendsPourVoir",
  "waitForEnabled": "attendsLActivationDe",
  "waitForInvisible": "attendsLInvisibilitéDe",
  "waitInUrl": "attendsDansLUrl",
  "waitForText": "attendsLeTexte",
  "moveTo": "vaisSur",
  "refresh": "rafraîchis",
  "refreshPage": "rafraîchisLaPage",
  "haveModule": "ajouteLeModule",
  "resetModule": "réinitialiseLeModule",
  "amOnPage": "suisSurLaPage",
  "click": "cliqueSur",
  "doubleClick": "doubleCliqueSur",
  "see": "vois",
  "dontSee": "neVoisPas",
  "selectOption": "sélectionneUneOption",
  "fillField": "remplisLeChamp",
  "pressKey": "appuisSurLaTouche",
  "triggerMouseEvent": "déclencheLEvénementDeLaSouris",
  "attachFile": "attacheLeFichier",
  "seeInField": "voisDansLeChamp",
  "dontSeeInField": "neVoisPasDansLeChamp",
  "appendField": "ajouteAuChamp",
  "checkOption": "vérifieLOption",
  "seeCheckboxIsChecked": "voisQueLaCaseEstCochée",
  "dontSeeCheckboxIsChecked": "neVoisPasQueLaCaseEstCochée",
  "grabTextFrom": "prendsLeTexteDe",
  "grabValueFrom": "prendsLaValeurDe",
  "grabAttributeFrom": "prendsLAttributDe",
  "seeInTitle": "voisDansLeTitre",
  "dontSeeInTitle": "neVoisPasDansLeTitre",
  "grabTitle": "prendsLeTitre",
  "seeElement": "voisLElément",
  "dontSeeElement": "neVoisPasLElément",
  "seeInSource": "voisDansLeCodeSource",
  "dontSeeInSource": "neVoisPasDansLeCodeSource",
  "executeScript": "exécuteUnScript",
  "executeAsyncScript": "exécuteUnScriptAsynchrone",
  "seeInCurrentUrl": "voisDansLUrl",
  "dontSeeInCurrentUrl": "neVoisPasDansLUrl",
  "seeCurrentUrlEquals": "voisQueLUrlEstEgaleA",
  "dontSeeCurrentUrlEquals": "neVoisPasQueLUrlEstEgaleA",
  "saveScreenshot": "prendsUneCapture",
  "setCookie": "déposeLeCookie",
  "clearCookie": "effaceLeCookie",
  "seeCookie": "voisLeCookie",
  "dontSeeCookie": "neVoisPasLeCookie",
  "grabCookie": "prendsLeCookie",
  "resizeWindow": "redimensionneLaFenêtre",
  "wait": "attends",
  "clearField": "effaceLeChamp",
  "dontSeeElementInDOM": "neVoisPasDansLeDOM",
  "moveCursorTo": "bougeLeCurseurSur",
  "scrollTo": "défileVers",
  "sendGetRequest": "envoieLaRequêteGet",
  "sendPutRequest": "envoieLaRequêtePut",
  "sendDeleteRequest": "envoieLaRequêteDelete",
  "sendPostRequest": "envoieLaRequêtePost"
}
  }
}

declare const Fonctionnalité: typeof Feature;
declare const Scénario: typeof Scenario;
declare const Plan du scénario: typeof ScenarioOutline;
declare const Avant: typeof Before;
declare const Après: typeof After;
declare const AvantLaSuite: typeof BeforeSuite;
declare const AprèsLaSuite: typeof AfterSuite;