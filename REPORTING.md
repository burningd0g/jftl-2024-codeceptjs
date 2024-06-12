# Les rapports

Par défaut le reporting est uniquement la sortie console avec un code retour adapté pour une remonté OK/KO dans une CI/CD  
  
Beaucoup d'option locale ou distante existent : [https://codecept.io/reports/](https://codecept.io/reports/)


## Rapport Cucumber

Installer la dépendance :
```bash
npm i --save-dev codeceptjs-cucumber-json-reporter
```

### JSON
C'est la source pour générer des rapports HTML ou des imports dans les outils de gestions de tests tel qu'XRAY.  
  
Il faut ajuster la `codecept.conf.js` avec le plugin :
```javascript
plugins: {
  cucumberJsonReporter: {
    require: 'codeceptjs-cucumber-json-reporter',
    enabled: true, 
    attachScreenshots: true,     
    attachComments: true,        
    outputFile: 'output/cucumber.json',     
    includeExampleValues: true,
    timeMultiplier: 1000000,   
  },
}
```
Le fichier sera disponible dans output après l'exécution des tests pour traitement ou import.  
  
Pour ajouter des commentaires dans le rapport on peut utiliser :
```javascript
I.say("mon commentaire")
```

Pour ajouter des captures dans le rapport on peut utiliser :
```javascript
I.saveScreenshot()
```
### HTML

Installer la dépendance :
```bash
npm i -D cucumber-html-reporter 
```

Créer un fichier report.js contenant : 
```javascript
var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'output/cucumber.json',
        output: 'output/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chromium",
        },
        failedSummaryReport: true,
    };
    reporter.generate(options);
```

La génération du rapport se fait avec :
```bash
node report.js
```

## Rapport HTML Allure

### Pré-Requis
Disposer une machine virtuelle java ( https://www.java.com/fr/download/ )

### Configurer
Couvre le gherkin et les tests classiques

Installer la dépendance : 
```bash
npm install --save-dev allure-codeceptjs
```

```bash
npm install --save-dev -g allure-commandline
```

Ajouter dans `codecept.js.conf` : 
```javascript
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  }
```

Commande pour générer le rapport : 
```bash
allure generate --clean  -o ./output/allure
```
En version fichier HTML unique (images autoportées en base64) : 
```bash
allure generate --clean --single-file -o ./output/allure
```

## Nettoyer le reporting

Afin de nettoyer les dossiers de reporting, il est possible de créer un script `report_clean.js` : 
```javascript
const fs = require('fs');
fs.rmSync("./output", { recursive: true, force: true });
fs.rmSync("./allure-results", { recursive: true, force: true });
```

Et de l’appeler  avec:
```bash
node report_clean.js
```

## [Retour Accueil](README.md)