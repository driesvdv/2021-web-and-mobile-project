import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddIngredientCtaComponent = ({ navigation }) => {
  return (
    <Pressable style={styles.cardStyle} onPress={() => navigation.navigate('Create')}>
      <Text style={styles.ingredientStyle}>Voeg zelf recepten toe!</Text>
      <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: 20, height: 40, width: 40, backgroundColor: '#FF9046', borderRadius: 10}}>
        <Ionicons name={"ios-add"} color={"white"} size={40} style={ styles.add }  />
      </View>
    </Pressable>
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

export default AddIngredientCtaComponent;


