import { storage } from '../database/storage';

export function setData(key: string, value: string) {
  storage.set(key, value);
}

export function getStringData(key: string, fallback = ''): string {
  const result = storage.getString(key);
  return result ?? fallback;
}
