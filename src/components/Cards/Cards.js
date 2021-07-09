import React, { useState, useEffect } from "react";
import styles from "./Cards.module.scss";
import GenerateCard from './GenerateCard';
const cardList = [];

const Cards = () => {
  const [cardExist, setCardExist] = useState(false);
  const [showGenerate,setShowGenerate]=useState(false);


  //variables for creating a card with unique card number
  let cardNum1 = 0;
  let cardNum2 = 0;
  let cardNum3 = 0;
  let cardNum4 = 0;
  const [cardNumber, setcardNumber] = useState("");
  useEffect(() => {
    console.log(cardNumber);
  }, [cardNumber]);
  //function for generating number with 4 digits which will later be combined in one string
  const randomNumberFunc = () => {
    cardNum1 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    cardNum2 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    cardNum3 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    cardNum4 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    setcardNumber(cardNum1 + " " + cardNum2 + " " + cardNum3 + " " + cardNum4);
  };

  //variables for showing content if user already has a card or not
  let content = null;
  let generateCard=null;

  //function for showing generateCard component
  const generateCardHandler=()=>{
      setShowGenerate(true);
  }

  if (cardExist === false) {
    content = (
      <div className={styles.noCard}>
        <i class="fas fa-exclamation"></i>
        <h1>You do not have any card yet</h1>
        <button onClick={generateCardHandler}>Generate card</button>
      </div>
    );
  } else if (cardExist === true) {
    content = (
      <div className={styles.cards}>
        <h1>Hello</h1>
        <button onClick={randomNumberFunc}>press</button>
        <p>{cardNumber}</p>
      </div>
    );
  }

  if(showGenerate==true){
      content=null;
      generateCard=<GenerateCard />
  }

  return <div>
    {content}
    {generateCard}
    </div>;
};

export default Cards;
