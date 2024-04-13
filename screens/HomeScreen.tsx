import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Camera } from "lucide-react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">Tuon</Text>
      <Text>wtf</Text>
      <View className="border-1 border-black-200">
        <Camera color="#000000" size={48} strokeWidth={1} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
