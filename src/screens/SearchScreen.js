import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { fetchSearchMovies, getImage342 } from "../api/moviedb";

const SearchScreen = () => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  const [result, setResult] = useState([]);

  const handleSearch = (text) => {
    fetchSearchMovies({ query: text }).then((data) => {
      setResult(data.results);
    });
  };
  return (
    <SafeAreaView className="bg-neutral-800 flex-1 ">
      <View className="ml-2 mt-4 flex-row">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={36} color="white" />
        </TouchableOpacity>

        <Text className="text-xl font-bold text-white">Search</Text>
      </View>
      <View className="border border-neutral-400 rounded-full p-4 mx-2 my-4 ">
        <TextInput
          onChangeText={handleSearch}
          placeholder="Search movies"
          placeholderTextColor={"lightgrey"}
          className="text-white text-base "
        ></TextInput>
      </View>
      {/* result */}
      {result.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-center">
            {result.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("MovieScreen", item)}
              >
                <View className="mx-2 my-2">
                  <Image
                    source={{
                      uri: getImage342(item.poster_path),
                    }}
                    style={{ width: width * 0.44, height: height * 0.3 }}
                    className="rounded-xl"
                  ></Image>
                  <Text
                    numberOfLines={1}
                    style={{ width: width * 0.44 }}
                    className=" text-white text-base mt-2"
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("../assets/pipoca.png")}
            className=" w-64 h-52"
          ></Image>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
