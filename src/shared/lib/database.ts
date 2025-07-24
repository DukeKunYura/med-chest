import * as SQLite from 'expo-sqlite';

// Просто экспорт базы — без transaction
export const db = SQLite.openDatabaseSync('medcabinet.db');
