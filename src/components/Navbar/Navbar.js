import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_btn}>
        
        <Link className={styles.navbar_link} to="/cards">
            <i class="fas fa-credit-card"></i>
            <p>Cards</p>
        </Link>
        <Link className={styles.navbar_link} to="/">
            <h1>Deezo</h1>
        </Link>
        <Link className={styles.navbar_link} to="/profile">
            <i class="fas fa-user"></i>
            <p>Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
