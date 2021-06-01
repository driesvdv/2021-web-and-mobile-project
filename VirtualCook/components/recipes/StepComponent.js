import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StepComponent = ({ step }) => {

  function capitalize(s)
  {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{capitalize(step.name)}</Text>
      <Text style={styles.description}>{capitalize(step.description)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "flex-start",
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
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
  },
  description: {
    padding: 10,
    fontSize: 16
  },
})

export default StepComponent;
