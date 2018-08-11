import {
    BUSCA_MOVE_REQUEST,
    BUSCA_MOVE_SUCCESS,
    BUSCA_MOVE_ERROR  
  } from '../Constants/BuscaMoveConstants';
  
  const initialState = {
    loading: false,
    dataSource: []
  };
  
  function buscaMoveRequest(state, action) {
    return { ...state, ...{
      loading: true,
      erro: ""
    }}
  }
  
  function buscaMoveSuccess(state, action) {
    return { ...state, ...{ 
      loading: false, 
      dataSource: action.data
    }};
  }
  
  function buscaMoveError(state, action) {
    return { ...state, ...{
      loading: false,
      erro: action.message,
      dataSource: []
    }}
  }
  
  export default function buscaMoveReducer(state = initialState, action) {
    switch (action.type) {
      case BUSCA_MOVE_REQUEST: return buscaMoveRequest(state, action);
      case BUSCA_MOVE_SUCCESS: return buscaMoveSuccess(state, action);
      case BUSCA_MOVE_ERROR: return buscaMoveError(state, action)
      
      default:
        return state;
    }
  }
  
  export function buscaMove(moveName) {
    return {
      type: BUSCA_MOVE_REQUEST,
      moveName
    };
  }