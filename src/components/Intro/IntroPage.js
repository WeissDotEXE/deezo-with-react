import { useState } from "react";
import styles from "./IntroPage.module.scss";
import background from "../Videos/background.webm";
import CreateProfile from "./CreateProfile";
const IntroPage = (props) => {
  const [clicked, setClicked] = useState(false);
  
  //handler for lifting state from CreateProfile component(user data)
  const saveUserData=(enteredUserData)=>{
    const userData={
      ...enteredUserData
    };
    props.onSaveUserData(userData);
  }

  const clickHandler = () => {
    setClicked(true);
  };

  let content = (
    <div className={styles.introPage}>
      <div className={styles.content}>
        <h1 id={styles.header}>Deezo</h1>
        <h2>A banking app created by WeissDotExe (Mihnea)</h2>
        <button onClick={clickHandler}>Start using Deezo</button>
      </div>
      <div className={styles.background}>
        <video autoPlay loop muted>
          <source src={background} />
        </video>
      </div>
    </div>
  );

  if (clicked === true) {
    content = <CreateProfile onSaveUserData={saveUserData}/>;
  }
  return <div>{content}</div>;
};

export default IntroPage;
