import React from 'react';
import logo from '../../../../resources/ASSETS/wbooks_logo.svg';
import notification_img from '../../../../resources/ASSETS/notifications.svg';
import add_book_img from '../../../../resources/ASSETS/add_book.svg';
import './style.css';


const Header = () =>(
  <div className="header">
    <img 
    className="logo"
    alt="logo"
    src={logo}/>
    <Menu/>
  </div>
  );

const Menu = () => (
  <div className="menu">
    <img className="menu-item" alt="notification_img" src={notification_img}/>
    <img className="menu-item" alt="add_book_img" src={add_book_img}/>
    <img className="menu-item menu-profile-pic" alt="menu-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Duck_wings_outstretched.jpg/1200px-Duck_wings_outstretched.jpg"/>
  </div>
  );

export default Header;