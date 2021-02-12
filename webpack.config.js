const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    context: __dirname,
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                } 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    devtool: "source-map",
}