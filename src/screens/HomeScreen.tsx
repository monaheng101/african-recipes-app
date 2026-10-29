import { useState } from "react";
import { ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Categories from "../components/categories";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Ethiopia");

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* Punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <View>
            <Text
              style={{ fontSize: hp("3.8%") }}
              className="font-semibold text-neutral-600"
            >
              Ready to cook
            </Text>
          </View>
          <Text
            style={{ fontSize: hp("3.8%") }}
            className="font-semibold text-neutral-600"
          >
            something
            <Text className="text-amber-400"> delicious </Text>today?
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search for recipes..."
            placeholderTextColor="gray"
            style={{ fontSize: hp("1.8%") }}
            className="flex-1 mb-1 px-4 pl-3 tracking-wide text-base"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon
              color="gray"
              size={hp("2.7%")}
              strokeWidth={2.2}
            />
          </View>
        </View>

        {/* Categories */}
        <View>
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
}
