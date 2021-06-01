import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axiosInstance from "../../utils/axiosInstance";
import AddIngredientCtaComponent from "../../components/recipes/AddIngredientCTAComponent";
import RecipeComponent from "../../components/recipes/RecipeComponent";

export const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axiosInstance.get("/recipes")
      .then(({ data }) => {
        setRecipes(data.data);
      }).catch(({ data }) => {
      console.log(data);
    });
  }, [reload]);

  return (
    <View style={{ marginTop: 30, marginBottom: 155 }}>
      <Text style={styles.header}>Overzicht</Text>
      <AddIngredientCtaComponent />
      <FlatList
        data={recipes}
        renderItem={({ item, index }) => (
          <RecipeComponent recipe={item} setReload={setReload} reload={reload} key={index} navigation={navigation} />
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
