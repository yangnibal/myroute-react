import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <nav className="header">
                <div className="logo-container"></div>
                <div className="contents-container"></div>
                <div className="userimg-container"></div>
            </nav>
        )
    }
}

export default Header;