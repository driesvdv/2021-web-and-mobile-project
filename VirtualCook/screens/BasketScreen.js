import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";

export const BasketScreen = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axiosInstance().get("/basket")
      .then(function({ data }) {
        console.log(data);
      }).catch(function({ response }) {
        console.log(response.data);
    });
  });

  return (
    <View style={{ marginLeft: 20, marginTop: 30 }}>
      {/*<View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>*/}
      {/*  <View style={styles.cart}>*/}
      {/*    <Ionicons name={"ios-basket"} size={30} color={'black'} />*/}
      {/*  </View>*/}
      {/*</View>*/}
      <Text style={styles.header}>Winkelmandje</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/*<FlatList*/}
        {/*  data={data}*/}
        {/*  renderItem={IngredientComponent}*/}
        {/*/>*/}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    color: "#1C1916",
  },
  cart: {
    height: 50,
    width: 50,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
