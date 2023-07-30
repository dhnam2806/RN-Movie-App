import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getImage342 } from "../api/moviedb";

const MovieList = ({ title, data, hidedSeeAll }) => {
  const movieTitle = "John Wick";
  const navigation = useNavigation();
  return (
    <View className="my-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-white text-lg">{title}</Text>
        {!hidedSeeAll && (
          <TouchableOpacity>
            <Text className=" text-gray-400 text-base">See all</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data &&
          data.map((item) => (
            <TouchableWithoutFeedback
              key={item.id}
              onPress={() => navigation.navigate("MovieScreen", item)}
            >
              <View className="mr-3">
                <Image
                  source={{
                    uri: getImage342(item?.poster_path),
                  }}
                  className="w-40 h-60 rounded-xl"
                ></Image>
                <Text
                  numberOfLines={1}
                  className="w-40 text-white text-base mt-2 ml-1"
                >
                  {item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
