import React, { Component } from 'react';
import logo from '../../../../resources/ASSETS/wbooks_logo.svg';
import {Link, Redirect} from 'react-router-dom';
import notification_img from '../../../../resources/ASSETS/notifications.svg';
import add_book_img from '../../../../resources/ASSETS/add_book.svg';
import { LOGIN, ROOT } from '../../../config/routes';
import authActions from '../../redux/Authentication/actions';
import { connect } from 'react-redux'; 
import './style.css';


const Header = ({isLoggedIn, logout}) => (
  <div className="header">
    <Link to={ ROOT }><img
      className="logo"
      alt="logo"
      src={logo}/>
    </Link>
    {isLoggedIn ? 
    <Menu logout={logout}/> :
    <Redirect to={LOGIN}/>}
  </div>
  );

class Menu extends Component {
  state = {showProfileDropdown: false};

  triggerProfileDropdown = () => {
    this.setState(prevState => {
       if(!prevState.showProfileDropdown) {
          this.profileDropdownMenu.focus();
       }
       return { showProfileDropdown: !prevState.showProfileDropdown };
      });
  }

  triggerNotificationsDropdown = () => {
    this.setState(prevState => {
      if(!prevState.showNotificationsDropdown) {
         this.notificationsDropdownMenu.focus();
      }
      return { showNotificationsDropdown: !prevState.showNotificationsDropdown };
     });

  }

  closeProfileDropdown = () => {
    this.setState({showProfileDropdown: false});
  }

  closeNotificationsDropdown = () => {
    this.setState({showNotificationsDropdown: false});
  }

  render(){
    return(
      <div>
        <div className="menu">

          <img className="menu-item" alt="notification_img" src={notification_img} onClick={this.triggerNotificationsDropdown}/>

          <div className="notification-dropdown" tabIndex="0" onBlur={this.closeNotificationsDropdown} ref={(dropdownMenu) => { this.notificationsDropdownMenu = dropdownMenu; }}>
            {this.state.showNotificationsDropdown &&
            <div className="notification-container">
              <div className="notification-img-container">
                <img className="notification-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Duck_wings_outstretched.jpg/1200px-Duck_wings_outstretched.jpg" alt="book-notification"/>
              </div>
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
                <span className="dropdown-text dropdown-item">Perfil</span>
                <span className="dropdown-text dropdown-item" onMouseDown={this.props.logout}>Cerrar sesi&oacute;n</span>
            </div>
            }
          </div>
        </div>
      </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(authActions.logout());
  }
})

const mapStateToProps = (store) => ({
  isLoggedIn: store.auth.isLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
