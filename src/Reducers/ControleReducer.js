import findIndex from 'lodash/findIndex';
import {
    ADICIONA_POKEMON_ITEM,
    CATALOGA_POKEMON,
    EXCLUIR_POKEMON_CATALOGO
} from '../Constants/ControleConstants';

const initialState = {
    items: []
};

function adicionaPokemonItem(state, action) {
    const items = state.items;
    items.push(action.item);
    return { ...state, ...{ items } }
}

function catalogaPokemon(state, action) {
    const items = state.items;
    const index = findIndex(state.items, item => item.data.id === action.identificador)

    items[index].data.catalogado = true;

    return { ...state, ...{ items } }
}

function excluirPokemonCatalogo(state, action) {
    const items = state.items;
    const index = findIndex(state.items, item => item.data.id === action.identificador)

    items[index].data.catalogado = false;

    return { ...state, ...{ items } }
}

export default function controleReducer(state = initialState, action) {
    switch (action.type) {
        case ADICIONA_POKEMON_ITEM:
            return adicionaPokemonItem(state, action);
        case CATALOGA_POKEMON:
            return catalogaPokemon(state, action);
        case EXCLUIR_POKEMON_CATALOGO:
            return excluirPokemonCatalogo(state, action);
        default:
            return state;
    }
}

export function capturarPokemon(identificador){
    return {
        type: CATALOGA_POKEMON,
        identificador
    }
}

export function excluirPokemon(identificador) {
    return {
        type: EXCLUIR_POKEMON_CATALOGO,
        identificador
    }
}