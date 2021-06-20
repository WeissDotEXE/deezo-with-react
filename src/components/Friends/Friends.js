import {useState} from 'react';
import styles from './Friends.module.scss';
const Friends=(props)=>{
    
    const [friendsList,setFriendsList]=useState([]);

    let friend_avatar=null;
    
    if(friendsList.length===0){
        friend_avatar=<p id={styles.no_friends_txt}>It seems like you haven't added friends yet.</p>
    }
    else if(friendsList.length>0){
        friend_avatar=<p>{props.friend}</p>
    }

    return(
        <div className={styles.friends}>
            <h1>Friends list</h1>
            <div className={styles.friends_list}>
                {friend_avatar}
            </div>
        </div>
    );
}

export default Friends;