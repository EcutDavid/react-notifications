module.exports = {
    devtool: 'inline-source-map',
    entry: './examples/app',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass!postcss'
            }
        ]
    },
    resolve: {
        alias: {
            'demo': '../src/index'
        }
    },
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer')
        ]
    }
};
