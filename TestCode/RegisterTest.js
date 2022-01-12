import react from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import LoginView from "../view/LoginView";
import RegisterView from "../view/RegisterView";

describe("Register Screen", () => {
  it("should go to register on register", () => {
    const navigation = { navigate: () => {} };
    spyOn(navigation, "navigate");

    const page = render(<LoginView navigation={navigate}/>);

    const registerButton = page.getByTestId("registerButton");

    fireEvent.press(registerButton);

    expect(navigation.navigate).toHaveBeenCalledWith("Register");
  });
});
