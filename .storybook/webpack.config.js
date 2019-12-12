const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = ({ config }) => {
  config.module.rules.push(
    {
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
  config.module.rules.push({
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins=[new TsconfigPathsPlugin({ configFile: "./tsconfig.json"  })]
  return config;
};