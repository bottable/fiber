module.exports = {
  preset: 'ts-jest',
  roots: ['src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['./node_modules/'],
  setupFilesAfterEnv: [require.resolve('./test/jest.setup.ts')],
  moduleNameMapper: {
    'test/(.*)': '<rootDir>/test/$1'
    // '^@components(.*)$': '<rootDir>/src/components$1',
    // '^@constants(.*)$': '<rootDir>/src/constants$1'
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  }
}
