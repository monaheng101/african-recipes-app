import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { categoryData } from "../constants";

type CategoriesProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export default function Categories({
  activeCategory,
  setActiveCategory,
}: CategoriesProps) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((category) => {
          const isActive = category.name === activeCategory;
          return (
            <TouchableOpacity
              key={category.name}
              onPress={() => setActiveCategory(category.name)}
              className={"flex items-center space-y-1"}
            >
              <View
                style={{ borderRadius: hp("6%") / 2 + 8 }}
                className={`rounded-full p-[6px] ${
                  isActive
                    ? "border-2 border-amber-400"
                    : "border-2 border-transparent"
                }`}
              >
                <Image
                  source={{ uri: category.image }}
                  style={{ width: hp("6%"), height: hp("6%") }}
                  className="rounded-full"
                />
              </View>
              <Text
                className=" text-neutral-600"
                style={{ fontSize: hp("1.6%") }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
