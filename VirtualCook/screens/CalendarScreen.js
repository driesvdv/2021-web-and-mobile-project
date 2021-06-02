import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axiosInstance from "../utils/axiosInstance";
import RecipeComponent from "../components/recipes/RecipeComponent";

export const CalendarScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axiosInstance.get('/user/recipes')
      .then(({data}) => {
        setRecipes(data.data)
      })
      .catch(err => {
        console.log(err);
      })
  });

  return (
    <View style={{ marginTop: 30, marginBottom: 60 }}>
      <Text style={styles.header}>Kalender</Text>
      <FlatList
        data={recipes}
        renderItem={({ item, index }) => (
          <RecipeComponent recipe={item} key={index} navigation={navigation} />
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
