import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'detox',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/init.ts'],
  testTimeout: 120000,
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json'
      }
    ]
  }
};

export default config;
