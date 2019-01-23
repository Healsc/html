const path = require('path');
const webpack = require("webpack");
module.exports = {
    mode:'development',
    entry:{
        'index':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    }


  /*   module:{

    }, */


    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({
          minify:{
            removeAttributeQuotes:true,
            collapseWhitespace:false
          },
          hash:true,
          template:"./src/index.html"
        }),
        new ExtractTextPlugin("./css/main.css"),
      ],

    deServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //服务端口号
        port:8081,
        hot:true
    }
    
}