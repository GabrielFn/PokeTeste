import axios from '../Utils/Axios';

class PokeService {
  consultarPersonagens() {
    return axios.get(`/evolution-chain/?limit=20&offset=20`);
  }
}

export default new PokeService();
