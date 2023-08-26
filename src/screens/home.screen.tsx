import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { HomeStackNavigationParamList } from "../navigation/homeStackNavigation";

import Tasks from '../mocks/tasks.json';
import { useState } from "react";

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigationParamList, 'Home'>
export type HomeScreenRouteProp = RouteProp<HomeStackNavigationParamList, 'Home'>

type HomeScreenProperties = {}

const HomeScreenStyles = StyleSheet.create({
    component: {
        backgroundColor: "#eee",
        flex: 1,
    },
    welcomeWrapper: {
        backgroundColor: "white",
        marginHorizontal: 30,
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 15,
        padding: 30,
    },
    welcomeWrapperInfo: {
        marginRight: 'auto',
    },
    welcomeTitle: {
        fontWeight: '700',
        marginBottom: 10,
        fontSize: 25,
    },
    welcomeAvatar: {
        borderRadius: 10,
        height: 60,
        width: 60,
    },
    taskList: {
        paddingHorizontal: 30,
    },
    taskItem: {
        borderRadius: 10,
        padding: 30,
        backgroundColor: "white",
        marginBottom: 10
    },
    taskItemTitle: {
        fontWeight: '700',
        marginBottom: 10,
        fontSize: 15,
    }
})

export function HomeScreen({ }: HomeScreenProperties): JSX.Element {

    const navigation = useNavigation<HomeScreenNavigationProp>();
    // const { params } = useRoute<HomeScreenRouteProp>();

    const onPressTaskItem = (task: typeof tasks[number]) => {
        navigation.navigate('TaskDetail', { task });
    }

    const [tasks, setTasks] = useState(Tasks)

    return (
        <SafeAreaView style={HomeScreenStyles.component}>
            <View style={HomeScreenStyles.welcomeWrapper}>
                <View style={HomeScreenStyles.welcomeWrapperInfo}>
                    <Text style={HomeScreenStyles.welcomeTitle}>My tasks</Text>
                    <Text>{tasks.length} tasks for today</Text>
                </View>
                <Image
                    source={require('../../assets/avatars/myAvatar.png')}
                    style={HomeScreenStyles.welcomeAvatar}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={HomeScreenStyles.taskList}>
                {
                    tasks.map((task) => (
                        <Pressable
                            onPress={() => onPressTaskItem(task)}
                            style={HomeScreenStyles.taskItem}
                            key={task.id}
                        >
                            <Text style={HomeScreenStyles.taskItemTitle}>{task.name}</Text>
                            <Text>{task.description}</Text>
                        </Pressable>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}
