var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/app.js'
    ],
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loaders: ['react-hot', 'babel-loader'],
            },
            {
              test: /\.html$/,
              loader: 'file?name=[name].[ext]',
            },
            {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file?name=images/[name].[ext]',
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'app.js',
        path: __dirname + '/dist',
        publicPath: '/assets/'
    },
    resolve: {
        alias: {
            'eventEmitter/EventEmitter': 'wolfy87-eventemitter'
        }
    },
};
