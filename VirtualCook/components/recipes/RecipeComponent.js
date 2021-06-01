import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View, Pressable } from "react-native";

import HeartIcon from "./../../assets/icons/filledInHeart.svg";
import axiosInstance from "../../utils/axiosInstance";

const RecipeComponent = ({ recipe, reload, setReload, navigation }) => {
  const [liked, setLiked] = useState(false);

  const moreInfo = () => {
    navigation.navigate('Detail', {recipe: recipe})
  };

  const like = (id) => {
    liked ?
      Alert.alert("Je hebt dit recept al geliked") :
      axiosInstance.post(`/recipes/${id}/like`)
        .then(() => {
          setReload(!reload);
          setLiked(true);
          console.log("test");
        })
        .catch((e) => {
          console.log(e);
        });
  };

  return (
    <View style={styles.cardStyle}>
      <Image
        style={styles.imageStyle}
        source={require("./../../assets/images/defaultMeal.jpg")}
      />
      <View style={styles.bottomStyle}>
        <Text style={styles.titleStyle}>{recipe.name}</Text>
        <Pressable onPress={() => like(recipe.id)}
                   style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <HeartIcon width={25} height={25} fill={"#f8f"} />
          <Text style={{ margin: 5, fontSize: 20, fontWeight: "bold" }}>{recipe.likes}</Text>
        </Pressable>
      </View>
      <Text style={styles.descriptionStyle}>{recipe.description}</Text>
      <Pressable style={styles.infoButtonStyle} onPress={() => moreInfo()}>
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
    marginHorizontal: "5%",
  },
  bottomStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
    width: "90%",
  },
  infoButtonStyle: {
    fontFamily: "Roboto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9046",
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    margin: "5%",
  },
});

export default RecipeComponent;
