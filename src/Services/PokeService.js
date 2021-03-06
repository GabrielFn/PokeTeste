import axios from '../Utils/Axios';

class PokeService {
  buscarPokemon(identificador) {
    return axios.get(`/pokemon/${identificador}`);
  }

  buscarMove(moveName) {
    return axios.get(`/move/${moveName}`);
  }

  buscarPokemonsTipo(tipo) {
    return axios.get(`/type/${tipo}`);
  }

}

export default new PokeService();
