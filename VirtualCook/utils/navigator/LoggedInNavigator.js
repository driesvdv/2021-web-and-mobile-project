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
        } else if (route.name === "Kalender") {
          iconName = focused ? "ios-basket" : "ios-basket-outline";
        } else if (route.name === "Winkelmandje") {
          iconName = focused ? "ios-calendar" : "ios-calendar-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#E36D45",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Kalender" component={CalendarScreen} />
    <Tab.Screen name="Winkelmandje" component={BasketScreen} />
  </Tab.Navigator>;
};
