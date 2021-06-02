import React, { useEffect, useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BackArrow from "../../assets/icons/backArrow.svg";
import axiosInstance from "../../utils/axiosInstance";
import StepComponentAdd from "../../components/recipes/StepComponentAdd";
import {Picker} from '@react-native-picker/picker';
import IngredientComponentAdd from "../../components/recipes/IngredientComponentAdd";

const CreateRecipe = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const [stepName, setStepName] = useState("");
  const [stepDescription, setStepDescription] = useState("");

  const [ingredient_id, setIngredient_id] = useState(1);
  const [ingredientAmount, setIngredientAmount] = useState(null);

  const [ingredientList, setIngredientList] = useState([])

  useEffect(() => {
    axiosInstance.get('ingredients')
      .then(({data}) => {
        console.log(data);
        setIngredientList(data)
      })
      .catch(({response}) => {
        console.log(response.data);
      })
  }, [])

  const addIngredient = () => {
    if(ingredientAmount !== null && ingredient_id !== null) {
      const oldArray = ingredients;
      setIngredients(oldArray => [...oldArray, { ingredient_id, amount: ingredientAmount }]);
      setIngredient_id(1);
      setIngredientAmount(null);
    }
  };

  const addStep = () => {
    if (stepName.length > null) {
      const oldArray = steps;
      setSteps(oldArray => [...oldArray, { name: stepName, description: stepDescription }]);
      setStepName("");
      setStepDescription("");
    }
  };


  const addRecipe = () => {
    axiosInstance.post("/recipes", {
      name,
      description,
      ingredients,
      steps,
    })
      .then(({ data }) => {
        console.log(data);
        navigation.popToTop();
      })
      .catch(({ response }) => {
        console.log(response.data);
      });
  };

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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Instructies</Text>
          <View style={styles.card}>
            {steps.length !== 0 ? steps.map((step, index) => {
              return <StepComponentAdd step={step} key={index} />;
            }) : <Text style={[styles.label, { marginHorizontal: 0, marginBottom: 10, marginTop: 10, fontSize: 20 }]}>Nog
              geen instructies ingevoerd</Text>}
            <Text style={[styles.label, { marginHorizontal: 0, marginBottom: 10, marginTop: 10, fontSize: 20 }]}>Voeg
              instructie toe</Text>
            <Text style={[styles.label, { marginHorizontal: 0, marginVertical: 10 }]}>Naam</Text>
            <TextInput
              placeholder={"Naam"}
              value={stepName}
              onChangeText={setStepName}
              style={{ borderWidth: 1, borderRadius: 10, height: 40 }}
            />
            <Text style={[styles.label, { marginHorizontal: 0, marginVertical: 10 }]}>Beschrijving</Text>
            <TextInput
              placeholder={"Beschrijving"}
              value={stepDescription}
              onChangeText={setStepDescription}
              style={{ borderWidth: 1, borderRadius: 10, height: 60, textAlignVertical: "top" }}
            />
            <Pressable style={styles.buttonStyle} onPress={() => addStep()}>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Voeg stap toe</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            {ingredients.length !== 0 ? ingredients.map((ingredient, index) => {
              return <IngredientComponentAdd ingredient={ingredient} ingredientList={ingredientList} key={index} />;
            }) : <Text style={[styles.label, { marginHorizontal: 0, marginBottom: 10, marginTop: 10, fontSize: 20 }]}>Nog
              geen ingredienten ingevoerd</Text>}
            <Text style={[styles.label, { marginHorizontal: 0, marginBottom: 10, marginTop: 10, fontSize: 20 }]}>Voeg
              ingredient toe</Text>
            <Text style={[styles.label, { marginHorizontal: 0, marginVertical: 10 }]}>Ingredient</Text>
            <View style={{borderWidth: 1, borderRadius: 10}}>
              <Picker
                selectedValue={ingredient_id}
                onValueChange={(itemValue, itemIndex) =>
                  setIngredient_id(itemValue)
                }>
                {ingredientList.map((ingredient, index) => {
                  return <Picker.Item label={ingredient.name} value={ingredient.id} key={1} />
                })}
              </Picker>
            </View>
            <Text style={[styles.label, { marginHorizontal: 0, marginVertical: 10 }]}>Aantal</Text>
            <TextInput
              keyboardType={"number-pad"}
              placeholder={"Aantal"}
              value={ingredientAmount}
              onChangeText={setIngredientAmount}
              style={{ borderWidth: 1, borderRadius: 10 }}
            />
            <Pressable style={styles.buttonStyle} onPress={() => addIngredient()}>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Voeg stap toe</Text>
            </Pressable>
          </View>

          <Pressable style={[styles.buttonStyle, { width: "90%", marginHorizontal: "5%" }]} onPress={() => addRecipe()}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Recept toevoegen</Text>
          </Pressable>
        </View>
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
  card: {
    marginTop: "1%",
    marginBottom: 15,
    marginHorizontal: "5%",
    width: "90%",
    padding: 10,
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
  buttonStyle: {
    fontFamily: "Roboto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9046",
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});


export default CreateRecipe;
