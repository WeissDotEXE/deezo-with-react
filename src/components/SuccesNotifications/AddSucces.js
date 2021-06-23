import React, { useState } from "react";
import styles from "./AddSucces.module.scss";
import { useSpring, animated } from "react-spring";
const AddSucces = (props) => {

  const textNotification = [
    { id: "succesAdd", text: "You succesfully added " },
  ];

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
      <p>{textNotification[0].text} {props.money}$</p>

      <animated.div style={loading_bar} className={styles.loading_bar}></animated.div>
    </animated.div>
  );
};

export default AddSucces;
