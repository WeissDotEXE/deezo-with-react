import React, { useState, useEffect } from "react";
import styles from "./Cards.module.scss";
import GenerateCard from "./GenerateCard";
import atm from "../Images/atm.jpg";
import CreditCard from "../UI/CreditCard";

const cardList = [];
const Cards = () => {
  const [cardExist, setCardExist] = useState(sessionStorage.getItem('cardExist'));
  const [showGenerate, setShowGenerate] = useState(false);
  // const [cardsList, setCardsList] = useState(cardList);

  //variables for showing content if user already has a card or not
  let content = null;
  let generateCard = null;

  //function for showing generateCard component
  const generateCardHandler = () => {
    setShowGenerate(true);
  };

  if (cardExist === 'false') {
    content = (
      <div className={styles.noCard}>
        <i class="fas fa-exclamation"></i>
        <h1>You do not have any card yet</h1>
        <button onClick={generateCardHandler}>Generate card</button>
      </div>
    );
  } else if (cardExist === 'true') {
    content = (
      <div className={styles.cards}>
        <div className={styles.background}>
          <img id={styles.background} src={atm} />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Your cards</h1>
            <button onClick={generateCardHandler}>Generate card</button>
          </div>
          <div className={styles.cardList}>
            {cardList.map((card) => (
              <CreditCard
                number={card.number}
                name={card.name}
                cvv={card.cvv}
                color={card.color}
                date={card.date}
                cardType={card.type}
                cardColor={card.color}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  //function for uplifting data from GenerateCard component
  const saveGenerateCardHandler = (enteredData) => {
    cardList.unshift(enteredData);
    console.log(cardList);
    sessionStorage.setItem('cardExist',true);
    setCardExist('true');
    setShowGenerate(false);
  };

  if (showGenerate == true) {
    content = null;
    generateCard = <GenerateCard onGenerateCard={saveGenerateCardHandler} />;
  }

  return (
    <div>
      {content}
      {generateCard}
    </div>
  );
};

export default Cards;
