const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
};
