const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development"; // process.env.NODE_ENV хранит ДЕВ или ПРОДАКШЕН
const isProd = !isDev;

const filename = (ext) =>
	isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, "src"), // папка
	mode: "development",
	entry: "./js/main.js", // труба .pipe
	output: {
		filename: `./js/${filename("js")}`,
		path: path.resolve(__dirname, "public"),
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			filename: "index.html",
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `./css/${filename("css")}`,
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
};
