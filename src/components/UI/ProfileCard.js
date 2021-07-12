import React, { useState } from 'react';
import styles from './ProfileCard.module.scss';

const ProfileCard=(props)=>{
    const [firstName,setFirstName]=useState(sessionStorage.getItem('userFirstName'));
    const [lastName,setLastName]=useState(sessionStorage.getItem('userLastName'));
    const [email,setEmail]=useState(sessionStorage.getItem('userEmail'));
    const [accountDate,setAccountDate]=useState(sessionStorage.getItem('accountDate'));

    return(
        <div className={styles.card}>
            <h1 id={styles.header}>Profile</h1>
            <div className={styles.info}>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>email: {email}</p>
                <p>account created: {accountDate}</p>
            </div>
        </div>
    );
}

export default ProfileCard;