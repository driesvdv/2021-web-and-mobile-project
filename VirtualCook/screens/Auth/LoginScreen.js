import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { validateAll } from 'indicative/validator';
import {
  Input,
  Card,
  FormValidationMessage,
} from 'react-native-elements';

export const  LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    Alert.alert("inloggen")

  }

  const register = () => {
    Alert.alert("registreren")

  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9"}}>
      <TextInput
        label={'Email'}
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
        errorStyle={styles.error}
        errorMessage={errors ? errors.email : null}
        style={styles.input}
        autoCompleteType={"email"}
      />
      <TextInput
        label={'Wachtwoord'}
        placeholder={'Wachtwoord'}
        value={password}
        onChangeText={setPassword}
        errorStyle={styles.error}
        errorMessage={errors ? errors.password : null}
        style={styles.input}
        secureTextEntry
        autoCompleteType={"password"}
      />
      <Button
        style={styles.button}
        title="Inloggen"
        onPress={() => handleLogin()}
      />
      <Text style={styles.register} onPress={() => register()}>
        Registreren
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    margin:15,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10
  },
  button: {
    width: '80%',
    height: 50,
    padding: 10,
    margin:15,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
    color: 'tomato'
  },
  register: {

  }
})

