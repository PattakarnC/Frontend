import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/user/';

const AXIOS = axios.create({
  baseURL: `http://localhost:8080`,
  headers: authHeader()
})

class UserService {
  /**
   * Get request function will return a list of tasks
   * @param user
   * @returns {Promise<AxiosResponse<T>>}
   */
  postCreate(user, date, consumedCal) { // get date, consumedCal
    return AXIOS
      .post(API_URL + 'create/' + user + '/' + date + '/' + consumedCal, {headers:authHeader()});
  }

  postBurnedCal(user, burnedCal) { // get burnedCal
    return AXIOS
      .post(API_URL + 'exercise/' + user + '/' + burnedCal, {headers:authHeader()});
  }

  getData(user) { // get date, consumedCal, burnedCal, suggestedCal
    return AXIOS
      .get(API_URL + 'summary/' + user + '/', {headers:authHeader()});
  }

  // getSuggestedCal(user) { // get suggestedCal
  //   return AXIOS
  //     .get(API_URL + 'summary/' + user + '/', {headers:authHeader()});
  // }
}

export default new UserService();

