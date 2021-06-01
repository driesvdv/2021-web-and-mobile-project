import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "../../screens/Home/HomeScreen";
import { CalendarScreen } from "../../screens/CalendarScreen";
import { BasketScreen } from "../../screens/BasketScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DetailRecipe from "../../screens/Home/DetailRecipe";

export const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={DetailRecipe} options={{ headerShown: false }} />
  </Stack.Navigator>;
};
