import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { HomeStackNavigationParamList } from "../navigation/homeStackNavigation";

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigationParamList, 'Home'>
export type HomeScreenRouteProp = RouteProp<HomeStackNavigationParamList, 'Home'>

type HomeScreenProperties = {}

const HomeScreenStyles = StyleSheet.create({
    component: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
})

export function HomeScreen({ }: HomeScreenProperties): JSX.Element {

    const { navigate } = useNavigation<HomeScreenNavigationProp>();
    const { params } = useRoute<HomeScreenRouteProp>();

    return (
        <View style={HomeScreenStyles.component}>
            <Text>Welcome, home Screen</Text>
        </View>
    );
}
