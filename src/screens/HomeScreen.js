import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRate, setTopRate] = useState([1, 2, 3]);
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mx-3 mb-8">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center">
          <AntDesign name="bars" size={28} color="white" />
          <Text className="text-2xl font-bold text-white">Movies</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>
            <Entypo name="magnifying-glass" size={28} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TrendingMovies data={trending} />
          <MovieList title="Up coming" data={upcoming} />
          <MovieList title="Top rate" data={topRate} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
