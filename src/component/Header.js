import React from 'react';
import aaf from '../images/logo2.svg';


const Header = () => {
    return(
        <div className="header">
        <div className="header-content">
            <img src={aaf} alt="aaf" className="headerimg"></img>
            <h1 className="title">Which AAF team should you support?</h1>
        </div>
        </div>
        
    )
};

export default Header;