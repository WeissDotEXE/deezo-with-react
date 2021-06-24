import { useState } from 'react';
import styles from './CreateProfile.module.scss';
import photo from '../Images/create_profile_img.jpg';
import parseJson from 'parse-json';
const CreateProfile=(props)=>{

    const [fName,setFName]=useState('');
    const [lName,setLName]=useState('');
    const [email,setEmail]=useState('');


    const fnameChangeHandler=(event)=>{
        setFName(event.target.value);
    }
    const lnameChangeHandler=(event)=>{
        setLName(event.target.value);
    }
    const emailChangeHandler=(event)=>{
        setEmail(event.target.value);
    }

    const userData={
        id: Math.floor(Math.random()*100),
        firstName:fName,
        lastName:lName,
        email:email
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        props.onSaveUserData(userData);
        console.log(userData);
    }
    return(
        <div className={styles.createProfile}>
            <div className={styles.content}>
                <h1>Create your profile</h1>
                <form id={styles.login_form} onSubmit={submitHandler}>
                    <label>First name</label>
                    <input type="text" placeholder="John" required onChange={fnameChangeHandler}/>
                    <label>Last name</label>
                    <input type="text" placeholder="the second" required onChange={lnameChangeHandler}/>
                    <label>Email</label>
                    <input type="email" placeholder="johnthesecond@gmail.com" required onChange={emailChangeHandler}/>
                    <button type="submit">Create your account</button>
                </form>
            </div>
            
            <div className={styles.rightImage}>
                <img src={photo} />
            </div>
        </div>
    );
}

export default CreateProfile;