# Petits bonus 

## Playwright
### Activer les videos
```javascript
Playwright: {
      ...
      video: true,
    }
```
### Activer les traces
```javascript
Playwright: {
      ...
      trace: true,
    }
```

Les traces sont des fichiers zip (un par test), contenant l'intégralité du déroulé avec l'équivalent des options développeur : 

 - sortie console
 - traces réseaux
 - actions
 - capture du déroulé
 - code source

 Pour les voir en local : 
```bash
npx playwright show-trace <fichier.zip>
```

 En version web avec deux usages : 
 
 - Appli PWA restant en local : https://trace.playwright.dev/
 - Appli PWA en fournissant l'URL des traces : https://trace.playwright.dev/?trace=http(s)://<domaine>/<fichier.zip>

### Capture d'écran
Quelques options complémentaires sur les captures d'écran.

#### De toute la page
```javascript
Playwright: {
      ...
      fullPageScreenshots: true,
    }
```
#### Mêmee si le test est OK
```javascript
Playwright: {
      ...
      keepTraceForPassedTests: true,
    }
```
## Regenerer l'aide à la saisie VSCode
Lancer : 
```bash
npx codeceptjs def
```
Cela régénère le fichier steps.d.ts avec les derniers acteurs/pages incluent dans le projet.

## Utiliser différentes configurations 

Pour du multi-environnement, différents navigateurs ou autres spécificités: 
```bash
npx codeceptjs run -c configs/ci.conf.js 
```
## Utiliser un Proxy 
Il sera nécessaire de configurer la variable d'environnement : 
```conf
https_proxy=http://mon.proxy:8080
http_proxy=$https_proxy
HTTP_PROXY=$https_proxy
HTTPS_PROXY=$https_proxy
no_proxy=mon-repo.proxy,mon-repo.node
ELECTRON_GET_USE_PROXY=true 
GLOBAL_AGENT_HTTPS_PROXY=$https_proxy
```
### Spécificité pour télécharger Playwright
Si vous disposez d'un proxy de repository, il est possible de le  spécifier pour playwrigth, exemple proxy artifactory: 
```conf
PLAYWRIGHT_DOWNLOAD_HOST=http://mon-repo.proxy/artifactory/playwright-proxy
```
## Changement d'onglet

//!TODO

## Les Iframe

Il existe deux possibilités pour manipuler le contenu d'une iframe, soit avec la fonctionnalité `within` :
```javascript
within({frame: "#editor"}, () => {
  I.vois('Page');
});
```
Une fois sorti de `within`, le test reprend le contrôle  de la page racine.  
Il ne permet cependant pas de gérer une iframe incluse dans une iframe.  
  
Soit avec switchTo() : 
```javascript
I.switchTo('#editor'); 
I.switchTo('iframe');  //Prend l'iframe peu importe ses propriétés
I.vois('sous page');
I.switchTo(); //retour à page racine
```
Il est alors possible de passer d'iframe en sous iframe sans soucis.  
Mais il est nécessaire de retourner à la "racine" en utilisant la même méthode sans paramètre.

## Réaliser une action non bloquante
Ajouter le plugin à codecept.conf.js : 
```javascript
plugins: {
    tryTo: {
        enabled: true
    }
}
```

Utilisation : 
```javascript
const cookiesAcceptes = await tryTo(() => Je.click("#pecookies-continue-btn"));
```

La fonction qui l'exécute devra être async.  
Le résultat est un booléen, permettant ainsi de savoir si l'essai a réussi ou non.  

## [Retour Accueil](README.md)