const { I, Je } = inject();

Fonctionnalité('Page Accueil');

Scénario('Faire une recherche',  async ({ Je,  accueilPage, listeOffresPage, popinCookiesPage  }) => {
    Je.suisSurLaPage(accueilPage.url);
    const cookiesAcceptes = await tryTo(() => Je.limitTime(10).cliqueSur(popinCookiesPage.boutons.fermerSansAccepter));
    Je.remplisLeChamp(accueilPage.champs.lieu, "33850");
    Je.cliqueSur(accueilPage.listes.communes("LEOGNAN")); 
    Je.cliqueSur(accueilPage.boutons.recherche);
    Je.waitForNumberOfTabs(2)
    Je.switchToNextTab();
    Je.limitTime(30).voisDansLeChamp(listeOffresPage.libelles.lieu,"Leognan");
});