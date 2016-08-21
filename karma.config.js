var webpack = require('webpack');

module.exports = function(config) {
    config.set({
 
        // base path, that will be used to resolve files and exclude
        basePath: '',
 
        // frameworks to use
        frameworks: ['jasmine'],
 
        // list of files / patterns to load in the browser
        files: [
            'tests/*.test.js'
        ],
 
        // list of files to exclude
        exclude: [
        ],

        //prepocessors
        prepocessors: {
            'tests/*.test.js' : ['webpack']
        },
        
        //webpack
        webpack:  {
            module: {
                loaders: [
                    { test: /\.css$/, loader: "style!css" },
                    {
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            presets: ['es2015', 'react']
                        }

                    }
                ]
            }
        },

        //webpack middleware
        webpackMiddlware: {
            stats: {
                colors: true
            },
            quite: true
        },

        // test results reporter to use
        reporters: ['progress'],
    
        // coverageReporter: {
        //     type: 'html',
        //     dir: 'coverage/'
        // },

        // web server port
        port: 9876,
 
        // enable / disable colors in the output (reporters and logs)
        colors: true,
 
        // level of logging
        logLevel: config.LOG_INFO,
 
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
 
        // Start these browsers
        browsers: ['PhantomJS'],
 
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
 
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-spec-reporter'),
            require('karma-phantomjs-launcher')
        ]
    });
};