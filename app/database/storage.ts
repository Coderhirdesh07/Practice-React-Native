import { Storage } from 'expo-storage';

// Save any value (string, number, boolean, object)
export async function setItemToStorage(key: string, value: any) {
  try {
    // Always stringify before saving
    await Storage.setItem({ key, value: JSON.stringify(value) });
    console.log(`Item saved for key: ${key}`);
  } catch (error) {
    console.error(`Error saving item ${key}:`, error);
  }
}

// Retrieve value and parse
export async function retrieveItemFromStorage(key: string) {
  try {
    const item = await Storage.getItem({ key });
    if (item !== null) return JSON.parse(item);
    return null;
  } catch (error) {
    console.error(`Error retrieving item ${key}:`, error);
    return null;
  }
}

// Delete a key
export async function deleteItemFromStorage(key: string) {
  try {
    await Storage.removeItem({ key });
    console.log(`Item deleted for key: ${key}`);
  } catch (error) {
    console.error(`Error deleting item ${key}:`, error);
  }
}

// Convenience functions for boolean values
export async function setUserSignup(key: string, value: boolean) {
  return setItemToStorage(key, value);
}

export async function getUserSignup(key: string) {
  return retrieveItemFromStorage(key);
}
