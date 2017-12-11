import React from 'react';
import logo from '../../../../resources/ASSETS/wbooks_logo.svg';
import {Link, Redirect} from 'react-router-dom';
import notification_img from '../../../../resources/ASSETS/notifications.svg';
import add_book_img from '../../../../resources/ASSETS/add_book.svg';
import './style.css';


const Header = () =>(
  <div className="header">
    <Link to='/'><img 
      className="logo"
      alt="logo"
      src={logo}/>
    </Link>
    <Menu/>
  </div>
  );

class Menu extends React.Component{
  state = {showProfileDropdown: false, isLoggedIn: localStorage.getItem('isLoggedIn')};

  triggerProfileDropdown = (e) => {
    if(!this.state.showProfileDropdown)
      this.setState({showProfileDropdown:true});
    else
      this.setState({showProfileDropdown:false});
  }

  triggerNotificationsDropdown = (e) => {
    if(!this.state.showProfileDropdown)
      this.setState({showNotificationsDropdown:true});
    else
      this.setState({showNotificationsDropdown:false});    
  }

  handleLogout = (e) => {
    localStorage.removeItem('isLoggedIn');
  }

  //TODO:: hide dropdown when clicking anywhere else on the screen
  render(){
    return(
      <div>
        <div className="menu">

          <img className="menu-item" alt="notification_img" src={notification_img} onClick={this.triggerNotificationsDropdown}/>

          <div className="profile-dropdown">
            {this.state.showNotificationsDropdown && 
            <div className="menu-dropdown">
              <Link to="/" className="dropdown-item">
                <span className="dropdown-text">Perfil</span>
              </Link>
              <Link to="/login" className="dropdown-item" onClick={this.handleLogout}>
                <span className="dropdown-text">Cerrar sesi&oacute;n</span>
              </Link>
            </div>
            }
          </div>

          <img className="menu-item" alt="add_book_img" src={add_book_img}/>

          <img className="menu-item menu-profile-pic" alt="menu-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Duck_wings_outstretched.jpg/1200px-Duck_wings_outstretched.jpg" onClick={this.triggerProfileDropdown}/>
          <div className="profile-dropdown">
            {this.state.showProfileDropdown && 
            <div className="menu-dropdown">
              <Link to="/" className="dropdown-item">
                <span className="dropdown-text">Perfil</span>
              </Link>
              <Link to="/login" className="dropdown-item" onClick={this.handleLogout}>
                <span className="dropdown-text">Cerrar sesi&oacute;n</span>
              </Link>
            </div>
            }
          </div>
        </div>
      </div>
      );
  }
}

export default Header;