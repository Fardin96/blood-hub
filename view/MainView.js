import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

// import { Context as AuthContext } from "../model/src/context/AuthContext";
import { Context as AuthContext } from "../controller/context/AuthContext";
// import PickerComponent from "../components/PickerComponent";
import Colors from "../constants/Colors";

const MainView = (props) => {
  const { state, findDonor } = useContext(AuthContext);
  // console.log(state);
  const [bloodGroup, setBloodGroup] = useState("");
  // console.log(selectedBloodGroup);

  return (
    <View style={styles.container}>
      {/* <PickerComponent /> */}
      <Picker
        style={styles.container}
        selectedValue={bloodGroup}
        onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
      >
        <Picker.Item label="Pick a blood group" value="" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button
          title={"look up"}
          color={Colors.primary}
          onPress={() => findDonor({ bloodGroup })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flex: 0.3,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    marginBottom: 300,
    marginHorizontal: 120,
  },
});

export default MainView;
