import {
    POKEMONS_TIPO_REQUEST,
    POKEMONS_TIPO_SUCCESS,
    POKEMONS_TIPO_ERROR,
    LIMPA_POKEMONS_TIPO
} from '../Constants/PokemonsTipoConstants';

const initialState = {
    loading: false,
    dataSource: [],
    erro: ""
};

function pokemonsTipoRequest(state, action) {
    return { ...state,
        ...{
            loading: true,
            erro: ""
        }
    }
}

function pokemonsTipoSuccess(state, action) {
    return { ...state,
        ...{
            loading: false,
            dataSource: action.data
        }
    };
}

function pokemonsTipoError(state, action) {
    return { ...state,
        ...{
            loading: false,
            erro: action.message,
            dataSource: []
        }
    }
}

function limpaTiposPokemon(state, action) {
    return initialState;
}

export default function buscaMoveReducer(state = initialState, action) {
    switch (action.type) {
        case POKEMONS_TIPO_REQUEST:
            return pokemonsTipoRequest(state, action);
        case POKEMONS_TIPO_SUCCESS:
            return pokemonsTipoSuccess(state, action);
        case POKEMONS_TIPO_ERROR:
            return pokemonsTipoError(state, action);
        case LIMPA_POKEMONS_TIPO:
            return limpaTiposPokemon(state, action);
        default:
            return state;
    }
}

export function pokemonsTipo(tipo) {
    return {
        type: POKEMONS_TIPO_REQUEST,
        tipo
    };
}

export function limpaPokemonsTipo(){
    return {
        type: LIMPA_POKEMONS_TIPO
    }
}