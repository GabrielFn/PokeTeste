import {
    CATALOGAR_POKEMON
} from '../Constants/CatalogoConstants';

const initialState = {
    pokemons: []
};

function catalogarPokemon(state, action) {
    const pokemons = state.pokemons;
    pokemons.push(action.identificador);    
    return { ...state, ...{ pokemons } };
}


export default function catalogoReducer(state = initialState, action) {
    switch (action.type) {
        case CATALOGAR_POKEMON:
            return catalogarPokemon(state, action);
        default:
            return state;
    }
}

export function capturarPokemon(identificador) {
    return {
        type: CATALOGAR_POKEMON,
        identificador
    };
}