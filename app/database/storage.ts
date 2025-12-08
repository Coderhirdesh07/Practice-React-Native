import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: `user-storage`,
  path: `practice-app/storage`,
  encryptionKey: 'hunter2',
  mode: 'multi-process',
  readOnly: false,
});
