import api from '../config/api';


export const login = (onLoginSuccess, onLoginError) => {
  api.post('/users/sessions', {
    email: this.state.mail,
    password: this.state.pass
  })
    .then(this.onLoginSuccess)
    .catch(this.onLoginError);
  }
