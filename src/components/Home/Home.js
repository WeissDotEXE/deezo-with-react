import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import Anime, { anime } from 'react-anime';
import video from './intro-video.webm';

const Home=(props)=>{

    if(props.isCompleted===false){
        return(
            <div class="main-content">
                <div id="overlay"></div>
                <div class="intro">   
                    <Anime opacity={[0,1]} translateY={'1em'} delay={(e, i) => i * 1000}>
                    <h1 id="intro-greeting">Hi there!</h1>
                    <h1 id="glad">We are glad to see you !</h1>
                    <h1 id="intro-info">Deezo help you manage your money.</h1>
                    <a href="createprofile.html"><button id="createAccBtn">Create Account</button></a>
                    </Anime>
                    <Anime opacity={[0,1]} easing='easeInSine' dura delay={4000}>
                    <video id="intro-video" autoPlay loop muted src={video}></video>
                    </Anime>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <div className="main-content1">
                    
                    <div className="customGreeting">
                        <h1 id="customGreetingName">Welcome , {props.name}</h1>
                    </div>
                </div>

                <div className="menu">
                    <a id="addMoneyBtn" >Add Money</a>
                    <a id="exchangeBtn" >Exchange</a>
                    <h1 id="money">0000.00 $</h1>
                    <i id="money-icon" className="fas fa-money-check-alt"></i>
                </div>
                <h3 id="transactions-txt">Transactions</h3>
                <div className="transactions">
                    <div className="container">
                        <table id="transactionTable">
                            <tr>
                            {/* Here will be shown DOM*/}
                            </tr>
                        </table>
                    </div>
                    <img id="image-right" src="https://images.unsplash.com/photo-1509743248323-354f9af69c6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80" alt=""></img>
                </div>
            </div>
        );
    }
}
export default Home;