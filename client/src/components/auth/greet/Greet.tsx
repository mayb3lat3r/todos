import React from "react";
import styles from "./greet.module.scss";
import logo from "../../../assets/img/planet.png";

const Greet: React.FC = () => {
  return (
    <section className={styles.greetings}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1>Spaces</h1>
          <img className={styles.img} src={logo} alt="" />
        </div>
        <div>
          <p>Создавайте заметки, списки дел, и многое другое!</p>
          <p>И все это в одном приложении 🥳</p>
        </div>
      </div>
    </section>
  );
};

export default Greet;
