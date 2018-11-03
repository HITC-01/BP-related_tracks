module.exports = {
  transform: { '.*': 'babel-jest' },
  collectCoverage: true,
  coverageReporters: [
    'json',
    'html',
    'text',
  ],
  collectCoverageFrom: [
    'client/src/components/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  setupFiles: [
    './spec/jestSetup.js',
  ],
};
