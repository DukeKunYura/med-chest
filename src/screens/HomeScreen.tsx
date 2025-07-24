import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
    Add: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Главная</Text>
            <Button
                title="Перейти к добавлению"
                onPress={() => navigation.navigate('Add')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
