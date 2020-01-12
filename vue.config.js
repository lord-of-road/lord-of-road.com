const path = require("path")

let productionConfiguration = {}
if (process.env.NODE_ENV === "production") {
    const PrerenderSPAPlugin = require("prerender-spa-plugin")

    productionConfiguration = {
        configureWebpack: {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, "dist"),
                    routes: ["/", "/404"],
                    postProcess(context) {
                        if (context.route.endsWith("404")) {
                            context.outputPath = path.join(__dirname, "dist", "404.html")
                        }
                        return context
                    },
                    headless: false,
                }),
            ],
        },
    }
}

module.exports = {
    publicPath: "/",
    chainWebpack: config => {
        config.module
            .rule("vue")
            .use("vue-svg-inline-loader")
            .loader("vue-svg-inline-loader")
            .options({ /* ... */ })
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "stylus",
            patterns: [
                path.resolve(__dirname, "src/assets/styles/**/*.styl"),
            ],
        }
    },
    ...productionConfiguration,
}
