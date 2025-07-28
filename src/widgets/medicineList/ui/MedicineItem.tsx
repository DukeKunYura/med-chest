import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableOpacity,
} from 'react-native';
import Colors from '@/shared/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

type MedicineItem = {
    id: string;
    name: string;
    expirationDate: string;
    quantity: number;
    category?: string;
};

export const MedicineItem = ({ item, onPress, onDelete }: { item: MedicineItem; onPress: () => void; onDelete: (id: string) => void }) => {
    const today = new Date().toISOString().split('T')[0];
    const isExpired = item.expirationDate < today;
    const isExpiringSoon =
      !isExpired && item.expirationDate <= new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];

    // Определяем цвета градиента
    const gradientColors: [string, string] = isExpired
        ? ['#ffdbde', '#fff0f5'] // красный → светло-красный
        : isExpiringSoon
            ? [Colors.warning, '#f9ca24'] // жёлтый → светло-жёлтый
            : ['#e0e0e0', '#ffffff']; // серый → белый

    return (
        <Pressable onPress={onPress} style={localStyles.listItem}>
            {/* Градиент на весь фон карточки */}
            <LinearGradient
                colors={gradientColors}
                style={StyleSheet.absoluteFillObject} // растягиваем на всю карточку
                start={{ x: 0, y: 0 }} // слева
                end={{ x: 1, y: 0 }}   // направо
            />

            {/* Контент поверх градиента */}
            <View style={localStyles.itemContent}>
                <Text style={localStyles.itemName} numberOfLines={1}>
                    {item.name}
                </Text>
                <Text style={localStyles.itemMeta}>
                    {item.quantity} уп.
                </Text>
                <TouchableOpacity
                    style={localStyles.deleteButton}
                    onPress={() => onDelete(item.id)}
                >
                    <Text style={localStyles.deleteButtonText}>×</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};

const localStyles = StyleSheet.create({
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
    deleteButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#ff4757',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
