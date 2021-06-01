import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const IngredientComponent = ({ ingredient, ingredientDetails }) => {
  const { unit, amount } = ingredientDetails;

  function capitalize(s)
  {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <View style={styles.cardStyle}>
      <Text style={styles.ingredientStyle}>{capitalize(ingredient)}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20}}>
        <Text style={styles.descriptionStyle}>{amount} {unit}</Text>
        {/*<Ionicons name={"ios-close"} color={"white"} size={26} style={ styles.close } />*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "white",
    height: 75,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    flex: 1,
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
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 20,
    color: "#2C2D2F",
  },
  descriptionStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ACACAD",
  },
  close: {
    backgroundColor: '#FF9046',
    borderRadius: 13,
  }
});

export default IngredientComponent;
