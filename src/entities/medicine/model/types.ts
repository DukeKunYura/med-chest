export type Medicine = {
    id: number;
    name: string;
    expirationDate: string;
    quantity: number;
    category: string | null;
    notes: string | null;
};

export type NewMedicine = Omit<Medicine, 'id'>;
