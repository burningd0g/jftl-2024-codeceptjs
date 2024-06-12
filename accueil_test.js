const { I, Je } = inject();

Fonctionnalité('Page Accueil');

Scénario('Faire une recherche',  async ({ Je }) => {
    Je.suisSurLaPage("/accueil/");
    const cookiesAcceptes = await tryTo(() => Je.limitTime(10).cliqueSur("#pecookies-continue-btn"));
    Je.remplisLeChamp("#location1-selectized", "33850");
    Je.cliqueSur("//span[text()='LEOGNAN']"); 
    Je.cliqueSur('//button[@data-loading-reset="maj-resultats"]');
    Je.waitForNumberOfTabs(2)
    Je.switchToNextTab();
    Je.voisDansLeChamp("span.subtitle","Leognan");
});