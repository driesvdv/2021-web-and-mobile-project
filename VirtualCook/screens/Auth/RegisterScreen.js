import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, Pressable, Image } from "react-native";

import { AuthContext } from "../../utils/authContext";

import Logo from "./../../assets/images/logo.svg";

export const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [errors, setErrors] = useState({});


  const { signUp } = useContext(AuthContext);

  const login = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    signUp({ name, email, password, password_confirmation });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9" }}>
      <Logo width={100} height={100} fill={"#000"} />
      <Text style={styles.logo}>Virtualcook</Text>
      <View style={styles.form}>
        <Text>Naam</Text>
        <TextInput
          label={"Naam"}
          placeholder={"Naam"}
          value={name}
          onChangeText={setName}
          errorStyle={styles.error}
          errorMessage={errors ? errors.name : null}
          style={styles.input}
        />
      </View>
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput
          label={"Email"}
          placeholder={"Email"}
          value={email}
          onChangeText={setEmail}
          errorStyle={styles.error}
          errorMessage={errors ? errors.email : null}
          style={styles.input}
          autoCompleteType={"email"}
        />
      </View>
      <View style={styles.form}>
        <Text>Wachtwoord</Text>
        <TextInput
          label={"Wachtwoord"}
          placeholder={"Wachtwoord"}
          value={password}
          onChangeText={setPassword}
          errorStyle={styles.error}
          errorMessage={errors ? errors.password : null}
          style={styles.input}
          secureTextEntry
          autoCompleteType={"password"}
        />
      </View>
      <View style={styles.form}>
        <Text>Wachtwoord bevestigen</Text>
        <TextInput
          label={"Wachtwoord bevestigen"}
          placeholder={"Wachtwoord bevestigen"}
          value={password_confirmation}
          onChangeText={setPassword_confirmation}
          errorStyle={styles.error}
          errorMessage={errors ? errors.confirmPassword : null}
          style={styles.input}
          secureTextEntry
          autoCompleteType={"password"}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => handleRegister()}
      >
        <Text style={styles.text}>Registreren</Text>
      </Pressable>
      <Text style={styles.register} onPress={() => login()}>
        Inloggen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
  form: {
    width: "85%",
  },
  logo: {
    marginBottom: 40,
    color: "#E36D45",
    fontSize: 30,
    fontWeight: "400",
  },
  input: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    height: 50,
    padding: 10,
    margin: 10,
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
  button: {
    fontFamily: "Roboto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFBC68",
    width: "80%",
    height: 50,
    padding: 10,
    margin: 15,
    marginTop: 25,
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
  text: {
    color: "#ffff",
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  register: {},
});
