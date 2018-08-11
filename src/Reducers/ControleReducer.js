import {
    ADICIONA_POKEMON_ITEM
} from '../Constants/ControleConstants';

const initialState = {
    items: []
};

function adicionaPokemonItem(state, action) {
    const items = state.items;
    items.push(action.item);
    return { ...state, ...{ items } }
}

export default function controleReducer(state = initialState, action) {
    switch (action.type) {
        case ADICIONA_POKEMON_ITEM:
            return adicionaPokemonItem(state, action);
        default:
            return state;
    }
}