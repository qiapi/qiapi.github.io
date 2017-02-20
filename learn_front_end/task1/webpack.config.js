module.exports = {
	entry:'./index.js',
	output: {
		filename:'bundle.js'
	},
	resolve: {
		extensions:[' ','.js','.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
				loader:'babel-loader',
				exclude: /node_modules/,
				query: {
					presets:['es2015','react']
				}
			}
		]
	}
}