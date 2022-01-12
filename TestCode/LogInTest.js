import react from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import LoginView from "../view/LoginView";
import MainView from "../view/RegisterView";

describe("Register Screen", () => {
  it("should go to register on register", () => {
    const navigation = { navigate: () => {} };
    spyOn(navigation, "navigate");

    const page = render(<MainView navigation={navigate}/>);

    const registerButton = page.getByTestId("loginButton");

    fireEvent.press(registerButton);

    expect(navigation.navigate).toHaveBeenCalledWith("LogIn");
  });
});
