const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(process.cwd(), "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/i,
               use: ["style-loader", "css-loader"]
           }
       ]
   },
   plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}