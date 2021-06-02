import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BackArrow from "../../assets/icons/backArrow.svg";

const CreateRecipe = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <BackArrow width={30} height={30} />
      </Pressable>
      <Text style={styles.header}>Recept toevoegen</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backButton: {
    marginTop: 30,
    marginBottom: 25,
    marginHorizontal: "5%",
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderRadius: 10,
  },
  header: {
    marginHorizontal: "5%",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
  },
})


export default CreateRecipe;
