module.exports = {
    entry: './lib/index.jsx',
    output: {
        filename: 'build/browser-bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, ]
    }
};
