module.exports = {
	entry: './js/app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.(jpg|png)$/, loader: "url?limit=8192"},
			{test: /\.css$/, loader: 'style!css'},
			{test: /\.js[x]?$/, exclude: /node_modules/,loader: 'babel?presets[]=es2015&presets[]=react'}
		]
	}
}