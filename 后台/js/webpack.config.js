var path = require('path');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
	entry: [//唯一入口文件
		'webpack/hot/only-dev-server',
		'./app.jsx'
	],
	output: {//输出目录
		path: path.resolve(__dirname, './dist'),//打包后的js文件存放的地方
		filename: 'bundle.js',//打包后输出的js的文件名
		publicPath: '/dist/'
	},
	module: {
		//loaders加载器
		loaders: [{
			test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
			exclude: '/node_modules/', //屏蔽不需要处理的文件（文件夹）（可选）
			loaders: ['babel-loader?presets[]=react']//loader的名称（必须）
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ProgressBarPlugin(),
		new webpack.DefinePlugin({
	  		'process.env': {
		    	'NODE_ENV': '"production"'
	  		}
		})    
	],
	devServer: {
		stats: 'errors-only'
	}	
};