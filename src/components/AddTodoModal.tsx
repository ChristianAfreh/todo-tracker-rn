import { useState } from "react";
import { Modal, View, Text, TextInput, Pressable } from "react-native";


type AddTodoModalProps = {
    visible: boolean;
    onClose: () => void;
    onAdd: (title: string) => void;
};


export default function AddTodoModal({ visible, onClose, onAdd }: AddTodoModalProps) {
    const [title, setTitle] = useState("");


    const handleAdd = () => {
        const trimmed = title.trim();
        if (trimmed.length === 0) return;
        onAdd(trimmed);
        setTitle("");
        onClose();
    }

    const handleClose = () => {
        setTitle("");
        onClose();
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View className="flex-1 justify-end bg-black/40">
                <View className="bg-white round-t-2xl p-6">
                    <Text className="text-lg font-bold mb-4 text-gray-900">New Task</Text>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder="What do you need to do?"
                        placeholderClassName="text-gray-400"
                        className="border border-gray-200 rounded-xl px-4 py-3 text-base mb-4"
                        autoFocus
                        onSubmitEditing={handleAdd}
                        returnKeyType="done"
                    />
                </View>
                <View className="flex-row justify-end">
                    <Pressable onPress={handleClose} className="px-4 py-3 mr-2">
                        <Text className="text-gray-500 text-base">Cancel</Text>
                    </Pressable>
                    <Pressable
                        onPress={handleAdd}
                        className="bg-indigo-500 px-5 py-3 rounded-xl"
                    >
                        <Text className="text-white font-semibold text-base">Add</Text>
                    </Pressable>
                </View>
            </View>
        </Modal >
    );
}