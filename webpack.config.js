"use strict";

let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');

module.exports = (env,argv)=>{
    return{
        context: __dirname,
        entry: {
            "index":[
                "./src/public/app.js"
            ]
        },
        output: {
            path: `${__dirname}/built`,
            publicPath: "/",
            filename: "./js/[name].js"
        },
        devtool: "source-map",
        module:{
            rules:[
                {
                    test: /\.less$/, 
                    use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
                },
                {
                    test:/\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use:{
                        loader:'babel-loader'
                    }
                },
                {
                    test:/\.gif|png|jpg|jpeg|svg|woff|ttf|woff2?|eot/,
                    use:[{
                        loader:"file-loader",
                        options:{
                            name:"img/[name].[ext]"
                        }
                    }]
                },
                // {
                //     test: /\.(js|jsx)$/,
                //     loader: 'eslint-loader',
                //     enforce: "pre",
                //     include: [path.resolve(__dirname, 'src/public')], // 指定检查的目录
                //     //exclude: [path.resolve(__dirname, 'src/public/frontweb/store/front'),path.resolve(__dirname, 'src/public/dashboard/store')], // 指定检查的目录
                //     options:{
                //         failOnWarning: true, // eslint报warning了就终止webpack编译
                //         failOnError: true, // eslint报error了就终止webpack编译,
                //         //formatter: require("eslint-friendly-formatter")
                //     }
                // }
            ]
        },
        resolve: {
            alias: {
                // 'vue$': 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
                // '@':path.resolve(__dirname, 'src'),
                // '@view':path.resolve(__dirname, './src/public/view')
            }
        },
        plugins: [
            new MiniCssExtractPlugin({filename:"./css/[name].css"}),
            new CopyWebpackPlugin([
                // {
                //     from:"src/config/",
                //     to:"js/"
                // },
                // {
                //     from:"src/images/static/",
                //     to:"img/"
                // },
                {
                    from:"src/index.html",
                    to:"./"
                }
            ]),
        ],
        devServer: {
            port: 10099,
            disableHostCheck: true,
            compress: false,
            contentBase: `${__dirname}/src`
        }
    }
};