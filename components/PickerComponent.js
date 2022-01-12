import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerComponent = (props) => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  // console.log(selectedBloodGroup);
  return (
    <Picker
      style={styles.container}
      selectedValue={selectedBloodGroup}
      onValueChange={(itemValue, itemIndex) => setSelectedBloodGroup(itemValue)}
    >
      <Picker.Item label="A+" value="A+" />
      <Picker.Item label="A-" value="A-" />
      <Picker.Item label="B+" value="B+" />
      <Picker.Item label="B-" value="B-" />
      <Picker.Item label="O+" value="O+" />
      <Picker.Item label="O-" value="O-" />
      <Picker.Item label="AB+" value="AB+" />
      <Picker.Item label="AB-" value="AB-" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 50,
  },
});

export default PickerComponent;
