# CodeCept JS

Site web officiel : [https://codecept.io/](https://codecept.io/ )  
  
Cet outil dispose des capacités pour l'automatisation test Front (IHM Web) & Back (API Rest), le bouchonnage à la volée par interception de requête pour le front, il supporte également le test des applications mobile.   
  
C'est un framework agnostique du driver, que l'on souhaite utiliser Playwright, WebDriver, Puppeteer, TestCafe, Protractor ou Appium : le code de test sera le même.  
Il dispose également d'un debugger interactif.  

## Pré-Requis 

Disposer de nodejs v14 minimum.

## Limites

L'abstraction multi drivers des bouchons n'est pas exploitable à l'identique sur tous les drivers.

## Instancier un projet existant

Il faut installer les dépendances : 
```bash
npm install
```

## Initialiser le projet

Codecept intègre un installateur tout en un, en une commande cela créé le projet et fourni un cas d'exemple :
```bash
npx create-codeceptjs .
```
Ensuite il faudra lancer l'initialisation interactive du projet :
```bash
npx codeceptjs init
```
Cela permet de choisir différents paramètres tel que :

 - L'activation de typescript (Non par défaut)
 - L'emplacement et le nommage des tests ( dossier courant par défaut et fichier se terminant r _test.js )
 - Le Driver parmi : 

   * Playwright (par défaut)
   * WebDriver
   * Puppeteer
   * REST
   * GraphQL
   * Appium
   * TestCafe
 - le dossier contenant logs, capture d'écran et rsudo aptapports ( ./output par défaut )
 - le choix de la localisation coode dans une langue spécifique (aucun par défaut)

Concernant playwright, il sera demandé le navigateur à utiliser : chromium (défaut), firefox, webkit, electron.  
Il sera demandé l'URL d'accès à l'application (https://www.francetravail.fr dans cet exemple) ainsi que le choix d'afficher le navigateur. (affiché par défaut)

Nous allons choisir les options par défaut sauf la location où l'on prendra 'fr-FR'.

Il sera demandé le nom de la fonctionnalité testée puis le nom du fichier de tests.

Enfin il faudra installer les dépendances playwright : 
```bash
npx playwright install --with-deps chromium
```
Ensuite deux modes de tests sont possibles :

  - Tests simple avec support d'une notion de langage métier/description des tests.
  - Tests gherkin pour faire du Behavior Driven Development

Dans tous les cas il sera important de s'attarder sur les concepts intégrés à l'outil pour :

  - les bouchons
  - le pattern page object
  - la gestion de persona

  ## Faire ses premiers tests 

Deux types de tests : 

  - [Classique](TEST_CLASSIQUE.md) : test classique 
  - [Gherkin/Cucumber](TEST_GHERKIN.md) : pour faire du béhavior driven develpoment

Voici différents points pour aller plus loin :

  - [Page Object](PAGE_OBJECT.md)
  - [Test d'api](TEST_API.md)
  - [Bouchons](BOUCHON.md)

Pour une utilisation plus avancée :

  - [Astuces](ASTUCES.md)
  - [Reporting](REPORTING.md)
  - [Persona](PERSONA.md)
  - [Continious Integration](CI.md)
