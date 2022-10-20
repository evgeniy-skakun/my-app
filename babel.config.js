module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
        },
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx'],
          alias: {
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@providers': './src/providers',
            '@constants': './src/constants',
            '@services': './src/services',
            '@screens': './src/screens',
            '@src-types': './src/types',
            '@models': './src/models',
            '@errors': './src/errors',
            '@store': './src/store',
            '@hooks': './src/hooks',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
