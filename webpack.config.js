var webpack = require('webpack');
global.Promise = require('bluebird');

module.exports = {
    entry: "./src/main.js",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' )
            }
        })
    ],

    output: {
        path: __dirname + '/public/',
        filename: "main.js",
        publicPath: ""
    },

    module: {
        noParse: [/autoit.js/],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
            { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
            { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },
            { test: /\.jsx$/, loader: "react-hot!babel!eslint-loader", exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: "babel!eslint-loader", exclude: [/node_modules/, /public/] },
            { test: /\.json$/, loader: "json-loader"}
        ]
    },

    eslint: {
        configFile: '.eslintrc'
    },

    devServer: {
        historyApiFallback: true
    }
};
