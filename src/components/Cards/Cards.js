import React,{useState,useEffect} from 'react';
import styles from './Cards.module.scss';

const Cards=()=>{

    //variables for creating a card with unique card number
    let cardNum1=0;
    let cardNum2=0;
    let cardNum3=0;
    let cardNum4=0;
    const [cardNumber,setcardNumber]=useState('');
    useEffect(() => { console.log(cardNumber); }, [cardNumber])
    //function for generating number with 4 digits which will later be combined in one string
    const randomNumberFunc=()=>{
        cardNum1=Math.floor(Math.random()*(9999-1000)+1000);
        cardNum2=Math.floor(Math.random()*(9999-1000)+1000);
        cardNum3=Math.floor(Math.random()*(9999-1000)+1000);
        cardNum4=Math.floor(Math.random()*(9999-1000)+1000);
        setcardNumber(cardNum1+' '+cardNum2+' '+cardNum3+' '+cardNum4);
    }

    return(
        <div className={styles.cards}>
            <h1>Hello</h1>
            <button onClick={randomNumberFunc}>press</button>
            <p>{cardNumber}</p>
        </div>
    );
}

export default Cards;