import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const RecipeComponent = () => {
  return (
    <View style={styles.cardStyle}>
      <Image
        style={styles.imageStyle}
        source={require("./../../assets/images/defaultMeal.jpg")}
      />
      <Text>Titel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "white",
    height: 350,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageStyle: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});

export default RecipeComponent;
