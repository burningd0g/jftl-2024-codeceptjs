@gherkin @accueil @visiteur
Feature: Page d'accueil visiteur
  En tant que candidat non authentifié
  Je souhaite pouvoir rechercher une offre d'emploi

  Background:
    Given je suis un candidat non connecté

  @recherche @code_postal @visiteur
  Scenario: Recherche par code postal
    Given je suis sur la page d'accueil
    When je saisi le code postal 33850 et sélectionne la commune "LEOGNAN"
    And je lance une recherche
    Then je vois les offres pour la commune de "Léognan"