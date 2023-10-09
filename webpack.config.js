const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    // ...other webpack configuration options...
  
    mode: 'production', // Set the mode to production

    // Add the plugin to your plugins array
    plugins: [
    new BundleAnalyzerPlugin()
  ],
  
  module: {
    rules: [
      {
        test: /\.js$/, // Match .js files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add the necessary presets
          },
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          sourceMap: true,
          // Add any specific options for Terser here if needed
        },
      }),
    ],
  },
  };