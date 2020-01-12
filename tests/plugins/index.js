const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor")

module.exports = (on, config) => {
    on("file:preprocessor", cypressTypeScriptPreprocessor)

    return Object.assign({}, config, {
        fixturesFolder: "tests/fixtures",
        integrationFolder: "tests/specs",
        screenshotsFolder: "tests/screenshots",
        videosFolder: "tests/videos",
        supportFile: "tests/support/index.ts",
    })
}
