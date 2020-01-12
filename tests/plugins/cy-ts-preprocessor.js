const wp = require("@cypress/webpack-preprocessor")

const webpackOptions = {
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [{
                loader: "ts-loader",
            }],
        }],
    },
}

module.exports = wp({
    webpackOptions,
})
