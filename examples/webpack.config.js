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
                test: /\.less$/,
                loader: 'style!css!less?strictMath&noIeCompat'
            }
        ]
    },

    resolve: {
        alias: {
            'demo': '../src/index'
        }
    }
};
