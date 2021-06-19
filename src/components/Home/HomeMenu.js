import React,{useState} from "react";
import styles from "./HomeMenu.module.scss";

const HomeMenu = (props) => {

  return (
    <div className={styles.home_menu}>
      <h1>Hello fname last (props)</h1>
      <h1 id={styles.amount}>{props.totalMoney} $</h1>
      <div className={styles.menu_btn_section}>
        <button className="glow" id={styles.add_money_btn} onClick={props.addMoneyHandler}>Add Money</button>
        <button id={styles.friend_btn} onClick={props.addFriendHandler}>Add Friend</button>
        <button id={styles.send_btn}>Send</button>
        
      </div>
    </div>
  );
};

export default HomeMenu;
