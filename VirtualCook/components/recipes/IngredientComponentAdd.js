import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import axiosInstance from "../../utils/axiosInstance";

const StepComponentAdd = ({ingredient, ingredientList}) => {
  console.log(ingredientList);

  return (
    <View style={styles.border}>
      <Text style={[styles.label, {marginHorizontal: 10}]}>{ingredientList.find(x => x.id === ingredient.ingredient_id).name}</Text>
      <Text style={[styles.label, {marginHorizontal: 10}]}>{ingredientList.find(x => x.id === ingredient.ingredient_id).unit}: {ingredient.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
})

export default StepComponentAdd;
