const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: './main.bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}