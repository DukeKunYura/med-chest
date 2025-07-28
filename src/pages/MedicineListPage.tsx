import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '@/shared/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { MedicineList } from '@/widgets/medicineList';
import { ChestInfo } from '@/widgets/chestInfo';

export default function MedicineListPage() {
    const navigation = useNavigation();

    return (
        <View style={localStyles.container}>
            <Text style={localStyles.title}>Моя Аптечка</Text>

            <ChestInfo />

            <MedicineList />

            <LinearGradient
                colors={['transparent', Colors.background]}
                style={localStyles.gradient}
                pointerEvents="none"
            />
            <Pressable
                style={localStyles.addButton}
                onPress={() => navigation.navigate('Add' as never)}
            >
                <Text style={localStyles.addButtonText}>Добавить лекарство</Text>
            </Pressable>
        </View>
    );
}

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
