// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!<rootDir>/pages/{_app,_document,_error}.{ts,tsx}',
    '!<rootDir>/next-env.d.ts',
    '!<rootDir>/serviceWorker.js',
    '!<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@pages/(.*)': '<rootDir>/pages/$1',
    '^@api/(.*)': '<rootDir>/api/$1',
    '^@components/(.*)': '<rootDir>/components/$1',
    '^@utils/(.*)': '<rootDir>/utils/$1',
  },
};
