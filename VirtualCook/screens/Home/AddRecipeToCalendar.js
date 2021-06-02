import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import BackArrow from "../../assets/icons/backArrow.svg";

const AddRecipeToCalendar = ({ navigation, route }) => {
  const { recipe } = route.params;

  // console.log(route.params.recipe);
  return (
    <View style={styles.root}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <BackArrow width={30} height={30} />
      </Pressable>
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
})

export default AddRecipeToCalendar;

