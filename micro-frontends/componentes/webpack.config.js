const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "pcdf",
		projectName: "componentes",
		webpackConfigEnv,
		argv,
	});

	return merge(defaultConfig, {
		plugins: [
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
			}),
		],
		module: {
			rules: [
				{
					test: /\.less$/i,
					use: [
						// compiles Less to CSS
						{
							loader: "style-loader",
						},
						{
							loader: "css-loader",
						},
						{
							loader: "less-loader",
							options: {
								lessOptions: {
									javascriptEnabled: true,
								},
								modifyVars: {
									"@primary-color": "#bea55a",
								},
							},
						},
					],
				},
			],
		},
		// modify the webpack config however you'd like to by adding to this object
	});
};
