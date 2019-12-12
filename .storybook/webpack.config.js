const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = ({ config }) => {
  config.module.rules.push(
    {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require("@babel/preset-typescript").default,
            require("@babel/preset-react").default
          ]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins=[new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })]
  return config;
};