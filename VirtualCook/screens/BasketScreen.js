import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import IngredientComponent from "../components/IngredientComponent";


export const BasketScreen = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axiosInstance.get("/basket")
      .then(function({ data }) {
        setIngredients(data);
      }).catch(function(response) {
      console.log("failed", response);
    });
  }, []);

  return (
    <View style={{ marginTop: 30 }}>
      {/*<View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>*/}
      {/*  <View style={styles.cart}>*/}
      {/*    <Ionicons name={"ios-basket"} size={30} color={'black'} />*/}
      {/*  </View>*/}
      {/*</View>*/}
      <Text style={styles.header}>Winkelmandje</Text>
      <FlatList
        data={Object.keys(ingredients)}
        renderItem={({item, index}) => (
          <IngredientComponent ingredient={item} ingredientDetails={ingredients[item]} key={index}/>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    marginHorizontal: 20,
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
