import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar(props){
    return(
        <nav className="navigationBar">
            <h3>Deezo</h3>
            <ul>
                <li>
                    <Link to='/' >
                        <i className="fas fa-home"></i>
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link to='/cards' >
                        <i className="fas fa-credit-card"></i>
                        <p>Cards</p>
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <i className="far fa-user-circle"></i>
                        <p>Profile</p>
                    </Link>
                </li>
                <li>
                    <button id="darkModeBtn">
                        <i className="fas fa-adjust"></i>
                        <p>Background</p>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;