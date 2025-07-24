import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

type RootStackParamList = {
    Home: undefined;
    Add: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export default function MedicineListPage() {
    const { t } = useTranslation();
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('app.title')}</Text>
            <Text>{t('app.welcome')}</Text>
            <Button
                title={t('buttons.add')}
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
