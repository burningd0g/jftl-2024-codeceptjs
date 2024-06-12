"use strict";

const { accueilPage, popinCookiesPage } = inject();

module.exports = function() {
  return actor({

    ouvreLeSite: async function() {
      this.suisSurLaPage(accueilPage.url);
      const cookiesAcceptes = await tryTo(() => this.limitTime(10).cliqueSur(popinCookiesPage.boutons.fermerSansAccepter));
    }

  });
}
