import React, { useState } from "react";
import { Pressable, View, StyleSheet, Text, Button, Image, Alert } from "react-native";
import BackArrow from "../../assets/icons/backArrow.svg";
import DateTimePicker from '@react-native-community/datetimepicker';
import Calendar from "../../assets/icons/Calendar.svg"
import moment from "moment"
import axiosInstance from "../../utils/axiosInstance";
import { LoggedInNavigator } from "../../utils/navigator/LoggedInNavigator";


const AddRecipeToCalendar = ({ navigation, route }) => {
  const { recipe } = route.params;

  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const addToCalendar = () => {
    axiosInstance.post('/user/recipes', {
      recipe_id : recipe.id,
      date: moment(date).format('Y-MM-DD'),
    }).then(({data}) => {
      console.log(data.data);
      navigation.navigate("Kalender");
      Alert.alert("Toegevoegd aan kalender")
    }).catch(({response}) => {
      console.log(response.data);
    })
  }


  return (
    <View style={styles.root}>
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

      <Text style={styles.label}>Datum</Text>
      <Pressable style={styles.datePicker} onPress={() => showDatepicker()}>
        <Text style={{ color: "black", fontSize: 16 }}>{(moment(date).format('DD/MM/YYYY'))}</Text>
        <Calendar />
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Pressable style={styles.infoButtonStyle} onPress={() => addToCalendar()}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Voeg recept toe aan kalender</Text>
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
  header: {
    marginHorizontal: "5%",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
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
  label: {
    marginHorizontal: "5%",
    marginTop: 0,
    fontSize: 16,
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
    marginHorizontal: "5%",
    marginTop: "5%",
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
  datePicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
})

export default AddRecipeToCalendar;

