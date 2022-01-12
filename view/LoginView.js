import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";

// import { Context as AuthContext } from "../model/src/context/AuthContext";
import { Context as AuthContext } from "../controller/context/AuthContext";
import Colors from "../constants/Colors";

const LoginView = (props) => {
  const { state, login } = useContext(AuthContext);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Log In</Text>
      <TextInput
        style={styles.formInput}
        maxLength={80}
        placeholder="Enter email"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.formInput}
        maxLength={80}
        placeholder="Password"
        onChangeText={onChangePassword}
        value={password}
      />
      <View style={styles.buttonContainer}>
        {state.errorMessage ? (
          <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text>
        ) : null}
        <Button
          title="Log In"
          onPress={() => {
            // props.navigation.navigate("Main");
            login({ email, password });
          }}
          color={Colors.primary}
        />
        <View style={styles.orText}>
          <Text>Or,</Text>
        </View>
        <Button
          title="Register"
          onPress={() => {
            props.navigation.navigate("Register");
          }}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 60,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    height: 130,
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  login: {
    fontSize: 25,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
  },
  orText: {
    width: 270,
    alignItems: "center",
  },
  formInput: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
  errorMessageStyle: {
    color: "red",
    fontSize: 16,
    padding: 10
  },
});

LoginView.navigationOptions = {
  headerTitle: null,
};

export default LoginView;
