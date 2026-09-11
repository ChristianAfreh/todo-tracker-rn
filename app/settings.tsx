import { View, Text, Pressable, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function Settings() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <View className="px-4 pt-4">
        <View className="flex-row items-center mb-6">
          <Pressable onPress={() => router.back()} className="mr-4">
            <Ionicons name="chevron-back" size={22} color={isDark ? "#a5b4fc" : "#6366f1"} />
          </Pressable>
          <Text className="text-2xl font-bold text-gray-900 dark:text-white">Settings</Text>
        </View>

        <View className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 mb-2">
          <Text className="text-gray-900 dark:text-white text-base">Notifications</Text>
        </View>

        <View className="flex-row items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 mb-2">
          <Text className="text-gray-900 dark:text-white text-base">Dark Mode</Text>
          <Switch value={isDark} onValueChange={toggleColorScheme} />
        </View>

        <View className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3">
          <Text className="text-gray-900 dark:text-white text-base">About</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}