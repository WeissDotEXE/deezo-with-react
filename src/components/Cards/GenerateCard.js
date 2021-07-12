import { useState,useEffect} from "react";
import styles from "./GenerateCard.module.scss";
import image from '../Images/GenerateImage.svg';
import CardPreview from "./CardPreview";
const GenerateCard = (props) => {

  const [cardColor,setcardColor]=useState('');
  const [cardType,setCardType]=useState('');

  //variable for time
  let time=new Date();

  //variables for creating a card with unique card number
  let cardNum1 = 0;
  let cardNum2 = 0;
  let cardNum3 = 0;
  let cardNum4 = 0;
  const [cardNumber, setcardNumber] = useState("");
  // useEffect(() => {
  //   console.log(cardNumber);
  // }, [cardNumber]);
  //function for generating number with 4 digits which will later be combined in one string
  const randomNumberFunc = () => {
    cardNum1 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    cardNum2 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    cardNum3 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    cardNum4 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    setcardNumber(cardNum1 + " " + cardNum2 + " " + cardNum3 + " " + cardNum4);
  };

  const colorChangeHandler=(event)=>{
    setcardColor(event.target.value);
  }

  const typeChangeHandler=(event)=>{
    setCardType(event.target.value)
  }

  const date = new Date();
  const submitHandler=(e)=>{
    e.preventDefault();
    randomNumberFunc();
    const cardData={
      id:Math.floor(Math.random()*(1000-0)+0),
      number: cardNum1+" "+cardNum2+ " "+cardNum3+" "+cardNum4,
      name:sessionStorage.getItem('userFirstName')+' '+sessionStorage.getItem('userLastName'),
      cvv:Math.floor(Math.random()*(999-100)+100),
      type:cardType,
      color:cardColor,
      date: Math.floor(Math.random()*(12-1)+1)+'/'+Math.floor(Math.random()*((date.getFullYear()+10)-(date.getFullYear()+3))+date.getFullYear()+3)
    }
    props.onGenerateCard(cardData);
    setCardType('');
    setcardColor('');
  }

  return (
    <div className={styles.generateCard}>
      <div className={styles.forum} >
        <h1>Generate your card now</h1>
        <form onSubmit={submitHandler}>
          <label>Card type</label>
          <select onChange={typeChangeHandler} value={cardType} required>
            <option disabled selected value=''>Select type</option>
            <option>Visa</option>
            <option>Master Card</option>
          </select>
          <label>Color</label>
          <select onChange={colorChangeHandler} value={cardColor} required>
            <option disabled selected value=''>Select color</option>
            <option>Transparent</option>
            <option>White</option>
            <option>Black</option>
          </select>
          <button type="submit" onClick={submitHandler}>Generate</button>
        </form>
      </div>
      <div className={styles.cardPreview}>
        <CardPreview type={cardType} color={cardColor}/>
      </div>
    </div>
  );
};

export default GenerateCard;
