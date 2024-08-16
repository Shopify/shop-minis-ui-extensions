module.exports = () => ({
  preset: 'react-native',
  transformIgnorePatterns: [
    `${'node_modules/(?!'}${[
      '(jest-)?react-native',
      '@react-native',
      '@react-native-community',
      '@react-navigation',
      '@react-native-video',
      'react-native-reanimated',
      '@shopify/shop-minis-platform-sdk',
    ].join('|')})`,
  ],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__mocks__/empty-svg-module.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/config/setupJest.ts',
  ],
})
