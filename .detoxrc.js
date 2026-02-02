import type {DetoxConfig} from "detox";
const configuration:DetoxConfig = {
    testRunner: 'jest',
    runnerConfig: 'e2e/jest.config.js',
    configurations: {
      'android.emu.debug': {
        type: 'android.emulator',
        device: {
          avdName: 'Pixel_5_API_33', // must match your emulator
        },
        binaryPath:
          'android/app/build/outputs/apk/debug/app-debug.apk',
        build:
          'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      },
    },
};
  
export default configuration;