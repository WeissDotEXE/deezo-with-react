import React, { useState } from "react";
import styles from "./Transaction.module.scss";

const Transaction = (props) => {

  const[transactionBool,setTransactionBool]=useState(false);

  const transactionList = props.transaction.map((trans) => {
    return (
      <div className={styles.test}>
        <div className={styles.transaction_item}>
          <p>{trans.type}</p>
          <p>{trans.amount} $</p>
          <p>{trans.time}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.transaction}>
      <h1>Latest transactions</h1>
      {transactionList}
    </div>
  );
};

export default Transaction;
