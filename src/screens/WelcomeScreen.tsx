import { Image, StatusBar, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center spacing-y-10 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 bg-white">
      <StatusBar barStyle="light-content" />

      {/* Logo image with rings */}
      <View className=" rounded-full bg-indigo-200/20 p-10">
        <View className=" rounded-full bg-indigo-200/20 p-5">
          <Image
            source={require("../../assets/images/food-welcome-ai-1.jpeg")}
            style={{ width: 150, height: 150 }}
            className="rounded-full border-8 border-white/20"
          />
        </View>
      </View>
    </View>
  );
}
