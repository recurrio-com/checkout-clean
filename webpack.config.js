const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 3010,
        static: "./",
    },
    module: {
        rules: [
            {
                test:  /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};