import axios from "axios";
import { Dispatch } from "react";
import config from "../config/default";
import { setUser } from "../redux/reducers/userReducer";
import { IUserAction } from "../redux/reducers/userReducer";

const login = (email: String, password: String) => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      const url = new URL(`/api/auth/login/`, config.serverUrl).toString();
      const response = await axios.post(url, {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        dispatch(setUser(response.data.user));
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export default login;
