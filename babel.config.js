module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@modules': './src/modules',
          '@core': './src/core',
          '@infra': './src/infra',
          '@data': './src/data',
        },
      },
    ],
  ],
};
