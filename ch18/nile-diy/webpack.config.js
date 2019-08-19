module.exports = {
    entry: "./jsx/app.jsx",
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
        color: true,
        reasons: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}