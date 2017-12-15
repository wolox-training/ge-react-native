import React from 'react';
import {Redirect} from 'react-router-dom';
import * as authService from '../../../services/authService';
import { ROOT } from '../../../config/routes';
import './style.css';
import * as validations from '../../../utils/validations';


class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    mailError: false,
    passLengthError: false,
    authError: false
  }

  login = (e) => {
    e.preventDefault();
    this.setState({authError: false});

    if(!this.state.mailError && !this.state.passLengthError){
      authService.login({mail: this.state.mail, pass: this.state.pass}, this.onLoginSuccess, this.onLoginError);
    }
  }

  handleMailChange = (e) => {
    this.setState({mail: e.target.value});
  }

  onLoginSuccess = (response) => {
    this.setState({redirectToReferrer: true })
  }

  onLoginError = (error) =>{
    this.setState({ authError: true });
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
    const { redirectToReferrer } = this.state

    if (redirectToReferrer || authService.isLoggedIn()) {
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
          {this.state.authError && <p className="login-error">error de autenticaci&oacute;n</p>}
        </form>
      </div>
    )
  }
}

export default Login;
