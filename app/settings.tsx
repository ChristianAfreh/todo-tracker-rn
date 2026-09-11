import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 pt-4">
        <View className="flex-row items-center mb-6">
          <Pressable onPress={() => router.back()} className="mr-4">
            <Text className="text-indigo-500 text-base">← Back</Text>
          </Pressable>
          <Text className="text-2xl font-bold text-gray-900">Settings</Text>
        </View>

        <View className="bg-gray-50 rounded-xl px-4 py-3 mb-2">
          <Text className="text-gray-900 text-base">Notifications</Text>
        </View>
        <View className="bg-gray-50 rounded-xl px-4 py-3 mb-2">
          <Text className="text-gray-900 text-base">Appearance</Text>
        </View>
        <View className="bg-gray-50 rounded-xl px-4 py-3">
          <Text className="text-gray-900 text-base">About</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}