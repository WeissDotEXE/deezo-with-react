import { useState,useEffect } from "react";
import styles from './CardPreview.module.scss';
import CreditCard from "../UI/CreditCard";

const CardPreview=(props)=>{
    return(
        <div className={styles.CardPreview}>
            <CreditCard />
        </div>
    );
}

export default CardPreview;