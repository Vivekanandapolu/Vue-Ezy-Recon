const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://reconew.ezyinvoicing.com",
        changeOrigin: true, // Change the origin of the host header to the target URL
        pathRewrite: { "^/api": "" }, // Remove the '/api' prefix when forwarding the request
      },
    },
  },
});
