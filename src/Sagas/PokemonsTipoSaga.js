import { call, put, takeLatest } from 'redux-saga/effects';
import pokeService from '../Services/PokeService';
import {
    POKEMONS_TIPO_REQUEST,
    POKEMONS_TIPO_SUCCESS,
    POKEMONS_TIPO_ERROR
} from '../Constants/PokemonsTipoConstants';

export function* fetchPokemonsTipo(action) {
    try{
        const data = yield call(pokeService.buscarPokemonsTipo, action.tipo);
        
        yield put({ type: POKEMONS_TIPO_SUCCESS, data});

    }
    catch (e) {
        yield put({type: POKEMONS_TIPO_ERROR, message: e.message});
    }
};

export default function* sagaPokemonsTipo() {
    yield takeLatest(POKEMONS_TIPO_REQUEST, fetchPokemonsTipo)
}