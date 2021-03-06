// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === "production"
        ? "/orange-website/"
        : "/",

    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, "src/assets/icons");

        config.module.rule("svg-sprite").test(/\.svg$/).include.add(dir).end() //只包含icons目录
            .use("svg-sprite-loader").loader("svg-sprite-loader").options({extract: false}).end()
            .use("svgo-loader").loader("svgo-loader").tap(options => ({
            ...options,
            plugins: [{removeAttrs: {attrs: "fill"}}]
        })); //去掉svg文件中的fill属性;

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        config.plugin("svg-sprite").use(require("svg-sprite-loader/plugin"), [{plainSprite: true}]);

        config.module.rule("svg").exclude.add(dir); //其他SVG 排除icons目录

    },
    pwa: {
        iconPaths: {
            favicon32: "favicon.ico",
            favicon16: "favicon.ico",
            appleTouchIcon: "favicon.ico",
            maskIcon: "favicon.ico",
            msTileImage: "favicon.ico"
        }
    }
}
;



