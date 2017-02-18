/**
 * Created by jibin on 17/2/13.
 */

module.exports = {

    entry: [
        "./src/entry.js" //entry
    ],
    output: {
        path: "./out/",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' //style-loader原理？？
            }
        ]
    }

};
