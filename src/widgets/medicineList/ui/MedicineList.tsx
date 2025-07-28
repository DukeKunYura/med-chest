import React, { useState } from 'react';
import {
    Text,
    FlatList,
    StyleSheet,
    Alert,
} from 'react-native';
import Colors from '@/shared/constants/Colors';
import { MedicineItem } from './MedicineItem';

// Мок-данные
const mockMedicines = [
    { id: '1', name: 'Парацетамол', expirationDate: '2025-03-15', quantity: 2, category: 'Анальгетики' },
    { id: '2', name: 'Анальгин', expirationDate: '2024-11-30', quantity: 1, category: 'Анальгетики' },
    { id: '3', name: 'Витамин C', expirationDate: '2026-01-10', quantity: 5 },
    { id: '4', name: 'Но-шпа', expirationDate: '2024-05-10', quantity: 1, category: 'Спазмолитики' },
    { id: '5', name: 'Парацетамол', expirationDate: '2025-03-15', quantity: 2, category: 'Анальгетики' },
    { id: '6', name: 'Анальгин', expirationDate: '2024-11-30', quantity: 1, category: 'Анальгетики' },
    { id: '7', name: 'Витамин C', expirationDate: '2026-01-10', quantity: 5 },
    { id: '8', name: 'Но-шпа', expirationDate: '2024-05-10', quantity: 1, category: 'Спазмолитики' },
    { id: '9', name: 'Парацетамол', expirationDate: '2025-03-15', quantity: 2, category: 'Анальгетики' },
    { id: '10', name: 'Анальгин', expirationDate: '2024-11-30', quantity: 1, category: 'Анальгетики' },
    { id: '11', name: 'Витамин C', expirationDate: '2026-01-10', quantity: 5 },
    { id: '12', name: 'Но-шпа', expirationDate: '2024-05-10', quantity: 1, category: 'Спазмолитики' },
    { id: '13', name: 'Парацетамол', expirationDate: '2025-03-15', quantity: 2, category: 'Анальгетики' },
    { id: '14', name: 'Анальгин', expirationDate: '2024-11-30', quantity: 1, category: 'Анальгетики' },
    { id: '15', name: 'Витамин C', expirationDate: '2026-01-10', quantity: 5 },
    { id: '16', name: 'Но-шпа', expirationDate: '2024-05-10', quantity: 1, category: 'Спазмолитики' },
];

export const MedicineList = () => {
    const [medicines, setMedicines] = useState(mockMedicines);

    const handleDelete = (id: string) => {
        Alert.alert(
            'Удалить?',
            'Вы уверены, что хотите удалить это лекарство?',
            [
                { text: 'Отмена', style: 'cancel' },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => setMedicines(medicines.filter((m) => m.id !== id)),
                },
            ]
        );
    };

    return (

        <FlatList
            data={medicines}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <MedicineItem
                    item={item}
                    onPress={() => {
                        Alert.alert('Подробнее', `${item.name}\nСрок: ${item.expirationDate}`);
                    }}
                />
            )}
            contentContainerStyle={localStyles.list}
            ListEmptyComponent={
                <Text style={localStyles.empty}>Аптечка пуста. Добавьте первое лекарство.</Text>
            }
        />

    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        textAlign: 'center',
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginBottom: 12,
        gap: 12,
    },
    horizontalPadding: {
        // ❌ УДАЛЯЕМ paddingHorizontal отсюда
        // Оно больше не нужно
    },
    list: {
        // contentContainerStyle — теперь без внешних отступов
    },
    empty: {
        textAlign: 'center',
        color: Colors.textSecondary,
        marginTop: 20,
        fontStyle: 'italic',
    },
    listItem: {
        flexDirection: 'row',
        height: 56,
        borderRadius: 8,
        marginBottom: 8,
        overflow: 'hidden', // обрезаем градиент по углам
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        marginHorizontal: 16,
        position: 'relative', // обязательно для absoluteFillObject
        backgroundColor: 'transparent', // фон задаётся градиентом
    },
    statusIndicator: {
        width: 200,
        alignSelf: 'stretch',
    },
    itemContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // ✅ Убираем paddingHorizontal отсюда, он теперь в listItem
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.text,
        flex: 1,
    },
    itemMeta: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginLeft: 16,
        fontWeight: '500',
    },
    addButton: {
        position: 'absolute',
        bottom: 52,
        left: 16,
        right: 16,
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        zIndex: 3,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        zIndex: 2,
    },
});
