import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { Provider as AuthProvider } from "../model/src/context/AuthContext";
import { setNavigator } from "../model/src/navigationRef";
import RegisterView from "../view/RegisterView";
import LoginView from "../view/LoginView";
import MainView from "../view/MainView";

const Navigator = createStackNavigator({
  Login: LoginView,
  Register: RegisterView,
  Main: MainView,
});

const App = createAppContainer(Navigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
