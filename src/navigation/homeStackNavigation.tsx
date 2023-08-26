import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/home.screen';

export type HomeStackNavigationParamList = {
    Home: undefined
};

const HomeStack = createNativeStackNavigator<HomeStackNavigationParamList>();

export function HomeStackNavigation(): JSX.Element {
    return (
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <HomeStack.Screen name='Home' component={HomeScreen} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
} 