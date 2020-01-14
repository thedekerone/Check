const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode    : 'development',
	output  : {
		path : path.resolve(__dirname, 'public')
	},
	plugins : [
		new HtmlWebpackPlugin({ template: 'src/index.html' })
	],
	module  : {
		rules : [
			{
				test    : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use     : {
					loader : 'babel-loader'
				}
			},
			{
				test : /\.(png|jpg|gif|svg)$/i,
				use  : [
					{
						loader  : 'url-loader',
						options : {
							fallback : require.resolve('responsive-loader')
						}
					}
				]
			}
		]
	}
};
