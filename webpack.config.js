"use strict";

const path = require("path");

module.exports = {
  entry: "./browser/index.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

// This is config from CodeCademy
// 'use strict';

// const webpack = require('webpack'); // eslint-disable-line no-unused-vars

// module.exports = {
//   entry: './browser/index.js',
//   output: {
//     path: __dirname,
//     filename: './public/js/bundle.js',
//   },
//   context: __dirname,
//   devtool: 'source-map',
//   module: {
//     loaders: [
//       {
//         test: /jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-2'],
//         }
//       }
//     ]
//   }
// };
