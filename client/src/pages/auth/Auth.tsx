import React, { useState } from "react";
import Greet from "../../components/auth/greet/Greet";
import { CloseCircleOutlined } from "@ant-design/icons";
import Login from "../../components/auth/login/Login";
import styles from "./auth.module.scss";

const Auth: React.FC = () => {
  const [hideGreet, setHideGreet] = useState(false);
  const toggle = () => {
    setHideGreet(!hideGreet);
  };
  return (
    <main className={styles.auth}>
      {!hideGreet ? (
        <>
          <Greet />
          <button className={styles.start} onClick={toggle}>
            Начать
          </button>
        </>
      ) : (
        <>
          <button onClick={toggle} className={styles.back}>
            <CloseCircleOutlined className={styles.backIcon} />
          </button>
          <div className={styles.form}>
            <Login />
          </div>
        </>
      )}
    </main>
  );
};

export default Auth;
