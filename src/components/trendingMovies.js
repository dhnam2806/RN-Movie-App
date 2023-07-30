import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getImage } from "../api/moviedb";

var { width, height } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("MovieScreen", item);
  };
  return (
    <View className="my-4">
      <Text className="text-white text-lg mb-4">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={0}
        sliderWidth={width}
        itemWidth={width * 0.72}
        slideStyle={{
          display: "flex",
          alignItems: "center",
        }}
      ></Carousel>
    </View>
  );
};

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <Image
        source={{
          uri: getImage(item.poster_path),
        }}
        style={{
          width: width * 0.72,
          height: height * 0.52,
          objectFit: "cover",
        }}
        className="rounded-xl"
      />
    </TouchableOpacity>
  );
};

export default TrendingMovies;
