import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddMedicinePage() {
    const [name, setName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigation = useNavigation();

    const save = () => {
        if (!name.trim()) {
            Alert.alert('Ошибка', 'Введите название');
            return;
        }
        if (!expirationDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
            Alert.alert('Ошибка', 'Введите дату в формате ГГГГ-ММ-ДД');
            return;
        }

        // Пока просто показываем успех
        Alert.alert('Готово', `"${name}" добавлен!`, [
            { text: 'ОК', onPress: () => navigation.goBack() },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Название*</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Парацетамол"
            />

            <Text style={styles.label}>Срок годности* (ГГГГ-ММ-ДД)</Text>
            <TextInput
                style={styles.input}
                value={expirationDate}
                onChangeText={setExpirationDate}
                placeholder="2025-12-31"
            />

            <Text style={styles.label}>Количество упаковок</Text>
            <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={setQuantity}
                placeholder="1"
                keyboardType="numeric"
            />

            <Button title="Сохранить" onPress={save} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },
});
