import React from "react";
import logo from '../../logo.svg';

const Header = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center',backgroundColor: '#242526'}}>
            <img className="App-logo" style={{maxWidth: '100px'}} src={logo}/>
        </div>
    )
};

export default Header;