const {  CandidatConnecte, CandidatNonConnecte, I, Je } = inject();
const { accueilPage, listeOffresPage } = inject();

let Acteur=CandidatNonConnecte;

Given('je suis un candidat connecté', async () => {
  Acteur=CandidatConnecte;
});

Given('je suis un candidat non connecté', async () => {
  Acteur=CandidatNonConnecte;
});

Given('je suis sur la page d\'accueil', async () => {
  await Acteur.ouvreLeSite();
});

When("je saisi le code postal {int} et sélectionne la commune {string}", (codePostal, commune) =>{ 
  Acteur.remplisLeChamp(accueilPage.champs.lieu, codePostal);
  Acteur.cliqueSur(accueilPage.listes.communes(commune)); 
});

When("je lance une recherche", () =>{ 
  Acteur.cliqueSur(accueilPage.boutons.recherche);
});

Then("je vois les offres pour la commune de {string}", async (idRCI) => {
  Acteur.waitForNumberOfTabs(2,15); 
  Acteur.switchToNextTab();
  Acteur.limitTime(30).voisDansLeChamp(listeOffresPage.libelles.lieu,"Leognan");
}); 

Given('j\'ai un bearer de sécurité {string}', (token) => {
  Acteur.amBearerAuthenticated(token);
});

When('je recherche des offres avec le code ROME {string}', async (rome) => {
   await Acteur.sendGetRequest('/partenaire/offresdemploi/v2/offres/search?codeROME='+rome);
});

Then('je reçois des offres dans le libellé ROME contient {string}', async (metier) => {
  Acteur.seeResponseValidByCallback(({ data, status, expect }) => {
    for(let offre of data.resultats) {
      expect(offre.romeLibelle.toLowerCase()).to.include(metier.toLowerCase())
    }
  })
});

Then('le code retour est un succès', () => {
  Acteur.seeResponseCodeIsSuccessful();
});


Given('la recherche lieu pour {string} renvoi:', async (recherche, reponse) => {
  console.log('bouchon lieu "'+recherche+" avec : \n "+ reponse.content);
  Acteur.mockTraffic('https://www.francetravail.fr/api-accueil/api/lieu/'+recherche,reponse.content);
  /*
  Acteur.mockRoute('https://www.francetravail.fr/api-accueil/api/lieu/'+recherche, route => route.fulfill({
                                                                                                      status: 200,
                                                                                                      body: reponse.content,
                                                                                                      }));
  */
});
