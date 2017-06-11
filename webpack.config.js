const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const packageData = require("./package.json");
const env  = require('yargs').argv.env;

let entryPoint = './src/library.js';
let plugins = [];
let output = null;
let external = {

};

if (env === 'dev' || env === 'build') {
    entryPoint = './src/library.js';
    output = {
        path: path.resolve(__dirname, "./dist"),
        filename: `${packageData.name}.js`,
        libraryTarget: 'umd',
        library: 'pdspserverajax' //this will be the global variable to hook into
    };
    external.jquery = {
        commonjs: 'jquery',
        commonjs2: 'jquery',
        amd: 'jquery',
        root: '$'
    };
    external.lodash = {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
    };
    external['pd-sputil'] = {
        commonjs: 'pd-sputil',
        commonjs2: 'pd-sputil',
        amd: 'pd-sputi',
        root: 'pdspBase'
    };
}
if(env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
}
if(env === 'test') {
    entryPoint = './project_tests.js';
    output = {
        path: path.resolve(__dirname, "./tests"),
        filename: "spServerAjax_tests.js",
    };
    external['./src/library.js'] = "pdspserverajax";
    external.jquery = "jQuery";
}

module.exports = {
    entry: entryPoint,
    output: output,
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
    plugins: plugins,
    externals: external,
    devtool: 'source-map'
};

