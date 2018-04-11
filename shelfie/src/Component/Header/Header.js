import React from 'react';
import logo from '../../img/shelfie_icon.png';


export default function Header() {
    return(
        <div className="header">
            <img className ="logo"src={logo} alt="logo"/>
            <h2>SHELFIE</h2>
        </div>
    )
}