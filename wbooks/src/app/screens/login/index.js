import React from 'react';
import {Redirect} from 'react-router-dom';
import { ROOT } from '../../../config/routes';
import './style.css';
import * as validations from '../../../utils/validations';
import { connect } from 'react-redux'; 
import { actionCreators } from '../../redux';
 

class Login extends React.Component {
  state = {
    mailError: false,
    passLengthError: false,
  }

  login = (e) => {
    e.preventDefault();

    if(!this.state.mailError && !this.state.passLengthError){
      this.props.login(this.state.mail, this.state.pass);
    }
  }

  handleMailChange = (e) => {
    this.setState({mail: e.target.value});
  }

  handlePassChange = (e) => {
    this.setState({pass: e.target.value});
  }

  handleMailBlur = (e) => {
    this.setState({mailError: !validations.validateEmail(e.target.value)});
  }

  handlePassBlur = (e) => {
    this.setState({passLengthError: !validations.validatePass(e.target.value)});
  }

  render() {
    const { from } = this.props.location.state || {from: { pathname: ROOT } };

    if (this.props.isLoggedIn) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div className="login-page">
        <p className="login-error">Debes estar logeado para visitar {from.pathname}</p>
        <p className="login-title">Login</p>
        <form className="login-form" onSubmit={this.login}>
          <label className="login-label">
            Email
            <input type="text" className="login-email" onBlur={this.handleMailBlur} onChange={this.handleMailChange} required/>
          </label>
          <label className="login-label">
            Password
            <input type="password" className="login-pass" onBlur={this.handlePassBlur} onKeyPress={this.handleKeyPress} onChange={this.handlePassChange} required/>
          </label>
          <button onClick={this.login} className="login-button">Log in</button>
          {this.state.mailError && <p className="login-error">email invalido</p>}
          {this.state.passLengthError && <p className="login-error">la clave debe tener 8 o mas caracteres</p>}
          {this.props.loginError && <p className="login-error">error de autenticaci&oacute;n</p>}
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => {
    dispatch(actionCreators.login(email, password));
  }
})

const mapStateToProps = (store) => ({
  isLoggedIn: store.auth.isLoggedIn,
  loginError: store.auth.loginError
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
