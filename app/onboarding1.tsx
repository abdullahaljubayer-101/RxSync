import { Camera } from "lucide-react-native";
import { Text, View } from "react-native";
import "../global.css";

export default function Onboarding1() {
  return (
    <View className="bg-gray-200 flex-1 items-center justify-center">
      <Text>Hello????</Text>
      <Camera color="red" size={48} />
    </View>
  );
}
