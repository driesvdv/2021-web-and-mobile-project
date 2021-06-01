import React from "react";
import { Text, View } from "react-native";

const DetailRecipe = ({ navigation, route }) => {

  const {recipe} = route.params;

  console.log(recipe);
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default DetailRecipe;
