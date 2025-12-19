import * as SQLite from 'expo-sqlite';
import { ArticleOffline } from '../constants/data';

let db: SQLite.SQLiteDatabase;

export async function initDB() {
  db = await SQLite.openDatabaseAsync('news.db');

  await db.execAsync(`
        CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT NOT NULL,
        content TEXT NOT NULL,
        description TEXT NOT NULL,
        publishedAt: TEXT NOT NULL,
        title: TEXT NOT NULL,
        url: TEXT NOT NULL,
        urlToImage: TEXT NOT NULL,
        );
  `);
}

// queries function
// author: string,content: string,description: string,publishedAt: string,title: string,url: string,urlToImage: string
export async function saveDataToDatabase(data: ArticleOffline) {
  if (!db) throw new Error('Database not initialised');

  await db.runAsync(
    `INSERT INTO news (author,content,description,publishedAt,title,url,urlToImage) VALUES(?,?,?,?,?,?,?)`,
    data.author,
    data.content,
    data.description,
    data.publishedAt,
    data.title,
    data.url,
    data.urlToImage,
  );
}
export async function deleteDataFromDatabase(id: number) {
  if (!db) throw new Error('Database not initialised');

  await db.runAsync(`DELETE FROM news WHERE id=?`, id);
}
// list in descending order
export async function listDataFromDatabase() {
  if (!db) throw new Error('Database not initialised');
  const result = await db.getAllAsync<ArticleOffline>(
    `SELECT * FROM news ORDER BY createdAt DESC`,
  );
  return result;
}
