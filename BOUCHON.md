# Les bouchons

Les bouchons font partis de la partie qui n'a pas de mots clés uniformément implémenté sur les différents drivers à l'heure actuelle.

## Méthode native 


`MockRoute` est disponible sur Playwright & Puppeteer.  
On obtient un objet route qui permet de traiter le fonctionnent: code retour, reponse, modification headers, etc :
```javascript
  Acteur.mockRoute('https://www.francetravail.fr/api-accueil/api/lieu/'+recherche, route => route.fulfill({
                                                                                                      status: 200,
                                                                                                      body: reponse.content,
                                                                                                      });
```

Playwright dispose d'une version simplifiée `MockTraffic`.  
Il permet pour une url, de renvoyer une réponse.  
```javascript
  Acteur.mockTraffic('https://www.francetravail.fr/api-accueil/api/lieu/'+recherche,reponse.content);
```

## Helper Tiers : MockRequest

Documentation : [https://codecept.io/helpers/MockRequest/](https://codecept.io/helpers/MockRequest/)
  
Il s'agit d'un helper tiers qui supporte Puppeteer et WebDriver.  
  
Installer le package : 
```bash
npm i -D @codeceptjs/mock-request
```

Et ajouter le helper dans `codecept.conf.js` : 

```javascript
  helpers: {
    MockRequestHelper: {
        require: '@codeceptjs/mock-request',
    }
  }
```

Il permet de faire des mocks simple ou avancés : 
```javascript
I.startMocking(); //Optionnel

I.mockRequest('/google-analytics/*path', 200);
I.mockRequest('GET', '/api/users', 200);
I.mockServer(server => {
  server.get('https://server.com/api/users*').
    intercept((req, res) => { res.status(200).json(users);
  });
});

I.click('Get users);

I.stopMocking(); //permet de desactiver les bouchons
```

Il dispose également d'une fonctionnalité enregistrement/rejeu qui permet de rapidement créer des bouchons:
```javascript
I.recordMocking(); // lance l'enregistrement
```
```javascript
I.replayMocking(); //active le rejeu
```

## [Retour Accueil](README.md)