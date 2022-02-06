const path = require("path");
let exclude = [path.resolve(__dirname, "public")];

module.exports = {
    entry: "./index.tsx",
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devServer: {
        static: "../../public/",
        port: 4001,
        liveReload: true,
        hot: true,
        // watchFiles: ["index.tsx"],
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "../../public/js"),
    },
};
