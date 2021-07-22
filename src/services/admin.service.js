import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://squishtable.com/api/admin/';

class AdminService {

  isAdmin() {
    return axios.get(API_URL + 'secured', {});
  }

  getUserlist() {
    return axios.get(API_URL + 'userlist' , {
      headers: authHeader()})
  }

  postRemoveUser(user) {
    return axios.post(API_URL + 'remove' + '/' + user, {headers: authHeader()})
  }
}

export default new AdminService();