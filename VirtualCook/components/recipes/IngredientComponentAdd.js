import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import axiosInstance from "../../utils/axiosInstance";

const StepComponentAdd = ({ingredient}) => {
  return (
    <View style={styles.border}>
      <Text style={styles.label}>{ingredient.ingredient_id}</Text>
      <Text>{ingredient.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
})

export default StepComponentAdd;
