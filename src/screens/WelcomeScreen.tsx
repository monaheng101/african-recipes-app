import { useRouter } from "expo-router";
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
    setTimeout(() => router.replace("/home"), 3500);
  }, [ringOnePadding, ringTwoPadding, router]);

  return (
    <View className="flex-1 items-center justify-center space-y-10 bg-amber-500">
      <StatusBar barStyle="light-content" />

      <Animated.View
        className="rounded-full bg-white/20"
        style={{ padding: ringOnePadding }}
      >
        <Animated.View
          className="rounded-full bg-white/20"
          style={{ padding: ringTwoPadding }}
        >
          <Image
            source={require("../../assets/images/food-welcome-ai-1.jpeg")}
            style={{ width: hp("18%"), height: hp("18%") }}
            className="rounded-full border-8 border-white/20"
          />
        </Animated.View>
      </Animated.View>

      <View
        className="flex items-center justify-center space-y-4"
        style={{ padding: hp("4%"), marginLeft: hp("2%") }}
      >
        <Text className="font-bold text-white" style={{ fontSize: hp("7%") }}>
          African Recipes
        </Text>
        <Text
          className="font-bold tracking-widest text-white"
          style={{ fontSize: hp("3%") }}
        >
          Discover recipes that carry the warmth, color, and soul of Africa to
          your kitchen.
        </Text>
      </View>
    </View>
  );
}
