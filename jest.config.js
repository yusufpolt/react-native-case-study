module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-native-vector-icons|@react-native(-community)?)/)',
  ],
};
