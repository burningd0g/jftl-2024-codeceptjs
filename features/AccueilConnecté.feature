@gherkin @accueil @connecté
Feature: Page d'accueil connecté
  En tant que candidat authentifié
  Je souhaite pouvoir rechercher une offre d'emploi

  Background:
    Given je suis un candidat connecté

  @recherche @code_postal @connecté
  Scenario: Recherche par code postal
    Given je suis sur la page d'accueil
    When je saisi le code postal 33850 et sélectionne la commune "LEOGNAN"
    And je lance une recherche
    Then je vois les offres pour la commune de "Léognan"