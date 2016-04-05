var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './web/js/simple-food-log.js',
    output: { path: __dirname, filename: 'web/js/bundle.js' },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
};
