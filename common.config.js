export const jestCommonConfig = {
  moduleNameMapper: {
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^modules/(.*)$': '<rootDir>/src/modules/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
  },
};
