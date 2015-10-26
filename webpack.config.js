module.exports = {
    context: __dirname + '/app',
    entry: {
        js: './app.js',
        html: './index.html',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
              test: /\.html$/,
              loader: 'file?name=[name].[ext]',
            },
            {
              test: /\.jpg$/,
              loader: 'file?name=images/[name].[ext]',
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loaders: ['react-hot', 'babel-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/dist',
    }
};
