module.exports = {
  testRegex: 'tests/.*\\.test\\.js$',
  moduleNameMapper: {
    '^@containers/(.*)': '<rootDir>/src/containers/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/css.js',
  },
  setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
};
