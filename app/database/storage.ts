import { Storage } from 'expo-storage';

export async function setItemToStorage(key: string, value: string) {
  try {
    await Storage.setItem({ key, value });
    console.log('item saved');
  } catch (error) {
    console.log(error);
  }
}

export async function deleteItemFromStorage(key: string) {
  try {
    await Storage.removeItem({ key });
  } catch (error) {
    console.log(error);
  }
}
export async function retrieveItemFromStorage(key: string) {
  try {
    const item = await Storage.getItem({ key });
    if (item !== null) {
      const parsedItem = JSON.parse(item);
      return parsedItem;
    } else return null;
  } catch (error) {
    console.log(error);
  }
}
