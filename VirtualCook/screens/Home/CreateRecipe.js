import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BackArrow from "../../assets/icons/backArrow.svg";
import axiosInstance from "../../utils/axiosInstance";

const CreateRecipe = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const [stepName, setStepName] = useState('')
  const [stepDescription, setStepDescription] = useState('')

  const [ingredient_id, setIngredient_id] = useState(-1)
  const [ingredientAmount, setIngredientAmount] = useState('')

  const addIngredient = () => {
    setIngredients(...ingredients, {ingredient_id, amount: ingredientAmount})
    setIngredient_id(-1)
    setIngredientAmount('')
  }

  const addStep = () => {
    setSteps(...steps, {name: stepName, description: stepDescription})
    setStepName('')
    setStepDescription('')
  }


  const addRecipe = () => {
    axiosInstance.post('/recipes', {
      name,
      description,
      ingredients,
      steps,
    })
      .then(({data}) => {
        console.log(data);
      })
      .catch(({response}) => {
        console.log(response);
      })
  }

  return (
    <View style={styles.root}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <BackArrow width={30} height={30} />
      </Pressable>
      <Text style={styles.header}>Recept toevoegen</Text>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Naam</Text>
          <TextInput
            placeholder={"Naam"}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Beschrijving</Text>
          <TextInput
            placeholder={"Beschrijving"}
            value={description}
            onChangeText={setDescription}
            style={[styles.input, { textAlignVertical: "top", height: 75 }]}
            multiline={true}
          />
        </View>
        {/*<View style={styles.inputContainer}>*/}
        {/*  <Text style={styles.label}>Email</Text>*/}
        {/*  <TextInput*/}
        {/*    label={"Email"}*/}
        {/*    placeholder={"Email"}*/}
        {/*    value={email}*/}
        {/*    onChangeText={setEmail}*/}
        {/*    style={styles.input}*/}
        {/*    autoCompleteType={"email"}*/}
        {/*  />*/}
        {/*</View>*/}
      </ScrollView>

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
  input: {
    fontFamily: "Roboto",
    width: "90%",
    height: 50,
    padding: 10,
    marginHorizontal: "5%",
    marginTop: "1%",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
  },
  label: {
    marginHorizontal: "5%",
    marginTop: 0,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 15,
  },
});


export default CreateRecipe;
