const webpack = require('webpack')

module.exports = {
    entry: [        
        './jsx/app.jsx'
    ],
    output: {
        publicPath: 'js/',
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            // { test: /\.jsx$/, exclude: /(node_modules)/, loaders: ['react-hot-loader', 'babel-loader']}
        ]
    }
}