module.exports = {
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['./node_modules/'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/components$1'
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  }
}
