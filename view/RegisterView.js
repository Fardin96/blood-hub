import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

// import { Context as AuthContext } from "../model/src/context/AuthContext";
import { Context as AuthContext } from "../controller/context/AuthContext";
// import CustomTextInput from "../components/CustomTextInput";
import Colors from "../constants/Colors";

const RegisterView = (props) => {
  const { state, register } = useContext(AuthContext);
  const [name, onChangeName] = useState("");
  const [email, onChangeemail] = useState("");
  const [password, onChangePassword] = useState("");
  const [bloodGroup, onChangeBloodGroup] = useState("");
  const [address, onChangeAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.registerStyle}>Registration</Text>

      <TextInput
        style={styles.formInput}
        maxLength={80}
        placeholder="Your name"
        value={name}
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Your email"
        value={email}
        maxLength={80}
        onChangeText={onChangeemail}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Your Password"
        value={password}
        maxLength={80}
        onChangeText={onChangePassword}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Your blood group"
        value={bloodGroup}
        maxLength={80}
        onChangeText={onChangeBloodGroup}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Your address"
        value={address}
        maxLength={80}
        onChangeText={onChangeAddress}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text>
      ) : null}
      <View style={styles.buttonContainer}>
        <Button
          title={"Register"}
          onPress={() =>
            register({ name, email, password, bloodGroup, address })
          }
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
    paddingTop: 150,
    paddingHorizontal: 40,
    backgroundColor: "#fff",
  },
  registerStyle: {
    fontSize: 25,
    borderBottomWidth: 3,
    borderBottomColor: Colors.primary,
  },
  buttonContainer: {
    paddingVertical: 15,
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

RegisterView.navigationOptions = {
  headerTitle: null,
};

export default RegisterView;
