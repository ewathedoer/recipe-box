module.exports = {
	entry: [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/materialize-css/dist/js/materialize.min.js',
    './src/js/main.js'
  ],
	output: {
		path: './dist/js',
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
				//loader: 'style-loader!css-loader!sass-loader'
                loaders: ['style', 'css', 'sass']
			}
	 ]
	}
};