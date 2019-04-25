/* eslint no-param-reassign: ["error", { "props": false }] */

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { ANALYZE } = process.env;

module.exports = () => {
  const plugins = [];

  if (ANALYZE) {
    plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 8888,
      openAnalyzer: true,
    }));
  }

  return {
    entry: 'server/index.js',
    generateBuildId: async () => `build-${Date.now()}`,
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'emit-file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader'],
          }),
          include: [
            path.resolve(__dirname, 'styles'),
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'static'),
          ],
        },
      ],
    },
    plugins: [
      ...plugins,
      new ExtractTextPlugin('[name]'),
    ],
  };
};
