const path = require('path');
const webpack = require('webpack');
const packageData = require("./package.json");
const env  = require('yargs').argv.env;

let entryPoint = './src/library.js';
let plugins = [];
let output = null;
let external = {};

if (env === 'dev' || env === 'build') {
    entryPoint = './src/library.js';
    output = {
        path: path.resolve(__dirname, "./dist"),
        filename: `${packageData.name}.js`,
        libraryTarget: 'umd',
        library: 'pdspserverajax' //this will be the global variable to hook into
    };
    external.axios = {
        commonjs: 'axios',
        commonjs2: 'axios',
        amd: 'axios',
        root: 'axios'
    };
    external['pd-sputil'] = {
        commonjs: 'pd-sputil',
        commonjs2: 'pd-sputil',
        amd: 'pd-sputil',
        root: 'pdsputil'
    };
}
if(env === 'build') {
    output.filename = `${packageData.name}.min.js`;
    let UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();
    let envTrigger = new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    });
    plugins.push(envTrigger, UglifyJsPlugin);
}
if(env === 'test') {
    entryPoint = './project_tests.js';
    output = {
        path: path.resolve(__dirname, "./tests"),
        filename: "spServerAjax_tests.js",
    };
}

module.exports = {
    entry: entryPoint,
    output: output,
    module:{
        rules:[
            {  
                test: /\.js$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                             ['es2015', {modules: false}]
                        ]
                    }
                }
            }
        ]
    },
    plugins: plugins,
    externals: external,
    //devtool: 'source-map'
};

