var path = require('path');
var webpack = require('webpack');

// var ROOT_PATH = path.resolve(__dirname);
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [//唯一入口文件
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {//输出目录
        path: path.resolve(__dirname, './dist'),//打包后的js文件存放的地方
        filename: 'bundle.js',//打包后输出的js的文件名
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        },{
            test: /\.css$/,
            exclude: '/node_modules/',
            loader: 'style-loader!css-loader?sourceMap'          
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin(),
        new ExtractTextPlugin("style.css"), //提取出来的样式放在style.css文件中
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ],
    devServer: {
        stats: 'errors-only'
    }
}