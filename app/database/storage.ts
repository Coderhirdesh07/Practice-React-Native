import * as SecureStore from 'expo-secure-store';

export async function setItemToStorage(key: string, value: any) {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
    console.log(`Item saved for key: ${key}`);
  } catch (error) {
    console.error(`Error saving item ${key}:`, error);
  }
}

// Retrieve value and parse
export async function retrieveItemFromStorage(key: string) {
  try {
    const item = await SecureStore.getItemAsync(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error retrieving item ${key}:`, error);
    return null;
  }
}

export async function deleteItemFromStorage(key: string) {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log(`Item deleted for key: ${key}`);
  } catch (error) {
    console.error(`Error deleting item ${key}:`, error);
  }
}
