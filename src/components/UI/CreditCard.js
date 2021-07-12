import { useState,useEffect } from "react";
import styles from "./CreditCard.module.scss";

const CreditCard = (props) => {
  const [userFullName, setUserFullName] = useState(
    sessionStorage.getItem("userFirstName") +
      " " +
      sessionStorage.getItem("userLastName")
  );
  
  // useEffect(() => {
  //   console.log(props.cardType);
  //   console.log(props.cardColor);
  // }, [props.cardType]);


  const styleChangeHandler=()=>{
    if(props.cardColor==='white'){
      return `styles.white`;
    }
    else if(props.cardColor==='transparent'){
      return `styles.transparent`
    }
    else if(props.cardColor==='black'){
      return `styles.black`
    }
  }

  let cardType=null;
  if(props.cardType==='Master Card'){
    cardType=<i class="fab fa-cc-mastercard"></i>
  }
  else if(props.cardType==='Visa'){
    cardType=<i class="fab fa-cc-visa"></i>
  }
   
  return (
    //dynamic stu
    <div className={`${styles["CreditCard"]} ${styles[props.cardColor]}`}>
      <h1>Deezo</h1>
      <p id={styles.card_number}>{props.number}</p>
      <div className={styles.bottom_info}>
        <div className={styles.name}>
          <p>{props.name}</p>
        </div>
        <div class={styles.expr_and_type}>
          <p id={styles.expireDate}>{props.date}</p>
          {cardType}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
