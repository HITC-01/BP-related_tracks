module.exports = {
  verbose: true,
  transform: { '.*': 'babel-jest' },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/spec/*/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  setupFiles: [
    './spec/jestSetup.js',
  ],
};
