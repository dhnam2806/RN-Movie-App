import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import {
  getImage,
  fetchMovieCast,
  fetchMovieDetail,
  fetchMovieSimilar,
  getOriginal,
} from "../api/moviedb";

var { width, height } = Dimensions.get("window");

const MovieScreen = () => {
  const { params: item } = useRoute();
  const [favorite, setFavorite] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {}, [item]);
  let movieTitle = "John Wick Chaper1: Cậu bé bút chì và những người bạn";
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    getMovieDetail(item.id);
    getMovieCast(item.id);
    getMovieSimilar(item.id);
  }, [item]);

  const getMovieDetail = async (id) => {
    const data = await fetchMovieDetail(id);
    if (data) {
      setMovie(data);
    }
  };

  const getMovieCast = async (id) => {
    const data = await fetchMovieCast(id);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };

  const getMovieSimilar = async (id) => {
    const data = await fetchMovieSimilar(id);
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-800"
    >
      <ImageBackground
        source={{
          uri: getImage(movie.poster_path),
        }}
        style={{ width: width, height: height * 0.6 }}
      >
        <LinearGradient
          colors={["transparent", "rgba(38,38,38,0.6)", "rgba(38,38,38,1)"]}
          style={{
            width: width,
            height: height * 0.2,
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        />
        <SafeAreaView className="flex-row justify-between items-center ml-2 mr-4 mt-2">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFavorite(!favorite);
            }}
          >
            {favorite ? (
              <Octicons name="heart-fill" size={24} color="white" />
            ) : (
              <Octicons name="heart" size={24} color="white" />
            )}
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
      <View className="px-2">
        <Text className="text-white text-center text-2xl font-bold mt-4">
          {movie.title}
        </Text>

        <View className="flex-row self-center my-4">
          <Octicons name="star-fill" size={24} color="yellow" />
          <Octicons name="star-fill" size={24} color="yellow" />
          <Octicons name="star-fill" size={24} color="yellow" />
          <Octicons name="star-fill" size={24} color="yellow" />
          <Octicons name="star" size={24} color="yellow" />
        </View>

        {/* Description */}
        <View className="mt-2">
          <Text className="text-neutral-400 text-base">{movie.overview}</Text>
        </View>

        <Text className="text-neutral-400 text-base mt-2">
          Genres:{" "}
          {movie?.genres?.map((genre, index) => {
            let comma = index === movie.genres.length - 1 ? "" : ",";
            return <Text key={index}>{genre.name} {comma} </Text>;
          })}{" "}
        </Text>

        <Text className="text-neutral-400 text-base mt-1">
          Realease Date: {movie.release_date}
        </Text>

        <Text className="text-neutral-400 text-base mt-1">
          Runtime: {movie.runtime} minutes
        </Text>

        {/* Cast */}
        <Cast cast={cast} />
        {/* Similar Movies */}
        <MovieList
          title="Similar Movies"
          data={similarMovies}
          hidedSeeAll={true}
        />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
