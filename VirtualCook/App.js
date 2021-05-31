import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { createContext, useEffect, useMemo, useReducer } from "react";
import EncryptedStorage from "react-native-encrypted-storage";
import axios from "axios";
import Ionicons from 'react-native-vector-icons/Ionicons';



import { HomeScreen } from "./screens/HomeScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { BasketScreen } from "./screens/BasketScreen";
import { LoginScreen } from "./screens/Auth/LoginScreen";

import { AuthContext } from "./utils/authContext";

import {
  Alert,
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
import { LoggedInNavigator } from "./utils/navigator/LoggedInNavigator";


const Stack = createStackNavigator();

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

  useEffect(() => {
    // clearStorage()
    const bootstrapAsync = async () => {
      let userToken;

      try {
        const token = await EncryptedStorage.getItem("token");
        if (token !== undefined) {
          userToken = token;
        }
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        axios.post("http://10.0.2.2:8000/api/auth/login", data)
          .then(function({ data }) {
            storeUserToken(data.data.token);
            dispatch({ type: "SIGN_IN", token: data.data.token });
          }).catch(function({ response }) {
          Alert.alert("Ongeldige login");
        });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async data => {
        axios.post("http://10.0.2.2:8000/api/auth/register", data)
          .then(function({ data }) {
            storeUserToken(data.data.token);
            dispatch({ type: "SIGN_IN", token: data.data.token });
          }).catch(function({ response }) {
          let formatted = Object.keys(response.data.errors).flatMap((key) => {
            return response.data.errors[key];
          }).join("\n");
          Alert.alert("Foute gegevens", formatted);
        });
      },
    }),
    [],
  );

  async function storeUserToken(token) {
    try {
      await EncryptedStorage.setItem("token", token);
    } catch (error) {
      // There was an error on the native side
    }
  }

  async function clearStorage() {
    try {
      await EncryptedStorage.clear();
      // Congrats! You've just cleared the device storage!
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
            <Stack.Screen name="Home" component={LoggedInNavigator} />
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};
