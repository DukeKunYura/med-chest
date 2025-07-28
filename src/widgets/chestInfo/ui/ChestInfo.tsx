import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import Colors from '@/shared/constants/Colors';

export const ChestInfo = () => {
    const infoOne = {
        name: 'Парацетамол',
        quantity: 2,
    };
    const infoTwo = {
        name: 'Анальгин',
    };

    const onPress = () => {
        console.log('onPress');
    };

    return (
        <Pressable onPress={onPress} style={localStyles.listItem}>

            <View style={localStyles.itemContent}>
                <Text style={localStyles.itemName} numberOfLines={1}>
                    {infoOne.name}
                </Text>
                <Text style={localStyles.itemMeta}>
                    {infoTwo.name}
                </Text>
            </View>
        </Pressable>
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
