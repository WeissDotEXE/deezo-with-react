import { useState, useEffect } from "react";
import styles from "./CardPreview.module.scss";
import CreditCard from "../UI/CreditCard";

const CardPreview = (props) => {


  return (
    <div className={styles.CardPreview}>
      <h1 id={styles.cardPreview_txt}>Card Preview</h1>
      <CreditCard cardType={props.type} cardColor={props.color} />
    </div>
  );
};

export default CardPreview;
