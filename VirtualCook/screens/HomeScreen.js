import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EncryptedStorage from "react-native-encrypted-storage";
import axiosInstance from "../utils/axiosInstance";
import AddIngredientCtaComponent from "../components/recipes/AddIngredientCTAComponent";
import RecipeComponent from "../components/recipes/RecipeComponent";
export const HomeScreen = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axiosInstance.get("/recipes")
      .then(({ data }) => {
        console.log(data.data);
        setRecipes(data.data)
      }).catch(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <View style={{ marginTop: 30, marginBottom: 155 }}>
      <Text style={styles.header}>Overzicht</Text>
      <AddIngredientCtaComponent/>
      <FlatList
        data={recipes}
        renderItem={({item, index}) => (
          <RecipeComponent recipe={item} key={index}/>
        )}
        keyExtractor={(item, index) => index}
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
