import { useState } from "react";
import styles from "./CreditCard.module.scss";

const CreditCard = (props) => {
  return (
    <div className={styles.CreditCard}>
      <h1>Deezo</h1>
      <p id={styles.card_number}>0000 0000 0000 0000</p>
      <div className={styles.bottom_info}>
        <div className={styles.name}>
          <p>Your Name</p>
        </div>
        <div id={styles.expr_and_type}>
          <p>03/23</p>
          <p>Visa</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
