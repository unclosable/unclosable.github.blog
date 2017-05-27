let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        init: './init.js'
    },
    output: {
        path: path.resolve(__dirname, "./") + "/build/",
        filename: '[name]-[hash].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            query: {
                // 兼容ES2015
                presets: ['es2015']
            }
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(jpg|png)$/,
            loader: "url-loader?limit=8192"
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        // chunks: ['limitPage', ],
        xhtml: false,
        inject: true,
        template: path.resolve(__dirname, "./") + "/index0.html",
        filename: path.resolve(__dirname, "./") + "/index.html",
    }), new CleanWebpackPlugin(['build'], {
        root: path.resolve(__dirname, "./"),
        verbose: true,
        dry: false
    })]
};
