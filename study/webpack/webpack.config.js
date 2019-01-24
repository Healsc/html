const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        compress:true,
        port:'8081',
        host:true,
        open:true
    }  
}