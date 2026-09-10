import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../types/todo";



const STORAGE_KEY = "@todo_tracker_todos";



// Load todos from AsyncStorage
export async function loadTodos(): Promise<Todo[]> {
    try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        return json ? JSON.parse(json) : [];
    } catch (error) {
        console.error("Failed to load todos from storage", error);
        return [];
    }
}


// Save todos to AsyncStorage
export async function saveTodos(todos: Todo[]): Promise<void> {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
        console.error("Failed to save todos to storage", error);
    }
}