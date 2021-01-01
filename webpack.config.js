const path = require("path");

const isDev = process.env.NODE_ENV === "development"; // process.env.NODE_ENV хранит ДЕВ или ПРОДАКШЕН
const isProd = !isDev;

const filename = (ext) =>
	isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, "src"), // папка
	mode: "development",
	entry: "./js/index.js", // труба .pipe
	output: {
		filename: `./js/${filename("js")}`,
		path: path.resolve(__dirname, "app"),
	},
};
