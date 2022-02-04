import { logout } from "../redux/reducers/userReducer";

const logoutAction = () => {
  return (dispatch: any) => {
    dispatch(logout());
    localStorage.removeItem("token");
  };
};

export default logoutAction;
