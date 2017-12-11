import * as api from '../config/api';


export const login = (payload, onLoginSuccess, onLoginFailure) => {
  api.post('/users/sessions', {
    email: payload.mail,
    password: payload.pass
  })
    .then(onLoginSuccess)
    .catch(onLoginFailure);
  }
