import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

const Cast = ({ cast }) => {
  let personName = "Keanu Reeves";
  let characterName = "John Wick";
  return (
    <View className="my-4">
      <Text className="text-white text-lg mb-4">Cast</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cast &&
          cast.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="flex flex-col items-center mr-3 w-24"
              >
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_FMjpg_UX1000_.jpg",
                  }}
                  className="w-24 h-24 rounded-full"
                />

                <Text numberOfLines={2} className="text-white text-center mt-2">
                  {personName}
                </Text>
                <Text numberOfLines={2} className="text-white text-center mt-2">
                  {characterName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
