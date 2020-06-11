
module.exports = {
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
        return config;
    },
}