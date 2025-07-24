import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';

export type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Моя Аптечка' }} />
        <Stack.Screen name="Add" component={AddScreen} options={{ title: 'Добавить лекарство' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}