import React from "react";
import { FlatList, Image, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import BackArrow from "./../../assets/icons/backArrow.svg";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import RecipeComponent from "../../components/recipes/RecipeComponent";
import StepComponent from "../../components/recipes/StepComponent";

const DetailRecipe = ({ navigation, route }) => {

  const { recipe } = route.params;

  const DATA = [
    {
      title: "Instructies",
      data: recipe.steps
    },
    {
      title: "Ingredienten",
      data: recipe.ingredients
    },
    {
      title: "Reacties",
      data: recipe.reactions
    }
  ]

  return (
    <SectionList
      style={styles.root}
      ListHeaderComponentStyle={{alignItems: "flex-start",
        justifyContent: "flex-start",}}
      ListHeaderComponent={
        <>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <BackArrow width={30} height={30} />
          </Pressable>
          <Text style={styles.header}>{recipe.name}</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require("./../../assets/images/defaultMeal.jpg")}
            />
          </View>
          <Text style={styles.negativeSubTitle}>Beschrijving</Text>
          <Text style={styles.description}>{recipe.description}</Text>
        </>
      }
      sections={DATA}
      renderItem={({ item, index }) => (
        <StepComponent data={item} index={index} key={index} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.subTitle}>{title}</Text>
      )}
      keyExtractor={(item, index) => index + item}
      ListFooterComponent={
        <Text style={{ marginHorizontal: "5%", fontWeight: "bold", color: '#ACACAD', marginVertical: 10 }}>Gepubliceerd
        op {recipe.created_at.substring(0, 10)}</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    marginHorizontal: "5%",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
  },
  cart: {
    marginHorizontal: "5%",
    height: 50,
    width: 50,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
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
  imageStyle: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  imageContainer: {
    overflow: "visible",
    marginHorizontal: "5%",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginBottom: 45,
    borderRadius: 10,
  },
  description: {
    color: "#2C2D2F",
    marginHorizontal: "5%",
    fontSize: 16,
  },
  negativeSubTitle: {
    marginHorizontal: "5%",
    marginTop: -20,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    marginHorizontal: "5%",
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
  },

});

export default DetailRecipe;
