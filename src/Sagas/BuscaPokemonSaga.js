import { call, put, takeLatest, select } from 'redux-saga/effects';
import pokeService from '../Services/PokeService';
import find from 'lodash/find';
import {
    BUSCA_POKEMON_REQUEST,
    BUSCA_POKEMON_SUCCESS,
    BUSCA_POKEMON_ERROR
} from '../Constants/BuscaPokemonConstants';
import {
    ADICIONA_POKEMON_ITEM
} from '../Constants/ControleConstants';

function* fetchPokemon(action) {
    try{
        const data = yield call(pokeService.buscarPokemon, action.identificador);

        const isDuplicated = yield select(state =>
            state.Controle.items.find(item => item.data.id === data.data.id));
        
        yield put({ type: BUSCA_POKEMON_SUCCESS, data });

        if (!isDuplicated){
            yield put({ type: ADICIONA_POKEMON_ITEM, item: data });
        }
    }
    catch (e) {
        yield put({type: BUSCA_POKEMON_ERROR, message: e.message});
    }
};

export default function* sagaPersonagens() {
    yield takeLatest(BUSCA_POKEMON_REQUEST, fetchPokemon)
}