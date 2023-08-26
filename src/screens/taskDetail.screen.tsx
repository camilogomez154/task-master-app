import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { HomeStackNavigationParamList } from "../navigation/homeStackNavigation";
import { useEffect } from "react";

export type TaskDetailScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigationParamList, 'TaskDetail'>
export type TaskDetailScreenRouteProp = RouteProp<HomeStackNavigationParamList, 'TaskDetail'>

type TaskDetailScreenProperties = {}

const TaskDetailScreenStyles = StyleSheet.create({
    component: {
        backgroundColor: "#eee",
        padding: 30,
        flex: 1,
    },
    closeWrapper: {
        flexDirection: 'row-reverse',
        padding: 30,
    },
    closeButton: {
        backgroundColor: "#222",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
    },
    closeButtonText: {
        fontWeight: '800',
        color: 'white',
    },
    taskWrapper: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderRadius: 10,
        marginBottom: 15,
        padding: 30,
    },
    taskTitle: {
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 25,
    },
    taskDescription: {
        marginBottom: 15
    },
    taskStatus: {
        fontWeight: '800'
    },
    acceptanceCriteriaWrapper: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderRadius: 10,
        marginBottom: 15,
        padding: 30,
    },
    acceptanceCriteriaTitle: {
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 25,
    }
})

export function TaskDetailScreen({ }: TaskDetailScreenProperties): JSX.Element {

    const navigation = useNavigation<TaskDetailScreenNavigationProp>();
    const { params } = useRoute<TaskDetailScreenRouteProp>();

    const onPressCloseBotton = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={TaskDetailScreenStyles.component}>

            <View style={TaskDetailScreenStyles.closeWrapper}>
                <Pressable
                    style={TaskDetailScreenStyles.closeButton}
                    onPress={onPressCloseBotton}
                >
                    <Text style={TaskDetailScreenStyles.closeButtonText}>Close</Text>
                </Pressable>
            </View>

            <View style={TaskDetailScreenStyles.taskWrapper}>
                <Text style={TaskDetailScreenStyles.taskTitle}>{params.task.name}</Text>
                <Text style={TaskDetailScreenStyles.taskDescription}>{params.task.description}</Text>
                <Text style={TaskDetailScreenStyles.taskStatus}>{params.task.status}</Text>
            </View>

            {
                params.task.acceptanceCriteria &&
                <View style={TaskDetailScreenStyles.acceptanceCriteriaWrapper}>
                    <Text style={TaskDetailScreenStyles.acceptanceCriteriaTitle}>
                        Acceptance criteria
                    </Text>
                    {
                        params.task.acceptanceCriteria.map((criteria, index) => (
                            <Text key={index}>{criteria}</Text>
                        ))
                    }
                </View>
            }

            {
                params.task.responsibles &&
                <View style={TaskDetailScreenStyles.acceptanceCriteriaWrapper}>
                    <Text style={TaskDetailScreenStyles.acceptanceCriteriaTitle}>
                        Responsibles
                    </Text>
                    {
                        params.task.responsibles.map((criteria, index) => (
                            <Text key={index}>{criteria}</Text>
                        ))
                    }
                </View>
            }

        </SafeAreaView>
    );
}
