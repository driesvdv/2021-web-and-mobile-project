/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { createContext, useEffect, useMemo, useReducer } from "react";
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import type { Node } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "./screens/HomeScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { BasketScreen } from "./screens/BasketScreen";
import { LoginScreen } from "./screens/Auth/LoginScreen";

import {AuthContext} from './utils/authContext';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { RegisterScreen } from "./screens/Auth/RegisterScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    });

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        RNSecureStorage.get("userToken").then((value) => {
          userToken = value;
        });
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        console.log(data);

        // dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    [],
  );

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator>
          {state.userToken == null ? (
            <>
              <Stack.Screen name="SignIn" component={LoginScreen} options={{headerShown:false}} />
              <Stack.Screen name="SignUp" component={RegisterScreen} options={{headerShown:false}} />
            </>
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;
    //
    //         if (route.name === "Home") {
    //           iconName = focused ? "ios-home" : "ios-home-outline";
    //         } else if (route.name === "Basket") {
    //           iconName = focused ? "ios-basket" : "ios-basket-outline";
    //         } else if (route.name === "Calendar") {
    //           iconName = focused ? "ios-calendar" : "ios-calendar-outline";
    //         }
    //
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: "tomato",
    //       inactiveTintColor: "gray",
    //     }}
    //   >
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Calendar" component={CalendarScreen} />
    //     {/*<Tab.Screen name="Basket" component={BasketScreen} />*/}
    //     <Tab.Screen name="Basket" component={LoginScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>;
  )
    ;
};

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
