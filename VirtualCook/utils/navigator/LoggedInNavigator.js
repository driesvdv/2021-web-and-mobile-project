import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "../../screens/HomeScreen";
import { CalendarScreen } from "../../screens/CalendarScreen";
import { BasketScreen } from "../../screens/BasketScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const LoggedInNavigator = () => {
  const Tab = createBottomTabNavigator();

  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "ios-home" : "ios-home-outline";
        } else if (route.name === "Basket") {
          iconName = focused ? "ios-basket" : "ios-basket-outline";
        } else if (route.name === "Calendar") {
          iconName = focused ? "ios-calendar" : "ios-calendar-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Calendar" component={CalendarScreen} />
    <Tab.Screen name="Basket" component={BasketScreen} />
  </Tab.Navigator>;
};
