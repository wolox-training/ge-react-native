import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './style.css';

const BOOKS_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/';

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
    let setState = (state) => {this.setState(state)};
    setState = setState.bind(this);
    if(!this.state.mailError && !this.state.passLengthError){
      axios.post(`${BOOKS_URL}/users/sessions`, {
        email: this.state.mail,
        password: this.state.pass
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem('accessToken', response.data.access_token);
        localStorage.setItem('isLoggedIn', true);
        setState({redirectToReferrer: true })
      })
      .catch(function (error) {
        console.log(error);
        setState({ authError: true });
      });
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePass(pass){
    return pass.length >= 8;
  }

  handleMailChange = (e) => {
    this.setState({mail: e.target.value});
  }

  handlePassChange = (e) => {
    this.setState({pass: e.target.value});
  }

  handleMailBlur = (e) => {    
    if(!this.validateEmail(e.target.value))
      this.setState({mailError: true});
    else{
      this.setState({mailError: false});
    }
  }

  handlePassBlur = (e) => {
    if(!this.validatePass(e.target.value))
      this.setState({passLengthError: true});
    else
      this.setState({passLengthError: false});    
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if(localStorage.getItem('isLoggedIn')){
      return (
        <Redirect to={from}/>
        )
    }

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div className="login-page">
        <p className="login-error">You must log in to view the page at {from.pathname}</p>
        <p className="login-title">Login</p>
        <form className="login-form" onSubmit={this.login}>
          <label className="login-label">
            Email
            <input type="text" className="login-email" onBlur={this.handleMailBlur} onChange={this.handleMailChange} required/>
          </label>
          <label className="login-label">
            Password
            <input type="password" className="login-pass" onBlur={this.handlePassBlur} onChange={this.handlePassChange} required/>
          </label>
          <button onClick={this.login} className="login-button">Log in</button>
          {this.state.mailError && <p className="login-error">invalid email</p>}
          {this.state.passLengthError && <p className="login-error">password should be 8 or more characters</p>}
          {this.state.authError && <p className="login-error">Authentication error</p>}
        </form>
      </div>
    )
  }
}

export default Login;