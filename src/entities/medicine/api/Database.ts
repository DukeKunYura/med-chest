import { Medicine, NewMedicine } from '../model/types';

import { db } from '@shared/lib/database';

export const initDatabase = () => {
    db.withTransactionSync(() => {
        db.execSync(`
      CREATE TABLE IF NOT EXISTS medicines (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        expirationDate TEXT NOT NULL,
        quantity INTEGER DEFAULT 1,
        category TEXT,
        notes TEXT
      );
    `);
    });
};

// Асинхронная загрузка
export const getAllMedicines = async (): Promise<Medicine[]> => {
    const result = await db.getAllAsync<Medicine>(
        'SELECT * FROM medicines ORDER BY expirationDate ASC'
    );
    return result;
};

// Асинхронное добавление
export const addMedicine = async (medicine: NewMedicine): Promise<void> => {
    await db.runAsync(
        'INSERT INTO medicines (name, expirationDate, quantity, category, notes) VALUES (?, ?, ?, ?, ?)',
        [
            medicine.name,
            medicine.expirationDate,
            medicine.quantity,
            medicine.category ?? null,
            medicine.notes ?? null,
        ]
    );
};
