import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import AuthProvider from "./navigation/Navigator";
import MainView from "./view/MainView";

export default function App() {
  //replace with MainView
  return <AuthProvider />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
