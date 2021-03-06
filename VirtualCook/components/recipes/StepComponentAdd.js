import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StepComponentAdd = ({step}) => {
  return (
    <View style={styles.border}>
      <Text style={[styles.label, {marginHorizontal: 10}]}>{step.name}</Text>
      <Text style={{marginHorizontal: 10}}>{step.description}</Text>
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
