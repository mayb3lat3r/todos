import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/userReducer";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={exit}>Выйти =)</button>
    </div>
  );
};

export default Dashboard;
