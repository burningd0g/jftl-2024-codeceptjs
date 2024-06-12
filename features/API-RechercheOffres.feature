@gherkin @recherche @api
Feature: API Recherche d'offre
  En tant que tiers
  Je souhaite pouvoir rechercher une offre d'emploi depuis l'api francetravail.io
# Récupérer un bearer un bas du bloc paramètres de la page : 
# https://francetravail.io/data/api/offres-emploi/documentation#/api-reference/operations/recupererListeOffre
  @recherche @rome @api
  Scenario: Recerche par code rome
    Given j'ai un bearer de sécurité "???"
    When je recherche des offres avec le code ROME "D1102"
    Then le code retour est un succès
    And je reçois des offres dans le libellé ROME contient "Boulanger"