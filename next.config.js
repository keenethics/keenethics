/* eslint no-param-reassign: ["error", { "props": false }] */

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { ANALYZE } = process.env;

module.exports = {
  webpack: (config) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }

    const entry = config.entry();

    return entry.then((value) => {
      value[path.resolve(__dirname, 'static/main.css')] = path.resolve(__dirname, 'styles/main.scss');

      config.entry = value;
      config.module.rules.push(
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
      );
      config.plugins.push(new ExtractTextPlugin('[name]'));

      return config;
    });
  },
};
