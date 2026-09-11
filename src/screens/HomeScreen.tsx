import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoItem from "../components/TodoItem";
import AddTodoModal from "../components/AddTodoModal";
import { loadTodos, saveTodos } from "../storage/todoStorage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);


    // Load todos once, when the screen first mounts
    useEffect(() => {
        (async () => {
            const stored = await loadTodos();
            setTodos(stored);
            setLoading(false);
        })();
    }, []);

    // Save todos every time the list changes (but skip the very first render)
    useEffect(() => {
        if (!loading) {
            saveTodos(todos);
        }
    }, [todos, loading]);


    const handleToggle = (id: string) => {
        // Implement toggle logic here
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );

    }

    const handleDelete = (id: string) => {
        const todo = todos.find((t) => t.id === id);
        Alert.alert(
            "Delete task?",
            todo ? `"${todo.title}" will be removed.` : "This task will be removed.",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        setTodos((prev) => prev.filter((t) => t.id !== id));
                    },
                },
            ]
        );
    };

    const handleAdd = (title: string) => {
        // Implement add logic here
        const newTodo: Todo = {
            id: Date.now().toString(),
            title,
            completed: false,
            createdAt: Date.now(),
        };
        setTodos((prev) => [newTodo, ...prev]);

    }


    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 px-4 pt-4">
                <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-2xl font-bold text-gray-900">My Tasks</Text>
                    <Pressable onPress={() => router.push("/settings")}>
                        <Ionicons name="settings-outline" size={24} color="#374151" />
                    </Pressable>
                </View>
                {todos.length === 0 ? (
                    <View className="flex-1 items-center justify-center px-8">
                        <Text className="text-6xl mb-4">📝</Text>
                        <Text className="text-gray-900 text-lg font-semibold mb-1">
                            No tasks yet
                        </Text>
                        <Text className="text-gray-400 text-base text-center">
                            Tap the + button below to add your first task
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        data={todos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TodoItem
                                todo={item}
                                onToggle={handleToggle}
                                onDelete={handleDelete}
                            />
                        )}
                    />
                )}
            </View>

            <Pressable onPress={() => setModalVisible(true)} className="absolute bottom-8 right-6 bg-indigo-500 w-14 h-14 rounded-full items-center justify-center shadow-lg"   >
                <Ionicons name="add" size={32} color="white" />
            </Pressable>

            <AddTodoModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onAdd={handleAdd}
            />
        </SafeAreaView>
    );
}