import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class BurnService {

  getBurnedCal(user) {
    return axios.post(API_URL + 'exercise', {
      burnedCal: user.burnedCal

    })
  }
}

export default new BurnService();