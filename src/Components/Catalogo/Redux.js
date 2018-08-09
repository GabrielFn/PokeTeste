import {
  GET_PERSONAGENS,
  SET_PERSONAGENS
} from './Constants';

const initialState = {
  loading: false,
  dataSource: []
};

function consultarPersonagensSuccess(state, action) {
  return { ...state, ...{ 
    loading: false, 
    dataSource: action.data
  }};
}

export default function listaPersonagensReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PERSONAGENS: return consultarPersonagensSuccess(state, action);
    default:
      return state;
  }
}

export function consultarPersonagens() {
  return {
    type: GET_PERSONAGENS
  };
}