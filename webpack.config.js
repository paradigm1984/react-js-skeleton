var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: path.join(__dirname, '/client/index.js'),
	output: {
		path: __dirname + "/public/js",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
      exclude: /node_modules/,
			include: path.join(__dirname, '/client/'),
      loader: "babel-loader",
			query: {
      	presets: ["react", "es2015"]
    	}
		}, {
			test: /\.s?css$/,
			loaders: ["style-loader", "css-loader"],
			include: path.join(__dirname, "/public/")
		}, {
			test: /\.(png|jpg)$/,
			loader: 'file-loader'
		}
		]
	},
	devtool: "#cheap-module-inline-source-map"
};
