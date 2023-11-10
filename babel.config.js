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
            '@ui': './src/components/ui',
            '@components': './src/components',
        },
    },
];

const DOTENV = [
    'module:react-native-dotenv',
    {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
    },
];

module.exports = {
    plugins: [MODULE_RESOLVER, DOTENV],
    presets: ['module:metro-react-native-babel-preset'],
};
