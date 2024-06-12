module.exports = {
  url: '/accueil/',
  champs: {
    metier: '#keywords-selectized',
    lieu: '#location1-selectized'
  },
  boutons : {
    recherche : '//button[@data-loading-reset="maj-resultats"]',
    connexion : '.btn-account', 
    connexionCandidat: '.menu-link-candidat',
  },
  listes: {
    communes(nomCommune) { return "//span[text()='"+nomCommune+"']" }
  }
}
