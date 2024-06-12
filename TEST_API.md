# Test d'api

## Activation des modules API
Il est nécessaire d'ajouter les dépendances pour les tests d'api en tant que helpers dans `codecept.conf.js` :
```javascript
  helpers: {
    /**
     ...
     * */
    REST: {
      endpoint: 'https://api.francetravail.io',
      prettyPrintJson: true
    },
    JSONResponse: {},
  }
```

## Utilisation

Le concept reste le même, en test classique ou gherkin.  
Les mots clés ne sont pas encore traduit.   
Une gestion simplifiée de bearer est présente.  
Exemple : 
```javascript
  I.amBearerAuthenticated('123456abcdef');
  I.sendGetRequest('/partenaire/offresdemploi/v2/offres/search?codeROME='+rome);
  I.seeResponseCodeIsSuccessful();
```

Documentation : [https://codecept.io/api/](https://codecept.io/api/)  
Tout un jeu de simplification existe pour les controles JSON et les codes retour (agrégation des Succes & Echec par exemple).

## Assertion Avancées
Il est possible de faire des assertions plus avancées avec une mécanique de callback :
```javascript
I.seeResponseValidByCallback(({ data, status, expect }) => {
    for(let offre of data.resultats) {
      expect(offre.romeLibelle.toLowerCase()).to.include(metier.toLowerCase())
    }
  })
```

## [Retour Accueil](README.md)