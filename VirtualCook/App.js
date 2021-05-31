import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { createContext, useEffect, useMemo, useReducer } from "react";
import EncryptedStorage from "react-native-encrypted-storage";
import axios from "axios";


import { HomeScreen } from "./screens/HomeScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { BasketScreen } from "./screens/BasketScreen";
import { LoginScreen } from "./screens/Auth/LoginScreen";

import { AuthContext } from "./utils/authContext";

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
        const token = await EncryptedStorage.getItem("token");

        if (token !== undefined) {
          console.log(token);
          userToken = token;
        }
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      console.log("value", value);
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        axios.post("http://10.0.2.2:8000/api/auth/login", data)
          .then(function({ data }) {
            storeUserToken(data.data.token)
            dispatch({ type: "SIGN_IN", token: data.data.token });
          }).catch(function(error) {
          console.log(error);
        });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async data => {
        axios.post("http://10.0.2.2:8000/api/auth/register", data)
          .then(function({ data }) {
            storeUserToken(data.data.token)
            dispatch({ type: "SIGN_IN", token: data.data.token });
          }).catch(function(error) {
          console.log(error);
        });
      },
    }),
    [],
  );

  async function storeUserToken(token) {
    try {
      await EncryptedStorage.setItem(
        "token", token
      );
      console.log(token);
      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
    }
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator>
          {state.userToken == null ? (
            <>
              <Stack.Screen name="SignIn" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={RegisterScreen} options={{ headerShown: false }} />
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
