import React,{useState} from "react";
import styles from "./HomeMenu.module.scss";

const HomeMenu = (props) => {

  return (
    <div className={styles.home_menu}>
      <h1>Hello {props.userFirstName} {props.userLastName}</h1>
      <h1 id={styles.amount}>{props.totalMoney} $</h1>
      <div className={styles.menu_btn_section}>
        <button className="glow" id={styles.add_money_btn} onClick={props.addMoneyHandler}>Add Money <i class="fas fa-wallet"></i></button>
        <button id={styles.friend_btn} onClick={props.addFriendHandler}>Add Friend <i class="fas fa-user-plus"></i></button>
        <button id={styles.send_btn} onClick={props.sendMoneyHandler}>Send <i class="fas fa-hand-holding-usd"></i></button>
        
      </div>
    </div>
  );
};

export default HomeMenu;
