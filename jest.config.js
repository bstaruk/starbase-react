module.exports = {
  testRegex: 'tests/.*\\.test\\.js$',
  moduleNameMapper: {
    '^@containers/(.*)': '<rootDir>/src/containers/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
  },
};
