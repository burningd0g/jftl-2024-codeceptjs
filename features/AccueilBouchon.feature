@gherkin @accueil  @bouchon
Feature: Page d'accueil
  En tant que candidat non authentifié
  Je souhaite pouvoir rechercher une offre d'emploi

  Background:
    Given la recherche lieu pour "33850" renvoi:
    """ 
      [
        {
            "typeLieu": "COMMUNE",
            "code": "33238",
            "libelle": "BUGOGNAN",
            "codePostal": "33850",
            "codeDepartement": "33"
        }
      ]
    """ 

  @recherche @code_postal @bouchon
  Scenario: Recerche par code postal
    Given je suis sur la page d'accueil
    When je saisi le code postal 33850 et sélectionne la commune "LEOGNAN"
    And je lance une recherche
    Then je vois les offres pour la commune de "Léognan"