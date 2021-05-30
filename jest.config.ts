/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**'],
  coverageProvider: 'babel',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
