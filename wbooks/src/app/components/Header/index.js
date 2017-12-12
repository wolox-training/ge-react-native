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
    {localStorage.getItem('isLoggedIn') &&
    <Menu/>}
  </div>
  );

class Menu extends React.Component{
  state = {showProfileDropdown: false, isLoggedIn: localStorage.getItem('isLoggedIn')};

  triggerProfileDropdown = (e) => {
    if(!this.state.showProfileDropdown){
      this.setState({showProfileDropdown:true});
      this.profileDropdownMenu.focus();
    }
    else
      this.setState({showProfileDropdown:false});
  }

  triggerNotificationsDropdown = (e) => {
    if(!this.state.showNotificationsDropdown){
      this.setState({showNotificationsDropdown:true});
      this.notificationsDropdownMenu.focus();
    }
    else
      this.setState({showNotificationsDropdown:false});
  }

  closeProfileDropdown = () => {
    this.setState({showProfileDropdown: false});
  }

  closeNotificationsDropdown = () => {
    this.setState({showNotificationsDropdown: false});
  }

  handleLogout = (e) => {
    localStorage.removeItem('isLoggedIn');
    //TODO:: borrar token
    this.setState({showProfileDropdown: false, isLoggedIn: false});
  }


  render(){
    return(
      <div>
        { !this.state.isLoggedIn && <Redirect to='/'/> }
        <div className="menu">

          <img className="menu-item" alt="notification_img" src={notification_img} onClick={this.triggerNotificationsDropdown}/>

          <div className="profile-dropdown" tabIndex="0" onBlur={this.closeNotificationsDropdown} ref={(dropdownMenu) => { this.notificationsDropdownMenu = dropdownMenu; }}>
            {this.state.showNotificationsDropdown &&
            <div className="notification-container">
              <div className="notification-img">imagen</div>
              <div className="notification-sub-container">
                <h2 className="notification-title">Se encuentra disponible el libro:</h2>
                <h1 className="notification-book-title">T&iacute;tulo</h1>
                <h3 className="notification-book-author">Autor</h3>
              </div>
            </div>
            }
          </div>

          <img className="menu-item" alt="add_book_img" src={add_book_img}/>

          <img className="menu-item menu-profile-pic" alt="menu-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Duck_wings_outstretched.jpg/1200px-Duck_wings_outstretched.jpg" onClick={this.triggerProfileDropdown}/>
          <div className="profile-dropdown" tabIndex="0" onBlur={this.closeProfileDropdown} ref={(dropdownMenu) => { this.profileDropdownMenu = dropdownMenu; }}>
            {this.state.showProfileDropdown &&
            <div className="menu-dropdown">
              <Link to="/" className="dropdown-item">
                <span className="dropdown-text">Perfil</span>
              </Link>
              <Link to="/login" className="dropdown-item" onMouseDown={this.handleLogout}>
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
