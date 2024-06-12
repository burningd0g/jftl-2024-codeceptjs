const fs = require('fs');
fs.rmSync("./output", { recursive: true, force: true });
fs.rmSync("./allure-results", { recursive: true, force: true });