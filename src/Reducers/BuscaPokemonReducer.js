import {
  BUSCA_POKEMON_REQUEST,
  BUSCA_POKEMON_SUCCESS,
  BUSCA_POKEMON_ERROR  
} from '../Constants/BuscaPokemonConstants';

const initialState = {
  loading: false,
  dataSource: [],
  erro: ""
};

function buscaPokemonRequest(state, action) {
  return { ...state, ...{
    loading: true,
    erro: ""
  }}
}

function buscaPokemonSuccess(state, action) {
  return { ...state, ...{ 
    loading: false, 
    dataSource: action.data
  }};
}

function buscaPokemonError(state, action) {
  return { ...state, ...{
    loading: false,
    erro: action.message,
    dataSource: []
  }}
}

export default function buscaPokemonReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCA_POKEMON_REQUEST: return buscaPokemonRequest(state, action);
    case BUSCA_POKEMON_SUCCESS: return buscaPokemonSuccess(state, action);
    case BUSCA_POKEMON_ERROR: return buscaPokemonError(state, action)
    
    default:
      return state;
  }
}

export function buscaPokemon(identificador) {
  return {
    type: BUSCA_POKEMON_REQUEST,
    identificador
  };
}