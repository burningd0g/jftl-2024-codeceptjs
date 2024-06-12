# La gestion des acteurs

Codecept intègre une gestion d'acteur. 
L'acteur par défaut est "I" (Je) et ne dispose que des méthodes standards.  

## Ajout d'une action personnalisée

Dans actors/CandidatNonConnecté.js, il est possible de rajouter des actions spécifiques pour l'acteur : 
```javascript
"use strict";

const { accueilPage, popinCookiesPage } = inject();

module.exports = function() {
  return actor({

    ouvreLeSite: async function() {
      this.suisSurLaPage(accueilPage.url);
      const cookiesAcceptes = await tryTo(() => this.limitTime(10).cliqueSur(popinCookiesPage.boutons.fermerSansAccepter));
    }

  });
}
```
🚨 `"use strict";` est nécessaire.

Il faut définir actors/CandidatConnecté.js également avec la cinématique liée à la connexion.

Mettre à jour codecept.conf.js pour les includes : 
```javascript
  include: {
    CandidatConnecte: './actors/CandidatConnecté.js',
    CandidatNonConnecte: './actors/CandidatNonConnecté.js',
    Je: './steps_file.js',
    accueilPage: './pages/Accueil.js',
    listeOffresPage: './pages/ListeOffres.js',
    popinCookiesPage: './pages/PopinCookies.js',
    espaceCandidatPage: "./pages/EspaceCandidat.js",
    connexionPage: "./pages/Connexion.js",
  },
```
Dans ce contexte, le I/Je devra être remplacé par "this".
La gestion de l'ouverture du site a était déplacée dans une fonction "ouvrirLeSite" qui permettra en fonction de la persona de gérer l'ouverture de manière adaptée (connecté, non connecté).

Il faut ajuster les steps definitions pour gérer un "Acteur", et spécifier l'acteur par défaut pour limiter la régression des cas de tests précédent.
Puis gérer les cas d'acteur.
```javascript
let Acteur=CandidatNonConnecte;

Given('je suis un candidat connecté', async () => {
  Acteur=CandidatConnecte;
});

Given('je suis un candidat non connecté', async () => {
  Acteur=CandidatNonConnecte;
});

Given('je suis suis sur la page d\'accueil', async () => {
  await Acteur.ouvreLeSite();
});
```

Les features peuvent désormais disposer de deux cas d'usage tout en mutualisant les actions.   
Les personnas peuvent aussi être utilisées en parallèles dans un même test en combinaison avec la gestion de session multiples : [https://codecept.io/acceptance/#multiple-sessions](https://codecept.io/acceptance/#multiple-sessions) 

Il est aussi possible de récupérer des cookies de la session navigateur pour les tests d'api, en ajoutant dans codecept.conf.js : 
```javascript
const { setSharedCookies } = require('@codeceptjs/configure');
// a mettre avant exports.config
setSharedCookies();
```

## [Retour Accueil](README.md)