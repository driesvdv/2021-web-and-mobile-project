import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Pressable, Alert } from "react-native";
import axiosInstance from "../../utils/axiosInstance";

const AddReactionComponent = ({ id }) => {
  const [reaction, setReaction] = useState("");


  const react = () => {
    axiosInstance.post(`/recipes/${id}/react`, {
      reaction: reaction,
    }).then(({ data }) => {
      setReaction('')
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <View>
      <Text style={styles.subTitle}>Voeg een reactie toe</Text>
      <TextInput
        placeholder={"Reactie"}
        value={reaction}
        onChangeText={setReaction}
        style={styles.input}
        multiline={true}
      />
      <Pressable style={styles.infoButtonStyle} onPress={() => react()}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Plaats reactie</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    height: 75,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: "5%",
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
    textAlignVertical: 'top',
  },
  subTitle: {
    marginHorizontal: "5%",
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
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
    marginHorizontal: "5%",
  },
});

export default AddReactionComponent;
