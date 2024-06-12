exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://api.francetravail.io',
      prettyPrintJson: true
    },
    Playwright: {
      browser: 'chromium',
      url: 'https://www.francetravail.fr',
      show: true,
      trace: true,
      keepTraceForPassedTests: true,
      fullPageScreenshots: true,
      video: true,
      windowSize: "1920x1080",
    },
  },
  include: {
    Je: './steps_file.js',
    accueilPage: './pages/Accueil.js',
    listeOffresPage: './pages/ListeOffres.js',
    popinCookiesPage: './pages/PopinCookies.js',
    espaceCandidatPage: "./pages/EspaceCandidat.js",
    connexionPage: "./pages/Connexion.js",
    popinCookiesPage: './pages/PopinCookies.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    stepTimeout: {
      enabled: true,
      timeout: 45
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: '2024-codeceptjs',
  translation: 'fr-FR'
}