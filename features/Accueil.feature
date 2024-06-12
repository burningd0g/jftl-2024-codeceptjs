@accueil @gherkin 
Feature: Page d'accueil
  En tant que candidat non authentifié
  Je souhaite pouvoir rechercher une offre d'emploi

  @recherche @code_postal @gherkin 
  Scenario: Recerche par code postal
    Given je suis sur la page d'accueil
    When je saisi le code postal 33850 et sélectionne la commune "LEOGNAN"
    And je lance une recherche
    Then je vois les offres pour la commune de "Léognan"
