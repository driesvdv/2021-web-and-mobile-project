import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import HeartIcon from "./../../assets/icons/filledInHeart.svg"

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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <HeartIcon width={25} height={25} fill={'#f8f'} />
          <Text style={{ margin: 5, fontSize: 20, fontWeight: 'bold' }}>2</Text>
        </View>
      </View>
      <Text style={styles.descriptionStyle}>{recipe.description}</Text>
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
  },
  descriptionStyle: {
    marginHorizontal: '5%',
  },
  bottomStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: '5%',
    width: '90%'
  },
  infoButtonStyle: {
    fontFamily: "Roboto",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF9046",
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    margin: '5%'
  }
});

export default RecipeComponent;
