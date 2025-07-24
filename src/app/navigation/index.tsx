import AddMedicinePage from '@/pages/AddMedicinePage';
import MedicineListPage from '@/pages/MedicineListPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Add: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={MedicineListPage}
                    options={{ title: 'Моя Аптечка' }}
                />
                <Stack.Screen
                    name="Add"
                    component={AddMedicinePage}
                    options={{ title: 'Добавить лекарство' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
