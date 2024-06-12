# Le pattern Page Object sur CodeCept JS

## Initialiser un page object

La création est intégrée à l'outil par la commande : 
```bash
npx codeceptjs gpo
```

Cela demandera le nom de la page puis le lieu de stockage.  
L'exemple ici utilisera les pages "Accueil" et "ListeOffres" dans le dossier par défaut "pages" et au format "module".  
  
Le shell interactif va créer le fichier "Accueil.js" contenant : 

```javascript
const { I } = inject();

module.exports = {

  // insert your locators and methods here
}
```

Si l'on utilise la localisation "FR", il faudra peut-être modifier les injections pour ajouter "Je" :
```javascript
const { I, Je } = inject();
```

Et il ajoutera à codecept.conf.js l'include nécessaire :
```javascript
include: {
    Je: './steps_file.js',
    accueilPage: "./pages/Accueil.js",
  },
```

Pour utiliser le pageobject dans un test classique, il suffira de le rajouter en paramètre du test en plus de la persona (I/Je par défaut) : 
```javascript
Scénario('Faire une recherche',  async ({ Je, accueilPage, listeOffresPage, popinCookiesPage }) => {
 /*
 ...
 */
});
```
# Utiliser un page object

Pour l'utiliser en test gherkin, il faut ajouter l'injection en début du fichier de steps definitions : 
```javascript
const { I, Je } = inject();
const { accueilPage, listeOffresPage } = inject();

Given('je suis connecté', () => {
  /*
    ...
  */
});
```

## Le Pattern PageOject

Ce concept permet d'avoir des objets qui vont servir a manipuler l'application et mutualiser (permettre  de réutiliser) des éléments de l'écran dans plusieurs tests ou scénarios différents.   
  
Le PageObject ne doit contenir que ce qui permet d'identifier les éléments (bouton, champs, image, zone texte, etc.) et de quoi réaliser des actions sur ceux-ci.  
  
Les contrôles (assertions) seront dans les tests car ils sont spécifiques aux tests.
Une exception peut-être une méthode permettant d'attendre/manipuler un chargement long/non géré par le framework d'automatisation qui serait utilisée dans **plusieurs** tests.  
  
CodeCept utilisant des actions très simples de manipulation et gérant le concept d'acteur, le PageObject pourra porter uniquement les éléments d’identification qui seront utilisés ensuite dans les tests.  
Il n'y a pas d’intérêt à faire un page.clicksurbouton() plutôt qu'un simple Je.clickSur(page.bouton).  
Le test portant ainsi l'acteur, cela permet une lisibilité accrue.  
  
Exemple Page-Object sur écran de connexion :
```javascript
module.exports = {
  champs: {
    identifiant: "#identifiant",
    motDePasse: "#password",
  },
  boutons: {
    poursuivre: "#submit",
    seConnecter: "#submit",
  }
}
```

Utilisation du page object dans un test
```javascript
Je.voisLElément(connexionPage.boutons.poursuivre);
Je.remplisLeChamp(connexionPage.champs.identifiant, "mon-login");
Je.cliqueSur(connexionPage.boutons.poursuivre);
Je.remplisLeChamp(connexionPage.champs.motDePasse, "secret");
Je.cliqueSur(connexionPage.boutons.seConnecter);
```
## Page Fragment

Pour les cas spécifiques, tel que iframe ou widget, il est possible de créer des page fragement qui permettront de de contraindre les actions DANS le fragment est donner une lisibilité  accrue.

Créer le page fragment : 
```bash
npx codeceptjs go --type fragment
```
Exemple de contenu :
```javascript
const { Je } = inject();
// fragments/modale.js
module.exports = {

  racine: '#modal',
  boutons : {
    accepter: '#accept'
  }
}
```
L'utiliser :
```javascript
Scenario('fragment', async ({ j,  modale }) => {
  I.attendsPourVoir(modale.racine);
  within(modale.racine, function () {
    I.cliqueSur(racine.boutons.accepter);
  })
});
```

Cela reste techniquement un concept de page object avec une propriété racine (root) permettant d'exploiter la fonctionnalité `within` de codeceptjs.

Plus de détails:  https://codecept.io/pageobjects/#page-fragments

## [Retour Accueil](README.md)

