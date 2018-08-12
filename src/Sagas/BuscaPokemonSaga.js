import { call, put, takeLatest, select } from 'redux-saga/effects';
import pokeService from '../Services/PokeService';
import find from 'lodash/find';
import { isEmpty } from '../Utils/ValidationUtils';
import {
    BUSCA_POKEMON_REQUEST,
    BUSCA_POKEMON_SUCCESS,
    BUSCA_POKEMON_ERROR
} from '../Constants/BuscaPokemonConstants';
import {
    ADICIONA_POKEMON_ITEM
} from '../Constants/ControleConstants';

export function verificaDuplicacao(state, data) {
    return find(state.Controle.items, item => item.data.id === data.data.id);
}

export function* fetchPokemon(action) {
    try{
        const data = yield call(pokeService.buscarPokemon, action.identificador);

        const isDuplicated = yield select(verificaDuplicacao, data);
        
        let catalogado = undefined;

        if(isDuplicated){
            catalogado = yield select(state =>
                find(state.Controle.items, item => item.data.id === data.data.id && item.data.catalogado))
        }
        
        yield put({ type: BUSCA_POKEMON_SUCCESS, data: { data: {...data.data, ...{ catalogado: !isEmpty(catalogado) }} } });

        if (!isDuplicated){
            yield put({ type: ADICIONA_POKEMON_ITEM, item: { data: {...data.data, ...{ catalogado: !isEmpty(catalogado) }} } });
        }
    }
    catch (e) {
        yield put({type: BUSCA_POKEMON_ERROR, message: e.message});
    }
};

export default function* sagaBuscaPokemon() {
    yield takeLatest(BUSCA_POKEMON_REQUEST, fetchPokemon)
}