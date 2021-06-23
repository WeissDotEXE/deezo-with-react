import React, { useEffect, useState } from "react";
import styles from "./AddMoney.module.scss";
import AddSucces from "../SuccesNotifications/AddSucces";
const AddMoney = (props) => {

  const addTransactions=[];


  const [enteredMoney, setEnteredMoney] = useState("");
  const [enteredCurrency, setEnteredCurrency] = useState("");
  const [succesNotification, setSuccesNotification] = useState(false);
  const [converted, setConverted] = useState("");
  const [transactionData,setTransactionData]=useState(addTransactions);
  useEffect(() => { console.log(converted); }, [converted])


  const moneyChangeHandler = (event) => {
    setEnteredMoney(event.target.value);
  };

  const currencyChangeHandler = (event) => {
    setEnteredCurrency(event.target.value);
    if(event.target.value==="dollar"){
      setConverted(enteredMoney)
    }
    else if(event.target.value==="euro"){
      setConverted(enteredMoney*1.19)
    }
    else if(event.target.value==="ron"){
      setConverted(enteredMoney*0.24)
    }
  };

  //variables showing time when user added money
  let today=new Date();
  let time=today.getDate() + '-' + (today.getMonth()+1) + '-'+ (today.getFullYear());

  //condition for showing succes notification

  const submitHandler = (e) => {
    e.preventDefault();

    //data which will be passed to Home.js component
    const addData={
      type:'Add',
      amount:converted,
      time: time,
      id: Math.floor(Math.random()*100)
    }

    //this function will pass the "addData" object to Home.js component
    props.onSaveConverted(addData);
    setSuccesNotification(true);
    setEnteredMoney("");
    setEnteredCurrency("");
  };

  return (
    <div className={styles.addMoney}>
      <button id={styles.close_btn} onClick={props.closeHandler}>
        <i class="fas fa-times"></i>
      </button>

      <div className={styles.content}>
        <h1 id={styles.addMoney_txt}>Add Money</h1>
        <form onSubmit={submitHandler}>
          <label>How much you want to deposit</label>
          <input
            type="number"
            required
            placeholder="100"
            min="1"
            value={enteredMoney}
            onChange={moneyChangeHandler}
          ></input>
          <select
            name="currency"
            onChange={currencyChangeHandler}
            value={enteredCurrency}
            id={styles.currency_select}
            required
          >
            <option disabled selected value="">Select currency</option>
            <option value="dollar">US Dollar $</option>
            <option value="euro">Euro €</option>
            <option value="ron">Romanian Leu</option>
          </select>
          <h6>Converted amount: {converted}</h6>
          <button type="submit">Add Money</button>
        </form>
      </div>
    </div>
  );
};

export default AddMoney;
