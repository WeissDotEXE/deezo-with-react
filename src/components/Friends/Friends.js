import {useState} from 'react';
import styles from './Friends.module.scss';
import Card from '../Cards/Cards';
const Friends=()=>{
    
    let empthy_list=[]
    const [friendsList,setFriendsList]=useState(empthy_list);

    let friend_avatar=<p id={styles.no_friends_txt}>It seems like you haven't added friends yet.</p>;


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