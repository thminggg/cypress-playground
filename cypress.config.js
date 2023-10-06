const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        mode: "development",
        devtool: false,
        module: {
          rules: [
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-env",
                    ["@babel/preset-react", { runtime: "automatic" }],
                  ],
                  plugins: [
                    [
                      "@babel/plugin-transform-modules-commonjs",
                      { loose: true },
                    ],
                  ],
                },
              },
            },
          ],
        },
      },
    },
  },
});
