import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/native";
import { fetchTopRated, fetchTrending, fetchUpcoming } from "../api/moviedb";

const HomeScreen = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrending();
    if(data && data.results) {
      setTrending(data.results);
    }
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcoming();
    if(data && data.results) {
      setUpcoming(data.results);
    }
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRated();
    if(data && data.results) {
      setTopRate(data.results);
    }
  };
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mx-3 mb-12">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mt-2">
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
