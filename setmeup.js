module.exports = function(config) {
    this.entry = {
        index: config.Path.join(config.Webpack_DIR, 'src/assets/js/Pages/index.js'),
        vendor: config.Path.join(config.Webpack_DIR, 'src/assets/js/Pages/vendor.js'),
    };

    this.alias = {
        SassPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/scss/'),
        TemplatesPath: config.Path.resolve(config.Webpack_DIR, 'src/templates'),
        ModulesPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Modules'),
        ComponentsPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Components'),
        ConfigurationPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Configuration'),
    };

    this.copyFiles = [
        {
            to: config.Path.join(config.Webpack_DIR, 'web/', 'images/'),
            from: config.Path.join(config.Webpack_DIR, 'src/assets/images/')
        }
    ];

    this.createHtml = function() {
        return [
            new config.HtmlWebpackPlugin({
                title: 'Abhay Pai',
                inject: false,
                minify: {
                    removeComments: true,
                    useShortDoctype: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                },
                template: config.Path.join(
                    config.Webpack_DIR,
                    'src/templates/html/',
                    'templateIndex.html'
                ),
                filename: config.Path.join(
                    config.Webpack_DIR,
                    'web/',
                    'index.html'
                ),
                assets: {
                    css: [
                        './css/index.' + config.CustomTimeHash + '.css',
                        './css/vendor.' + config.CustomTimeHash + '.css'
                    ],
                    js: [
                        './js/vendor.' + config.CustomTimeHash + '.js',
                        './js/index.' + config.CustomTimeHash + '.js'
                    ]
                }
            }),
        ];
    };
}
