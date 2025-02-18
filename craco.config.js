const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: process.env.NODE_ENV !== "production" ? "development" : "production",
  devServer: (devServerConfig) => {
    devServerConfig.setupMiddlewares = (middlewares) => middlewares;
    delete devServerConfig.onBeforeSetupMiddleware;
    delete devServerConfig.onAfterSetupMiddleware;

    return devServerConfig;
  },
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          silenceDeprecations: ["legacy-js-api", "import", "global-builtin"],
        },
      },
    },
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: process.env.REACT_APP_NAME,
          filename: "remoteEntry.js",
          library: { type: "var", name: process.env.REACT_APP_NAME },
          exposes: {
            ".": "./src/injector",
          },
        }),
      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};
