const {  I, Je } = inject();
const { accueilPage, listeOffresPage, popinCookiesPage } = inject();

Given('je suis sur la page d\'accueil', async () => {
  Je.suisSurLaPage(accueilPage.url);
  const cookiesAcceptes = await tryTo(() => Je.limitTime(10).cliqueSur(popinCookiesPage.boutons.fermerSansAccepter));
});

When("je saisi le code postal {int} et sélectionne la commune {string}", (codePostal, commune) =>{ 
  Je.remplisLeChamp(accueilPage.champs.lieu, codePostal);
  Je.cliqueSur(accueilPage.listes.communes(commune)); 
});

When("je lance une recherche", () =>{ 
  Je.cliqueSur(accueilPage.boutons.recherche);
});

Then("je vois les offres pour la commune de {string}", async (idRCI) => {
  Je.waitForNumberOfTabs(2,15); 
  Je.switchToNextTab();
  Je.limitTime(30).voisDansLeChamp(listeOffresPage.libelles.lieu,"Leognan");
}); 

Given('j\'ai un bearer de sécurité {string}', (token) => {
  Je.amBearerAuthenticated(token);
});

When('je recherche des offres avec le code ROME {string}', async (rome) => {
   await Je.sendGetRequest('/partenaire/offresdemploi/v2/offres/search?codeROME='+rome);
});

Then('je reçois des offres dans le libellé ROME contient {string}', async (metier) => {
  Je.seeResponseValidByCallback(({ data, status, expect }) => {
    for(let offre of data.resultats) {
      expect(offre.romeLibelle.toLowerCase()).to.include(metier.toLowerCase())
    }
  })
});

Then('le code retour est un succès', () => {
  Je.seeResponseCodeIsSuccessful();
});


Given('la recherche lieu pour {string} renvoi:', async (recherche, reponse) => {
  console.log('bouchon lieu "'+recherche+" avec : \n "+ reponse.content);
  Je.mockTraffic('https://www.francetravail.fr/api-accueil/api/lieu/'+recherche,reponse.content);
  /*
  Je.mockRoute('https://www.francetravail.fr/api-accueil/api/lieu/'+recherche, route => route.fulfill({
                                                                                                      status: 200,
                                                                                                      body: reponse.content,
                                                                                                      }));
  */
});
