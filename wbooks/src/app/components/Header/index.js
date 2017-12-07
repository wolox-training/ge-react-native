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
  state = {showMenu: false, isLoggedIn: localStorage.getItem('isLoggedIn')};
  handleOpenMenu = (e) => {
    if(!this.state.showMenu)
      this.setState({showMenu:true});
    else
      this.setState({showMenu:false});
  }

  handleLogout = (e) => {
    localStorage.removeItem('isLoggedIn');
    this.setState()
  }

  render(){
    return(
      <div>
        <div className="menu">
          <img className="menu-item" alt="notification_img" src={notification_img}/>
          <img className="menu-item" alt="add_book_img" src={add_book_img}/>
             <img className="menu-item menu-profile-pic" alt="menu-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Duck_wings_outstretched.jpg/1200px-Duck_wings_outstretched.jpg" onClick={this.handleOpenMenu}/>
           <div className="menu-trigger">
             {this.state.showMenu && <div className="menu-dropdown">
               <span className="dropdown-item">Perfil</span>
               <Link to="/login" className="dropdown-item" onClick={this.handleLogout}>
                <span >Cerrar sesi&oacute;n</span>
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