const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const packageData = require("./package.json");
const env  = require('yargs').argv.env;

let entryPoint = './src/library.js';
let plugins = [];
let output = null;
let external = {
    jquery: {
        commonjs: 'jquery',
        commonjs2: 'jquery',
        amd: 'jquery',
        root: '$'
    },
    'pd-sputil': {
        commonjs: 'pd-sputil',
        commonjs2: 'pd-sputil',
        amd: 'pd-sputil',
        root: 'pdsputil'
    }
};

if (env === 'dev' || env === 'build') {
    entryPoint = './src/library.js';
    output = {
        path: path.resolve(__dirname, "./dist"),
        filename: `${packageData.name}.js`,
        libraryTarget: 'umd',
        library: 'pdspserverajax' //this will be the global variable to hook into
    };
}
if(env === 'build') {
    output.filename = `${packageData.name}.min.js`;
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
    devtool: 'source-map'
};

