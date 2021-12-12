const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: false,
    plugins: [new webpack.SourceMapDevToolPlugin({})],
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // 针对babel的配置
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,  // 无需对第三软件库进行转换，因为它们已经做了转换
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                // plugins: [
                //     ["transform-react-jsx", {
                //         "pragma": "React.createElement"
                //     }]
                // ]
            }
        }]
    }
}