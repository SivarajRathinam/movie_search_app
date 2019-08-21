const HtmlWebpackPlugin = require("html-webpack-plugin")
	webpack = require("webpack")
	path = require("path")
	BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
	UglifyEsPlugin = require('uglify-es-webpack-plugin')

let config = {
	context:__dirname,
	entry:'./src/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:"[name].[chunkhash].js",
		chunkFilename:"[name].[chunkhash].js",
		publicPath:'/'
	},
	module:{
		rules:[
		{
			test:/\.js?/,
			exclude:/node_modules/,
			loader:"babel-loader"
		},{
			test:/\.css?/,
			use:["style-loader","css-loader"]
		},{
			test:/\.(png|j?g|svg|gif)/,
			use:['file-loader',
				{
				loader: 'image-webpack-loader',
				options: {
			       pngquant: {
			          quality: '65-90',
			          speed: 4
			        }
			      }
			}],
			
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'public/index.html'),
			filename:"index.html"
		}),
		new BundleAnalyzerPlugin(),
		new UglifyEsPlugin({
                compress:{
                    drop_console: true
                }
            }),
	],

}
if (process.env.NODE_ENV !== 'production') {
	config = {	
		context:__dirname,
		entry:'./src/index.js',
		output:{
			path:path.resolve(__dirname,'dist'),
			filename:"[name].[chunkhash].js",
			chunkFilename:"[name].[chunkhash].js",
			publicPath:'/'
		},
		module:{
			rules:[
			{
				test:/\.js?/,
				exclude:/node_modules/,
				loader:"babel-loader"
			},{
				test:/\.css?/,
				use:["style-loader","css-loader"]
			}]
		},
		devServer: {
		    progress: true,
		    historyApiFallback: true,
		},
		plugins:[
			new HtmlWebpackPlugin({
				"template":path.resolve(__dirname,'public/index.html'),
				"filename":"index.html"
			})
		]
}
}
module.exports = config;