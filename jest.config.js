module.exports = {
  testRegex: 'tests/.*\\.test\\.js$',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
    '.*\\.(css|less|scss|sass)$': '<rootDir>/internals/mocks/css.js',
  },
  setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
};
