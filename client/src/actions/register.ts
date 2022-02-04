import axios from "axios";
import config from "../config/default";

const register = async (email: String, password: String) => {
  try {
    const url = new URL(`/api/auth/register`, config.serverUrl).toString();
    const response = await axios.post(url, { email, password });
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

export default register;
