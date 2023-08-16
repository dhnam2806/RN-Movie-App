import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { getAvatar } from "../api/moviedb";

const Cast = ({ cast }) => {
  return (
    <View className="my-4">
      <Text className="text-white text-lg mb-4">Cast</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          cast.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="flex flex-col items-center mr-3 w-28"
              >
                <Image
                  source={{
                    uri:  getAvatar(item.profile_path),
                  }}
                  className="w-24 h-24 rounded-full"
                />

                <Text numberOfLines={2} className="text-white text-center mt-2">
                  {item.name}
                </Text>
                <Text numberOfLines={2} className="text-white text-center mt-2">
                  {item.character}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
