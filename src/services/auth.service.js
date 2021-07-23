import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const AXIOS = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8098'
  }
})

class AuthService {
  username;

  login(user) {
    return AXIOS
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data.userInfo.username;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return AXIOS.post(API_URL + 'signup', {
      username: user.username,
      password: user.password,
      display_name: user.display_name,
      gender: user.gender,
      age: user.age,
      weight: user.weight,
      height: user.height
    })
  }
}

export default new AuthService();
