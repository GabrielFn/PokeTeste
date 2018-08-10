import { call, put, takeLatest } from 'redux-saga/effects';
import pokeService from '../../Services/PokeService';
import {
    BUSCA_POKEMON_REQUEST,
    BUSCA_POKEMON_SUCCESS,
    BUSCA_POKEMON_ERROR
} from './Constants';

function* fetchPokemon(action) {
    try{
        const data = yield call(pokeService.buscarPokemon, action.identificador);
        console.log('valor do dado', data);
        yield put({ type: BUSCA_POKEMON_SUCCESS, data });
    }
    catch (e) {
        yield put({type: BUSCA_POKEMON_ERROR, message: e.message});
    }
};

export default function* sagaPersonagens() {
    yield takeLatest(BUSCA_POKEMON_REQUEST, fetchPokemon)
}