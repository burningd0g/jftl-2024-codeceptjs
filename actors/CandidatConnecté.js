"use strict";

const { accueilPage, espaceCandidatPage, connexionPage, popinCookiesPage } = inject();

module.exports = function() {
  return actor({

    ouvreLeSite: async function() {
      this.suisSurLaPage(accueilPage.url);
      const cookiesAcceptes = await tryTo(() =>  { this.limitTime(10).cliqueSur(popinCookiesPage.boutons.fermerSansAccepter) } );
      this.cliqueSur(accueilPage.boutons.connexion);
      this.cliqueSur(accueilPage.boutons.connexionCandidat);
      this.limitTime(15).attendsDansLUrl("authentification-candidat.francetravail.fr");
      this.limitTime(15).voisLElément(connexionPage.boutons.poursuivre);
      this.remplisLeChamp(connexionPage.champs.identifiant, "Jay-Ail");
      this.cliqueSur(connexionPage.boutons.poursuivre);
      this.remplisLeChamp(connexionPage.champs.motDePasse, "???");
      this.cliqueSur(connexionPage.boutons.seConnecter);
      this.limitTime(15).voisDansLeChamp(espaceCandidatPage.champs.nomPrenom,"Jay d'AIL")
      this.suisSurLaPage(accueilPage.url);
    },

  });
}
