import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function App() {
  const router = useRouter();

  return (
    <View className="bg-gray-200 flex-1 items-center justify-end">
      <View className="w-full h-full flex items-center justify-center">
        <Image
          source={require("../assets/images/logo-t.png")}
          className="size-60 mt-32"
        ></Image>
      </View>
      <TouchableOpacity
        className="bg-green-500 w-2/3 p-4 mb-20 rounded-full shadow shadow-black"
        onPress={() => router.navigate("/onboarding1")}
      >
        <Text className="text-white text-2xl font-semibold text-center">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
