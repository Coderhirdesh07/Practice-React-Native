import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase;

export type NewsItem = {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
};

export async function initDB() {
  db = await SQLite.openDatabaseAsync('news.db');

  await db.execAsync(`
        CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        );
    `);
}

// queries function
export async function saveDataToDatabase(title: string, content: string) {
  if (!db) throw new Error('Database not initialised');

  await db.runAsync(
    `INSERT INTO news (title,content,createdAt) VALUES(?,?,?)`,
    title,
    content,
    new Date().toISOString(),
  );
}
export async function deleteDataFromDatabase(id: number) {
  if (!db) throw new Error('Database not initialised');

  await db.runAsync(`DELETE FROM news WHERE id=?`, id);
}
// list in descending order
export async function listDataFromDatabase() {
  if (!db) throw new Error('Database not initialised');
  const result = await db.getAllAsync<NewsItem>(
    `SELECT * FROM news ORDER BY createdAt DESC`,
  );
  return result;
}
