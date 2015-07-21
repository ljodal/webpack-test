var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./js/app.js",
        vendor: ['react']
    },

    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel", exclude: /node_modules/ }
        ]
    },
    devtool: "#inline-source-map",

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
};
