import React, { useState } from "react";
import styles from "./Home.module.scss";
import IntroPage from "../Intro/IntroPage";

import home_image from "../Images/home_image.jpg";
import HomeMenu from "./HomeMenu";
import Transaction from "./Transaction";
import AddMoney from "./AddMoney";
import AddFriend from "./AddFriend";
import Friends from "../Friends/Friends";
import Notification from "../Notifications/Notification";
import SendMoney from "./SendMoney";

const transactions = [];
const friends = [];
let totalMoney = 0;
const Home = () => {
  //variable for testing if user has created a profile
  const [isCompleted, setIsCompleted] = useState(false);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');


  const [addMoneyShow, setAddMoneyShow] = useState(false);
  const [addFriendShow, setAddFriendShow] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  const [sendMoneyShow, setSendMoneyShow] = useState(false);
  const [notificationType, setNotificationType] = useState("");
  //variable for total money which will be shown in Menu component
  const [money, setMoney] = useState(0);

  //variables which will store components and display them
  let widget = null; //this will display add money/friend/send section in right side of the screen as a widget
  let notification = null;

  //handler for uplifting state from IntroPage component
  const saveUserDataHandler=(enteredData)=>{
    setFirstName(enteredData.firstName);
    setLastName(enteredData.lastName);
    setIsCompleted(true);
  }
  //handler for "add money" button
  const addMoneyHandler = () => {
    setAddMoneyShow(true);
    setAddFriendShow(false);
    setSendMoneyShow(false);
    console.log("add Money clicked");
  };
  //handler for "add friend" button
  const addFriendHandler = () => {
    setAddMoneyShow(false);
    setAddFriendShow(true);
    setSendMoneyShow(false);
    console.log("add Friend clicked");
  };
  //handler for "send money" button
  const sendMoneyHandler = () => {
    setAddMoneyShow(false);
    setAddFriendShow(false);
    setSendMoneyShow(true);
    console.log("send Money clicked");
  };

  //handler for closing any widget (close button in right top corner of)
  const closeHandler = () => {
    setAddMoneyShow(false);
    setAddFriendShow(false);
    setSendMoneyShow(false);
    console.log("add Friend clicked");
  };


  let pageTest = null;
  if (isCompleted === false) {
    pageTest = <IntroPage onSaveUserData={saveUserDataHandler}/>;
  } else {
    pageTest =<div className={styles.home}>
        <div className={styles.content}>
          <HomeMenu
            totalMoney={money}
            addMoneyHandler={addMoneyHandler}
            addFriendHandler={addFriendHandler}
            sendMoneyHandler={sendMoneyHandler}
            userFirstName={firstName}
            userLastName={lastName}
          />
          <Friends friend={friends} />
          <Transaction transaction={transactions} />

          {notification}
        </div>

        <div className={styles.image}>
          <img id={styles.home_image} src={home_image} />
        </div>

        {widget}
      </div>
  }
  

  //handler for uplifting state from AddMoney component
  const saveConvertedHandler = (enteredConvertedData) => {
    transactions.unshift(enteredConvertedData);
    totalMoney += parseFloat(enteredConvertedData.amount);
    setMoney(totalMoney.toFixed(2));
    setAddMoneyShow(false);
    setNotificationShow(true);
    setNotificationType("addMoney");
    setTimeout(function () {
      setNotificationShow(false);
      setNotificationType("");
    }, 3000);
    console.log("total money state: " + money);
    console.log(transactions);
  };

  //handler for uplifting state from SendMoney component
  const saveSendHandler = (enteredSendData) => {
    transactions.unshift(enteredSendData);
    totalMoney -= parseFloat(enteredSendData.amount);
    setMoney(totalMoney.toFixed(2));
    setSendMoneyShow(false);
    setNotificationType("sendMoney");
    setNotificationShow(true);
    setTimeout(function () {
      setNotificationShow(false);
      setNotificationType("");
    }, 3000);
  };

  const saveFriendhandler = (enteredFriendData) => {
    friends.unshift(enteredFriendData);
    setAddFriendShow(false);
    setNotificationType("addFriend");
    setNotificationShow(true);
    setTimeout(function () {
      setNotificationShow(false);
      setNotificationType("");
    }, 3000);
    console.log(friends);
  };

  //conditions for displaying content from menu buttons
  if (addMoneyShow === true) {
    widget = (
      <AddMoney
        closeHandler={closeHandler}
        onSaveConverted={saveConvertedHandler}
      />
    );
  }
  if (addFriendShow === true) {
    widget = (
      <AddFriend onSaveFriend={saveFriendhandler} closeHandler={closeHandler} />
    );
  }
  if (sendMoneyShow === true) {
    widget = (
      <SendMoney
        friend={friends}
        maxMoney={totalMoney}
        onSaveSend={saveSendHandler}
        closeHandler={closeHandler}
      />
    );
  }

  //conditions for showing notification(add money widget)
  if (notificationShow === true) {
    notification = (
      <Notification
        notificationType={notificationType}
        money={transactions[0].amount}
      />
    );
  }

  return(
    <div>
      {pageTest}
    </div>
  );
};

export default Home;
