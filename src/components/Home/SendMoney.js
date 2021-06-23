import { useState } from "react";
import styles from "./SendMoney.module.scss";

const SendMoney = (props) => {

    //variable for time
    let time=new Date();
    let now=time.getDate()+'-'+(time.getMonth()+1)+'-'+time.getFullYear();

    const[selectedFriend,setSelectedFriend]=useState('');
    const[amount,setAmount]=useState('');

    const friendOption = props.friend.map((friends) => {
        return <option value={friends.name}>{friends.name}</option>;
    });
    const selectFriendHandler=(event)=>{
        setSelectedFriend(event.target.value);
        console.log(selectedFriend);
    }

    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }

    //variable that save data and send it to Home Component
    //which will influence total money from HomeMenu Component
    const data={
        type:'send',
        amount:amount,
        name:selectedFriend,
        time:now,
        id: Math.floor(Math.random()*100)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(selectedFriend);
        console.log(amount);
        props.onSaveSend(data);
        setAmount('');
        setSelectedFriend('');
    };

    return (
        <div className={styles.sendMoney}>
        <button id={styles.close_btn} onClick={props.closeHandler}>
            <i class="fas fa-times"></i>
        </button>
        <div className={styles.content}>
            <h1 id={styles.sendMoney_txt}>Send Money</h1>
            <form onSubmit={submitHandler}>
                <label>Enter the amount</label>
                <input type="number" 
                required 
                placeholder="30" 
                onChange={amountChangeHandler}
                min="1"
                max={props.maxMoney}
                ></input>
                <div className={styles.select}>
                    <select onChange={selectFriendHandler}>
                    <option selected disabled>
                        Select friend:
                    </option>
                    {friendOption}
                    </select>
                </div>
                <button id={styles.submit_btn} type="submit">Send Money</button>
            </form>
        </div>
        </div>
    );
};

export default SendMoney;
