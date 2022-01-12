import CreateDataContext from "./CreateDataContext";
import { AsyncStorage } from "react-native";
import axiosApi from "../api/axiosApi";
import { navigate } from "../../model/src/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "login":
      return { errorMessage: "", token: action.payload };
    default:
      //maybe this one needs to be changed for error message error
      return state;
  }
};

const register =
  (dispatch) =>
  async ({ name, email, password, bloodGroup, address }) => {
    try {
      // console.log({ name, email, password, bloodGroup, address });
      const response = await axiosApi.post("/register", {
        name,
        email,
        password,
        bloodGroup,
        address,
      });
      //find alternative to asyncStorage
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "login", payload: response.data.token });
      // console.log(response.data);
      navigate("Login");
    } catch (err) {
      // console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with registration!",
      });
    }
  };

const login =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await axiosApi.post("/login", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "login", payload: response.data.token });
      navigate("Main");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with log in!",
      });
    }
  };

const logOut = (dispatch) => {
  return () => {
    //somehow Log out
  };
};
// bloodGroup =
const findDonor =
  (dispatch) =>
  async ({ bloodGroup }) => {
    try {
      // console.log(`ei ki sei lok${selectedBloodGroup}`);
      console.log(bloodGroup);
      const response = await axiosApi.get("/findDonor", { bloodGroup });
      // await AsyncStorage.setItem("token", response.data.token);
      console.log(response.data);
      // if (typeof bloodGroup === "string") {
      //   alert("str is a string type");
      // }
      // dispatch({ type: "add_error", payload: response.data });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with log in!",
      });
    }
  };

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { register, login, logOut, findDonor },
  { token: null, errorMessage: "" }
);
