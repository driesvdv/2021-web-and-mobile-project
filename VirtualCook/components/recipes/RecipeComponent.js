import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const RecipeComponent = ({ recipe }) => {

  useEffect(() => {
    console.log(recipe);
  });

  const moreInfo = (id) => {
    Alert.alert(`Meer info ${id}`)
  }

  return (
    <View style={styles.cardStyle}>
      <Image
        style={styles.imageStyle}
        source={require("./../../assets/images/defaultMeal.jpg")}
      />
      <View style={styles.bottomStyle}>
        <Text style={styles.titleStyle}>{recipe.name}</Text>
      </View>
      <Pressable style={styles.infoButtonStyle} onPress={() => moreInfo(recipe.id)}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Meer info</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "white",
    marginHorizontal: 20,
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
  imageStyle: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: '2.5%',
    marginVertical: '5%',
  },
  bottomStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infoButtonStyle: {
    fontFamily: "Roboto",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF9046",
    width: "95%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: '2.5%',
  }
});

export default RecipeComponent;
