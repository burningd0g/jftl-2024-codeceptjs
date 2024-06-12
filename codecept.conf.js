exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://api.francetravail.io',
      prettyPrintJson: true
    },
    JSONResponse: {},
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
    MockRequestHelper: {
      require: '@codeceptjs/mock-request',
    }
  },
  include: {
    CandidatConnecte: './actors/CandidatConnecté.js',
    CandidatNonConnecte: './actors/CandidatNonConnecté.js',
    Je: './steps_file.js',
    accueilPage: './pages/Accueil.js',
    listeOffresPage: './pages/ListeOffres.js',
    popinCookiesPage: './pages/PopinCookies.js',
    espaceCandidatPage: "./pages/EspaceCandidat.js",
    connexionPage: "./pages/Connexion.js",
    popinCookiesPage: './pages/PopinCookies.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
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
    cucumberJsonReporter: {
      require: 'codeceptjs-cucumber-json-reporter',
      enabled: true, 
      attachScreenshots: true,     
      attachComments: true,        
      outputFile: 'cucumber.json',     
      includeExampleValues: true,
      timeMultiplier: 1000000,   
    },
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
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