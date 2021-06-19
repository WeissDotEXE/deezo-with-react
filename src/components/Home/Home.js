import React, { useState } from "react";
import styles from "./Home.module.scss";
import home_image from "../Images/home_image.jpg";
import HomeMenu from "./HomeMenu";
import Transaction from "./Transaction";
import AddMoney from "./AddMoney";
import AddFriend from "./AddFriend";
import Friends from "../Friends/Friends";
import AddSucces from "../SuccesNotifications/AddSucces";

const Home = () => {
  const [addMoneyShow, setAddMoneyShow] = useState(false);
  const [addFriendShow,setAddFriendShow]=useState(false);
  const [sendShow,setSendShow]=useState(false);
  const [totalMoney,setTotalMoney]=useState(0);

  //variables which will store components and display them
  let widget = null;    //this will display add money/friend/send section in right side of the screen as a widget 
  let addSuccesNotification=null;

  //handler for add money button
  const addMoneyHandler = () => {
    setAddMoneyShow(true);
    setAddFriendShow(false);
  };

  const addFriendHandler=()=>{
    setAddMoneyShow(false);
    setAddFriendShow(true);
  }
  
  const closeHandler=()=>{
    setAddMoneyShow(false);
    setAddFriendShow(false);

  }

  //conditions for displaying content from menu buttons
  if(addMoneyShow===true){
    widget=<AddMoney closeHandler={closeHandler} submitHandler={(e)=>{e.preventDefault();setTotalMoney(40)}}/>
  }

  if(addFriendShow===true){
    widget=<AddFriend closeHandler={closeHandler}/>
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <HomeMenu totalMoney={totalMoney} addMoneyHandler={addMoneyHandler} addFriendHandler={addFriendHandler}/>
        <Friends />
        <Transaction />
        
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
