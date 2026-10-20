import { Image, ScrollView, StatusBar, View } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* Avatar and Bell Icon */}
        <View className="mx-4 flex-row items-center justify-between mb-2">
          <Image
            source={require("../../assets/images/session.png")}
            style={{ width: hp("5%"), height: hp("5.5%") }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
