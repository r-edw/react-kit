var path = require('path');

module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080",
        path.resolve(__dirname, "./pub/entry.js")
      ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: "style!css"
            },
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: "babel",
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};