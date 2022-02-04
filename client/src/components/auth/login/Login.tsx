import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import loginAction from "../../../actions/login";
import logo from "../../../assets/img/planet.png";
import styles from "./login.module.scss";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [isEntery, setIsEntery] = useState(true);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const sendLoginData = () => {
    dispatch(loginAction(email.current!.value, password.current!.value));
  };

  const sendRegisterData = () => {};

  const switchTypeEntery = () => {
    setIsEntery(!isEntery);
  };

  return (
    <div className={styles.login}>
      <img className={styles.logo} src={logo} alt="" />
      {isEntery ? (
        <h2>Вход</h2>
      ) : (
        <h2 style={{ fontSize: "120px" }}>Регистрация</h2>
      )}
      <input type="text" placeholder="Электронная почта" ref={email} />
      <input type="password" placeholder="Пароль" ref={password} />
      <button
        className={styles.submit}
        onClick={isEntery ? sendLoginData : sendRegisterData}
      >
        {isEntery ? "Войти" : "Вперед"}
      </button>
      <span>
        {isEntery ? "Нет аккаунта? " : "Уже с нами? "}
        <button onClick={switchTypeEntery} className={styles.changer}>
          {isEntery ? "Зарегистрируйтесь" : "Войдите"}
        </button>
      </span>
    </div>
  );
};

export default Login;
