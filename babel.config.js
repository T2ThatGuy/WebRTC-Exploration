const MODULE_RESOLVER = [
    require.resolve('babel-plugin-module-resolver'),
    {
        extensions: [
            // '.ios.js',
            // '.android.js',
            // '.ios.jsx',
            // '.android.jsx',
            // '.js',
            // '.jsx',
            // '.json',
            '.ts',
            '.tsx',
        ],
        root: ['.'],
        alias: {
            '@': './src',
            // '@components': './src/components',
        },
    },
];

module.exports = {
    plugins: [MODULE_RESOLVER],
    presets: ['module:metro-react-native-babel-preset'],
};
