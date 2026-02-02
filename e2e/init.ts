import detox from "detox";
import configuration from './jest.config';

beforeAll(async () => {
  await detox.init(configuration);
}, 300000);

afterAll(async () => {
  await detox.cleanup();
});
