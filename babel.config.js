
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
    plugins: [
        '@babel/plugin-transform-runtime',
        ['module-resolver', {
            root: ['.'],
            alias: {
                assets: './dist/assets',
            },
        }],
    ],
    exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};
