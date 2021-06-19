import React,{useState} from 'react';
import  styles from './AddSucces.module.scss';

const AddSucces=(props)=>{
    return(
        <div className={styles.addSucces_notification}>
            <p>You have succesfully added X dollars to your account.</p>
            <p>you can now close the window.</p>
            <div className={styles.loading_bar}></div>
        </div>
    );

}

export default AddSucces;