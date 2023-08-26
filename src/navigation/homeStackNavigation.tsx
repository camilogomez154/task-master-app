import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import { TaskDetailScreen } from '../screens/taskDetail.screen';
import { HomeScreen } from '../screens/home.screen';

import Tasks from '../mocks/tasks.json'

export type HomeStackNavigationParamList = {
    Home: undefined
    TaskDetail: {
        task: typeof Tasks[number]
    }
};

const HomeStack = createNativeStackNavigator<HomeStackNavigationParamList>();

export function HomeStackNavigation(): JSX.Element {
    return (
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <HomeStack.Screen
                    component={HomeScreen}
                    name='Home'
                />
                <HomeStack.Screen
                    options={{ presentation: 'modal' }}
                    component={TaskDetailScreen}
                    name='TaskDetail'
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
} 