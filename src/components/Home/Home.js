import React, { useState } from "react";
import styles from "./Home.module.scss";
import home_image from "../Images/home_image.jpg";
import HomeMenu from "./HomeMenu";
import Transaction from "./Transaction";
import AddMoney from "./AddMoney";
import AddFriend from "./AddFriend";
import Friends from "../Friends/Friends";
import AddSucces from "../SuccesNotifications/AddSucces";

const transactions=[];
const friends=[];
let totalMoney=0;
const Home = () => {
  const [addMoneyShow, setAddMoneyShow] = useState(false);
  const [addFriendShow,setAddFriendShow]=useState(false);
  const [sendShow,setSendShow]=useState(false);
  //variable for total money which will be shown in Menu component
  const [money,setMoney]=useState(0);


  //variables which will store components and display them
  let widget = null;    //this will display add money/friend/send section in right side of the screen as a widget 
  let addSuccesNotification=null;

  //handler for "add money" button
  const addMoneyHandler = () => {
    setAddMoneyShow(true);
    setAddFriendShow(false);
  };
  //handler for "add friend" button
  const addFriendHandler=()=>{
    setAddMoneyShow(false);
    setAddFriendShow(true);
  }
  
  const closeHandler=()=>{
    setAddMoneyShow(false);
    setAddFriendShow(false);

  }

  //handler for uplifting state from AddMoney component
  const saveConvertedHandler=(enteredConvertedData)=>{
    transactions.unshift(enteredConvertedData);
    totalMoney+=parseFloat(enteredConvertedData.amount);
    setMoney(totalMoney.toFixed(2));
    setAddMoneyShow(false);
    setSendShow(true);
    setTimeout(function(){ setSendShow(false) }, 3000);
    console.log("total money state: "+money);
    console.log(transactions);
  }

  const saveFriendhandler=(enteredFriendData)=>{
    friends.unshift(enteredFriendData);
    setAddFriendShow(false);
  }

  //conditions for displaying content from menu buttons
  if(addMoneyShow===true){
    widget=<AddMoney closeHandler={closeHandler} onSaveConverted={saveConvertedHandler}/>
  }

  if(addFriendShow===true){
    widget=<AddFriend closeHandler={closeHandler}/>
  }

  //conditions for showing notification(add money widget)
  if(sendShow===true){
    addSuccesNotification=<AddSucces money={transactions[0]}/>

  }


  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <HomeMenu totalMoney={money} addMoneyHandler={addMoneyHandler} addFriendHandler={addFriendHandler}/>
        <Friends />
        <Transaction transaction={transactions}/>
        
        {addSuccesNotification}
      </div>

      <div className={styles.image}>
        <img id={styles.home_image} src={home_image} />
      </div>

      {widget}
    </div>
  );
};

export default Home;
