# Test gherkin/cucumber sous CodeCeptJS

Le prefixe `gherkin` des commandes shell, peut être remplacé par `bdd` pour une saisie plus rapide

## Activer le Gherkin / BDD
Pour initialiser la partie BDD (Behavior Driven Development), il suffit de lancer : 
```bash
npx codeceptjs gherkin:init
```

Cela va adapter du projet pour ajouter 
  - un dossier "features" qui contiendra les critères d'acceptation au format gherkin
  - un dossier "step_definitiions" qui contiendra le code permettant de lier les critères d'acception a la manipulation de l'application
  - l'activation de gherkin dans la codecept.conf.js : 

  ```javascript
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  }
  ```

Exemple de feature : 
```gherkin
@gherkin @accueil
Feature: Page d'accueil
  En tant que candidat non authentifié
  Je souhaite pouvoir rechercher une offre d'emploi

  @recherche @code_postal
  Scenario: Recerche par code postal
    Given je suis suis sur la page d'accueil
    When je saisi le code postal 33850 et selectionne l'id commune 33238
    And je lances une rechercher
    Then je vois les offres pour la commune de "Léognan"
```
## Générer les steps définitions
```bash
npx codeceptjs gherkin:snippets
```

Cette commande va générer dans step_defintions/steps.js l'intégralité des actions des fichiers feature qui n'existe pas déjà.  

La création des steps définition utilise par défaut toutes les fichiers feature présent dans les dossiers de la configuration de codecept et positionne les définitions dans le premier fichier de steps de la configuration.  
Il est possible de préciser `--path=` pour donner le fichier de steps de destination et/ou `--feature=` pour cibler un fichier gherkin spécifique.  


## L'implémentation
Exemple d'implémentation :
```javascript
When("je lances une rechercher", () =>{ 
  Je.cliqueSur(accueilPage.boutons.recherche);
});
```
  
Il est possible de passer des paramètre depuis les fichiers feature, pas de besoin d'expression régulière, l'utilisation d'accolades et du type de données:
```javascript
When("je saisi le code postal {int} et sélectionne la commune {string}", (codePostal, commune) =>{ 
  Je.remplisLeChamp(accueilPage.champs.lieu, codePostal);
  Je.cliqueSur(accueilPage.listes.communes(commune)); 
});
```
Les différents types : 

|  Type  | Description |
| --------------- | ----------- |
| `{int}`         | les entiers tel que `71` ou `-19` |
| `{float}`       | les chiffres décimaux `3.6`, `.8` ou `-9.2` |
| `{word}`        | correspond à un seul mot sans espace `banana` (mais pas `banana split`) |
| `{string}`      | une chaine de caractere entre simple ou double quotes `"banana split"` ou `'banana split'` (mais pas `banana split`). les quotes qui encadrent la chaine ne seront pas passées à la variable |
| `{}` anonymous  | correspond à tout (`/.*/`). |

Il est possible  de n'executer qu'une partie des features (ou des scénarios): 
```bash
npx codeceptjs run --steps --grep "@code_postal"
```

## [Retour Accueil](README.md)