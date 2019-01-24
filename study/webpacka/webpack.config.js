const path = require('path');
const webpack = require("webpack");
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
    },


    module:{

    },


    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        })
      ],

    deServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:'8081',
        hot:true
    }
    
}