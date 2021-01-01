const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}`

module.exports = {
	context: path.resolve(__dirname, "src"), // папка
	mode: "development",
	entry: "./src/js/index.js", // труба .pipe
	output: {
		filename: `./js/${filename("js")}`,
		path: path.resolve(__dirname, "app"),
	},
};
