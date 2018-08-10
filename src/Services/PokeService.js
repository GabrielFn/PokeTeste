import axios from '../Utils/Axios';

class PokeService {
  buscarPokemon(identificador) {
    return axios.get(`/pokemon/${identificador}`);
  }
}

export default new PokeService();
