import React, { useState } from "react";
import styles from "./Notification.module.scss";
import { useSpring, animated } from "react-spring";
const AddSucces = (props) => {

  const textNotification = [
    { id: "succesAdd", text: "You succesfully added " },
    {id:"addFriend" , text:"You succesfully added your friend to your list."},
    {id:"succesSend",text:'You succesfully send '}
  ];

  let shownText=null;
  if(props.notificationType==='addMoney'){
    shownText=<p>{textNotification[0].text} +{props.money}$</p>
  }
  else if(props.notificationType==='addFriend'){
    shownText=<p>{textNotification[1].text}</p>
  }
  else if(props.notificationType==='sendMoney'){
    shownText=<p>{textNotification[2].text} {props.money}$ to your friend.</p>
  }

  //animation for notification (fade in)
  const notificationAnime=useSpring({
    from:{opacity:0},
    to:{opacity:1},
    config:{duration:400}
  })

  //animation for loading bar
  const loading_bar=useSpring({
    from:{width:"0%"},
    to:{width:"100%"},
    config:{duration:2900}
  })


  return (
    <animated.div style={notificationAnime} className={styles.addSucces_notification}>
      {shownText}
      <animated.div style={loading_bar} className={styles.loading_bar}></animated.div>
    </animated.div>
  );
};

export default AddSucces;
