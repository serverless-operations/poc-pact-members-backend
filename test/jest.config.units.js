const TEST_TYPE = 'units'

module.exports = {
  preset: 'ts-jest',
  rootDir: '../',
  coverageDirectory: `.coverage/${TEST_TYPE}`,
  testMatch: [
    `<rootDir>/test/${TEST_TYPE}/**/*.test.ts`
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],
  moduleNameMapper: {
    '^\\~/(.+)': '<rootDir>/src/$1',
    '^\\~testing-util/(.+)': '<rootDir>/test/testing-util/$1'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/src/**/*.d.ts',
    '!**/src/api.ts'
  ]
}
