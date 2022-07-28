const path = require('path');
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        static: './public'
    }
});
