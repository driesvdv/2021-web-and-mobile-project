import React, { useContext, useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import axiosInstance from "../../utils/axiosInstance";
import AddIngredientCtaComponent from "../../components/recipes/AddIngredientCTAComponent";
import RecipeComponent from "../../components/recipes/RecipeComponent";
import Logout from "../../assets/icons/logout.svg";
import { AuthContext } from "../../utils/authContext";

export const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState(null);
  const [reload, setReload] = useState(false);

  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    axiosInstance.get("/recipes")
      .then(({ data }) => {
        setRecipes(data.data);
      }).catch(({ data }) => {
      console.log(data);
    });
  }, [reload]);

  return (
    <View style={{ marginTop: 30, marginBottom: 155 }}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", alignContent: "center"}}>
        <Text style={styles.header}>Overzicht</Text>
        <Pressable style={styles.logoutButton} onPress={() => signOut()}>
          <Logout height={30} width={30}/>
        </Pressable>
      </View>
      <AddIngredientCtaComponent navigation={navigation}/>
      <FlatList
        data={recipes}
        renderItem={({ item, index }) => (
          <RecipeComponent recipe={item} setReload={setReload} reload={reload} key={index} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cart: {
    height: 50,
    width: 50,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    marginRight: "5%",
    backgroundColor: "white",
    padding: 10,
    height: 50,
    width: 50,
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
});
