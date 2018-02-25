const path = require('path');
const tsImportPlugin = require('ts-import-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [ tsImportPlugin({
                          libraryName: 'antd',
                          libraryDirectory: 'es',
                          style: true,
                        }) ]
                     })
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            modifyVars: {
                                '@primary-color': '#1DA57A',
                            },
                        }
                    },
                ],
            },
        ],
    },
};
