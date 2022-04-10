const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ghpages = require('gh-pages');
ghpages.publish('dist', {
    dest: 'shelter/'
  });

module.exports = {
    entry: {
        main: "./pages/main/script.js",
        pets: "./pages/pets/script.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            template: './pages/main/index.html',
            filename: "main.html", 
            chunks:["main"],
        }),
        new HtmlWebpackPlugin({
            template: './pages/pets/index.html',
            filename: "pets.html", 
            chunks:["pets"],
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
};