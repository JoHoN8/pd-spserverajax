const path = require('path');
const packageData = require("./package.json");
module.exports = {
    entry: './src/library.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: `${packageData.name}.js`,
        libraryTarget: 'umd',
        library: 'pdspserverajax' //this will be the global variable to hook into
    },
    module:{
        rules:[
            {  
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    externals: {
        "jquery": {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'
        },
        "lodash": {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        },
        "pd-sputil": {
            commonjs: 'pd-sputil',
            commonjs2: 'pd-sputil',
            amd: 'pd-sputi',
            root: 'pdspBase'
        }
    },
    devtool: 'source-map'
};

