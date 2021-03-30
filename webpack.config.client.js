const path = require("path");
const webpack = require("webpack");
const cwd = process.cwd();

const config = {
    name : "browser",
    mode: "development",
    devtool : "eval-source-map",
    entry : [
        "react-hot-loader/patch",
        "webpack-hot-middleware/client?reload=true",
        path.join(cwd, 'client/main.js')
    ],
    output: {
        path: path.join(cwd, '/dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                "babel-loader"
            ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

module.exports = config