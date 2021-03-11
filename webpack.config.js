const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'assets/js'),
		filename: 'script.js'
	},
    module: {
		rules: [
            {
			test:/\.(s*)css$/,
			use: [
				miniCss.loader,
				'css-loader?url=false',
				'sass-loader',
			]},
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
	},
	optimization: {
		minimizer: [
			new minify({})
		],
	},
	plugins: [
		new miniCss({
			filename: '../css/style.css',
		}),
        new CopyPlugin({
            patterns: [
                { 
                  from: path.resolve(__dirname, "./src/images"), 
                  to: path.resolve(__dirname, 'assets/images/')  
                },
            ],
          }),
	]
};