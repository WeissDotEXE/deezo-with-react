import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ProfileCard from "../UI/ProfileCard";
import {Link} from "react-router-dom";
const Profile = () => {
  // const [formCompleted, setformCompleted] = useState(
  //   sessionStorage.getItem("formCompleted")
  // );
  let formCompleted=sessionStorage.getItem("formCompleted");

  let content = null;
  if (formCompleted === "true") {
    content = (
      <div className={styles.profile}>
        <div className={styles.content}>
          <ProfileCard />
        </div>
        <div className={styles.image}>
          <i class="fas fa-user-circle"></i>
        </div>
        <div className={styles.background}>
          <img src="https://images.unsplash.com/photo-1548515347-be37cd712ff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80" />
        </div>
      </div>
    );
  } else if(formCompleted==="false"){
    content = (
      <div className={styles.error_page}>
        <div className={styles.error_page_content}>
          <h1>It seems that you did not create an account</h1>
          <Link to="/">
            <button id={styles.redirect_btn}>Create Account</button>
          </Link>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Profile;
