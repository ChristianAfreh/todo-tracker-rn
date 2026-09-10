import { Pressable, View, Text } from "react-native";
import { Todo } from "../types/todo";

export interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}


export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <View className="flex-row items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-2">
            <Pressable onPress={() => onToggle(todo.id)} className="flex-row items-center flex-1">
                <View className={`w-6 h-6 rounded-full border-2 mr-3 items-center justify-center ${todo.completed ? "bg-indigo-500 border-indigo-500" : "border-gray-300"
                    }`}>
                    {todo.completed && (<Text className="text-white text-xs">✓</Text>)}
                </View>
                <Text className={
                    `text-base flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-900"}
                `
                }>
                    {todo.title}
                </Text>
            </Pressable>

            <Pressable onPress={() => onDelete(todo.id)} className="ml-3 px-2">
                <Text className="text-lg text-red-400">x</Text>
            </Pressable>
        </View>

    )

}