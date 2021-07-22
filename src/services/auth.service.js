// import axios from 'axios';
//
// const API_URL = 'http://squishtable.com/api/auth/';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//
// class AuthService {
//
//   username;
//
//   login(user) {
//     return axios.post(API_URL + 'Login', {
//         username: user.username,
//         password: user.password
//       }).then(response => {
//         if (response.data.token) {
//           localStorage.setItem('user', JSON.stringify(response.data));
//         }
//         return response.data.userInfo.username;
//     })
//   }
//
//   logout() {
//     localStorage.removeItem('user');
//   }
//
//   register(user) {
//     return axios.post(API_URL + '')
//   }
// }