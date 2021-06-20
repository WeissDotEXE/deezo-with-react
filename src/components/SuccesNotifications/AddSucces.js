import React, { useState } from "react";
import styles from "./AddSucces.module.scss";

const AddSucces = (props) => {
  const textNotification = [
      { id: "succesAdd",text:"You succesfully added your money"},

    ];

  return (
    <div className={styles.addSucces_notification}>
      <p>{textNotification[0].text}</p>
      <div className={styles.loading_bar}></div>
    </div>
  );
};

export default AddSucces;
