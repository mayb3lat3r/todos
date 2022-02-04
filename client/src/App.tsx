import React from "react";
import { useSelector } from "react-redux";
import Auth from "./pages/auth/Auth";
import Main from "./pages/main/Main";
import { IRootState } from "./redux/store";

const App = () => {
  const isAuth = useSelector<IRootState>((state) => state.user.isAuth);

  return isAuth ? <Main /> : <Auth />;
};

export default App;
