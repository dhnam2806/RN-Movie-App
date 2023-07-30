import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MovieScreen" component={MovieScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;