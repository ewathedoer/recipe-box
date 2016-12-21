module.exports = {
	entry: [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/materialize-css/dist/js/materialize.min.js',
    './js/main.js'
  ],
	output: {
		path: './src/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react']
				}
			},
			{
				test: /\.sass$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
	 ]
	}
};