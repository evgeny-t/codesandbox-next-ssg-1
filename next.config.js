// @ts-check
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: false
});
const withOptimizedImages = require("next-optimized-images");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

console.log(`NODE_ENV=${process.env.NODE_ENV}`)

module.exports = withPlugins(
    [
        withOptimizedImages,
        withBundleAnalyzer,
        withSass
    ],
    {
        exportTrailingSlash: true,
        env: {
            dev: process.env.NODE_ENV !== 'production'
        },

        webpack(config, { isServer }) {
            if (!isServer) {
                config.node = {
                    fs: "empty",
                    path: "empty",
                };
                // https://github.com/zeit/next.js/issues/2069#issuecomment-593847441
                config.module.rules.push({
                    test: /fs-extra/,
                    use: "null-loader",
                })
            }
            config.resolve.alias["src"] = path.join(
                __dirname,
                "src",
            );
            config.resolve.alias["components"] = path.join(
                __dirname,
                "src",
                "components"
            );
            config.resolve.alias["pages"] = path.join(
                __dirname,
                "src",
                "pages"
            );
            config.resolve.alias["assets"] = path.join(__dirname, "src", "assets");
            return config;
        },
    }
);
