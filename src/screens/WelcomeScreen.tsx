import { useRouter, type Href } from "expo-router";
import { useEffect } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function WelcomeScreen() {
  const router = useRouter();
  const ringOnePadding = useSharedValue(0);
  const ringTwoPadding = useSharedValue(0);

  useEffect(() => {
    ringOnePadding.value = 0;
    ringTwoPadding.value = 0;
    setTimeout(
      () =>
        (ringOnePadding.value = withSpring(ringOnePadding.value + hp("6%"))),
      100,
    );
    setTimeout(
      () =>
        (ringTwoPadding.value = withSpring(ringTwoPadding.value + hp("5%"))),
      100,
    );
    setTimeout(() => router.replace("/home" as Href), 3000);
  }, [ringOnePadding, ringTwoPadding, router]);

  return (
    <View className="flex-1 items-center justify-center space-y-10 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 bg-white">
      <StatusBar barStyle="dark-content" />

      <Animated.View
        className="rounded-full bg-indigo-200/20"
        style={{ padding: ringOnePadding }}
      >
        <Animated.View
          className="rounded-full bg-indigo-200/20"
          style={{ padding: ringTwoPadding }}
        >
          <Image
            source={require("../../assets/images/food-welcome-ai-1.jpeg")}
            style={{ width: hp("20%"), height: hp("20%") }}
            className="rounded-full border-8 border-white/20"
          />
        </Animated.View>
      </Animated.View>

      <View
        className="flex items-center space-y-2"
        style={{ padding: hp("4%") }}
      >
        <Text
          className="font-bold tracking-widest text-zinc-900"
          style={{ fontSize: hp("7%") }}
        >
          African Recipes
        </Text>
        <Text
          className="font-bold tracking-widest text-zinc-700"
          style={{ fontSize: hp("2%") }}
        >
          Discover the delicious flavors of traditional African cuisine
        </Text>
      </View>
    </View>
  );
}
