import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const RecipeComponent = () => {
  return (
    <View style={styles.cardStyle}>
      <Text>afbeelding</Text>
      <Text>Titel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "white",
    height: 75,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ingredientStyle: {
    fontSize: 20,
    marginHorizontal: 20,
    color: "#2C2D2F",
  },
  descriptionStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ACACAD",
  },
  add: {
    // height: 40,
    // width: 40,
    textAlign: 'center'
  }
});

export default RecipeComponent;
