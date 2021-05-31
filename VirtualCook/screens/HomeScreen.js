import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import EncryptedStorage from "react-native-encrypted-storage";

export const HomeScreen = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    retrieveUserSession();
  })
  async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem("token");

      if (session !== undefined) {
        setToken(session)
      }
    } catch (error) {
      // There was an error on the native side
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Token: { token }</Text>
    </View>
  );
};
