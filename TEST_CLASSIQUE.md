# Les tests classiques

Ce sont des tests qui ne basent pas sur le concept gherkin/cucumber.  
  
Ils sont rédigés sous forme d'une fonction qui dispose d'une description.  
  
Ils peuvent être associé à une fonctionnalité.   
  
Pour créer un nouveau test : 
```bash
npx codeceptjs gt
```

Il va être demandé : 

 - La fonctionnalité testée : Page d'accueil
 - le nom du fichier : accueil_test.js
 

Un fichier accueil_test.js contient :
```javascript
Fonctionnalité('Page d\'accueil');

Scénario('test something',  ({ Je }) => {

});
```

On va pouvoir transformer le scénario 'test something' en 'Faire une recherche' :
```javascript
Fonctionnalité('Page d\'accueil');

Scénario('Faire une recherche',  async ({ Je }) => {
    Je.suisSurLaPage('/');
    Je.cliqueSur("#id");
   /*
    ...
   */
    Je.voisDansLeChamp("div.css","Leognan");
});
```


## [Retour Accueil](README.md)