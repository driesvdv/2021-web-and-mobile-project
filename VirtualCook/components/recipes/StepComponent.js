import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StepComponent = ({ data }) => {

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  if (data?.description) {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{capitalize(data.name)}</Text>
        <Text style={styles.description}>{capitalize(data.description)}</Text>
      </View>
    );
  }

  if (data?.amount) {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.ingredientStyle}>{capitalize(data.name)}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20 }}>
          <Text style={styles.descriptionStyle}>{data.amount} {data.unit}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.description}>{data.reaction}</Text>
      <Text style={styles.createdAt}>Gereageerd op {data.created_at.substring(0, 10)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginHorizontal: "5%",
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
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
  description: {
    padding: 10,
    fontSize: 16,
  },
  cardStyle: {
    backgroundColor: "white",
    height: 75,
    marginHorizontal: "5%",
    marginVertical: 10,
    borderRadius: 10,
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
  createdAt: {
    padding: 10,
    color: "#ACACAD",
  },
});

export default StepComponent;
